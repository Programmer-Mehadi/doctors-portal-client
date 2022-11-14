// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: Process.env.REACT_APP_apiKey,
    authDomain: Process.env.REACT_APP_authDomain,
    projectId: Process.env.REACT_APP_projectId,
    storageBucket: Process.env.REACT_APP_storageBucket,
    messagingSenderId: Process.env.REACT_APP_messagingSenderId,
    appId: Process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;