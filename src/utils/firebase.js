// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnFKqHKuIGWxs2MqoGVl_7OKTmew6mYUU",
  authDomain: "netflixgpt-ae704.firebaseapp.com",
  projectId: "netflixgpt-ae704",
  storageBucket: "netflixgpt-ae704.appspot.com",
  messagingSenderId: "202584589296",
  appId: "1:202584589296:web:94a5c4d7985807aafbd335",
  measurementId: "G-5GYM8YTDDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();