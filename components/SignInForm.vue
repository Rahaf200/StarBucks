<template>
  <div class="sign-in-wrapper">
    <h1 class="sign-in-title">Sign in or create an account</h1>
    <div class="sign-in-container">
      <p class="required-info">* indicates required field</p>
      <form @submit.prevent="handleSubmit" class="sign-in-form">
        <label>
          <input type="text" v-model="username" placeholder="* Username or email address" required />
        </label>
        <label>
          <input
            type="password"
            v-model="password"
            placeholder="* Password"
            required
          />
        </label>
        <label class="remember-me">
          <input type="checkbox" v-model="rememberMe" />
          Keep me signed in. <a href="#">Details</a>
        </label>
        <div class="help-links">
          <a href="#">Forgot your username?</a>
          <a href="#">Forgot your password?</a>
        </div>
        <!-- The button is now placed a little above the bottom-right -->
        <button type="submit" class="sign-in-button">Sign in</button>
      </form>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'SignInForm',
  setup() {
    const username = ref<string>('');
    const password = ref<string>('');
    const rememberMe = ref<boolean>(false);


    const handleSubmit = (): void => {
      console.log('Form submitted:', { username: username.value, password: password.value, rememberMe: rememberMe.value });
    };


    return {
      username,
      password,
      rememberMe,
      handleSubmit,
    };
  },
});
</script>


<style scoped>
/* Wrapper Styling */
.sign-in-wrapper {
  text-align: center; /* Centering everything inside the wrapper */
  margin-top: 50px;
}


/* Title Styling */
.sign-in-title {
  font-family: Arial, sans-serif; /* Use Arial font */
  font-size: 1.8rem;
  font-weight: bold; /* Bold text */
  color: black;  /* Black color */
  margin-bottom: 20px;
  text-align: center;
  position: relative;
}


/* Container Styling (Vertical Rectangle 11 * 13) */
.sign-in-container {
  width: 440px; /* 11 * 40px = 440px wide */
  height: 400px; /* Slightly increased height to 400px */
  margin: 0 auto;
  font-family: Arial, sans-serif;
  text-align: left;
  background-color: white;
  padding: 20px;
  border: 4px solid white; /* Prominent white border */
  border-radius: 8px; /* Optional: Add rounded corners */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a soft shadow */
  position: relative; /* Make the container position relative for absolute positioning inside */
}


/* Required Field Info */
.required-info {
  font-family: Arial, sans-serif; /* Arial font */
  font-weight: bold; /* Bold text */
  color: black; /* Black color */
  font-size: 1rem;
  text-align: left; /* Left align the text */
  margin-bottom: 20px;
  padding-left: 10px; /* Optional: Add some padding to the left */
}


/* Form Styling */
.sign-in-form label {
  display: block;
  margin-bottom: 15px;
  font-size: 0.9rem;
}


/* Username or Email Input */
input[type='text'],
input[type='password'] {
  width: 80%; /* Same width for both username and password */
  padding: 8px 10px; /* Same padding for both fields */
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-left: auto; /* Centers the input field */
  margin-right: auto; /* Centers the input field */
}


/* Placeholder Styling: Bold and black for username and password */
input::placeholder {
  font-weight: bold;
  color: black; /* Set the color of the placeholder text to black */
}


/* Remember Me Styling */
.remember-me {
  display: flex;
  align-items: center;
  margin-top: 10px;
}


.remember-me input {
  margin-right: 5px;
}


.remember-me a {
  color: #00754a;
  text-decoration: underline; /* Add underline to the link */
  font-weight: bold; /* Make the text bold */
  font-size: 0.9rem;
}


/* Help Links Styling - Make the text bold */
.help-links a {
  display: block;
  color: #00754a;
  text-decoration: none;
  margin-bottom: 5px;
  font-weight: bold; /* Make the text bold */
}


/* Add space between the help links (2 lines = 20px) */
.help-links a:nth-child(2) {
  margin-top: 20px; /* Adding space of 20px between the two links */
}


/* Sign In Button - Positioned a little above the bottom-right */
.sign-in-button {
  background-color: #00754a;
  color: #fff;
  border: none;
  padding: 8px 16px; /* Increased padding for a larger button */
  border-radius: 4px;
  font-size: 1rem; /* Increased font size */
  cursor: pointer;
  position: absolute; /* Position the button absolutely within the container */
  bottom: 50px; /* Move the button 50px from the bottom (higher) */
  right: 20px; /* Place the button 20px from the right */
}


.sign-in-button:hover {
  background-color: #005f3d;
}
</style>