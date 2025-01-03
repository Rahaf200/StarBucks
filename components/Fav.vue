<template>
  <div class="favorites-section">
    <!-- Top Section -->
    <div class="top-section">
      <h2>Get your favorites for free</h2>
      <div class="stars-container">
        <button
          v-for="(star, index) in starTiers"
          :key="index"
          @click="selectTier(index)"
          :class="{ active: selectedTier === index }"
        >
          {{ star }}★
        </button>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="bottom-section">
      <img :src="imagePath" alt="Drink" />
      <div class="description">
        <!-- Conditionally Render Title and Text Based on Selected Tier -->
        <h3 :class="{ boldBlack: selectedTier === 3 || selectedTier === 4 }">
          <span v-if="selectedTier === 4">
            Select Starbucks®<br />merchandise
          </span>
          <span v-else-if="selectedTier === 3">
            Sandwich, protein box<br />or at-home coffee
          </span>
          <span v-else-if="selectedTier === 2">
            Handcrafted drink<br />(Cold Brew, lattes and more)<br />or hot breakfast
          </span>
          <span v-else-if="selectedTier === 1">
            Brewed hot or iced coffee<br />or tea, bakery item,<br />packaged snack and more
          </span>
          <span v-else>
            Brewed hot or iced coffee<br />or tea, bakery item,<br />packaged snack<br />and more
          </span>
        </h3>
        <p>
          <!-- Conditional text rendering based on selectedTier -->
          <span v-if="selectedTier === 4">
            Take home a signature cup,<br />
            drink tumbler or your choice<br />
            of coffee merch up to $20.
          </span>
          <span v-else-if="selectedTier === 3">
            Enjoy a PM pick-me-up<br />
            with a lunch sandwich,<br />
            protein box or a bag of<br />
            coffee—including Starbucks VIA Instant®.
          </span>
          <span v-else-if="selectedTier === 2">
            Turn good mornings great<br />
            with a delicious handcrafted<br />
            drink of your choice,<br />
            breakfast sandwich or oatmeal<br />
            on us.
          </span>
          <!-- Added the new text here and split it into three lines -->
          <span v-else-if="selectedTier === 1">
            Treat yourself to an iced<br />
            coffee, buttery croissant,<br />
            bag of chips and more.
          </span>
          <!-- For default case, split into three lines -->
          <span v-if="selectedTier === 0">
            Make your drink just right<br />
            with an extra espresso shot<br />
            or a dash of your favorite syrup.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FavoritesSection",
  setup() {
    // Reactive properties
    const starTiers = ref([25, 100, 200, 300, 400]); // Star tiers
    const selectedTier = ref(0); // Default selected tier

    // Set the initial image path using a relative path from the public folder
    const imagePath = ref(
      "/static/images/25.png"
    );

    // Function to handle star tier selection
    const selectTier = (index: number): void => {
      selectedTier.value = index;

      // Dynamically update the image path based on the selected star tier
      imagePath.value = `/static/images/${starTiers.value[index]}.png`;
    };

    return {
      starTiers,
      selectedTier,
      imagePath,
      selectTier,
    };
  },
});
</script>

<style scoped>
.favorites-section {
  background-color: #f1f8f6;
  padding: 40px 20px;
  text-align: center;
  font-family: Arial, sans-serif; /* Set font to Arial */
}

.top-section h2 {
  font-size: 24px;
  font-weight: bold;
  color: #1e3932;
  margin-bottom: 20px;
  font-family: Arial, sans-serif; /* Set font to Arial */
}

.stars-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.stars-container button {
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #1e3932;
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
  font-family: Arial, sans-serif; /* Set font to Arial */
}

.stars-container button.active,
.stars-container button:hover {
  border-color: #00754a;
}

.bottom-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background-color: #d4e9e2;
  padding: 20px;
  border-radius: 10px;
  font-family: Arial, sans-serif; /* Set font to Arial */
}

.bottom-section img {
  width: 250px; /* Increased width for a larger image */
  height: auto; /* Maintain aspect ratio */
  margin-right: 20px;
}

.bottom-section .description {
  text-align: left; /* Align text to the left */
}

.bottom-section .description h3 {
  font-size: 18px;
  font-weight: bold;
  color: #1e3932;
  font-family: Arial, sans-serif; /* Set font to Arial */
}

.bottom-section .description h3.boldBlack {
  font-weight: bold;
  color: black; /* Change to bold black when selectedTier is 300 or 400 */
}

.bottom-section .description p {
  font-size: 18px; /* Make the text bigger */
  color: black; /* Set the text color to black */
  margin-top: 5px;
  font-family: Arial, sans-serif; /* Set font to Arial */
}

.bottom-section .description p br {
  margin-bottom: 10px; /* Space between lines */
}
</style>
