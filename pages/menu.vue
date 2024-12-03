<template>
  <div class="menu-page">
    <!-- Top section: Navbar and TopNavBar -->
    <div class="top-nav-section">
      <!-- Use the imported Navbar component -->
      <Navbar
        logoSrc="/static/images/Starbuckslogo.png"
        logoAlt="Starbucks Logo"
        :navLinks="[ 
          { text: 'Menu', href: '/menu' },
          { text: 'Rewards', href: '/rewards' },
          { text: 'Gift Cards', href: '/gift-cards' }
        ]"
        findStoreHref="/find-store"
        :showSignIn="true"
        :showJoinNow="true"
      />

      <!-- Add the TopNavBar component below the Navbar -->
      <TopNavBar />
    </div>

    <!-- Bottom section: Sidebar and Main Content -->
    <div class="bottom-section">
      <!-- Use the SidebarMenu component on the left side -->
      <div class="sidebar-container">
        <SidebarMenu />
      </div>

      <!-- Main content area -->
      <div class="main-content">
        <h1>Menu</h1>

        <!-- Reusing Food component for "Drinks" -->
        <Food 
          heading="Drinks" 
          :column1="drinksColumn1" 
          :column2="drinksColumn2" 
        />

        <!-- Reusing Food component for "Food" -->
        <Food 
          heading="Food" 
          :column1="foodColumn1" 
          :column2="foodColumn2" 
        />

        <!-- Reusing Food component for "At Home Coffee" -->
        <Food 
          heading="At Home Coffee" 
          :column1="atHomeCoffeeColumn1" 
          :column2="atHomeCoffeeColumn2" 
        />

        <!-- Reusing Food component for "Merchandise" -->
        <Food 
          heading="Merchandise" 
          :column1="merchandiseColumn1" 
          :column2="merchandiseColumn2" 
        />
      </div>
    </div>

    <!-- Footer Section -->
    <div class="footer-section">
      <!-- Include FooterMenu -->
      <FooterMenu />

      <!-- Include Footer -->
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/navbar.vue';
import TopNavBar from '@/components/TopNavBar.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import Food from '@/components/Food.vue';
import FooterMenu from '@/components/FooterMenu.vue'; // Import FooterMenu
import Footer from '@/components/Footer.vue'; // Import Footer

// Define the data for the "Food" section
const foodColumn1 = [
  { name: "Hot Breakfast", imagePath: "/static/images/hotbreakfast.png" },
  { name: "Bakery", imagePath: "/static/images/Bakery.png" },
  { name: "Snacks & Sweets", imagePath: "/static/images/Snacks.png" },
];

const foodColumn2 = [
  { name: "Oatmeal & Yogurt", imagePath: "/static/images/oatmeal.png" },
  { name: "Lunch", imagePath: "/static/images/lunch.png" },
];

// Define the data for the "Drinks" section
const drinksColumn1 = [
  { name: "Hot Coffees", imagePath: "/static/images/HotDrink.png" },
  { name: "Starbucks Refreshers® Beverages", imagePath: "/static/images/Refreshers.png" },
  { name: "Iced Tea & Lemonade", imagePath: "/static/images/IcedTea.png" },
  { name: "Iced Energy", imagePath: "/static/images/IcedEnergy.png" },
  { name: "Bottled Beverages", imagePath: "/static/images/BottledBeverages.png" },
];

const drinksColumn2 = [
  { name: "Cold Coffees", imagePath: "/static/images/coldcoffee.png" },
  { name: "Frappuccino® Blended Beverages", imagePath: "/static/images/Frappuccino.png" },
  { name: "Hot Teas", imagePath: "/static/images/HotTeas.png" },
  { name: "Milk, Juice & More", imagePath: "/static/images/Milk.png" },
];

// Define the data for the "At Home Coffee" section
const atHomeCoffeeColumn1 = [
  { name: "Whole Bean", imagePath: "/static/images/WholeBean.png" },
  { name: "VIA® Instant", imagePath: "/static/images/VIA.png" },
];

const atHomeCoffeeColumn2 = [
  { name: "Ground", imagePath: "/static/images/Ground.png" },
];

// Define the data for the "Merchandise" section
const merchandiseColumn1 = [
  { name: "Cold Cups", imagePath: "/static/images/ColdCups.png" },
  { name: "Mugs", imagePath: "/static/images/Mugs.png" },
];

const merchandiseColumn2 = [
  { name: "Tumblers", imagePath: "/static/images/Tumblers.png" },
  { name: "Other", imagePath: "/static/images/Other.png" },
];
</script>

<style scoped>
.menu-page {
  display: flex; /* Align the top and bottom sections vertically */
  flex-direction: column; /* Stack top and bottom sections */
  font-family: Arial, sans-serif;
}

/* Top section styling */
.top-nav-section {
  flex-shrink: 0; /* Prevent this section from shrinking */
}

/* Bottom section: Sidebar + Main content */
.bottom-section {
  display: flex; /* Side-by-side layout for sidebar and main content */
  padding: 20px;
}

.sidebar-container {
  width: 250px; /* Sidebar width */
  margin-right: 20px; /* Space between sidebar and content */
}

.main-content {
  flex-grow: 1; /* Take up the remaining space */
  padding: 2rem;
}

.footer-section {
  background-color: #f8f8f8; /* Light gray background for footer */
  padding: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #e0e0e0; /* Very light line above the footer */
}

@media (max-width: 768px) {
  .bottom-section {
    flex-direction: column; /* Stack sidebar and main content vertically on smaller screens */
  }

  .sidebar-container {
    width: 100%; /* Sidebar takes full width on mobile */
    margin-right: 0; /* Remove right margin */
  }

  .main-content {
    width: 100%; /* Main content takes full width */
  }
}
</style>
