<template>
  <nav class="navbar">
    <a href="/home">
      <div class="logo">
      <!-- Starbucks logo -->
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
      <button class="sign-in" @click="goToSignIn">Sign in</button>
      <button class="join-now"@click="goToJoin">Join now</button>
     
      
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSignIn = () => {
  router.push('/sign-in');
};

const goToJoin = () => {
  router.push('/join');
};

const goToMenu = () => {
  router.push('/menu');
};

const goToRewards = () => {
  router.push('/rewards');
};

const goToGiftcard = () => {
  router.push('/gift-cards');
};

const goToFindStore = () => {
  router.push('/find-store');
};
</script>

<style scoped>
/* Styling the navigation bar */
.navbar {
  display: flex;
  align-items: center; /* Align items vertically in the center */
  justify-content: flex-start; /* Ensure everything aligns to the left */
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #ddd;
  font-family: Arial, sans-serif; /* Apply Arial font to the entire navbar */
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
  margin-left: 3rem; /* Adds space between the logo and the menu */
}

.nav-link {
  text-decoration: none;
  color: black;
  font-size: 1rem; /* Adjusted font size to make the text smaller */
  font-weight: bold;
  text-transform: uppercase; /* Converts text to uppercase */
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto; /* Push the nav actions (buttons) to the right */
}

.find-store {
  text-decoration: none;
  color: black;
  font-size: 1rem; /* Increased font size */
  font-weight: bolder; /* Made the text bolder */
  margin-right: 2rem; /* Added margin to the right to move it a little left */
}

.sign-in,
.join-now {
  background: none;
  border: 1px solid black;
  color: black;
  padding: 0.7rem 1.5rem; /* Reduced padding */
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem; /* Reduced font size */
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
</style>
