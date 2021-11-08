import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2fNWVl8Rz0xGlh_CvnOIY1ZbsQ6_qLg4",
  authDomain: "alpi-lab-notes.firebaseapp.com",
  projectId: "alpi-lab-notes",
  storageBucket: "alpi-lab-notes.appspot.com",
  messagingSenderId: "116902728498",
  appId: "1:116902728498:web:3cf87eddcfd0ef3f28fd2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')
