// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfz4rbca2xdQTkj0eFKxd7GmCp70FzWhE",
    authDomain: "gtv-tvolution.firebaseapp.com",
    projectId: "gtv-tvolution",
    storageBucket: "gtv-tvolution.appspot.com",
    messagingSenderId: "291450058043",
    appId: "1:291450058043:web:8683b11f7a41c90e4cb31e",
    databaseURL:'https://gtv-tvolution-default-rtdb.asia-southeast1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);