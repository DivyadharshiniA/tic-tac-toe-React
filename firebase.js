// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdssBgF81vaYPPDZ31bQs0-Wm3zF0FedI",
  authDomain: "tic-tac-toe-955ce.firebaseapp.com",
  projectId: "tic-tac-toe-955ce",
  storageBucket: "tic-tac-toe-955ce.appspot.com",
  messagingSenderId: "931912171597",
  appId: "1:931912171597:web:7a729d3d39970b12315c04",
  measurementId: "G-1QSB00WP4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export the initialized app and db
export default app; // Default export
export { db }; // Named export for Firestore
