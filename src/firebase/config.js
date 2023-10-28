import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // your firebase config
  apiKey: "AIzaSyDRWfXYnB4CW14RdrpNwLdO-kg3YF8jKrg",
  authDomain: "meet-the-middle-f26a7.firebaseapp.com",
  projectId: "meet-the-middle-f26a7",
  storageBucket: "meet-the-middle-f26a7.appspot.com",
  messagingSenderId: "253637528600",
  appId: "1:253637528600:web:df86e1c748458df678c76d",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
