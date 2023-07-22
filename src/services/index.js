import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "../firebase.js";

export const StartFirebase = () => {
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
};
