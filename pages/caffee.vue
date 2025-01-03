<template>
    <div>
      <!-- Include the Navbar component -->
      <Navbar />
  
      <!-- Page Content -->
      <main>
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb">
          Menu / Hot Coffees / Caffè Americano
        </div>
  
        <!-- Main Content Section -->
        <section class="content">
          <div class="image-container">
            <img src="/static/images/hc.png" alt="Caffè Americano" class="main-image" />
          </div>
          <div class="details">
            <h1>Caffè Americano</h1>
            <p class="calories">15 calories</p>
          </div>
        </section>
  
        <!-- Container for the button, using flexbox to center it -->
        <div class="button-container">
          <!-- Use the button component -->
          <CustomButton @click="goToCustomize" />
        </div>
  
        <!-- Ingredients Section -->
        <div class="ingredients-section">
          <!-- Integrating the Ingr Component -->
          <Ingr 
            highlightedLabel="200★ Stars item"
            description="Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance."
            :tags="[]"
            nutrition="15 calories, 0g sugar, 0g fat ⓘ"
            buttonText="Full nutrition & ingredients list"
          />
        </div>
      </main>
  
      <!-- FooterMenu Component -->
      <footer class="footer-menu-container">
        <FooterMenu />
      </footer>
  
      <!-- Footer Component -->
      <footer class="footer-container">
        <Footer />
      </footer>
  
      <!-- Order Button Section (Placed Above the Store Selector) -->
      <div class="order-button-container">
        <OrderButton />
      </div>
  
      <!-- Store Selector Section (Placed Under the Footer) -->
      <div class="store-selector-section">
        <StoreSelector />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToCustomize = () => {
    router.push('/customize-caffe');
  };
  
  // Import the Navbar component
  import Navbar from '~/components/navbar.vue';
  
  // Import the custom button component
  import CustomButton from '~/components/button.vue';
  
  // Import the OrderButton component
  import OrderButton from '~/components/order_button.vue';
  
  // Import FooterMenu and Footer components
  import FooterMenu from '~/components/FooterMenu.vue';
  import Footer from '~/components/Footer.vue';
  
  // Import the StoreSelector component
  import StoreSelector from '~/components/store_select.vue';
  
  // Import the Ingr component
  import Ingr from '~/components/ingr.vue';
  </script>
  
  <style scoped>
  /* Apply Arial font to all text in the component */
  * {
    font-family: Arial, sans-serif;
  }
  
  /* Add styling for breadcrumb */
  .breadcrumb {
    font-size: 0.9rem;
    color: black;
    margin: 1rem 0;
    text-align: left;
    margin-left: 2rem;
  }
  
  /* Main content styling */
  .content {
    display: flex;
    align-items: center;
    background-color: #003825;
    color: white;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }
  
  /* Image container */
  .image-container {
    flex: 1;
    text-align: center;
  }
  
  .main-image {
    max-width: 200px;
    border-radius: 10px;
  }
  
  /* Details section */
  .details {
    flex: 2;
    margin-left: 2rem;
  }
  
  .details h1 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }
  
  .calories {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: #ccc;
  }
  
  /* Ingredients section styling */
  .ingredients-section {
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  
  /* Button container styling */
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  
  /* Order button container styling (move button slightly to the left) */
  .order-button-container {
    display: flex;
    justify-content: flex-end; /* Align button to the right */
    margin-top: 2rem;
    margin-right: 30px; /* Adds a little space from the right edge */
  }
  
  /* Store selector section styling */
  .store-selector-section {
    margin: 2rem;
  }
  
  /* Footer styling */
  .footer-menu-container {
    margin-top: 2rem;
  }
  
  .footer-container {
    margin-top: 1rem;
  }
  </style>
  