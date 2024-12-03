<template>
  <div class="reward-container">
    <div class="reward-text">
      <h1>FREE COFFEE</h1>
      <h2>IS A TAP AWAY</h2>
      <p>Join now to start earning Rewards.</p>
      <button @click="joinNow" class="join-btn">Join now</button>
      <p>
        Or <a href="#" class="join-link">join in the app</a> for the best experience
      </p>
    </div>
    <div class="reward-image">
      <img src="/static/images/Star.png" alt="Star Reward" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StarReward",
  setup() {
    const joinNow = (): void => {
      console.log("Join now clicked");
    };

    return {
      joinNow,
    };
  },
});
</script>

<style scoped>
.reward-container {
  display: flex;
  justify-content: flex-end; /* Aligns the image to the right */
  align-items: center;
  padding: 20px;
  background-color: #d1e6e1; /* Darkened the background color slightly */
  height: 550px; /* Keep container height */
}

.reward-text {
  max-width: 50%;
  font-family: Arial, sans-serif;
  color: #000;
}

.reward-text h1 {
  font-size: 36px; /* Larger size for "FREE COFFEE" */
  font-weight: bold;
  margin-bottom: 10px;
}

.reward-text h2 {
  font-size: 24px; /* Slightly smaller size for "IS A TAP AWAY" */
  font-weight: bold;
  margin-top: 0; /* Removes the top margin for better alignment */
}

.reward-text p {
  margin-bottom: 10px;
}

.join-btn {
  background-color: #00754a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.join-btn:hover {
  background-color: #00593a;
}

.join-link {
  color: #00754a;
  text-decoration: underline;
  cursor: pointer;
}

.reward-image {
  flex-shrink: 0; /* Prevents the image from shrinking */
  margin-left: 120px; /* Increased left margin to make the left side of the image appear wider */
}

.reward-image img {
  height: 600px; /* Image height */
  width: auto; /* Maintain aspect ratio */
}
</style>
