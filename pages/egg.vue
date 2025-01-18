<template>
  <div>
    <!-- Include the Navbar component -->
    <Navbar />
  
    <!-- Page Content -->
    <main>
      <!-- Breadcrumb Navigation -->
      <div class="breadcrumb">
        Menu / Hot Breakfast / Egg, Pesto & Mozzarella Sandwich
      </div>
  
      <!-- Main Content Section -->
      <section class="content">
        <div class="image-container">
          <img src="/static/images/HotBreakfast.png" alt="Egg, Pesto & Mozzarella Sandwich" class="main-image" />
        </div>
        <div class="details">
          <h1>Egg, Pesto & Mozzarella Sandwich</h1>
          <p class="calories">390 calories</p>
        </div>
      </section>

      <!-- Container for the Customize Button -->
      <div class="button-container">
        <CustomizeButton />
      </div>

      <!-- Ingredients Section -->
      <div class="ingredients-section">
        <Ingr />
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

    <!-- Add to Order button (this is the one that adds to cart) -->
    <div class="order-button-container">
      <OrderButton @add-to-order="addToCart" />
    </div>
  
    <!-- Available Location with Icon -->
    <div class="location-info">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
      <span>Available at Oasis Travel Center</span>
    </div>

    <!-- Store Selector Section (Placed Under the Footer) -->
    <div class="store-selector-section">
      <StoreSelector />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/src/user'; // To access the user and cart data
import { useCartStore } from '@/src/cart'; // To access and modify the cart
import { useFirestore } from '@/src/firestore'; // Firestore functions

import Navbar from '~/components/navbar.vue';
import OrderButton from '~/components/order_button.vue';
import Ingr from '~/components/ingr.vue';
import FooterMenu from '~/components/FooterMenu.vue';
import Footer from '~/components/Footer.vue';
import StoreSelector from '~/components/store_select.vue';
import CustomizeButton from '~/components/button.vue'; // Import the CustomizeButton component
import { doc, setDoc } from 'firebase/firestore';
import { db } from '~/src/firebase';

// Product details
const product = ref({
  name: 'Egg, Pesto & Mozzarella Sandwich',
  image: '/static/images/HotBreakfast.png',
  servingSize: '1 sandwich',
  price: 5.25, // Example price
  short_description: 'A tasty sandwich with egg, pesto, and mozzarella.', // Example description
  full_description: 'A delicious sandwich filled with eggs, pesto, mozzarella, and served on fresh bread.',
  productName: 'Egg, Pesto & Mozzarella Sandwich',
  totalPrice: 5.25, // Total price of the item (you could modify this if you want to calculate based on quantity)
  id: 1, // Add a numeric ID or use a generated unique number
});

// Accessing the user and cart stores
const userStore = useUserStore();
const cartStore = useCartStore();
const firestore = useFirestore(); // Get the Firestore functions

// Add to Cart function
const addToCart = async () => {
  try {
    const cartItem = {
      id: product.value.id, // Ensure the id is a number
      name: product.value.name,
      image: product.value.image,
      servingSize: product.value.servingSize,
      price: product.value.price,
      quantity: 1,
      short_description: product.value.short_description,
      full_description: product.value.full_description,
      productName: product.value.productName,
      totalPrice: product.value.totalPrice,
    };

    // Check if the product already exists in the cart
    const existingProduct = cartStore.cartItems.find(item => item.id === cartItem.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if already in the cart
      existingProduct.totalPrice = existingProduct.price * existingProduct.quantity; // Update total price
    } else {
      cartStore.cartItems.push(cartItem); // Add new product to the cart
    }

      // Update user store with the new cart
     if (userStore.user) {
      const updatedUser = {
        ...userStore.user, // Spread the existing user data
        cartItems: cartStore.cartItems, // Update the cartItems with the latest data
      };


     // Ensure all required fields are defined before calling setUser
     if (updatedUser.uid && updatedUser.firstName && updatedUser.lastName && updatedUser.email) {
        userStore.setUser(updatedUser);
      } else {
        console.error('User data is incomplete.');
      }
    }
    
    // Save the updated cart to Firestore
    if (userStore.user?.uid) {
      const userDocRef = doc(db, 'users', userStore.user.uid);
      await setDoc(userDocRef, { cart: cartStore.cartItems }, { merge: true }); // Update cart in Firestore
      console.log('Cart saved to Firestore.');
    }

    alert(product.value.name + ' has been added to your cart!');
  } catch (err) {
    console.error("Failed to add to cart:", err);
    alert("Failed to add to cart. Please try again.");
  }
};
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

/* Location information styling */
.location-info {
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 1rem;
  color: black;
  margin-left: 2rem;
}

.location-info svg {
  margin-right: 0.5rem;
  fill: black;
}

.location-info span {
  font-size: 1rem;
  color: black;
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

/* Order button container styling (move button slightly to the right) */
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