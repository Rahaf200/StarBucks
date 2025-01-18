<template>
  <div class="container">
    <!-- Heading Text Section -->
    <div class="heading-text">
      <h1 class="create-account">Create an account</h1>
      <div class="spacer"></div>
      <h2>Starbucks® Rewards</h2>
      <div class="spacer-small"></div>
      <p class="centered-text">Join Starbucks Rewards to earn Stars for free food and drinks.</p>
    </div>

    <!-- Registration Form -->
    <div class="registration-form">
      <p class="required-field">* indicates required field</p>
      <p class="personal-info-title">Personal Information</p>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input
            id="first-name"
            v-model="form.firstName"
            type="text"
            placeholder="First name"
            required
          />
        </div>

        <div class="form-group">
          <input
            id="last-name"
            v-model="form.lastName"
            type="text"
            placeholder="Last name"
            required
          />
        </div>

        <h2 class="account-security-title">Account Security</h2>

        <div class="form-group">
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Email address"
            required
          />
        </div>

        <div class="form-group">
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Create a password"
            required
          />
          <small>Create a password 8 to 25 characters long...</small>
        </div>

        <div class="form-group">
          <label>
            <input type="checkbox" v-model="form.subscribe" />
            Yes, I'd like email from Starbucks
          </label>
        </div>

        <div class="form-group">
          <label class="left-align">
            <input type="checkbox" v-model="form.agreeToTerms" required />
            I agree to the terms
          </label>
        </div>

        <div class="button-container">
          <button type="submit" class="btn">Create account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { auth, db } from '@/src/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useUserStore } from '@/src/user'; // Import user store

export default defineComponent({
  name: 'RegistrationForm',
  setup() {
    const router = useRouter();
    const userStore = useUserStore(); // Initialize user store

    const form = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      subscribe: false,
      agreeToTerms: false,
    });

    const submitForm = async () => {
      if (!form.agreeToTerms) {
        alert('You must agree to the terms and conditions.');
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
        const user = userCredential.user;

        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          subscribe: form.subscribe,
          cart: [],
        });

         // Create user data
    const userData = {
      uid: user.uid,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      cartItems: [],
    };
 
    // Set user data in user store
    userStore.setUser(userData);

    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    alert('Account created successfully!');
    router.push('/home');
  } catch (error: unknown) {
    console.error('Error creating account:', error);
    alert(
      error instanceof Error
        ? `Error: ${error.message}`
        : 'An unknown error occurred.'
    );
  }
    };

    return { form, submitForm };
  },
});
</script>


<style scoped>
/* Container Style */
.container {
  max-width: 600px;
  margin: auto;
  padding-top: 2rem;
}

/* Heading Text */
.heading-text {
  text-align: center;
  margin-bottom: 2rem;
}

.create-account {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: black;
}

h2 {
  color: #666;
}

.centered-text {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.spacer {
  height: 1.5rem;
}

.spacer-small {
  height: 0.5rem;
}

/* Registration Form Styles */
.registration-form {
  max-width: 400px;
  margin: auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  border: 3px solid white;
  text-align: left;
}

.required-field {
  font-size: 0.875rem;
  color: #666;
  font-weight: normal;
  margin-bottom: 1rem;
}

.personal-info-title {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: black;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.account-security-title {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: black;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

input[type='checkbox'] {
  margin-right: 0.5rem;
}

small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #555;
}

.btn {
  display: inline-block;
  width: auto;
  padding: 0.75rem;
  background-color: #00754a;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #005c37;
}

/* Add Left Alignment for the Checkbox Label */
.left-align {
  text-align: left;
}

/* Right-align the button */
.button-container {
  text-align: right;
  margin-top: 1.5rem;
}
</style>