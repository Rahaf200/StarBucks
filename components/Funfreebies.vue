<template>
  <div class="funfreebies-wrapper">
    <div class="funfreebies-component">
      <!-- Image Section -->
      <div class="funfreebies-image">
        <img :src="imageUrl" alt="Fun freebies" />
      </div>

      <!-- Text Section -->
      <div class="funfreebies-text">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <a href="#" class="learn-more">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Funfreebies',
  setup() {
    const imageUrl = ref('/static/images/Funfreebies.png');
    const title = ref('Fun freebies');
    const description = ref(
      'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.'
    );

    return {
      imageUrl,
      title,
      description,
    };
  },
});
</script>

<style scoped>
/* Wrapper to align the component to the left */
.funfreebies-wrapper {
  display: flex;
  justify-content: flex-start; /* Aligns the component to the left */
  align-items: center; /* Vertically centers the component */
  height: 100vh; /* Full viewport height */
  margin: 0;
  padding-left: 2rem; /* Add padding if needed to give space from the left edge */
}

/* Original component styles */
.funfreebies-component {
  text-align: center;
  max-width: 300px;
  margin: 0; /* No auto margin to avoid centering */
}

.funfreebies-image img {
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
}

.funfreebies-text h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.funfreebies-text p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.learn-more {
  color: #00754a;
  text-decoration: none;
  font-weight: bold;
}

.learn-more:hover {
  text-decoration: underline;
}
</style>
