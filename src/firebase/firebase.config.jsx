// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsFiXsAA3IPplhUaSTGLMXYep1wL4wNeM",
  authDomain: "auto-edition.firebaseapp.com",
  projectId: "auto-edition",
  storageBucket: "auto-edition.appspot.com",
  messagingSenderId: "932670046725",
  appId: "1:932670046725:web:12d38cebedf8cae6db526c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;