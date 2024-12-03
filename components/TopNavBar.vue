<template>
  <nav class="navigation-bar">
    <ul class="nav-links">
      <li
        v-for="(link, index) in links"
        :key="index"
        :class="{ active: activeLink === link.name }"
        @click="navigate(link.path, link.name)"
      >
        {{ link.name }}
        <span v-if="activeLink === link.name" class="underline"></span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "TopNavBar",
  setup() {
    const router = useRouter(); // Access Vue Router instance

    // Define the navigation links and their paths
    const links = ref([
      { name: "Menu", path: "/menu" },
      { name: "Featured", path: "/featured" },
      { name: "Previous", path: "/previous" },
      { name: "Favorites", path: "/favorites" },
    ]);

    // State for the currently active link
    const activeLink = ref<string>("Menu");

    // Method to navigate to a path and set the active link
    const navigate = (path: string, name: string): void => {
      activeLink.value = name; // Update the active link
      router.push(path); // Redirect to the specified path
    };

    return {
      links,
      activeLink,
      navigate,
    };
  },
});
</script>

<style scoped>
/* Style for the navigation bar */
.navigation-bar {
  background-color: #f4f4f4;
  padding: 15px 25px;
  border-bottom: 1px solid #bbb;
}

/* Style for the navigation links */
.nav-links {
  display: flex;
  gap: 25px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  position: relative;
  padding-bottom: 4px;
}

/* Style for active link */
.nav-links li.active {
  color: black;
}

/* Underline effect for active link */
.nav-links li .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
}
</style>
