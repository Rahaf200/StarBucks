// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
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
export const db = getFirestore(app);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting auth persistence: ", error);
}); 
