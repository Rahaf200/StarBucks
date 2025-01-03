<template>
  <div>
    <!-- Import and use the Navbar component -->
    <Navbar />
    
    <!-- Import and use the TopNavBar component -->
    <TopNavBar />
    
    <!-- Import and use the PreviousOrders component -->
    <PreviousOrders />
    
    <!-- Import and use the FooterMenu component -->
    <FooterMenu class="footer-menu-with-lines" />
    
    <!-- Import and use the Footer component -->
    <Footer />
    
    <!-- Always show StoreSelector at the bottom -->
    <StoreSelector />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Import the Navbar component
import Navbar from "@/components/navbar.vue";

// Import the TopNavBar component
import TopNavBar from "@/components/TopNavBar.vue";

// Import the PreviousOrders component
import PreviousOrders from "@/components/PreviousOrders.vue";

// Import the FooterMenu component
import FooterMenu from "@/components/FooterMenu.vue";

// Import the Footer component
import Footer from "@/components/Footer.vue";

// Import the StoreSelector component
import StoreSelector from "@/components/store_select.vue";

export default defineComponent({
  name: "PreviousPage",
  components: {
    Navbar,         // Register the Navbar component
    TopNavBar,      // Register the TopNavBar component
    PreviousOrders, // Register the PreviousOrders component
    FooterMenu,     // Register the FooterMenu component
    Footer,         // Register the Footer component
    StoreSelector,  // Register the StoreSelector component
  },
});
</script>

<style scoped>
/* Add a thin border above and below FooterMenu */
.footer-menu-with-lines {
  border-top: 1px solid #ccc;   /* Light gray line above */
  border-bottom: 1px solid #ccc;/* Light gray line below */
  padding: 10px 0;              /* Optional: Add vertical padding */
}

/* Ensure that the StoreSelector is always fixed at the bottom */
.store-selector-fixed {
  position: fixed;  /* Fixed position */
  bottom: 0;         /* Stick to the bottom of the screen */
  left: 0;           /* Align to the left of the screen */
  width: 100%;       /* Full width */
  z-index: 1000;     /* Ensure it is on top of other elements */
  background-color: #173f35; /* Dark green background */
  padding: 15px;
  color: white;
  font-family: Arial, sans-serif;
  border-radius: 5px;
}
</style>
