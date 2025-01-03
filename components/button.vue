<template>
  <button class="custom-button" @click="goToCustomize">
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.25L13.66 9.27l3.49.51-2.53 2.46.6 3.48L12 13.77l-3.12 1.63.6-3.48-2.53-2.46 3.49-.51L12 6.25z"
      />
    </svg>
    <span>Customize</span>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCustomize = () => {
  router.push('/customize-egg');
};
</script>

<style scoped>
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #183f36; /* Match the dark green background */
  color: #ffffff; /* Text color */
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 50px; /* Rounded corners for pill shape */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.custom-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.icon {
  width: 20px;
  height: 20px;
  color: #d1b082; /* Match the golden yellow color */
}

span {
  font-family: 'Arial', sans-serif; /* Customize the font family if needed */
}
</style>
