<template>
    <div>
      <!-- Include Navbar component -->
      <Navbar />
  
      <!-- Include TopNavBar component -->
      <TopNavBar />
  
      <!-- Include PreviousOrders component with different content for Favorites -->
      <PreviousOrders
        :earthImageSrc="'/static/images/favorites.png'"
        heading="Favorites"
        subheading="Save your favorite mixes"
        paragraph="Use the heart to save customizations. Your favorites will appear here to order again."
        buttonSignInText="Log in"
        buttonJoinNowText="Sign up"
      />
  
      <!-- Include FooterMenu component -->
      <FooterMenu />
  
      <!-- Include Footer component -->
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import PreviousOrders from '~/components/PreviousOrders.vue'; // Import PreviousOrders component
  import Navbar from '~/components/navbar.vue'; // Import Navbar component
  import TopNavBar from '~/components/TopNavBar.vue'; // Import TopNavBar component
  import FooterMenu from '~/components/FooterMenu.vue'; // Import FooterMenu component
  import Footer from '~/components/Footer.vue'; // Import Footer component
  
  export default {
    components: {
      PreviousOrders, // Register the PreviousOrders component
      Navbar, // Register the Navbar component
      TopNavBar, // Register the TopNavBar component
      FooterMenu, // Register the FooterMenu component
      Footer, // Register the Footer component
    },
  };
  </script>
  
  <style scoped>
  /* Add specific styles for the page here if needed */
  </style>
  