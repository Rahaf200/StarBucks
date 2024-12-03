<template>
    <!-- Displaying the Navbar component -->
    <Navbar />
  
    <!-- Displaying the RegistrationForm component -->
    <RegistrationForm />
  
    <!-- Displaying the FooterMenu component -->
    <FooterMenu />
  
    <!-- Displaying the Footer component -->
    <Footer />
  </template>
  
  <script setup lang="ts">
    // Import Navbar, RegistrationForm, FooterMenu, and Footer components
    import Navbar from '@/components/navbar.vue';
    import RegistrationForm from '@/components/RegistrationForm.vue'; // Adjust path if necessary
    import FooterMenu from '@/components/FooterMenu.vue'; // Adjust path if necessary
    import Footer from '@/components/Footer.vue'; // Adjust path if necessary
  </script>
  
  <style scoped>
    /* Hide specific elements in the Navbar */
    :deep(.nav-link),
    :deep(.find-store),
    :deep(.sign-in),
    :deep(.join-now) {
      visibility: hidden;
    }
  </style>
  