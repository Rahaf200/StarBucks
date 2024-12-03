<template>
  <footer class="footer-menu">
    <div class="footer-section" v-for="section in sections" :key="section.title">
      <h3 class="section-title">{{ section.title }}</h3>
      <ul class="section-links">
        <li v-for="link in section.links" :key="link">
          <a href="#" class="footer-link">{{ link }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

// Define the data for the sections
const sections = reactive([
  {
    title: "About Us",
    links: ["Our Company", "Our Coffee", "About Starbucks", "Starbucks Archive", "Investor Relations", "Customer Service", "Contact Us"]
  },
  {
    title: "Careers",
    links: ["Culture and Values", "Inclusion, Diversity, & Belonging", "College Achievement Plan", "Alumni Community", "U.S. Careers", "International Careers"]
  },
  {
    title: "Social Impact",
    links: ["Communities", "Starbucks Foundation", "Sustainability", "Environmental and Social Impact Reporting"]
  },
  {
    title: "For Business Partners",
    links: ["Landlord Support Center", "Suppliers", "Corporate Gift Card Sales", "Office and Foodservice Coffee"]
  },
  {
    title: "Order and Pick Up",
    links: ["Order on the App", "Order on the Web", "Delivery", "Order and Pick Up Options", "Explore and Find Coffee for Home"]
  }
]);
</script>

<style scoped>
.footer-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background-color: #ffffff; /* Background color set to white */
  font-family: Arial, sans-serif; /* Set font to Arial */
}

.footer-section {
  flex: 1 1 200px;
}

.section-title {
  font-size: 1.4rem; /* Increased font size */
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.section-links {
  list-style: none;
  padding: 0;
}

.footer-link {
  text-decoration: none;
  color: #555;
  display: block;
  margin-bottom: 0.8rem; /* Adjusted spacing between links */
  font-size: 1.1rem; /* Increased font size */
  line-height: 1.8; /* Adjusted line height for better spacing */
}

.footer-link:hover {
  color: #000;
}
</style>
