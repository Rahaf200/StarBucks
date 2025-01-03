<template>
  <!-- Main Container -->
  <div class="review-order">
    <!-- Header Section -->
    <div class="header" @click="goBack">
      <!-- Starbucks Logo Image -->
      <img src="/static/images/Stm.png" alt="Starbucks Logo" class="logo" />
      <span class="back-to-menu">
        <!-- SVG Icon for the arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
        Back to menu
      </span>
    </div>

    <!-- Content Section -->
    <div class="content">
      <!-- Title Section -->
      <h1 class="title">Review order ({{ orderCount }})</h1>
      <p class="subtitle">Ready in around 4–7 minutes</p>

      <!-- Pickup Store Section -->
      <div class="pickup-store">
        <p class="label">Pickup store</p>
        <p class="store-info">
          <span class="store-name">{{ storeName }}</span> ·
          <span class="distance">{{ distance }} mi</span>
          <!-- Chevron Down Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </p>
      </div>

      <!-- Pickup Method Section -->
      <div class="pickup-method">
        <p class="label">Pickup method</p>
        <div class="method-content">
          <!-- Door image positioned above "In store" text -->
          <img src="/static/images/door.png" alt="Pickup Icon" class="pickup-icon" />
          <p class="method-value">In store</p>
        </div>
      </div>

      <!-- Cart Items Section -->
      <div class="cart-items">
        <h2 class="cart-items-title">Your Cart</h2>
        <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
          <p class="cart-item-name">{{ item.productName }}</p>
          <p class="cart-item-quantity">Quantity: {{ item.quantity }}</p>
          <p class="cart-item-price">Price: ${{ item.price }}</p>
          <p class="cart-item-total">Total: ${{ item.totalPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';

// Define a type for Cart Item
interface CartItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

// Define props to accept cartItems from parent component
const props = defineProps<{
  cartItems: CartItem[];
}>();

// Define reactive state
const orderCount = ref<number>(props.cartItems.length); // Set order count based on cartItems
const storeName = ref<string>('Oasis Travel Center');
const distance = ref<number>(24);

// Use router for navigation
const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<style scoped>
/* General Container Styling */
.review-order {
  font-family: Arial, sans-serif;
  color: #ffffff;
  background-color: #1e3932; /* Starbucks dark green background */
  min-height: 100vh;
  padding: 1.5rem;
  box-sizing: border-box;
  max-width: 40%; /* Reduced width to make the component smaller */
  margin-left: 0; /* Align the container to the left */
  border-radius: 10px; /* Optional: Rounded corners for a polished look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow */
}

/* Header Styling */
.header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
}

.header .logo {
  width: 50px; /* Set logo width to 50px */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Adjust spacing for alignment */
}

/* Back to Menu Text Styling */
.back-to-menu {
  display: flex;
  align-items: center;
}

.back-to-menu svg {
  margin-right: 5px; /* Space between the icon and the text */
}

/* Title Section */
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 2rem;
}

/* Pickup Store Section */
.pickup-store {
  margin-bottom: 2rem;
  border-bottom: 1px solid #555;
  padding-bottom: 1rem;
}

.label {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.5rem;
}

.store-info {
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center; /* Align text and icon */
}

.store-name,
.distance {
  color: #fff;
}

/* Chevron Down Icon Styling */
.store-info svg {
  margin-left: 10px; /* Add space between the text and the icon */
  cursor: pointer; /* Change cursor to pointer when hovered */
  transition: transform 0.3s ease; /* Smooth rotation effect */
}

/* Add rotation effect on hover */
.store-info svg:hover {
  transform: rotate(180deg); /* Rotate the icon */
}

/* Pickup Method Section */
.pickup-method {
  border-bottom: 1px solid #555;
  padding-bottom: 1rem;
}

.method-content {
  display: flex;
  flex-direction: column; /* Arrange items in a column */
  align-items: flex-start; /* Align to the left */
  margin-top: 0.5rem;
}

.pickup-icon {
  width: 40px; /* Set a bigger size for the door image */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 0.5rem; /* Add space between the image and text */
}

.method-value {
  font-size: 1.25rem;
  font-weight: bold;
}

/* Cart Items Section */
.cart-items {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
}

.cart-items-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
}

.cart-item {
  margin-bottom: 1rem;
}

.cart-item-name,
.cart-item-quantity,
.cart-item-price,
.cart-item-total {
  font-size: 1rem;
  color: #ddd;
}

.cart-item-name {
  font-weight: bold;
}
</style>
