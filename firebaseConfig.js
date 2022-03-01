import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3OK-wrKoVq9y-XquxLrc2_PhmtnadbT4",
  authDomain: "andy-chan.firebaseapp.com",
  projectId: "andy-chan",
  storageBucket: "andy-chan.appspot.com",
  messagingSenderId: "283048380045",
  appId: "1:283048380045:web:38ff397490dda2868884c4",
  measurementId: "G-F5J8S6XC2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
