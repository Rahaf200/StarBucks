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

// Product data that is passed when clicked (this could be dynamic data from a sandwich object)
const sandwich = {
  sandwichName: 'Egg, Pesto & Mozzarella Sandwich',
  sandwichImage: '/static/images/HotBreakfast.png',
  price: 5.25,
  productId: 'sample-product-id',  // Replace with actual product ID
  quantity: 1, // default quantity
  totalPrice: 5.25, // calculated total price for this sandwich
};

function handleClick() {
  // Emit the event to notify the parent component to add the item to the cart
  emit('add-to-order', sandwich); // Send the sandwich object as data
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
