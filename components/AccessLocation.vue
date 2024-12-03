<template>
    <div class="page-container">
      <!-- Search Bar Outside the Card Area -->
      <div class="search-container">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Find a store"
          class="search-input"
        />
        <button @click="onSearch" class="filter-btn">Filter</button>
      </div>
  
      <!-- The Location Access Card -->
      <div class="location-access-card">
        <div class="message">
          <h2>Zoomed out too far</h2>
          <p>Try searching for a location or zooming in to see results.</p>
        </div>
      </div>
  
      <!-- Links Positioned Under the Specified Area -->
      <div class="external-links">
        <a href="#" class="link">Privacy Notice</a>
        <a href="#" class="link">Terms of Use</a>
        <a href="#" class="link">Do Not Share My Personal Information</a>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const searchTerm = ref('');
  
  const onSearch = () => {
    // Handle search logic
    console.log('Search initiated for:', searchTerm.value);
  };
  </script>
  
  <style scoped>
  .page-container {
    padding: 40px; /* Increased padding for larger layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .search-container {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px; /* Increased margin */
  }
  
  .search-input {
    width: 160%; /* Increased width to make the input field larger */
    padding: 15px; /* Increased padding for a bigger input field */
    font-size: 18px; /* Larger font size */
    border: none;
    border-bottom: 3px solid #ccc; /* Increased border thickness */
    outline: none;
  }
  
  .search-input:focus {
    border-bottom-color: #008c8c; /* Change border color on focus */
  }
  
  .filter-btn {
    padding: 12px 20px; /* Larger button padding */
    background-color: white;
    color: #008c8c;
    border: 3px solid #008c8c; /* Thicker border */
    border-radius: 6px; /* Larger border radius */
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 16px; /* Larger font size for the button */
  }
  
  .filter-btn:hover {
    background-color: #008c8c;
    color: white;
  }
  
  .location-access-card {
    max-width: 700px; /* Increased card width */
    margin-bottom: 40px; /* Increased space between the card and links */
    padding: 30px; /* Larger padding inside the card */
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Thicker shadow for more prominence */
  }
  
  .message {
    margin-bottom: 30px;
    font-family: Arial, sans-serif;
    text-align: left;
  }
  
  .message h2 {
    font-size: 28px; /* Larger title font size */
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .message p {
    font-size: 20px; /* Larger paragraph text */
    color: #333;
  }
  
  .external-links {
    margin-top: 30px; /* Larger space between the card and links */
    font-family: Arial, sans-serif;
    text-align: left;
  }
  
  .link {
    color: #006666;
    text-decoration: none;
    font-size: 16px; /* Larger link font size */
    display: block;
    margin-bottom: 12px; /* Increased space between links */
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  