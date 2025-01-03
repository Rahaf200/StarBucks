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
        
        <!-- Custom Food Sections -->
        <div class="custom-food-sections">
          <!-- First Food Section (Hot Coffees) -->
          <div class="custom-food-section">
            <!-- Breadcrumb Navigation -->
            <p class="breadcrumb">Menu / Hot Coffees</p>
            
            <h1 class="custom-food-heading">Hot Coffees</h1>
            
            <!-- First Food Section (Americanos) -->
            <h2 class="custom-food-subheading">Americanos</h2>
            <div class="custom-food-items grid-layout">
              <div v-for="item in customHotCoffeeItems" :key="item.name" class="custom-food-item">
                <img :src="item.imagePath" :alt="item.name" class="custom-food-image" />
                <p class="custom-food-name">{{ item.name }}</p>
              </div>
            </div>
          </div>
          
          <!-- Second Food Section (Brewed Coffees) -->
          <div class="custom-food-section">
            <h2 class="custom-food-subheading">Brewed Coffees</h2>
            <div class="custom-food-items grid-layout">
              <div v-for="item in brewedCoffeeItems" :key="item.name" class="custom-food-item">
                <img :src="item.imagePath" :alt="item.name" class="custom-food-image" />
                <p class="custom-food-name">{{ item.name }}</p>
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
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Navbar from '~/components/navbar.vue';
  import TopNavBar from '~/components/TopNavBar.vue';
  import SidebarMenu from '~/components/SidebarMenu.vue';
  import Footer from '~/components/Footer.vue';
  import FooterMenu from '~/components/FooterMenu.vue';
  
  export default defineComponent({
    name: 'CustomHotCoffeesPage',
    components: {
      Navbar,
      TopNavBar,
      SidebarMenu,
      Footer,
      FooterMenu,
    },
    setup() {
      // Data for the first section: Americanos
      const customHotCoffeeItems = ref([
        {
          name: 'Caffè Americano',
          imagePath: '/static/images/MediumRoast.png', // Relative path for the image
        },
      ]);
  
      // Data for the second section: Brewed Coffees
      const brewedCoffeeItems = ref([
        {
          name: 'Featured Medium Roast – Pike Place® Roast',
          imagePath: '/static/images/MediumRoast.png',
        },
        {
          name: 'Decaf Pike Place® Roast',
          imagePath: '/static/images/MediumRoast.png',
        },
        {
          name: 'Caffè Misto',
          imagePath: '/static/images/Caffè Misto.png',
        },
        {
          name: 'Veranda Blend®',
          imagePath: '/static/images/MediumRoast.png',
        },
        {
          name: 'Featured Dark Roast',
          imagePath: '/static/images/MediumRoast.png',
        },
        {
          name: 'Starbucks® Christmas Blonde Roast Clover®',
          imagePath: '/static/images/MediumRoast.png',
          unavailable: true, // Mark as unavailable
        },
        {
          name: 'Christmas Blend Clover Vertica™',
          imagePath: '/static/images/MediumRoast.png',
          unavailable: true, // Mark as unavailable
        },
        {
          name: 'Caffè Verona® Clover Vertica™',
          imagePath: '/static/images/MediumRoast.png',
          unavailable: true, // Mark as unavailable
        },
      ]);
  
      return {
        customHotCoffeeItems,
        brewedCoffeeItems,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Apply Arial font to all elements */
  * {
    font-family: 'Arial', sans-serif;
  }
  
  /* Main Content Flexbox Layout */
  .main-content {
    display: flex;
    gap: 2rem; /* Space between Sidebar and Food Section */
    padding: 2rem;
  }
  
  /* Sidebar Styles */
  .sidebar-menu {
    flex: 0 0 200px; /* Fixed width for the Sidebar */
  }
  
  /* Food Sections */
  .custom-food-sections {
    flex: 1; /* Take up remaining space */
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .custom-food-section {
    margin-bottom: 2rem;
  }
  
  .custom-food-heading {
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
  .custom-food-subheading {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem; /* Add padding to make space for the border */
    border-bottom: 1px solid #ccc; /* Add a thin line under the heading */
  }
  
  /* Grid Layout for Food Items */
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Two items per row */
    gap: 1.5rem; /* Space between items */
  }
  
  /* Styling for each food item */
  .custom-food-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 140px; /* Consistent width */
  }
  
  /* Styling for images */
  .custom-food-image {
    width: 120px; /* Adjust image size */
    height: 120px;
    object-fit: cover; /* Keep image aspect ratio */
    border-radius: 50%; /* Make images circular */
  }
  
  /* Styling for item name */
  .custom-food-name {
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
  