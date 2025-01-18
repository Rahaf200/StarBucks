<template>
  <div class="cart-page">
    <!-- ReviewOrder component where cartItems are passed as a prop -->
    <review-order class="review-order" :cartitems="cartItems" />

    <!-- NextOrder component -->
    <next-order class="next-order" />

    <!-- Loading indicator -->
    <div v-if="loading" class="loading-spinner">
      Loading your cart...
    </div>


    <!-- Error message -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>


  <!-- Footer components -->
  <footer-menu />
  <footer-component />
</template>


<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import { useUserStore } from '@/src/user'; // User store to access user and cartItems
import { useCartStore } from '@/src/cart'; // Cart store for cart management
import { useFirestore } from '@/src/firestore'; // Firestore functions

import ReviewOrder from '@/components/revieworder.vue'; // ReviewOrder component
import NextOrder from '@/components/nextorder.vue'; // NextOrder component
import FooterComponent from '@/components/Footer.vue'; // Footer component
import FooterMenu from '@/components/FooterMenu.vue'; // FooterMenu component
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '~/src/firebase';

// Access the user and cart stores
const userStore = useUserStore();
const cartStore = useCartStore();
const firestore = useFirestore(); // Get the Firestore functions

// Reactive cart items derived from the cart store
const cartItems = computed(() => cartStore.cartItems || []); // Use cartStore directly for reactivity

// Loading and error state
const loading = ref(false);
const error = ref<string | null>(null);

// Sync cart items with Firestore and local store on mount
onMounted(async () => {
  if (userStore.user?.email) {
    loading.value = true;
    error.value = null;
    try {
      const userCart = await firestore.getUserCartFromFirestore(userStore.user.email);
      cartStore.cartItems = userCart || []; // Populate the cart store
      console.log('Cart loaded from Firestore:', userCart);

    } catch (err) {
      error.value = 'Failed to load your cart. Please try again later.';
      console.error('Error fetching cart items:', err);
    } finally {
      loading.value = false;
    }
  } else {
    // Clear the cart if no user is logged in
    cartStore.cartItems = [];
  }
});

// Watch cartItems, and save to Firestore when they change
watch(cartItems, async (newCartItems, oldCartItems) => {
  if (userStore.user?.email) {
    try {
      // Only update Firestore if the cart has changed
      if (JSON.stringify(newCartItems) !== JSON.stringify(oldCartItems)) {
        await firestore.saveUserCartToFirestore(newCartItems);
        console.log('Cart saved to Firestore for user:', userStore.user.email);
      }
    } catch (err) {
      error.value = 'Failed to save your cart. Please try again.';
      console.error('Error saving cart to Firestore:', err);
    }
  }
});


// Function to update Firestore with the latest cart state
const updateCartInFirestore = async () => {
  if (userStore.user?.uid) {
    try {
      const userDocRef = doc(db, 'users', userStore.user.uid);
      await setDoc(userDocRef, { cart: cartStore.cartItems }, { merge: true }); // Only update the cart field
      console.log('Cart updated in Firestore for user:', userStore.user.email);
    } catch (err) {
      console.error('Error updating cart in Firestore:', err);
      error.value = 'Failed to update your cart. Please try again.';
    }
  }
};

watch(cartItems, async (newCartItems, oldCartItems) => {
  if (userStore.user && userStore.user.email) {
    if (JSON.stringify(newCartItems) !== JSON.stringify(oldCartItems)) {
      await firestore.saveUserCartToFirestore(newCartItems);
      console.log('Cart saved to Firestore for user:', userStore.user.email);
    }
  } else {
    console.warn('User is not logged in. Skipping Firestore update.');
  }
});


</script> 

<style scoped>
.cart-page {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f8f8f8;
  min-height: 100vh;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
}


.review-order {
  flex: 1;
  max-width: 50%;
}


.next-order {
  flex: 1;
  max-width: 50%;
}


.loading-spinner {
  text-align: center;
  font-size: 1.2em;
  color: #666;
  margin-top: 20px;
}


.error-message {
  text-align: center;
  font-size: 1em;
  color: red;
  margin-top: 10px;
}
</style> 