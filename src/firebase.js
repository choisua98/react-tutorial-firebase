// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj2Mk_gOdKWnKravfh3YhBTmvaGlJcNNw",
  authDomain: "fir-start-2bae5.firebaseapp.com",
  projectId: "fir-start-2bae5",
  storageBucket: "fir-start-2bae5.appspot.com",
  messagingSenderId: "87401215163",
  appId: "1:87401215163:web:4965d5ef557f4fae3c659e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
