import { db } from './firebase'; // Firebase setup
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

// Define interfaces for better typing
export interface CartItem {
  productId: string;
  quantity: number;
  totalPrice: number;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  subscribe: boolean;
  userId: string;
}

class FirestoreService {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  // --------- User Management ---------

  async createUser(user: User): Promise<void> {
    try {
      const userDocRef = doc(db, 'users', user.userId);
      await setDoc(userDocRef, user);
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  async fetchAllUsers(): Promise<User[]> {
    try {
      const usersCollectionRef = collection(db, 'users');
      const snapshot = await getDocs(usersCollectionRef);
      return snapshot.docs.map((doc) => ({
        ...(doc.data() as User),
        userId: doc.id,
      }));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  }

  async fetchUserById(userId: string): Promise<User | null> {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        return { ...(userDoc.data() as User), userId: userDoc.id };
      }
      return null;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw new Error('Failed to fetch user');
    }
  }

  // --------- Cart Management ---------

  async getCartByUserId(): Promise<CartItem[]> {
    try {
      const cartDocRef = doc(db, 'carts', this.userId);
      const cartDoc = await getDoc(cartDocRef);
      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        return cartData?.items || [];
      }
      return [];
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw new Error('Failed to fetch cart');
    }
  }

  async createCart(cartItem: CartItem): Promise<void> {
    try {
      const cartDocRef = doc(db, 'carts', this.userId);
      const cartDoc = await getDoc(cartDocRef);

      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        const items = cartData?.items || [];
        const existingItemIndex = items.findIndex(
          (item: CartItem) => item.productId === cartItem.productId
        );

        if (existingItemIndex > -1) {
          items[existingItemIndex].quantity += cartItem.quantity;
          items[existingItemIndex].totalPrice += cartItem.totalPrice;
        } else {
          items.push(cartItem);
        }

        await updateDoc(cartDocRef, { items });
      } else {
        await setDoc(cartDocRef, { userId: this.userId, items: [cartItem] });
      }
    } catch (error) {
      console.error('Error creating cart:', error);
      throw new Error('Failed to create cart');
    }
  }

  async deleteCartItem(productId: string): Promise<void> {
    try {
      const cartDocRef = doc(db, 'carts', this.userId);
      const cartDoc = await getDoc(cartDocRef);

      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        const updatedItems = cartData?.items.filter(
          (item: CartItem) => item.productId !== productId
        );

        await updateDoc(cartDocRef, { items: updatedItems });
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
      throw new Error('Failed to delete cart item');
    }
  }

  listenToCart(callback: (cartItems: CartItem[]) => void): () => void {
    const cartDocRef = doc(db, 'carts', this.userId);
    return onSnapshot(cartDocRef, (doc) => {
      if (doc.exists()) {
        const cartData = doc.data();
        callback(cartData?.items || []);
      }
    });
  }
}

export default FirestoreService;
