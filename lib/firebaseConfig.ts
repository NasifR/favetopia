import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHglVWjJMfBn_9UejllYQNtQpUP3Hw7RM",
  authDomain: "favetopia.firebaseapp.com",
  projectId: "favetopia",
  storageBucket: "favetopia.firebasestorage.app",
  messagingSenderId: "644345267065",
  appId: "1:644345267065:web:cc15a84c78d1f63a9925a8",
  measurementId: "G-EZ07P5SPET"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
