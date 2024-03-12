// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_yWhdNOnykHnN_2Z-JtQAgfsk_QGtyCI",
    authDomain: "atmosense-7607c.firebaseapp.com",
    databaseURL: "https://atmosense-7607c-default-rtdb.firebaseio.com",
    projectId: "atmosense-7607c",
    storageBucket: "atmosense-7607c.appspot.com",
    messagingSenderId: "234490515284",
    appId: "1:234490515284:web:a1081506da96cf579e82c1"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);