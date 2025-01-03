<template>
  <div class="button-container">
    <button 
      class="add-to-order-button" 
      @click="handleClick">
      Add to Order
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

// Define the event that this component can emit
const emit = defineEmits(['add-to-order']);

// Define the product data that will be passed when clicked (you may replace this with dynamic data)
const product = {
  productId: 'sample-product-id', // Replace with the actual product ID
  quantity: 1,
  totalPrice: 100, // Replace with the calculated total price for the product
};

function handleClick() {
  console.log('Item added to order!');
  // Emit the custom event to notify the parent component to add the item to the cart
  emit('add-to-order', product); // Send the product object as data
}
</script>

<style scoped>
.add-to-order-button {
  background-color: #00754a; /* Starbucks green */
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 50px; /* Rounded button */
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Shadow effect */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

.add-to-order-button:hover {
  background-color: #00593a; /* Darker green on hover */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
}

.add-to-order-button:active {
  background-color: #004428; /* Even darker green when pressed */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Reduced shadow on active press */
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
