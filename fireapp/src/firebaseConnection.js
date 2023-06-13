import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDycshYZztf5wuLHeV7QLmDj3p1WliWyg0",
  authDomain: "curso-f4286.firebaseapp.com",
  projectId: "curso-f4286",
  storageBucket: "curso-f4286.appspot.com",
  messagingSenderId: "233512082625",
  appId: "1:233512082625:web:7f46be36e31a23ae2ec840",
  measurementId: "G-8GPY9V16F5",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
