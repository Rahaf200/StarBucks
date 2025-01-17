<template>
    <div class="sandwich-list">
      <!-- Render each sandwich card dynamically -->
      <div v-for="(sandwich, index) in sandwiches" :key="index" class="sandwich-card">
        <!-- Sandwich details with image, name, and price -->
        <div class="sandwich-info">
          <img :src="sandwich.sandwichImage" alt="Sandwich" class="sandwich-image" />
          <div class="details">
            <h3 class="sandwich-name">{{ sandwich.sandwichName }}</h3>
            <p class="price">${{ sandwich.price.toFixed(2) }}</p>
          </div>
        </div>
        
         <!-- Add to Order Button -->
        <add-to-order-button @add-to-order="addToCart(sandwich)" />
        <!-- Icon buttons: Edit, Add, and Delete -->
        <div class="icon-buttons">
          <button class="icon-button" @click="editItem(index)" aria-label="Edit">
            <!-- Edit button icon (SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
            </svg>
          </button>
          <button class="icon-button" @click="addItem" aria-label="Add">
            <!-- Add button icon (SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </button>
          <button class="icon-button" @click="deleteItem(index)" aria-label="Delete">
            <!-- Delete button icon (SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
        </div>
  
        <!-- Subtotal, Tax, and Total Section -->
        <div class="price-summary">
          <div class="summary-line">
            <span>Subtotal:</span>
            <span>${{ sandwich.price.toFixed(2) }}</span>
          </div>
          <div class="summary-line">
            <span>Tax:</span>
            <span>${{ (sandwich.price * taxRate).toFixed(2) }}</span>
          </div>
          <div class="summary-line total">
            <span>Total:</span>
            <span>${{ (sandwich.price + (sandwich.price * taxRate)).toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // Static sandwich data
  const taxRate = 0.06;
  
  // Initial sandwich data
  const initialSandwich = {
    sandwichName: 'Egg, Pesto & Mozzarella Sandwich',
    sandwichImage: '/static/images/HotBreakfast.png',
    price: 5.25
  };
  
  // Create a reactive array to hold sandwich instances
  const sandwiches = ref([initialSandwich]);
  
  // Method to add a new sandwich instance
  const addItem = () => {
    sandwiches.value.push({ ...initialSandwich });
  };
  
  // Method to edit a sandwich instance
  const editItem = (index: number) => {
    alert(`Edit item clicked for sandwich ${index + 1}`);
  };
  
  // Method to delete a sandwich instance
  const deleteItem = (index: number) => {
    sandwiches.value.splice(index, 1);
  };
// Method to handle adding a sandwich to the cart
 const addToCart = (sandwich: { sandwichName: string; sandwichImage: string; price: number }) => {
 alert(`Added ${sandwich.sandwichName} to the cart.`);
 };


  </script>
  
  <style scoped>
  .sandwich-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .sandwich-card {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    width: 300px;
    margin: 16px 0;
    font-family: Arial, sans-serif;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .sandwich-info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  
  .sandwich-image {
    width: 64px;
    height: 64px;
    margin-right: 12px;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid #ddd;
  }
  
  .details {
    display: flex;
    flex-direction: column;
  }
  
  .sandwich-name {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  
  .price {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #555;
  }
  
  /* Icon button styles */
  .icon-buttons {
    display: flex;
    justify-content: space-evenly;
    margin: 12px 0;
  }
  
  .icon-button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
    color: #555;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }
  
  .icon-button:hover {
    background-color: #f0f0f0;
  }
  
  /* SVG icons */
  .icon-button svg {
    pointer-events: none;
  }
  
  /* Price summary section */
  .price-summary {
    border-top: 1px solid #ddd;
    padding-top: 12px;
    margin-top: 12px;
    font-size: 14px;
  }
  
  .summary-line {
    display: flex;
    justify-content: space-between;
    margin: 4px 0;
  }
  
  .total {
    font-weight: bold;
    font-size: 16px;
    margin-top: 8px;
  }
  </style>
  