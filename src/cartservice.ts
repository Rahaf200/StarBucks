import { db } from '@/src/firebase'; 
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';

// CartItem interface
interface CartItem {
  productId: string;
  quantity: number;
  totalPrice: number;
  userId: string;
}

class CartService {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  // Create or update cart for the user
  async create(cartItem: CartItem): Promise<void> {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      const items: CartItem[] = cartData?.items || [];

      // Find existing item in the cart
      const itemIndex = items.findIndex(item => item.productId === cartItem.productId);

      if (itemIndex > -1) {
        // If the item exists, update its quantity and total price
        items[itemIndex].quantity += cartItem.quantity;
        items[itemIndex].totalPrice = 
          (items[itemIndex].totalPrice / items[itemIndex].quantity) * cartItem.quantity 
          + cartItem.totalPrice;
      } else {
        // Otherwise, add the new item to the cart
        items.push(cartItem);
      }

      await updateDoc(cartDocRef, { items });
    } else {
      // Create a new cart document with the initial item
      await setDoc(cartDocRef, {
        userId: this.userId,
        items: [cartItem],
      });
    }
  }

  // Fetch cart items by userId
  async getCartByUserId(): Promise<CartItem[]> {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      return cartData?.items || [];
    } else {
      return [];
    }
  }

  // Listen to cart updates in real-time for a user
  listenToCartUpdates(callback: (cartItems: CartItem[]) => void): () => void {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    return onSnapshot(cartDocRef, (doc) => {
      if (doc.exists()) {
        const cartData = doc.data();
        callback(cartData?.items || []);
      } else {
        callback([]); // If the document doesn't exist, return an empty array
      }
    });
  }

  // Delete an item from the cart
  async delete(productId: string): Promise<void> {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      const items: CartItem[] = cartData?.items || [];

      const updatedItems = items.filter(item => item.productId !== productId);

      await updateDoc(cartDocRef, { items: updatedItems });
    }
  }

  // Update item quantity and totalPrice
  async updateQuantity(productId: string, newQuantity: number): Promise<void> {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      const items: CartItem[] = cartData?.items || [];

      const itemIndex = items.findIndex(item => item.productId === productId);
      if (itemIndex > -1) {
        const updatedItem = items[itemIndex];
        updatedItem.totalPrice = 
          (updatedItem.totalPrice / updatedItem.quantity) * newQuantity;
        updatedItem.quantity = newQuantity;

        items[itemIndex] = updatedItem;
        await updateDoc(cartDocRef, { items });
      }
    }
  }
}

export default CartService;
