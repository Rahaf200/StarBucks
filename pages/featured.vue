<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />
    
    <!-- Page Content -->
    <h1>The cheer is here</h1>
    
    <!-- First NiceListCard Component with Updated Content -->
    <NiceListCard
      title="Let’s celebrate the season, together"
      description="Your festive faves, like the Peppermint Mocha, are back. Perfect for a little holiday magic that’s delicious hot, iced or blended."
      imageSrc="/static/images/celebrate.png"
      bgColor="#06ce8d" 
    />
    
    <!-- Second NiceListCard Component with Updated Content -->
    <NiceListCard
      title="New Cran-Merry Orange Refreshers"
      description="Festive flavors of sweet orange, tart cranberry and warm spice are shaken with real pieces of cranberry—enjoyed alone or with lemonade or coconutmilk."
      imageSrc="/static/images/Cran.png"  
      bgColor="#06ce8d"  
    />
    
    <!-- FooterMenu Component -->
    <FooterMenu />

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
  // Import the Navbar, NiceListCard, FooterMenu, and Footer components
  import Navbar from '@/components/navbar.vue';
  import NiceListCard from '@/components/NiceListCard.vue';
  import FooterMenu from '@/components/FooterMenu.vue'; // Import FooterMenu component
  import Footer from '@/components/Footer.vue'; // Import Footer component
</script>

<style scoped>
/* Add your styles for the FeaturedPage here */
h1 {
  color: #003300; /* Even darker green color */
  font-size: 4.5rem; /* Smaller font size */
  font-family: Arial, sans-serif; /* Set font to Arial */
  text-align: center; /* Center the text horizontally */
  margin-top: 50px; /* Optional: Add top margin to position it nicely */
}

/* Add border above and below the FooterMenu */
.footer-menu {
  border-top: 1px solid #ddd; /* Light gray thin border on top */
  border-bottom: 1px solid #ddd; /* Light gray thin border on bottom */
}
</style>
