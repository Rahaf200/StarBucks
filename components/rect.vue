<template>
    <div class="rect-component">
      <span class="label">{{ selectedText }}</span>
      <button class="dropdown-button" @click="toggleDropdown">
        <div class="icon-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-icon">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      <ul v-if="dropdownOpen" class="dropdown-menu">
        <li class="dropdown-item" @click="selectOption('None')">None</li>
        <li class="dropdown-item" @click="selectOption('Upside Down')">Upside Down</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const dropdownOpen = ref(false);
  const selectedText = ref('Add Shot Prep');
  
  function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
  }
  
  function selectOption(option: string) {
    if (option === 'None') {
      selectedText.value = 'Add Shot Prep';
    } else {
      selectedText.value = option;
    }
    dropdownOpen.value = false;
  }
  </script>
  
  <style scoped>
  .rect-component {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    font-size: 1rem;
    color: #333;
    width: 250px;
    position: relative;
    cursor: pointer;
  }
  
  .label {
    font-weight: 500;
  }
  
  .dropdown-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  
  .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #e0f7e0; /* Light green background */
  }
  
  .dropdown-icon {
    width: 20px;
    height: 20px;
    color: #008000; /* Green color */
  }
  
  .dropdown-icon:hover {
    color: #006400; /* Darker green on hover */
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    width: 100%;
    z-index: 10;
  }
  
  .dropdown-item {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f0f0f0;
  }
  </style>
  