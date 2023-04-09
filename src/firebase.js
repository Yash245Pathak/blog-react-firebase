import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC8NYIZK7ugmbzGYY02JUKQMu1hECO0sP8",
    authDomain: "react-blog-63b42.firebaseapp.com",
    projectId: "react-blog-63b42",
    storageBucket: "react-blog-63b42.appspot.com",
    messagingSenderId: "800314147776",
    appId: "1:800314147776:web:de7e22490bb306473a3e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);