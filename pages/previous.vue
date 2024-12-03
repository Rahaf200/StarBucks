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

export default defineComponent({
  name: "PreviousPage",
  components: {
    Navbar,         // Register the Navbar component
    TopNavBar,      // Register the TopNavBar component
    PreviousOrders, // Register the PreviousOrders component
    FooterMenu,     // Register the FooterMenu component
    Footer,         // Register the Footer component
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
</style>
