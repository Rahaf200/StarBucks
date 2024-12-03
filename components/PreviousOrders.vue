<template>
  <div class="page-container">
    <div class="previous-orders">
      <h2>{{ heading }}</h2>
      <!-- Moon Phases Icon -->
      <img :src="earthImageSrc" alt="Moon Phases Icon" class="earth-icon" />
      <!-- Split text into two lines -->
      <h3>
        {{ subheading }}
      </h3>
      <p>
        {{ paragraph }}
      </p>
      <div class="actions">
        <button @click="signIn" class="btn-sign-in">{{ buttonSignInText }}</button>
        <button @click="joinNow" class="btn-join-now">{{ buttonJoinNowText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PreviousOrders',
  props: {
    // Image source path for Moon Phases Icon
    earthImageSrc: {
      type: String,
      default: '/static/images/moon-phases.gif', // Default image updated to moon phases GIF
    },
    // Title (h2)
    heading: {
      type: String,
      default: 'Previous', // Default title
    },
    // Subtitle (h3)
    subheading: {
      type: String,
      default: 'When history repeats itself', // Default subtitle
    },
    // Paragraph content (p)
    paragraph: {
      type: String,
      default: 'Previous orders will appear here to quickly order again.', // Default paragraph
    },
    // Sign in button text
    buttonSignInText: {
      type: String,
      default: 'Sign in', // Default text for sign in button
    },
    // Join now button text
    buttonJoinNowText: {
      type: String,
      default: 'Join now', // Default text for join now button
    },
  },
  setup() {
    // Button click handlers
    const signIn = (): void => {
      console.log('Sign In button clicked');
    };

    const joinNow = (): void => {
      console.log('Join Now button clicked');
    };

    return {
      signIn,
      joinNow,
    };
  },
});
</script>

<style scoped>
/* Full-page container */
.page-container {
  display: flex;
  align-items: flex-start; /* Align to the top */
  justify-content: flex-start; /* Align to the left */
  height: 100vh; /* Full page height */
  padding: 20px; /* Add spacing around the component */
  font-family: Arial, sans-serif; /* Set the font to Arial for the entire page */
}

/* Component styles */
.previous-orders {
  text-align: left; /* Align text to the left */
  color: #000;
  max-width: 300px; /* Limit the component width */
  margin-left: 90px; /* Increased margin to move the component further to the right */
}

h2 {
  font-size: 1.8rem; /* Increased size of the title */
  font-weight: bold;
}

.earth-icon {
  width: 200px; /* Increased size of the image */
  height: auto;  /* Maintain aspect ratio */
  margin: 10px 0;
}

h3 {
  font-size: 1.5rem; /* Increased size of the subtitle */
  margin: 10px 0;
  line-height: 1.3; /* Improve line spacing between "When history" and "repeats itself" */
}

p {
  font-size: 1.1rem; /* Increased size of the paragraph text */
  color: #555;
  margin-top: 10px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-sign-in,
.btn-join-now {
  padding: 10px 20px;
  font-size: 1rem; /* Slightly increased button font size */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-sign-in {
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
}

.btn-join-now {
  background-color: #000;
  color: #fff;
}
</style>
