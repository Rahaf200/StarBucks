<template>
  <div class="getting-started-component">
    <!-- Title Section -->
    <div class="title-section">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>

    <!-- Steps Section -->
    <div class="steps-section">
      <div class="step" v-for="step in steps" :key="step.id">
        <!-- Conditionally hide the circle containing the number -->
        <div class="step-number" :style="{ visibility: step.hideNumber ? 'hidden' : 'visible' }">
          {{ step.id }}
        </div>
        <h2 class="step-title">{{ step.title }}</h2>
        <p class="step-description">
          <span v-html="step.description"></span>
        </p>
        <img v-if="step.image" :src="step.image" :alt="`Step ${step.id} image`" class="step-image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Define the Step type for TypeScript
interface Step {
  id: number;
  title: string;
  description: string;
  image?: string; // Optional image field
  hideNumber?: boolean; // Flag to hide the step number
}

export default defineComponent({
  name: 'GettingStarted',
  props: {
    title: {
      type: String,
      default: 'Getting started is easy',
    },
    subtitle: {
      type: String,
      default: 'Earn Stars and get rewarded in a few easy steps.',
    },
    steps: {
      type: Array as () => Step[], // Define the type of the 'steps' prop
      default: () => [
        {
          id: 1,
          title: 'Create an account',
          description:
            'To get started, <a href="#" class="highlight">join now</a>. You can also <a href="#" class="highlight">Join in the app</a> to get access to the full range of Starbucks® Rewards benefits.',
          image: '', // Optional image URL
          hideNumber: false, // Show the number
        },
        {
          id: 2,
          title: 'Order and pay how you’d like',
          description:
            'Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="#" class="highlight">Learn how</a>',
          image: '', // Optional image URL
          hideNumber: false, // Show the number
        },
        {
          id: 3,
          title: 'Earn Stars, get Rewards',
          description:
            'As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!',
          image: '', // Optional image URL
          hideNumber: false, // Show the number
        },
      ],
    },
  },
});
</script>

<style scoped>
/* General Component Styles */
.getting-started-component {
  text-align: center;
  padding: 2rem;
}

.title-section {
  margin-bottom: 2rem;
}

.title-section h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.title-section p {
  font-size: 1.1rem;
  color: #000;
  font-family: Arial, sans-serif;
}

/* Steps Section Styles */
.steps-section {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
}

.step {
  max-width: 300px;
  text-align: center;
}

.step-number {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-color: #fff;
  color: #00754a;
  border: 2px solid #00754a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.step-number[style="visibility: hidden;"] {
  visibility: hidden; /* Hide the number */
}

.step-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.step-description {
  font-size: 1.1rem;
  color: #000;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

/* Highlighted Text (Links) */
.highlight {
  color: #00754a;
  font-weight: bold;
  text-decoration: none;
}

.highlight:hover {
  text-decoration: underline;
}

.step-description a {
  text-decoration: none;
}

.step-description a:hover {
  text-decoration: underline;
}

/* Image Style */
.step-image {
  width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
