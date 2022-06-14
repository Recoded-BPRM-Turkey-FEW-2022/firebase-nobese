// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const fbConfig = {
  // @TODO: Insert your firebase config
};

// Initialize Firebase
const app = initializeApp(fbConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export default app;
