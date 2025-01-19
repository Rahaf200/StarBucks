<template>
  <div>
    <!-- Navbar at the top -->
    <Navbar />

    <!-- Customized NiceListCard with blood red color, custom image, and flipped layout -->
    <NiceListCard
      title="Buy a box, we’ll give back"
      description="In partnership with Feeding America®, protein box purchase helps support hunger relief in your community.*"
      buttonText="Learn more"
      bgColor="#8e0031"
      imageSrc="/static/images/Feeding.png"
      :flipImage="true"
    />

    <!-- Original NiceListCard with default props -->
    <NiceListCard />

    <!-- Reused NiceListCard with new content -->
    <NiceListCard
      title="Starbucks supports (RED)"
      description="December 1 is World AIDS Day. Since 2008, Starbucks has donated $17M to fight AIDS in partnership with (RED). Learn how you can join the fight."
      buttonText="Learn more"
      bgColor="#D00000"
      imageSrc="/static/images/Red.png"
      :flipImage="false"
    />

    <!-- Text added after a space of 10 lines -->
    <div class="spacer-10"></div>
    <div class="info-text">
      <p>*At participating Starbucks stores within the U.S. from 11/19/24 to 1/2/25, for each protein box sold,</p>
      <p>Starbucks will donate the monetary equivalent of one meal to Feeding America®. $1 helps provide at</p>
      <p>least 10 meals secured by Feeding America on behalf of local partner food banks.</p>
    </div>

    <!-- Spacer for 20 lines -->
    <div class="spacer-20"></div>
    <div class="info-text">
      <p>**Valid only for new Starbucks Rewards members for 7 days from sign up. Offer good at</p>
      <p>participating stores for a handcrafted menu-sized beverage with qualifying purchase ($8 max</p>
      <p>value). Qualifying purchase excludes alcohol, Starbucks Card and Starbucks Card reloads. Limit one</p>
      <p>per member. Cannot be combined with other offers or discounts. Excludes delivery services. Sign</p>
      <p>up before 1/2/2025 to be eligible.</p>
    </div>

    <!-- Spacer for 20 lines -->
    <div class="spacer-20"></div>
    <div class="info-text">
      <p>***Applies to non-dairy milk customizations on standard beverages at cafés owned and operated</p>
      <p>by Starbucks in the U.S. and Canada.</p>
    </div>

    <!-- Spacer for 20 lines -->
    <div class="spacer-20"></div>
    <div class="info-text">
      <p>****Available for a limited time in participating U.S. stores.</p>
    </div>

    <!-- FooterMenu with a thinner line above -->
    <div class="footer-wrapper">
      <FooterMenu />
    </div>

    <!-- Footer component with a thinner line above -->
    <div class="footer-line-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/navbar.vue";
import NiceListCard from "@/components/NiceListCard.vue";
import FooterMenu from "@/components/FooterMenu.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/* Add any page-specific styles here */

/* Wrapper for FooterMenu with a thin line */
.footer-wrapper {
  border-top: 1px solid #ccc; /* Thinner line above the footer menu */
  margin-top: 2rem;          /* Add spacing above the line */
}

/* Wrapper for Footer with a thin line above */
.footer-line-wrapper {
  border-top: 1px solid #ccc; /* Thin line above the Footer component */
  margin-top: 1rem;          /* Optional: Add spacing above the line */
}

/* Spacer for 10 and 20 lines */
.spacer-10 {
  height: 10rem; /* Approximately 10 lines */
}
.spacer-20 {
  height: 20rem; /* Approximately 20 lines */
}

/* Info text styles */
.info-text {
  text-align: center; /* Center align the text */
}

.info-text p {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: black;
  margin: 0; /* Remove default spacing between lines */
}
</style>
