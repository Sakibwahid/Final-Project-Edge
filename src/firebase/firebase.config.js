
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQ4wQ7sUzaL58qCDHW3ma7sko5BoVq6Wo",
  authDomain: "mocktrails-6fd58.firebaseapp.com",
  projectId: "mocktrails-6fd58",
  storageBucket: "mocktrails-6fd58.firebasestorage.app",
  messagingSenderId: "509820577884",
  appId: "1:509820577884:web:429952db1d66f6fb3d1e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;