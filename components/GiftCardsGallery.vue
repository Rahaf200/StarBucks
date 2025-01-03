<template>
  <div class="gallery">
    <h2>{{ title }}</h2>
    <div class="cards">
      <div v-for="(card, index) in giftCards" :key="index" class="card">
        <img :src="card.image" :alt="card.alt" class="card-image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define a type for the gift card
interface GiftCard {
  image: string;
  alt: string;
}

// Props for the component
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  customGiftCards: {
    type: Array as PropType<GiftCard[]>,
    default: () => [
      {
        image: "/static/images/Season'sTreatingsCard.png",
        alt: "Season's Treatings Card",
      },
      {
        image: "/static/images/FestiveWreathCard.png",
        alt: "Festive Wreath Card",
      },
      {
        image: "/static/images/ThatFestiveFeelingCard.png",
        alt: "That Festive Feeling Card",
      },
      {
        image: "/static/images/PenguinFishingCard.png",
        alt: "Penguin Fishing Card",
      },
    ],
  },
});

// Default gift card data (if custom data is not provided)
const giftCards = ref<GiftCard[]>(props.customGiftCards);
</script>

<style scoped>
/* Align the gallery to the left of the page */
.gallery {
  padding: 1rem;
  text-align: left;  /* Aligns the text to the left */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align the gallery content to the left */
}

/* Cards section */
.cards {
  display: flex;
  justify-content: flex-start; /* Align cards to the left */
  gap: 1rem;
  flex-wrap: wrap;
}

/* Card style */
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px; /* Increased the width of each card */
  transition: transform 0.3s ease; /* Smooth transition for the card itself */
}

/* Image style */
.card-image {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  display: block;
  transition: transform 0.3s ease; /* Smooth transition for the image */
}

/* Hover effect */
.card:hover .card-image {
  transform: translateY(-10px); /* Move the image up when hovered */
}
</style>
