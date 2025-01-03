<template>
  <div class="customize-container">
    <!-- Back Button -->
    <button class="back-button">
      <span class="icon">&lt;</span> Done customizing
    </button>

    <!-- Customization Sections -->
    <div class="customization-sections">
      <!-- Sandwich Options -->
      <div class="section">
        <h3 class="section-title">Sandwich Options</h3>
        <div class="section-line"></div>
        <div class="option-container">
          <span class="option-label">Remove Cheese Slice</span>
          <div class="checkbox-container" @click="toggleRemoveCheese">
            <div class="checkbox" :class="{ checked: removeCheese }">
              <span v-if="removeCheese" class="checkmark">✔</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Condiments -->
      <div class="section">
        <h3 class="section-title">Condiments</h3>
        <div class="section-line"></div>
        <div class="option-container">
          <span class="option-label">
            {{ srirachaCount > 0 ? 'Sriracha packet' : 'Add Sriracha' }}
          </span>
          <div class="circle-button-container">
            <button
              v-if="srirachaCount > 0"
              class="circle-button minus"
              @click="decreaseSriracha"
            >
              -
            </button>
            <span v-if="srirachaCount > 0" class="count">{{ srirachaCount }}</span>
            <button
              v-if="srirachaCount < 12"
              class="circle-button plus"
              @click="increaseSriracha"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Done Button -->
    <button class="done-button">Done customizing</button>

    <!-- Reset to Standard Recipe Button -->
    <button v-if="showResetButton" class="reset-button" @click="resetToStandardRecipe">
      Reset to standard recipe
    </button>
  </div>
</template>

<script setup >
import { ref } from 'vue';

// State
const removeCheese = ref(false);
const srirachaCount = ref(0);
const showResetButton = ref(false); // Track whether the Reset button should be shown

// Methods
const toggleRemoveCheese = () => {
  removeCheese.value = !removeCheese.value;
  checkResetButtonVisibility();
};

const increaseSriracha = () => {
  if (srirachaCount.value < 12) {
    srirachaCount.value += 1;
  }
  checkResetButtonVisibility();
};

const decreaseSriracha = () => {
  if (srirachaCount.value > 0) {
    srirachaCount.value -= 1;
  }
  checkResetButtonVisibility();
};

const checkResetButtonVisibility = () => {
  // If either the "removeCheese" is checked or "srirachaCount" is greater than 0, show the reset button
  showResetButton.value = removeCheese.value || srirachaCount.value > 0;
};

const resetToStandardRecipe = () => {
  removeCheese.value = false;
  srirachaCount.value = 0;
  showResetButton.value = false;
};
</script>

<style scoped>
/* Container for customization */
.customize-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  padding: 1rem;
}

/* Back Button */
.back-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.back-button .icon {
  margin-right: 0.5rem;
}

/* Customization Sections */
.customization-sections {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.section {
  flex: 1;
  margin-right: 1rem;
}

.section:last-child {
  margin-right: 0;
}

.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.section-line {
  width: 100%;
  height: 2px;
  background-color: #d3f9d8; /* Very light green */
  margin-bottom: 1rem;
}

.option-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.option-label {
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
}

.checkbox.checked {
  background-color: #0f5132;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkmark {
  font-size: 1rem;
  font-weight: bold;
}

/* Add/Remove Sriracha Button Container */
.circle-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-button-container .count {
  font-size: 1rem;
  font-weight: bold;
  margin: 0 10px; /* Space between the number and the buttons */
}

/* Circle Buttons */
.circle-button {
  width: 30px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* Plus Button */
.circle-button.plus {
  background-color: #0f5132; /* Dark green */
}

.circle-button.plus:hover {
  background-color: #145a32; /* Slightly darker green on hover */
}

/* Minus Button - Darker Green */
.circle-button.minus {
  background-color: #155d27; /* Darker green background for the minus button */
}

.circle-button.minus:hover {
  background-color: #124d21; /* Even darker green on hover */
}

/* Reset Button - Green with white background and green outline */
.reset-button {
  background-color: white;
  color: #0f5132; /* Green text */
  border: 2px solid #0f5132; /* Green border */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.reset-button:hover {
  background-color: #0f5132;
  color: white;
}

/* Done Button */
.done-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between the icon and text */
  width: auto;
  padding: 0.5rem 1.5rem; /* Padding for shape */
  background-color: #1c3d32; /* Dark green */
  color: #ffffff; /* White text */
  font-weight: bold; /* Bold text */
  border: none; /* No border */
  border-radius: 25px; /* Fully rounded corners */
  font-size: 1rem; /* Font size */
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.done-button::before {
  content: "✨"; /* Magic wand emoji */
  font-size: 1.2rem;
}

.done-button:hover {
  background-color: #142a26; /* Slightly darker green */
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}
</style>
