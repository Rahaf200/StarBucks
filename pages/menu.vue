<template>
  <div class="menu-page">
    <!-- Top section: Navbar and TopNavBar -->
    <div class="top-nav-section">
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
      <TopNavBar />
    </div>

    <!-- Bottom section: Sidebar and Main Content -->
    <div class="bottom-section">
      <!-- Sidebar -->
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

    <!-- Sticky StoreSelect at the bottom -->
    <div class="store-select-container">
      <StoreSelect />
    </div>

    <!-- Footer Section -->
    <div class="footer-section">
      <FooterMenu />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/navbar.vue';
import TopNavBar from '@/components/TopNavBar.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import Food from '@/components/Food.vue';
import FooterMenu from '@/components/FooterMenu.vue'; 
import Footer from '@/components/Footer.vue';
import StoreSelect from '@/components/store_select.vue'; // Import StoreSelect component

// Define the data for the "Food" section
const foodColumn1 = [
  { name: "Hot Breakfast", imagePath: "/static/images/hotbreakfast.png", url: "/egg" },
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
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

/* Make sure the bottom section grows to fit content */
.bottom-section {
  display: flex;
  flex-grow: 1; /* Take up remaining space */
  padding: 20px;
}

.sidebar-container {
  width: 250px;
  margin-right: 20px;
}

.main-content {
  flex-grow: 1;
  padding: 2rem;
}

/* Sticky StoreSelect at the bottom of the page */
.store-select-container {
  position: fixed; /* Fixed at the bottom of the page */
  bottom: 0;
  left: 0;
  width: 100%; /* Full screen width */
  background-color: white; /* Optional: Add background to prevent overlap */
  padding: 1rem; /* Padding for the component */
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1); /* Shadow on top for depth */
  z-index: 10; /* Ensure it's above other content */
}

/* Footer Section */
.footer-section {
  background-color: #f8f8f8;
  padding: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

@media (max-width: 768px) {
  .bottom-section {
    flex-direction: column;
  }

  .sidebar-container {
    width: 100%;
    margin-right: 0;
  }

  .main-content {
    width: 100%;
  }
}
</style>
