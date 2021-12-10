// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDKooBQSw6WcTYf-WER0hvKHSwI54_CR_I",
  authDomain: "proyecto-final-pw2.firebaseapp.com",
  projectId: "proyecto-final-pw2",
  storageBucket: "proyecto-final-pw2.appspot.com",
  messagingSenderId: "575552232270",
  appId: "1:575552232270:web:037c1bcda6e1dc3ad01c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;