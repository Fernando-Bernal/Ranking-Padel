// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = JSON.parse('{"apiKey":"AIzaSyBJz89OB0fqHtCq61aWogdkoF2opzB-TAY","authDomain":"ranking-padel.firebaseapp.com","databaseURL":"https://ranking-padel-default-rtdb.firebaseio.com","projectId":"ranking-padel","storageBucket":"ranking-padel.appspot.com","messagingSenderId":"659548584366","appId":"1:659548584366:web:43fed65d76d925c297703f"}') 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);


export default app;