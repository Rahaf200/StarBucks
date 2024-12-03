<template>
  <div>
    <!-- Navbar -->
    <Navbar />


    <!-- Rewards Content -->
    <div class="rewards-content">
      <!-- Star Rewards Section -->
      <StarReward />


      <!-- Getting Started Section -->
      <GettingStarted
        title="Getting started is easy"
        subtitle="Earn Stars and get rewarded in a few easy steps."
        :steps="steps1"
      />


      <!-- Favorites Section -->
      <div class="favorites-section">
        <!-- Top Section -->
        <div class="top-section">
          <h2 class="favorites-title">Get your favorites for free</h2>
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
          <div class="image-wrapper">
            <img :src="imagePath" alt="Drink" />
          </div>
          <div class="description">
            <h3>Customize your drink</h3>
            <p>
              Make your drink just right with an<br />
              extra espresso shot or a dash of<br />
              your favorite syrup.
            </p>
          </div>
        </div>
      </div>


      <!-- Endless Extras Section -->
      <div class="endless-extras">
        <h2 class="center-text">Endless Extras</h2>
        <p class="center-text">
          Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
        </p>
        <div class="extras-grid">
          <!-- Fun Freebies -->
          <div class="extra-item">
            <img src="/static/images/Funfreebies.png" alt="Fun Freebies" class="extra-image" />
            <h3 class="extra-title">Fun freebies</h3>
            <p class="extra-description">
              Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
            </p>
            <a href="#" class="learn-more">Learn more</a>
          </div>


          <!-- Order & Pay Ahead -->
          <div class="extra-item">
            <img src="/static/images/payahead.png" alt="Order & Pay Ahead" class="extra-image" />
            <h3 class="extra-title">Order & pay ahead</h3>
            <p class="extra-description">
              Master the art of ordering ahead with saved favorites and payment methods.
            </p>
            <a href="#" class="learn-more">Learn more</a>
          </div>


          <!-- Get to Free Faster -->
          <div class="extra-item">
            <img src="/static/images/freefaster.png" alt="Get to Free Faster" class="extra-image" />
            <h3 class="extra-title">Get to free faster</h3>
            <p class="extra-description">
              Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
            </p>
            <a href="#" class="learn-more">Learn more</a>
          </div>
        </div>
      </div>


      <!-- Replaced Rewards Partners Section -->
      <div class="rewards-section">
        <h2>Keep the Rewards Coming</h2>
        <p>
          The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and
          unlock perks from our partners, all while earning more Stars.
        </p>
        <div class="rewards-partners">
          <div class="partner-card" v-for="partner in partners" :key="partner.id">
            <img :src="partner.logoPath" :alt="partner.name" />
            <p v-html="partner.description"></p>
          </div>
        </div>
        <button class="join-button">Join Starbucks® Rewards</button>
      </div>


      <!-- Questions Section -->
      <div class="questions-section">
        <p class="questions-title">Questions?</p>
        <p class="questions-description">We want to help in any way we can. You can ask your barista anytime or</p>
        <p class="questions-description">we’ve answered the most commonly asked terms right over here</p>
      </div>
    </div>


    <!-- Footer Menu -->
    <FooterMenu />


    <!-- Footer -->
    <Footer />
  </div>
</template>


<script setup lang="ts">
import Navbar from '@/components/navbar.vue';
import StarReward from '@/components/Star.vue';
import GettingStarted from '@/components/GettingStarted.vue';
import FooterMenu from '@/components/FooterMenu.vue';
import Footer from '@/components/Footer.vue';


// Steps for the Getting Started Section
const steps1 = [
  {
    id: 1,
    title: 'Create an account',
    description:
      'To get started, <a href="#" class="highlight">join now</a>. You can also <a href="#" class="highlight">Join in the app</a> to get access to the full range of Starbucks® Rewards benefits.',
    hideNumber: false,
  },
  {
    id: 2,
    title: 'Order and pay how you’d like',
    description:
      'Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="#" class="highlight">Learn how</a>',
    hideNumber: false,
  },
  {
    id: 3,
    title: 'Earn Stars, get Rewards',
    description:
      'As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!',
    hideNumber: false,
  },
];


// Rewards Partners Section Data
const partners = ref([
  {
    id: 1,
    name: 'Delta SkyMiles',
    logoPath: '/static/images/deltaskymiles.png',
    description:
      'Link your <a href="#">Delta SkyMiles</a> and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.',
  },
  {
    id: 2,
    name: 'Bank of America',
    logoPath: '/static/images/bankofamerica.png',
    description:
      'Link your <a href="#">Bank of America</a> eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.',
  },
  {
    id: 3,
    name: 'Marriott Bonvoy',
    logoPath: '/static/images/marriottlogo.png',
    description:
      'Link your <a href="#">Marriott Bonvoy</a> and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.',
  },
]);


// Favorites Section Data
const starTiers = ref([25, 100, 200, 300, 400]);
const selectedTier = ref(0);
const imagePath = ref("/static/images/25.png");


const selectTier = (index: number): void => {
  selectedTier.value = index;
  imagePath.value = `/static/images/${starTiers.value[index]}.png`;
};
</script>


<style scoped>
/* Favorites Section */
.favorites-section {
  padding: 40px 0;
  background-color: #f6f6f6;
}


.top-section {
  text-align: center;
  margin-bottom: 20px;
}


.favorites-title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 10px;
}


.stars-container {
  display: flex;
  justify-content: center;
  gap: 15px;
}


.stars-container button {
  background: none;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  transition: color 0.3s ease-in-out;
}


.stars-container button.active {
  color: #00754a; /* Starbucks green */
  border-bottom: 2px solid #00754a;
}


.bottom-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: #d9ece6;
  padding: 20px 40px;
}


.image-wrapper img {
  max-width: 120px;
  height: auto;
}


.description {
  text-align: left;
}


.description h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 5px;
}


.description p {
  font-size: 1rem;
  line-height: 1.5;
}


/* Endless Extras Section */
.endless-extras {
  text-align: center;
  padding: 40px 20px;
}


.center-text {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}


.extras-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}


.extra-item {
  flex: 1;
  max-width: 300px;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.extra-item img {
  max-width: 120px;
  margin-bottom: 20px;
}


.extra-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 10px;
}


.extra-description {
  font-size: 1rem;
  margin-bottom: 15px;
}


.learn-more {
  color: #00754a;
  font-weight: bold;
  text-decoration: none;
}


.learn-more:hover {
  text-decoration: underline;
}


/* Rewards Partners Section */
.rewards-section {
  text-align: center;
  padding: 40px 20px;
  background-color: #d9f7e7; /* Light Green background */
  color: black; /* Ensure text is readable on the light green background */
}


.rewards-section h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}


.rewards-section p {
  font-size: 1.125rem;
  margin-bottom: 20px;
}


.rewards-partners {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
}


.partner-card {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  width: 250px; /* Set a fixed width for consistency */
}


.partner-card img {
  max-width: 120px;
  height: auto;
  margin-bottom: 15px;
}


.partner-card p {
  font-size: 1rem;
  line-height: 1.5;
}


.join-button {
  background-color: white;
  color: #00754a;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
}


.join-button:hover {
  background-color: #f0f0f0;
}


/* Questions Section */
.questions-section {
  padding: 40px 20px;
  background-color: #f6f6f6;
}


.questions-title {
  font-size: 1.5rem;
  font-weight: bold;
}


.questions-description {
  font-size: 1.125rem;
  line-height: 1.5;
}
</style>


