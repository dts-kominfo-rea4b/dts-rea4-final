// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiKFkoI4aCLCKfoz1niRAMNSoNoSffmdk",
    authDomain: "dts-rea4b-38-final.firebaseapp.com",
    projectId: "dts-rea4b-38-final",
    storageBucket: "dts-rea4b-38-final.appspot.com",
    messagingSenderId: "726450444348",
    appId: "1:726450444348:web:ae88bcd41a32f532ab0b39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
