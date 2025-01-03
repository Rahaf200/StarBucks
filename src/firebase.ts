// Import the necessary functions from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCDmm5QoPeA6_trJ4JaWIq_zKKMgvrKipc",
  authDomain: "starbucks-5c674.firebaseapp.com",
  projectId: "starbucks-5c674",
  storageBucket: "starbucks-5c674.appspot.com",
  messagingSenderId: "959470467577",
  appId: "1:959470467577:web:12193563daa6f0ef64a528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

/**
 * Register a new user and save their details to Firestore
 * @param email The user's email address
 * @param password The user's password
 * @param firstName The user's first name
 * @param lastName The user's last name
 * @param subscribe Whether the user is subscribed (default: false)
 * @returns Promise<void>
 */
export const registerUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  subscribe: boolean = false
): Promise<void> => {
  try {
    // Create the user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save the user details to Firestore
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      email: user.email,
      firstName: firstName,
      lastName: lastName,
      subscribe: subscribe,
      userId: user.uid,
    });

    // Create an empty cart for the user in Firestore
    const cartDocRef = doc(db, 'carts', user.uid);
    await setDoc(cartDocRef, {
      userId: user.uid,
      items: [] // Start with an empty items array
    });

    console.log('User and cart registered successfully:', user.uid);
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
