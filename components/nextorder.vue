<template>
  <!-- Main Container -->
  <div class="next-order-container">
    <!-- Icon Section -->
    <div class="icon-section">
      <img src="/static/images/next.png" alt="Next Order Icon" class="next-order-icon" />
    </div>

    <!-- Text Section -->
    <div class="text-section">
      <h1 class="title">Start your next order</h1>
      <p class="description">
        As you add menu items, they'll appear here. You'll have a chance to review before placing your order.
      </p>
    </div>

    <!-- Add Items Button -->
    <div class="button-section">
      <button class="add-items-button" @click="redirectToMenu">
        Add items
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Vue Router for navigation
import { useRouter } from 'vue-router';

// Initialize router for navigation
const router = useRouter();

// Function to handle "Add items" button click
const redirectToMenu = (): void => {
  // Redirect to the menu page (replace '/menu' with your desired route)
  router.push('/menu');
};
</script>

<style scoped>
/* Main Container */
.next-order-container {
  display: flex;
  flex-direction: column;
  align-items: center;  /* Keep content centered horizontally */
  justify-content: center;  /* Center content vertically */
  text-align: center;
  background-color: #f9f9f9; /* Very light gray */
  max-width: 350px; /* Decreased the max-width to make the container smaller */
  margin-left: auto; /* Push the container to the right */
  margin-right: 0; /* Remove any right margin */
  margin-top: 3rem; /* Maintain top margin */
  margin-bottom: 3rem; /* Optional: Adjust if you want more spacing at the bottom */
  padding: 3rem; /* Increased padding for more vertical space */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif; /* Set the font to Arial */
}

/* Icon Styling */
.icon-section {
  margin-bottom: 2rem; /* Increased space between the icon and text */
}

.next-order-icon {
  width: 100px; /* Slightly reduced the icon size to match the smaller width */
  height: auto;
}

/* Text Section */
.text-section {
  text-align: left; /* Align text to the left */
  width: 100%; /* Ensure the text section spans the full width */
}

.title {
  font-size: 1.75rem; /* Keep the title size smaller to fit the new width */
  font-weight: bold;
  color: #1e3932; /* Starbucks dark green */
  margin-bottom: 1rem; /* Increased space below the title */
}

.description {
  font-size: 1.125rem; /* Increase font size of the description */
  color: #6b6b6b;
  margin-bottom: 2rem; /* Increase space below the description */
  line-height: 1.5;
}

/* Button Section */
.add-items-button {
  background-color: #ffffff; /* White background */
  color: #00754a; /* Starbucks green text */
  font-size: 1.125rem; /* Increase button font size */
  font-weight: bold;
  padding: 0.75rem 2rem; /* Increase button padding for more vertical space */
  border: 2px solid #00754a; /* Green border */
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif; /* Ensure button text is also in Arial */
}

/* Remove hover color change */
.add-items-button:hover {
  background-color: #ffffff; /* No change on hover */
  color: #00754a; /* No change on hover */
  border-color: #00754a; /* No change on hover */
}
</style>
