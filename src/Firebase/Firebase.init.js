import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAHiiXelTNrL8TmKCq_hVuTapoy5dkIh2k",
  authDomain: "cars-43121.firebaseapp.com",
  projectId: "cars-43121",
  storageBucket: "cars-43121.appspot.com",
  messagingSenderId: "683680761465",
  appId: "1:683680761465:web:9f381604851421d42a76a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;