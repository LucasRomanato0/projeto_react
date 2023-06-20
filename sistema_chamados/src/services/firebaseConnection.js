import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBx0nf3FvSb8yVCRomR9fFPPDgHvCfCuh4",
  authDomain: "sistema-chamados-e820f.firebaseapp.com",
  projectId: "sistema-chamados-e820f",
  storageBucket: "sistema-chamados-e820f.appspot.com",
  messagingSenderId: "429801579173",
  appId: "1:429801579173:web:23a746392fd2d686a3234c",
  measurementId: "G-1VRGMZ83PM",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
