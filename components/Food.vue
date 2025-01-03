<template>
  <div class="food-section">
    <!-- Dynamic heading from props -->
    <h2 class="food-heading">{{ heading }}</h2>

    <div class="food-grid">
      <!-- Column 1 (using prop data) -->
      <div class="food-column">
        <div v-for="item in column1" :key="item.name" class="food-item">
          <button @click="goToItem(item.url)">
            <img :src="item.imagePath" :alt="item.name" class="food-image" />
            <p>{{ item.name }}</p>
          </button>
        </div>
      </div>

      <!-- Column 2 (using prop data) -->
      <div class="food-column">
        <div v-for="item in column2" :key="item.name" class="food-item">
          <button @click="goToItem(item.url)">
            <img :src="item.imagePath" :alt="item.name" class="food-image" />
            <p>{{ item.name }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

// Define the type for each food item
interface FoodItem {
  name: string;
  imagePath: string;
  url?: string; // Make 'url' optional to prevent errors if it's not provided
}

// Define props for the component
const props = defineProps<{
  heading: string; // The heading for the section
  column1: FoodItem[]; // Array of food items for the first column
  column2: FoodItem[]; // Array of food items for the second column
}>();

const router = useRouter();

// Navigate to the URL specified in the food item
const goToItem = (url?: string) => {
  if (url) {
    router.push(url); // Only navigate if URL is defined
  }
};
</script>

<style scoped>
.food-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-heading {
  text-align: left;
  width: 100%;
  margin-left: 20%; /* Place the heading above the first column */
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0; /* Very light line under the heading */
  padding-bottom: 10px; /* Add some space between the heading and the line */
  margin-bottom: 20px; /* Add space between the line and the content */
}

.food-grid {
  display: flex;
  justify-content: space-between; /* Space the columns apart */
  gap: 20px; /* Adjust space between columns */
  margin-top: 20px;
  width: 80%; /* Set a width for alignment */
  flex-wrap: wrap; /* Allow columns to wrap on small screens */
}

.food-column {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between items in a column */
  flex-basis: 45%; /* Allow two columns to share equal width */
}

.food-item {
  display: flex;
  align-items: center; /* Align image and text horizontally */
  gap: 15px; /* Space between image and text */
  text-align: left;
}

.food-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.food-item p {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

button:hover {
  opacity: 0.8;
}
</style>
