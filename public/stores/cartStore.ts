import { db } from '@/src/firebase'; 
import { doc, getDoc, setDoc, updateDoc, collection, onSnapshot } from 'firebase/firestore';

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
      // If the cart already exists, add the item to the existing cart
      const cartData = cartDoc.data();
      const items = cartData?.items || [];

      // Check if the item already exists in the cart
      const existingItemIndex = items.findIndex((item: CartItem) => item.productId === cartItem.productId);

      if (existingItemIndex > -1) {
        // If the item exists, update the quantity and totalPrice
        items[existingItemIndex].quantity += cartItem.quantity;
        items[existingItemIndex].totalPrice += cartItem.totalPrice;
      } else {
        // Otherwise, add the new item to the cart
        items.push(cartItem);
      }

      // Update the cart document in Firestore with the updated items array
      await updateDoc(cartDocRef, { items });
    } else {
      // If the cart doesn't exist, create a new cart document with the item
      await setDoc(cartDocRef, {
        userId: this.userId,
        items: [cartItem], // Create a cart with the initial item
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
    const cartRef = collection(db, 'carts');
    const unsubscribe = onSnapshot(cartRef, (snapshot) => {
      const cartItems: CartItem[] = snapshot.docs
        .filter((doc) => doc.id === this.userId) // Filter to only this user's cart
        .map((doc) => {
          const data = doc.data();

          // Manually map the fields from Firestore to the CartItem interface
          const cartItem: CartItem = {
            productId: data.productId,   // Ensure this field exists in your Firestore document
            quantity: data.quantity,     // Ensure this field exists in your Firestore document
            totalPrice: data.totalPrice, // Ensure this field exists in your Firestore document
            userId: this.userId,         // Use the userId from the class instance
          };

          return cartItem;
        });

      callback(cartItems);
    });

    return unsubscribe;
  }

  // Delete an item from the cart
  async delete(productId: string): Promise<void> {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      const items = cartData?.items || [];

      const updatedItems = items.filter((item: CartItem) => item.productId !== productId);

      // Update the cart document in Firestore with the updated items array
      await updateDoc(cartDocRef, { items: updatedItems });
    }
  }

  // Update item quantity and totalPrice
  async updateQuantity(productId: string, newQuantity: number): Promise<void> {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    const cartDoc = await getDoc(cartDocRef);

    if (cartDoc.exists()) {
      const cartData = cartDoc.data();
      const items = cartData?.items || [];

      // Find the item to update
      const itemIndex = items.findIndex((item: CartItem) => item.productId === productId);
      if (itemIndex > -1) {
        // Update the item quantity and totalPrice
        const updatedItem = items[itemIndex];
        updatedItem.quantity = newQuantity;
        updatedItem.totalPrice = updatedItem.totalPrice / updatedItem.quantity * newQuantity; // Update total price
        
        // Update the cart document in Firestore with the updated items array
        items[itemIndex] = updatedItem;
        await updateDoc(cartDocRef, { items });
      }
    }
  }
}

export default CartService;
