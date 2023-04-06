import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyB6OIYHmRXbrwwuguAj6DO0nUSc0tL7pWM",
    authDomain: "blog-react-6dda0.firebaseapp.com",
    projectId: "blog-react-6dda0",
    storageBucket: "blog-react-6dda0.appspot.com",
    messagingSenderId: "619076966842",
    appId: "1:619076966842:web:d6b5038fb4658dcf4ea583"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();