// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTyrJOt3RIri6PnK3nZ1kNo-YivEsVjWc",
  authDomain: "car-doctor-project-2ffa3.firebaseapp.com",
  projectId: "car-doctor-project-2ffa3",
  storageBucket: "car-doctor-project-2ffa3.appspot.com",
  messagingSenderId: "1079426290582",
  appId: "1:1079426290582:web:8c7b3d2887c6481afa43b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;