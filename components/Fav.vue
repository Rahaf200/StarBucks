<template>
    <div class="favorites-section">
      <!-- Top Section -->
      <div class="top-section">
        <h2>Get your favorites for free</h2>
        <div class="stars-container">
          <button
            v-for="(star, index) in starTiers"
            :key="index"
            @click="selectTier(index)"
            :class="{ active: selectedTier === index }"
          >
            {{ star }}★
          </button>
        </div>
      </div>
  
      <!-- Bottom Section -->
      <div class="bottom-section">
        <img :src="imagePath" alt="Drink" />
        <div class="description">
          <h3>Customize your drink</h3>
          <p>
            Make your drink just right with an<br />
            extra espresso shot or a dash of<br />
            your favorite syrup.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "FavoritesSection",
    setup() {
      // Reactive properties
      const starTiers = ref([25, 100, 200, 300, 400]); // Star tiers
      const selectedTier = ref(0); // Default selected tier
  
      // Set the initial image path using a relative path from the public folder
      const imagePath = ref(
        "/static/images/25.png"
      );
  
      // Function to handle star tier selection
      const selectTier = (index: number): void => {
        selectedTier.value = index;
  
        // Dynamically update the image path based on the selected star tier
        imagePath.value = `/static/images/${starTiers.value[index]}.png`;
      };
  
      return {
        starTiers,
        selectedTier,
        imagePath,
        selectTier,
      };
    },
  });
  </script>
  
  <style scoped>
  .favorites-section {
    background-color: #f1f8f6;
    padding: 40px 20px;
    text-align: center;
    font-family: Arial, sans-serif; /* Set font to Arial */
  }
  
  .top-section h2 {
    font-size: 24px;
    font-weight: bold;
    color: #1e3932;
    margin-bottom: 20px;
    font-family: Arial, sans-serif; /* Set font to Arial */
  }
  
  .stars-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .stars-container button {
    font-size: 18px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #1e3932;
    padding: 10px 20px;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
    font-family: Arial, sans-serif; /* Set font to Arial */
  }
  
  .stars-container button.active,
  .stars-container button:hover {
    border-color: #00754a;
  }
  
  .bottom-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    background-color: #d4e9e2;
    padding: 20px;
    border-radius: 10px;
    font-family: Arial, sans-serif; /* Set font to Arial */
  }
  
  .bottom-section img {
    width: 150px; /* Increased width to make the image bigger */
    height: auto; /* Maintain aspect ratio */
    margin-right: 20px;
  }
  
  .bottom-section .description {
    text-align: left; /* Align text to the left */
  }
  
  .bottom-section .description h3 {
    font-size: 18px;
    font-weight: bold;
    color: #1e3932;
    font-family: Arial, sans-serif; /* Set font to Arial */
  }
  
  .bottom-section .description p {
    font-size: 18px; /* Make the text bigger */
    color: black; /* Set the text color to black */
    margin-top: 5px;
    font-family: Arial, sans-serif; /* Set font to Arial */
  }
  
  .bottom-section .description p br {
    margin-bottom: 10px; /* Space between lines */
  }
  </style> 
   