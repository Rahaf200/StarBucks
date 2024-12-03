<template>
  <div class="nice-list-card" :style="{ backgroundColor: bgColor, flexDirection: flipImage ? 'row-reverse' : 'row' }">
    <!-- Left Section: Text Content -->
    <div class="text-section">
      <h2 class="title">{{ title }}</h2>
      <p class="description">
        {{ description }}
      </p>
      <!-- Button with dynamic text -->
      <button @click="orderNow" class="order-btn">{{ buttonText }}</button>
    </div>

    <!-- Right Section: Image -->
    <div class="image-section">
      <img :src="imageSrc" alt="Cran-Merry Drink" class="drinks-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define props with correct types
const props = defineProps({
  title: {
    type: String,
    default: "New to the nice list",
  },
  description: {
    type: String,
    default:
      "Celebrate the season with a new refreshingly festive Cran-Merry Orange Lemonade Refresher or Cran-Merry Drink.",
  },
  buttonText: {
    type: String,
    default: "Order now",
  },
  bgColor: {
    type: String,
    default: "#00754a", // Default to Starbucks green
  },
  imageSrc: {
    type: String,
    default: "/static/images/nicelistcardclass.jpg", // Default image if no image is passed
  },
  flipImage: {
    type: Boolean,
    default: false, // Default value for flip is false
  }
});

// Function to handle the order button click
function orderNow(): void {
  alert("Redirecting to the order page...");
  window.location.href = "/order";
}
</script>

<style scoped>
/* Parent Container */
.nice-list-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 2.5rem;
  border-radius: 15px;
  margin: 2rem auto;
  max-width: 1600px;
  height: 500px;
  position: relative;
  flex-direction: row; /* Default layout */
}

/* Left Section: Text */
.text-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
}

.description {
  margin-top: 1rem;
  font-size: 1.4rem;
  line-height: 1.6;
  width: 85%;
}

/* Button Styling */
.order-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 15px;
  cursor: pointer;
  text-transform: none;
  position: relative;
  display: inline-block;
  transition: none;
}

.order-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Right Section: Image */
.image-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}

.drinks-image {
  width: 200%;
  height: 580px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 15px;
}
</style>