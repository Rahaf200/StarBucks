<template>
  <div>
    <!-- Navbar at the top -->
    <Navbar />

    <!-- Content for the GiftCardPage -->
    <main class="giftcard-content">
      <div class="giftcard-header">
        <h1 class="giftcard-title">Gift cards</h1>
        <div class="see-all-container">
          <button class="see-all-text">See all</button>
          <button class="chevron-icon-button">
            <span class="chevron-icon">&#8250;</span>
          </button>
        </div>
      </div>

      <!-- GiftCardsGallery Component (First one) -->
      <GiftCardsGallery 
        title="Featured" 
        :customGiftCards="featuredCards" 
      />

      <!-- Effortlessly Banner Section -->
      <div class="effortlessly-banner">
        <img
          class="banner-icon"
          src="/static/images/Effortlessly.png" <!-- Updated path -->
        >
        <span class="banner-text">
          <strong> Effortlessly </strong> send up to 10 eGifts per purchase. Select a design to start!
        </span>
      </div>

      <!-- New Gift Card Section (Second Line to Far Right) -->
      <div class="gift-card-balance">
        <div class="gift-card-text-container">
          <span class="gift-card-text">Received a gift card?</span>
          <span class="earn-stars">Earns 2<span class="star-icon">★</span> per $1</span>
          <div class="button-container">
            <button class="add-reload-button">Add or Reload</button>
            <button class="check-balance-button">Check balance</button>
          </div>
        </div>
        <!-- Second line moved to the far right -->
        <a href="#" class="card-terms-link">Card Terms & Conditions</a>
      </div>

      <!-- Original GiftCardsGallery Component (Second one) -->
      <GiftCardsGallery 
        title="Red Cup" 
      />

    </main>

    <!-- Business Gifting Section -->
    <div class="business-gifting-section">
      <div class="business-gifting-content">
        <div class="business-image-container">
          <img
            src="/static/images/Business.png"
            alt="Business gifting"
            class="business-image"
          />
        </div>
        <div class="business-text-container">
          <h2 class="business-title">Business gifting — simplified</h2>
          <p class="business-description">
        
          </p>
          <button class="shop-now-button">
            Shop now
            <span class="arrow-icon">↗</span>
          </button>
        </div>
      </div>
    </div>

    <!-- FooterMenu Component (Keeps its original position) -->
    <FooterMenu />

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/navbar.vue'; // Adjust path if needed
import GiftCardsGallery from '../components/GiftCardsGallery.vue'; // Import the GiftCardsGallery component
import Footer from '../components/Footer.vue'; // Import the Footer component
import FooterMenu from '../components/FooterMenu.vue'; // Import the FooterMenu component

// Define custom gift card data with new images
const featuredCards = [
  {
    image: "/static/images/cake.png", // Image for cake card
    alt: "Cake Card",
  },
  {
    image: "/static/images/girl.png", // Image for girl card
    alt: "Girl Card",
  },
  {
    image: "/static/images/yellow.png", // Image for yellow card
    alt: "Yellow Card",
  },
  {
    image: "/static/images/eGift.png", // Image for eGift card
    alt: "eGift Card",
  },
  {
    image: "/static/images/defy.png", // New image for "Defy" card
    alt: "Defy Card",
  },
  {
    image: "/static/images/green.png", // New image for "Green" card
    alt: "Green Card",
  },
];
</script>

<style scoped>
/* Add styles for GiftCardPage */
.giftcard-content {
  margin-top: 5rem; /* Add space below the Navbar */
  font-family: Arial, sans-serif;
}

/* Effortlessly banner styles */
.effortlessly-banner {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f4f4f4; /* Light background for the banner */
  border: 1px solid #e0e0e0; /* Subtle border */
  margin: 1rem 2rem; /* Add spacing around */
  border-radius: 8px; /* Rounded corners */
}

.banner-icon {
  height: 2.5rem; /* Set icon size */
  margin-right: 1rem; /* Add spacing between icon and text */
}

.banner-text {
  font-size: 1rem; /* Text size */
  color: #333; /* Dark text color */
}

.banner-text strong {
  color: #006241; /* Starbucks green for "Effortlessly" */
}

/* Header styles for the title and button */
.giftcard-header {
  display: flex;
  justify-content: space-between; /* Align title and button on opposite sides */
  align-items: flex-start; /* Align items to the top */
  margin: 0 2rem; /* Add horizontal margins */
  position: relative; /* Set position for button placement */
}

/* Style the h1 text */
.giftcard-title {
  font-size: 3rem; /* Increase the font size */
  font-weight: bold; /* Make the text bold */
}

/* Container for the "See all" and Chevron buttons */
.see-all-container {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  align-items: center; /* Center items horizontally */
  position: absolute; /* Position the container */
  right: 0; /* Align to the right */
  bottom: -6rem; /* Move the container down */
  gap: 0.5rem; /* Add space between the buttons */
}

/* Styles for the "See all" text button */
.see-all-text {
  background-color: transparent; /* No background */
  border: none; /* No border */
  color: #006241; /* Starbucks green color */
  font-size: 1rem; /* Font size for the button */
  font-weight: bold; /* Make the text bold */
  cursor: pointer; /* Change cursor to pointer */
}

.see-all-text:hover {
  text-decoration: underline; /* Underline on hover */
}

/* Chevron button styles */
.chevron-icon-button {
  background-color: white; /* Background color for the circle */
  border: none; /* Remove border */
  width: 3rem; /* Double the original width */
  height: 3rem; /* Double the original height */
  border-radius: 50%; /* Circle shape */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); /* Adjust shadow for larger circle */
  cursor: pointer; /* Change cursor to pointer */
}

/* Chevron icon inside the circle */
.chevron-icon {
  color: black; /* Chevron icon color set to black */
  font-size: 1.5rem; /* Increase the Chevron icon size */
}

/* New Gift Card Section Styles */
.gift-card-balance {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Left-align all items */
  background-color: #e3f3e5;
  padding: 2rem;
  margin: 2rem;
  border-radius: 8px;
  border: 1px solid #d0e6d5;
}

.gift-card-text-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center; /* Vertically align buttons with text */
  gap: 1rem; /* Add spacing between items */
}

.gift-card-text {
  font-size: 1.5rem; /* Increased font size for emphasis */
  font-weight: bold;
  color: #000;
}

.earn-stars {
  font-size: 1rem; /* Smaller size for subtitle */
  color: #333;
}

.star-icon {
  color: gold;
  font-size: 1.1rem;
}

.button-container {
  display: flex;
  gap: 1rem;
}

.add-reload-button,
.check-balance-button {
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-reload-button {
  background-color: #006241;
  color: white;
}

.check-balance-button {
  background-color: black;
  color: white;
}

/* Move "Card Terms & Conditions" to the far right */
.card-terms-link {
  align-self: flex-end;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #006241;
  text-decoration: underline;
  cursor: pointer;
  margin-left: auto; /* Push to the far right */
}

/* Styles for the Business Gifting Section */
.business-gifting-section {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: #f9f9f9;
}

.business-gifting-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
}

.business-image-container {
  flex: 1;
}

.business-image {
  width: 100%;
  height: auto;
}

.business-text-container {
  flex: 1;
  padding: 2rem;
  text-align: left;
}

.business-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.business-description {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.shop-now-button {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  background-color: #006241;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.shop-now-button:hover {
  background-color: #004f34;
}
</style>
