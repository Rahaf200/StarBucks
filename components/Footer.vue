<template>
  <footer class="footer">
    <div class="social-links">
      <!-- Social Media Icons with Images -->
      <a href="#" target="_blank" aria-label="Spotify">
        <img src="/static/images/spotify.png" alt="Spotify" />
      </a>
      <a href="#" target="_blank" aria-label="Facebook">
        <img src="/static/images/facebook.png" alt="Facebook" />
      </a>
      <a href="#" target="_blank" aria-label="Pinterest">
        <img src="/static/images/pinterest.png" alt="Pinterest" />
      </a>
      <a href="#" target="_blank" aria-label="Instagram">
        <img src="/static/images/instagram.png" alt="Instagram" />
      </a>
      <a href="#" target="_blank" aria-label="YouTube">
        <img src="/static/images/youtube.png" alt="YouTube" />
      </a>
      <a href="#" target="_blank" aria-label="Twitter">
        <img src="/static/images/twitter.png" alt="Twitter" />
      </a>
    </div>

    <ul class="footer-links">
      <li><a href="#">Privacy Notice</a></li>
      <li><a href="#">Consumer Health Privacy Notice</a></li>
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">Do Not Share My Personal Information</a></li>
      <li><a href="#">CA Supply Chain Act</a></li>
      <li><a href="#">Accessibility</a></li>
      <li><a href="#">Cookie Preferences</a></li>
    </ul>

    <p class="copyright">© {{ currentYear }} Starbucks Coffee Company. All rights reserved.</p>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Reactive state for the current year
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: white; /* Set background color to white */
  padding: 30px; /* Increase padding around the footer */
  font-family: Arial, sans-serif; /* Set font to Arial */
  color: black; /* Set font color to black */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.social-links {
  margin-bottom: 25px; /* Increased space between social links and footer links */
  text-align: left; /* Align social links text to the left */
  width: 100%; /* Ensure the text spans the full width */
  display: flex;
  gap: 20px; /* Increase space between icons */
}

.social-links img {
  width: 40px; /* Slightly larger icons */
  height: 40px;
  object-fit: contain; /* Ensure proper scaling of images */
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0; /* Increased space below footer links */
  display: flex;
  flex-direction: column; /* Arrange items vertically */
  text-align: left; /* Align links to the left */
}

.footer-links li {
  margin: 10px 0; /* Increased space between the footer links */
}

.footer-links a {
  color: black; /* Set font color to black */
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.copyright {
  font-size: 14px; /* Slightly larger font size for copyright */
  color: #888; /* Light gray color */
  margin-top: 20px; /* Increased space above copyright */
  text-align: left; /* Align copyright text to the left */
  width: 100%; /* Ensure it spans the full width */
}
</style>