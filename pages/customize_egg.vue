<template>
  <div>
    <!-- Include the Navbar component -->
    <Navbar />

    <!-- Page Content -->
    <main>
      <!-- Breadcrumb Navigation -->
      <div class="breadcrumb">
        {{ breadcrumbText }}
      </div>

      <!-- Main Content Section -->
      <section class="content">
        <div class="image-container">
          <img :src="product.image" alt="Sandwich Image" class="main-image" />
        </div>
        <div class="details">
          <h1>{{ product.name }}</h1>
          <p class="calories">{{ product.servingSize }}</p>
        </div>
      </section>

      <!-- Customize Component -->
      <div class="customize-section">
        <Customize /> <!-- Add the Customize component here -->
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
import { ref, onMounted } from 'vue';

// Import FirestoreService and create an instance for products
import FirestoreService from '~/src/firestore';
const productService = new FirestoreService<Product>('products'); // Adjust collection name

// Import the Navbar component
import Navbar from '~/components/navbar.vue';

// Import the custom button component
import Button from '~/components/button.vue';

// Import the OrderButton component (this is the new import)
import OrderButton from '~/components/order_button.vue';

// Import the Customize component for sandwich customization
import Customize from '~/components/customize.vue';

// Import FooterMenu and Footer components
import FooterMenu from '~/components/FooterMenu.vue';
import Footer from '~/components/Footer.vue';

// Import the StoreSelector component
import StoreSelector from '~/components/store_select.vue';

// Define the product interface
interface Product {
  id?: string;
  name: string;
  image: string;
  servingSize: string;
}

// Reactive data
const product = ref<Product>({
  name: '',
  image: '/static/images/placeholder.png',
  servingSize: 'Loading...',
});
const breadcrumbText = ref('Menu / Hot Breakfast / Loading...');
const error = ref<string | null>(null);

// Fetch product data on component mount
onMounted(async () => {
  try {
    const productId = 'sampleProductId'; // Replace with actual logic to get product ID
    const fetchedProduct = await productService.getById(productId);
    if (fetchedProduct) {
      product.value = fetchedProduct;
      breadcrumbText.value = `Menu / Hot Breakfast / ${fetchedProduct.name}`;
    } else {
      error.value = 'Product not found.';
    }
  } catch (err: any) {
    error.value = err.message || 'Failed to load product.';
  }
});
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

/* Customize section styling (move slightly more to the left) */
.customize-section {
  margin-top: 2rem;
  margin-left: -15rem; /* Move further left */
  margin-right: 1rem;
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
