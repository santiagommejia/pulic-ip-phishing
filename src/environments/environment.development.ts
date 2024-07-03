// src/environments/environment.ts
export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD3itO-4F5_UqgoHROHkxAxW49w9wr0kQs",
        authDomain: "christmas-cards-b827b.firebaseapp.com",
        projectId: "christmas-cards-b827b",
        storageBucket: "christmas-cards-b827b.appspot.com",
        messagingSenderId: "403832763691",
        appId: "1:403832763691:web:e7c0a092ef5dc01d5a416e",
        measurementId: "G-7DDPEL2DRR"
    },
  };
  
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
