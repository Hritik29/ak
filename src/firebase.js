// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeQWAoG-oCsZMbEzDLqqJZPcP_M550Hvs",
  authDomain: "akanksha-portfolio.firebaseapp.com",
  projectId: "akanksha-portfolio",
  storageBucket: "akanksha-portfolio.firebasestorage.app",
  messagingSenderId: "660866171263",
  appId: "1:660866171263:web:7d56560a4217d91cf9da4a",
  measurementId: "G-G0RE2FNR5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export services
export { auth, db, storage };
export default app;