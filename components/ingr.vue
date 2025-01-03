<template>
  <div class="ingredient-container">
    <!-- Highlighted item label -->
    <div class="highlighted-label">{{ highlightedLabel }}</div>
    
    <!-- Description text -->
    <p class="description">{{ description }}</p>
    
    <!-- Tags -->
    <ul class="tags">
      <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
    </ul>
    
    <!-- Nutrition facts -->
    <p class="nutrition">{{ nutrition }}</p>
    
    <!-- Button -->
    <button class="nutrition-button">{{ buttonText }}</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  highlightedLabel: {
    type: String,
    default: '200★ item' // Default value
  },
  description: {
    type: String,
    default: 'Fluffy, cage-free egg frittata with kale, basil pesto and mozzarella on a toasted Cheddar and onion bun. An herbaceous twist on a classic egg and cheese sandwich.'
  },
  tags: {
    type: Array,
    default: () => ['– HIGH-PROTEIN', '– VEGETARIAN']
  },
  nutrition: {
    type: String,
    default: '390 calories, 1g sugar, 16g fat'
  },
  buttonText: {
    type: String,
    default: 'Full nutrition & ingredients list'
  }
});
</script>

<style scoped>
.ingredient-container {
  background-color: #183f36; /* Dark green background */
  color: #ffffff; /* White text */
  padding: 24px; /* Padding around the container */
  border-radius: 8px; /* Slightly rounded corners */
  width: 100%; /* Full parent width */
  max-width: 100vw; /* Ensure it spans the entire viewport width */
  box-sizing: border-box; /* Include padding in the width */
  font-family: 'Arial', sans-serif; /* Use Arial font */
  margin-left: 0; /* Align with the left edge */
  margin-right: 0; /* Align with the right edge */
}

.highlighted-label {
  color: #d1b082; /* Golden yellow for the label */
  font-size: 12px; /* Smaller font size */
  font-weight: bold;
  border: 1px solid #d1b082; /* Border matching the text color */
  display: inline-block;
  padding: 4px 8px; /* Padding inside the label */
  border-radius: 4px; /* Rounded corners for the label */
  margin-bottom: 16px; /* Spacing below the label */
}

.description {
  font-size: 14px; /* Smaller description text */
  line-height: 1.4; /* Adjusted spacing */
  margin-bottom: 16px;
}

.tags {
  list-style: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0 0 16px 0; /* Spacing below tags */
  font-size: 12px; /* Smaller font size for tags */
}

.tags li {
  margin-bottom: 4px; /* Spacing between tags */
}

.nutrition {
  font-weight: bold;
  font-size: 14px; /* Smaller nutrition text */
  margin-bottom: 16px;
}

.info-icon {
  font-size: 10px; /* Smaller icon size */
  vertical-align: middle;
  cursor: help;
}

.nutrition-button {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 6px 12px; /* Reduced padding */
  font-size: 12px; /* Smaller font size for button */
  font-weight: bold;
  border-radius: 50px; /* Rounded button */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.nutrition-button:hover {
  background-color: #ffffff;
  color: #183f36;
  border: 1px solid #ffffff;
}
</style>
