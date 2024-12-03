<template>
  <div>
    <!-- Import and use the Navbar component -->
    <Navbar />
    
    <!-- SignInPage content -->
    <div class="sign-in-content">
      <!-- Use the SignInForm component -->
      <SignInForm />

      <!-- Additional Content -->
      <div class="rewards-info">
        <!-- Line 1 -->
        <h1 class="headline">Join Starbucks® Rewards</h1>
        
        <!-- Line 2 -->
        <p class="line">Join Starbucks® Rewards to earn free</p>
        <!-- Line 3 -->
        <p class="line">food and drinks, get free refills, pay</p>
        <!-- Line 4 -->
        <p class="line">and order with your phone, and more.</p>
        
        <!-- Button -->
        <button class="join-now-btn">Join now</button>
      </div>
    </div>
    
    <!-- Section with thin lines for Footer Menu -->
    <div class="footer-menu-section">
      <hr class="thin-line" />
      <FooterMenu />
      <hr class="thin-line" />
    </div>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar.vue'; // Adjust the path based on your project structure
import SignInForm from '@/components/SignInForm.vue'; // Adjust the path based on your project structure
import FooterMenu from '@/components/FooterMenu.vue'; // Adjust the path based on your project structure
import Footer from '@/components/Footer.vue'; // Adjust the path based on your project structure
</script>

<style scoped>
/* SignInPage specific styles */
.sign-in-content {
  padding: 2rem;
  font-family: Arial, sans-serif; /* Set the font family for the content */
}

/* Styling for rewards info section */
.rewards-info {
  margin-top: 5rem; /* Leave 5 lines of space before the content */
  text-align: center; /* Center-align the text */
}

/* Headline styling (Line 1) */
.headline {
  color: green;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3rem; /* Leave 3 lines of space after this */
  font-size: 1.4rem; /* Further reduced font size for the headline */
}

/* Styling for black text (Lines 2, 3, 4) */
.line {
  color: black;
  font-weight: normal; /* Remove boldness */
  margin: 0; /* No extra spacing between lines 2, 3, and 4 */
  font-size: 0.95rem; /* Further reduced font size for better balance */
}

/* Button styling (Line 5) */
.join-now-btn {
  margin-top: 3rem; /* Leave 3 lines of space above the button */
  padding: 0.7rem 2rem;
  border: 2px solid green;
  background-color: white;
  color: green;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
}

.join-now-btn:hover {
  background-color: green; /* Change background on hover */
  color: white; /* Change text color on hover */
  opacity: 0.9; /* Slight hover effect */
}

/* Styling for FooterMenu section with thin lines */
.footer-menu-section {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.thin-line {
  border: none;
  border-top: 1px solid #ccc; /* Light gray thin line */
  margin: 0; /* Remove extra spacing */
}

/* Hide specific elements in the Navbar */
:deep(.nav-link),
:deep(.find-store),
:deep(.sign-in),
:deep(.join-now) {
  visibility: hidden;
}

/* Footer Menu specific styles */
footer {
  margin-top: 5rem;
}
</style>
