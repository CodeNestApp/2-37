import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TO DO ENV
const firebaseConfig = {
  apiKey: "AIzaSyBJP2-Ll0IAs6e8p4Ov5G23H2waM_a8mK0",
  authDomain: "notes-app-89021.firebaseapp.com",
  projectId: "notes-app-89021",
  storageBucket: "notes-app-89021.appspot.com",
  messagingSenderId: "581247208203",
  appId: "1:581247208203:web:c55c667d241aa7dc32300e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
