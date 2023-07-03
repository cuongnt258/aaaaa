// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFsJS8u9XsIClfCOGZJQ4vg7JsJFSNA7Q",
  authDomain: "fvssystemswp409.firebaseapp.com",
  projectId: "fvssystemswp409",
  storageBucket: "fvssystemswp409.appspot.com",
  messagingSenderId: "153807743798",
  appId: "1:153807743798:web:388557922974c341b16197",
  measurementId: "G-DNJR3ZB3FW",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app);
const auth = firebase.auth();
const provider = new GoogleAuthProvider();
export { auth };
export default firebase;
