import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKl6v2EXzUdQB0KcRFn8H_8598j3F0zR4",
  authDomain: "music-player-iso.firebaseapp.com",
  projectId: "music-player-iso",
  storageBucket: "music-player-iso.appspot.com",
  messagingSenderId: "462499639122",
  appId: "1:462499639122:web:2a9ac35361e17b7f25948b",
  measurementId: "G-HWY0J0F9F7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
