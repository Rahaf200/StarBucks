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

    <!-- Always Visible StoreSelect at the Bottom -->
    <div class="store-select-container">
      <StoreSelect />
    </div>
  </div>
</template>

<script lang="ts">
import PreviousOrders from '~/components/PreviousOrders.vue'; // Import PreviousOrders component
import Navbar from '~/components/navbar.vue'; // Import Navbar component
import TopNavBar from '~/components/TopNavBar.vue'; // Import TopNavBar component
import FooterMenu from '~/components/FooterMenu.vue'; // Import FooterMenu component
import Footer from '~/components/Footer.vue'; // Import Footer component
import StoreSelect from '~/components/store_select.vue'; // Import StoreSelect component

export default {
  components: {
    PreviousOrders, // Register the PreviousOrders component
    Navbar, // Register the Navbar component
    TopNavBar, // Register the TopNavBar component
    FooterMenu, // Register the FooterMenu component
    Footer, // Register the Footer component
    StoreSelect, // Register the StoreSelect component
  },
};
</script>

<style scoped>
/* Add specific styles for the page here if needed */

/* Ensure the store select container is fixed at the bottom */
.store-select-container {
  position: fixed; /* Fix the position at the bottom */
  bottom: 0;
  left: 0;
  width: 100%; /* Make it take up the full width of the screen */
  background-color: white; /* Optional: background color for visibility */
  padding: 10px; /* Add some padding */
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1); /* Add a shadow to give depth */
  z-index: 10; /* Ensure it stays on top of other content */
}

.footer-section {
  background-color: #f8f8f8;
  padding: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #e0e0e0;
}
</style>
