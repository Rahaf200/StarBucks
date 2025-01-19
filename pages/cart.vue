<template>
  <div class="cart-container">
    <!-- Render each cart item dynamically -->
    <div v-for="(product, index) in cartItems" :key="product.id" class="cart-item">
      <div class="cart-item-details">
        <!-- Product Image -->
        <img :src="product.image" alt="Product" class="product-image" />


        <!-- Product Info -->
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.short_description }}</p>
          <p class="price">Price: ${{ product.price.toFixed(2) }}</p>
          <p class="quantity">Quantity: {{ product.quantity }}</p>
        </div>
      </div>


      <!-- Actions -->
      <div class="actions">
        <!-- Add One Button -->
        <span class="action-icon" @click="addOneItem(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </span>


        <!-- Edit Button -->
        <span class="action-icon" @click="editItem(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
          </svg>
        </span>


        <!-- Remove Button -->
        <span class="action-icon" @click="deleteItem(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </span>
      </div>


      <!-- Total Price -->
      <p class="total-price">
        Total: ${{ (product.price * product.quantity).toFixed(2) }}
      </p>
    </div>


    <!-- Cart Summary -->
    <div class="cart-summary">
      <h3>Cart Summary</h3>
      <p>Subtotal: ${{ calculateSubtotal().toFixed(2) }}</p>
      <p>Tax: ${{ calculateTax().toFixed(2) }}</p>
      <p>Total: ${{ calculateTotal().toFixed(2) }}</p>
    </div>
  </div>
</template>


<script lang="ts">
import { ref, computed } from 'vue';
import { useCartStore } from '@/src/cart';
import { useRouter } from 'vue-router';
import { useFirestore } from '@/src/firestore'; // Import Firestore helper
import type { Product } from '@/src/types/Product';


export default {
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();
    const firestore = useFirestore(); // Initialize Firestore helper


    // Access cart items from the store
    const cartItems = computed(() => cartStore.cartItems as Product[]);


    // Handle adding one more item
    const addOneItem = async (index: number) => {
      const item = cartItems.value[index];
      item.quantity++;
      item.totalPrice = item.price * item.quantity;


      // Save updated cart to Firestore
      try {
        await firestore.saveUserCartToFirestore(cartItems.value);
      } catch (error) {
        console.error('Error updating Firestore on add:', error);
      }
    };


    // Handle editing an item - Navigate to egg.vue
    const editItem = (index: number) => {
      router.push({ name: 'egg' });
    };


    // Handle removing one quantity of an item
    const deleteItem = async (index: number) => {
      const item = cartItems.value[index];
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;


        // Save updated cart to Firestore
        try {
          await firestore.saveUserCartToFirestore(cartItems.value);
        } catch (error) {
          console.error('Error updating Firestore on delete:', error);
        }
      } else {
        try {
          await cartStore.removeFromCart(item); // Uses the store's logic to remove the item
        } catch (error) {
          console.error('Error removing item from Firestore:', error);
        }
      }
    };


    // Calculate subtotal
    const calculateSubtotal = () => {
      return cartItems.value.reduce((sum, product) => sum + product.price * product.quantity, 0);
    };


    // Calculate tax
    const calculateTax = () => {
      const taxRate = 0.06; // Assuming a 6% tax rate
      return calculateSubtotal() * taxRate;
    };


    // Calculate total
    const calculateTotal = () => {
      return calculateSubtotal() + calculateTax();
    };


    return {
      cartItems,
      addOneItem,
      editItem,
      deleteItem,
      calculateSubtotal,
      calculateTax,
      calculateTotal,
    };
  },
};
</script>






<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}


.cart-item {
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #fff;
}


.cart-item-details {
  display: flex;
  align-items: center;
}


.product-image {
  width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 8px;
  object-fit: cover;
}


.product-info {
  flex: 1;
}


.product-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}


.product-description {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
}


.price,
.quantity,
.total-price {
  font-size: 16px;
  margin: 4px 0;
}


.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}


.action-icon {
  cursor: pointer;
  transition: opacity 0.3s ease;
}


.action-icon:hover {
  opacity: 0.7;
}


.cart-summary {
  border-top: 2px solid #ddd;
  padding-top: 16px;
  margin-top: 16px;
}


.cart-summary h3 {
  margin-bottom: 8px;
}


.cart-summary p {
  font-size: 16px;
  margin: 4px 0;
}
</style>