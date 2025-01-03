<template>
  <div class="cart-page">
    <!-- ReviewOrder component where cartItems are passed as a prop -->
    <review-order class="review-order" :cart-items="cartItems" />

    <!-- NextOrder component -->
    <next-order class="next-order" />
  </div>

  <!-- Footer components -->
  <footer-menu />
  <footer-component />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuthStore } from '@/src/auth'; // Get the user ID from the auth store
import CartService from '@/src/cart'; // Import CartService for cart management
import { db } from '@/src/firebase'; // Firebase setup
import { collection, query, where, onSnapshot } from 'firebase/firestore'; // Firestore query

import ReviewOrder from '@/components/revieworder.vue'; // ReviewOrder component
import NextOrder from '@/components/nextorder.vue'; // NextOrder component
import FooterComponent from '@/components/Footer.vue'; // Footer component
import FooterMenu from '@/components/FooterMenu.vue'; // FooterMenu component

// State to store cart items
const cartItems = ref<any[]>([]);

// Auth store to retrieve the user ID
const userStore = useAuthStore();
const userId = userStore.userId;

// Fetch cart items and listen for real-time updates
const fetchCartItems = () => {
  if (!userId) return;

  // Firestore reference to the user's cart collection
  const cartRef = collection(db, "cart");
  const cartQuery = query(cartRef, where("userId", "==", userId));

  // Real-time Firestore listener
  const unsubscribe = onSnapshot(cartQuery, (snapshot) => {
    const items: any[] = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    cartItems.value = items;
  });

  // Clean up the listener on component unmount
  onUnmounted(() => {
    unsubscribe();
  });
};

// Fetch the cart items when the component is mounted
onMounted(() => {
  fetchCartItems();
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
</style>
