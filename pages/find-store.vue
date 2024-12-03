<template>
    <div class="page-container">
      <!-- Include the Navbar component here -->
      <Navbar />
      
      <!-- Create a two-column layout -->
      <div class="content-container">
        <!-- First Column: AccessLocation Component -->
        <div class="column-1">
          <AccessLocation />
        </div>
        
        <!-- Second Column: Image -->
        <div class="column-2">
          <img src="/static/images/Map.png" alt="Map Image" class="map-image" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Navbar from '../components/navbar.vue'; // Import the Navbar component
  import AccessLocation from '../components/AccessLocation.vue'; // Import the AccessLocation component
  </script>
  
  <style scoped>
  .page-container {
    padding: 20px;
  }
  
  /* Flex container for two columns */
  .content-container {
    display: flex;
    justify-content: space-between; /* Ensure space between the columns */
    align-items: flex-start; /* Align items to the top */
    gap: 20px; /* Space between the two columns */
    margin-top: 20px;
  }
  
  /* Column 1: AccessLocation Component */
  .column-1 {
    flex: 1; /* Take up remaining space */
    max-width: 40%; /* Reduced max width to give more space to the image */
  }
  
  /* Column 2: Image */
  .column-2 {
    flex: 1; /* Take up remaining space */
    max-width: 60%; /* Increased max width to allow the image to take up more space */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .map-image {
    width: 100%; /* Make the image take up full column width */
    max-width: 3000px; /* Increased max width significantly for a much bigger image */
    height: auto; /* Maintain aspect ratio */
  }
  </style>
  