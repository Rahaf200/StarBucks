<template>
    <div>
      <!-- Import Navbar Component -->
      <Navbar />
  
      <!-- Import TopNavBar Component -->
      <TopNavBar />
  
      <!-- Main Content Wrapper -->
      <div class="main-content">
        <!-- Import SidebarMenu Component -->
        <div class="sidebar-menu">
          <SidebarMenu />
        </div>
  
        <!-- Hot Breakfast Food Sections -->
        <div class="hot-breakfast-sections">
          <!-- First Food Section (Hot Breakfast) -->
          <div class="hot-breakfast-section">
            <!-- Breadcrumb Navigation -->
            <p class="breadcrumb">Menu / Hot Breakfast</p>
  
            <h1 class="hot-breakfast-heading">Hot Breakfast</h1>
  
            <!-- Breakfast Sandwiches & Wraps Section -->
            <h2 class="hot-breakfast-subheading">Breakfast Sandwiches & Wraps</h2>
            <div class="hot-breakfast-items horizontal-grid">
              <div v-for="item in hotBreakfastItems" :key="item.name" class="hot-breakfast-item">
                <img :src="item.imagePath" :alt="item.name" class="hot-breakfast-image" />
                <p class="hot-breakfast-name">{{ item.name }}</p>
                <p v-if="item.unavailable" class="unavailable-text">❌ Unavailable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Import FooterMenu Component -->
      <FooterMenu />
  
      <!-- Import Footer Component -->
      <Footer />
  
      <!-- Store Selector Component, Always Visible at the Bottom -->
      <div class="store-selector-container">
        <StoreSelector />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Navbar from '~/components/navbar.vue';
  import TopNavBar from '~/components/TopNavBar.vue';
  import SidebarMenu from '~/components/SidebarMenu.vue';
  import Footer from '~/components/Footer.vue';
  import FooterMenu from '~/components/FooterMenu.vue';
  import StoreSelector from '~/components/store_select.vue'; // Import the Store Selector component
  
  export default defineComponent({
    name: 'HotBreakfastPage',
    components: {
      Navbar,
      TopNavBar,
      SidebarMenu,
      Footer,
      FooterMenu,
      StoreSelector, // Register the Store Selector component
    },
    setup() {
      // Data for the Hot Breakfast section
      const hotBreakfastItems = ref([
        {
          name: 'Egg, Pesto & Mozzarella Sandwich',
          imagePath: '/static/images/HotBreakfast.png',
        },
        {
          name: 'Bacon, Sausage & Egg Wrap',
          imagePath: '/static/images/Bacon.png',
        },
        {
          name: 'Bacon, Gouda & Egg Sandwich',
          imagePath: '/static/images/Gouda.png',
        },
        {
          name: 'Turkey Bacon, Cheddar & Egg White Sandwich',
          imagePath: '/static/images/Cheddar.png',
        },
        {
          name: 'Spinach, Feta & Egg White Wrap',
          imagePath: '/static/images/Spinach.png',
        },
        {
          name: 'Avocado Spread',
          imagePath: '/static/images/Avocado.png',
        },
        {
          name: 'Impossible™ Breakfast Sandwich',
          imagePath: '/static/images/Impossible.png',
          unavailable: true,
        },
        {
          name: 'Double-Smoked Bacon, Cheddar & Egg Sandwich',
          imagePath: '/static/images/Double.png',
          unavailable: true,
        },
        {
          name: 'Sausage, Cheddar & Egg Sandwich',
          imagePath: '/static/images/Sausage.png',
        },
      ]);
  
      return {
        hotBreakfastItems,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Apply Arial font to all elements */
  * {
    font-family: 'Arial', sans-serif;
  }
  
  /* Store Selector Container Fixed at the Bottom of the Page */
  .store-selector-container {
    background-color: #173f35; /* Dark green background */
    padding: 1rem;
    text-align: center;
    color: white;
    font-family: Arial, sans-serif;
    position: fixed; /* Fix the position */
    bottom: 0; /* Stick it to the bottom */
    left: 0;
    width: 100%; /* Make it take the full width */
    z-index: 1000; /* Ensure it's above other content */
  }
  
  /* Main Content Flexbox Layout */
  .main-content {
    display: flex;
    gap: 2rem; /* Space between Sidebar and Food Section */
    padding: 2rem;
    padding-bottom: 60px; /* Add padding to prevent content from being hidden under the fixed StoreSelector */
  }
  
  /* Sidebar Styles */
  .sidebar-menu {
    flex: 0 0 200px; /* Fixed width for the Sidebar */
  }
  
  /* Hot Breakfast Sections */
  .hot-breakfast-sections {
    flex: 1; /* Take up remaining space */
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .hot-breakfast-section {
    margin-bottom: 2rem;
  }
  
  .hot-breakfast-heading {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .breadcrumb {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem; /* Space between breadcrumb and the heading */
  }
  
  /* Styling for subheading with thin line */
  .hot-breakfast-subheading {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem; /* Add padding to make space for the border */
    border-bottom: 1px solid #ccc; /* Add a thin line under the heading */
  }
  
  /* Horizontal Layout for Food Items */
  .horizontal-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 items per row */
    gap: 2rem; /* Space between items */
    justify-items: center;
  }
  
  /* Styling for each food item */
  .hot-breakfast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 140px; /* Consistent width */
  }
  
  /* Styling for images */
  .hot-breakfast-image {
    width: 120px; /* Adjust image size */
    height: 120px;
    object-fit: cover; /* Keep image aspect ratio */
    border-radius: 50%; /* Make images circular */
  }
  
  /* Styling for item name */
  .hot-breakfast-name {
    margin-top: 0.5rem; /* Space between image and name */
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
  
  /* Styling for unavailable text */
  .unavailable-text {
    color: red;
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 0.3rem; /* Space between name and unavailable text */
  }
  </style>
  