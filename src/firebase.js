// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwHc5c8tQ7JlcXeamtr6DATL97I3WTvE",
  authDomain: "auth-charityapp.firebaseapp.com",
  projectId: "auth-charityapp",
  storageBucket: "auth-charityapp.appspot.com",
  messagingSenderId: "325006481574",
  appId: "1:325006481574:web:84026fc23f0b38b2cffc67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
