import { db } from './firebase'; // Assuming you've initialized Firebase in a firebase.ts file
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';

interface CartItem {
  productId: string;
  quantity: number;
  totalPrice: number;
}

class CartService {
  userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  // Add or update an item in the cart
  async createOrUpdateCartItem(cartItem: CartItem): Promise<void> {
    try {
      const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
      const cartDoc = await getDoc(cartDocRef);

      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        const items: CartItem[] = cartData?.items || [];

        // Find existing item in the cart
        const itemIndex = items.findIndex(item => item.productId === cartItem.productId);

        if (itemIndex > -1) {
          // Update existing item's quantity and total price
          items[itemIndex].quantity += cartItem.quantity;
          items[itemIndex].totalPrice =
            (items[itemIndex].totalPrice / items[itemIndex].quantity) * cartItem.quantity +
            cartItem.totalPrice;
        } else {
          // Add a new item
          items.push(cartItem);
        }

        // Update the cart document
        await updateDoc(cartDocRef, { items });
      } else {
        // Create a new cart document with the initial item
        await setDoc(cartDocRef, {
          userId: this.userId,
          items: [cartItem],
        });
      }
    } catch (err) {
      console.error('Error adding/updating cart item: ', err);
    }
  }

  // Fetch cart items for the user
  async getCartItems(): Promise<CartItem[]> {
    try {
      const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
      const cartDoc = await getDoc(cartDocRef);

      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        return cartData?.items || [];
      } else {
        return [];
      }
    } catch (err) {
      console.error('Error fetching cart items: ', err);
      return [];
    }
  }

  // Listen to cart updates in real-time
  listenToCartUpdates(callback: (cartItems: CartItem[]) => void): () => void {
    const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
    return onSnapshot(cartDocRef, (snapshot) => {
      if (snapshot.exists()) {
        const cartData = snapshot.data();
        callback(cartData?.items || []);
      } else {
        callback([]); // If the document doesn't exist, return an empty array
      }
    });
  }

  // Delete an item from the cart
  async deleteCartItem(productId: string): Promise<void> {
    try {
      const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
      const cartDoc = await getDoc(cartDocRef);

      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        const items: CartItem[] = cartData?.items || [];

        // Remove the item with the specified productId
        const updatedItems = items.filter(item => item.productId !== productId);

        await updateDoc(cartDocRef, { items: updatedItems });
      }
    } catch (err) {
      console.error('Error deleting cart item: ', err);
    }
  }

  // Update item quantity and total price
  async updateCartItemQuantity(productId: string, newQuantity: number): Promise<void> {
    try {
      const cartDocRef = doc(db, 'carts', this.userId); // Reference to the user's cart document
      const cartDoc = await getDoc(cartDocRef);

      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        const items: CartItem[] = cartData?.items || [];

        // Find the item to update
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
    } catch (err) {
      console.error('Error updating cart item quantity: ', err);
    }
  }
}

export default CartService;
