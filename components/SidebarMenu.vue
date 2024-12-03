<template>
  <div class="sidebar-menu">
    <ul>
      <li v-for="(category, index) in menuItems" :key="index">
        <h3>{{ category.title }}</h3>
        <ul>
          <li v-for="(item, itemIndex) in category.items" :key="itemIndex">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SidebarMenu",
  setup() {
    // Define the sidebar menu items using TypeScript
    const menuItems = ref<Array<{ title: string; items: string[] }>>([
      {
        title: "Drinks",
        items: [
          "Hot Coffees",
          "Cold Coffees",
          "Starbucks Refreshers® Beverages",
          "Frappuccino® Blended Beverages",
          "Iced Tea & Lemonade",
          "Hot Teas",
          "Iced Energy",
          "Milk, Juice & More",
          "Bottled Beverages",
        ],
      },
      {
        title: "Food",
        items: [
          "Hot Breakfast",
          "Oatmeal & Yogurt",
          "Bakery",
          "Lunch",
          "Snacks & Sweets",
        ],
      },
      {
        title: "At Home Coffee",
        items: ["Whole Bean", "Ground", "VIA® Instant"],
      },
      {
        title: "Merchandise",
        items: ["Cold Cups", "Tumblers", "Mugs", "Other"],
      },
    ]);

    return {
      menuItems,
    };
  },
});
</script>

<style scoped>
.sidebar-menu {
  font-family: Arial, sans-serif;
  font-size: 16px; /* Increased main font size */
  padding: 12px; /* Slightly larger padding */
  width: 180px; /* Increased width for larger text */
  background-color: #ffffff;
  border-right: 1px solid #ddd;
}

/* Styling for category titles (Drinks, Food, At Home Coffee, Merchandise) */
.sidebar-menu h3 {
  font-size: 18px; /* Increased font size for headings */
  font-weight: bold;
  margin-bottom: 12px; /* Increased margin for spacing */
  color: #000; /* Black for main headings */
}

/* Styling for all sub-items under each category */
.sidebar-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  margin-bottom: 8px; /* Slightly increased spacing between items */
  line-height: 1.6; /* Increased line height for readability */
  cursor: pointer;
}

/* Sub-list items will have a light black color */
.sidebar-menu li li {
  font-size: 14px; /* Increased font size for sub-items */
  color: #555; /* Light black for sub-items */
}

.sidebar-menu li li:hover {
  color: #00754a; /* Starbucks-inspired green on hover */
}
</style>
