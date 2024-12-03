<template>
    <div class="text-section">
      <!-- Previous sections (those above the two-column layout) remain the same -->
      <div v-for="section in sections" :key="section.id" class="section">
        <div v-for="paragraph in section.content" :key="paragraph.id" class="paragraph">
          <p v-html="paragraph.text"></p>
        </div>
      </div>
  
      <!-- Two-column layout for Earning Stars and Terms of Use -->
      <div class="columns">
        <!-- Column 1: Earning Stars Section -->
        <div class="column">
          <div class="earning-stars-section">
            <p class="earning-stars-title">Earning Stars</p>
            <p class="earning-stars-text">Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
            <p class="earning-stars-text">Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay</p>
            <p class="earning-stars-text">with cash, credit/debit cards or mobile wallets at participating stores. You can also</p>
            <p class="earning-stars-text">earn 1 Star per $1 spent when you link a payment method and pay directly through</p>
            <p class="earning-stars-text">the app.</p>
            <p class="earning-stars-text">Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks</p>
            <p class="earning-stars-text">Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a</p>
            <p class="earning-stars-text">participating store with your registered physical Starbucks Card or scan your</p>
            <p class="earning-stars-text">member barcode in the app, and then use any physical Starbucks Card (regardless</p>
            <p class="earning-stars-text">of whether it is registered) to complete the purchase.</p>
          </div>
        </div>
  
        <!-- Column 2: Terms of Use Section -->
        <div class="column">
          <div class="terms-of-use-section">
            <p class="terms-of-use-title">Terms of Use</p>
            <!-- Updated Terms Text -->
            <p class="terms-of-use-text">For full program details visit <a href="https://starbucks.com/rewards/terms" target="_blank">starbucks.com/rewards/terms</a>.</p>
            <p class="terms-of-use-text">Starbucks® Rewards benefits are available at participating Starbucks stores. Not all</p>
            <p class="terms-of-use-text">stores have the ability to honor Rewards at this time. Visit the</p>
            <p class="terms-of-use-text">Starbucks Store Locator and search for locations honoring “Redeem Rewards”.</p>
            <p class="redeem-rewards-text">Redeeming Rewards</p>
            <p class="terms-of-use-text">Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay</p>
            <p class="terms-of-use-text">the difference for any beverage customization over $1 and/or merchandise item</p>
            <p class="terms-of-use-text">over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for</p>
            <p class="terms-of-use-text">free food or drink items only.</p>
          </div>
        </div>
      </div>
  
      <!-- Benefits Section remains unchanged -->
      <div class="benefits-section">
        <p class="benefits-title">Benefits</p>
        <p class="benefits-text">Free refills available during same in-store visit only. To qualify for the Birthday</p>
        <p class="benefits-text">Reward, you must have made at least one Star-earning transaction.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface Paragraph {
    id: number;
    text: string;
  }
  
  interface Section {
    id: number;
    content: Paragraph[];
  }
  
  export default defineComponent({
    name: 'TextSection',
    setup() {
      // Define sections data (this remains unchanged)
      const sections = ref<Section[]>([
        {
          id: 1,
          content: [
            {
              id: 1,
              text: 'At participating stores. Restrictions apply.',
            },
            {
              id: 2,
              text: '1Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars. Stars and miles may not be ',
            },
            {
              id: 3,
              text: 'earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit <a href="https://deltastarbucks.com/terms" target="_blank">deltastarbucks.com/terms</a>.',
            },
          ],
        },
        {
          id: 2,
          content: [
            {
              id: 1,
              text: '2At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Extra Star offer ',
            },
            {
              id: 2,
              text: 'excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For details, visit <a href="https://www.bankofamerica.com/terms" target="_blank">Terms and Conditions</a>. Bank of America, N.A. Member FDIC.',
            },
          ],
        },
        {
          id: 3,
          content: [
            {
              id: 1,
              text: '3Individuals must link loyalty program accounts to participate in offer. Members with linked accounts will earn: (a) double Starbucks Rewards Stars on Qualifying Starbucks',
            },
            {
              id: 2,
              text: 'Transactions during Eligible Stays at Participating Marriott Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht Collection, and (b) ',
            },
            {
              id: 3,
              text: 'earn 100 Marriott Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions during Marriott Bonvoy Week. Qualifying Starbucks Transactions must be made at U.S.',
            },
            {
              id: 4,
              text: 'participating Starbucks stores and exclude purchases of alcoholic beverages, Starbucks Card eGifts and physical Starbucks gift. To earn Double Stars, the applicable stay must ',
            },
            {
              id: 5,
              text: 'qualify as an Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer terms and conditions. Other restrictions and exclusions apply. For full offer terms and conditions,',
            },
            {
              id: 6,
              text: 'visit <a href="https://Starbucks.com/MarriottBonvoy" target="_blank">Starbucks.com/MarriottBonvoy</a>. Marriott Bonvoy® and its affiliated brands and hotels are the registered trademarks and/or service marks of Marriott International, Inc.',
            },
            {
              id: 7,
              text: 'and its affiliates. Used under license from Marriott International, Inc.',
            },
          ],
        },
      ]);
  
      return {
        sections,
      };
    },
  });
  </script>
  
  <style scoped>
  .text-section {
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .columns {
    display: flex;
    gap: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .column {
    flex: 1;
  }
  
  .paragraph {
    margin-bottom: 10px;
  }
  
  .paragraph p {
    font-size: 18px;
    line-height: 1;
    color: black;
    text-align: left;
  }
  
  .paragraph a {
    color: #00754a;
    text-decoration: none;
  }
  
  .paragraph a:hover {
    text-decoration: underline;
  }
  
  /* Styling for the Earning Stars section */
  .earning-stars-section {
    margin-bottom: 20px;
  }
  
  .earning-stars-title {
    font-size: 20px;
    font-weight: bold;
    color: #555;
    margin-bottom: 10px;
  }
  
  .earning-stars-text {
    font-size: 18px;
    color: black;
    margin-bottom: 5px;
    line-height: 1.4;
    text-align: left;
  }
  
  /* Styling for the Terms of Use section */
  .terms-of-use-section {
    margin-bottom: 20px;
  }
  
  .terms-of-use-title {
    font-size: 20px;
    font-weight: bold;
    color: #555;
    margin-bottom: 10px;
  }
  
  .terms-of-use-text {
    font-size: 18px;
    color: black;
    margin-bottom: 5px;
    line-height: 1.4;
    text-align: left;
  }
  
  .terms-of-use-text a {
    color: #00754a;
    text-decoration: none;
  }
  
  .terms-of-use-text a:hover {
    text-decoration: underline;
  }
  
  /* Styling for "Redeeming Rewards" */
  .redeem-rewards-text {
    font-size: 24px;
    color: #666; /* Light black */
    font-weight: bold;
  }
  
  /* Styling for the Benefits section */
  .benefits-section {
    margin-top: 20px;
  }
  
  .benefits-title {
    font-size: 24px;
    color: #555;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .benefits-text {
    font-size: 18px;
    color: black;
    margin-bottom: 5px;
    line-height: 1.4;
    text-align: left;
  }
  </style>
  