<template>
  <nav class="navbar">
    <a href="/home">
      <div class="logo">
        <img src="/static/images/Starbuckslogo.png" alt="Starbucks Logo" class="logo-image" />
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="/menu" class="nav-link">Menu</a></li>
      <li><a href="/rewards" class="nav-link">Rewards</a></li>
      <li><a href="/gift-cards" class="nav-link">Gift Cards</a></li>
    </ul>

    <div class="nav-actions">
      <a href="/find-store" class="find-store">Find a store</a>

      <!-- Only show these buttons if the user is NOT signed in -->
      <button v-if="!isSignedIn" class="sign-in" @click="goToSignIn">Sign in</button>
      <button v-if="!isSignedIn" class="join-now" @click="goToJoin">Join now</button>

      <!-- Show Welcome message and Sign Out button if signed in -->
      <div v-if="isSignedIn" class="user-info">
        <span class="welcome-message">Welcome, {{ userName }}</span>
        <button class="sign-out" @click="goToSignOut">Sign out</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useUserStore } from '@/src/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

// Check if user is signed in
const isSignedIn = computed(() => userStore.isSignedIn);
const userName = computed(() => `${userStore.user?.firstName} ${userStore.user?.lastName}`);

// Navigation functions
const goToSignIn = () => {
  router.push('/sign-in');
};

const goToJoin = () => {
  router.push('/join');
};

const goToSignOut = () => {
  // Clear user data from store and localStorage
  userStore.setUser({
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
    cartItems: []
  });
  localStorage.removeItem('user'); // Clear user from localStorage
  router.push('/home'); // Redirect to home after signing out
};

// Check if there's a saved session in local storage when the component is mounted
onMounted(() => {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    const parsedUser = JSON.parse(savedUser);
    userStore.setUser({
      uid: parsedUser.uid,
      firstName: parsedUser.firstName,
      lastName: parsedUser.lastName,
      email: parsedUser.email,
      cartItems: parsedUser.cartItems || []
    });
  }
});
</script>


<style scoped>
/* Styling the navigation bar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #ddd;
  font-family: Arial, sans-serif;
}

.logo-image {
  width: 50px;
  height: auto;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin-left: 3rem;
}

.nav-link {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}

.find-store {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: bolder;
  margin-right: 2rem;
}

.sign-in,
.join-now {
  background: none;
  border: 1px solid black;
  color: black;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.join-now {
  background: black;
  color: white;
  border: none;
}

.sign-in:hover,
.join-now:hover {
  opacity: 0.8;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.welcome-message {
  font-size: 1rem;
  font-weight: bold;
}
</style>
