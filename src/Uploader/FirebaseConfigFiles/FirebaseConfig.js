// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvJ7DsI9Sho86TNS1VVyP8OVYuv1PnOjM",
    authDomain: "agouraanimalshelter-384a9.firebaseapp.com",
    projectId: "agouraanimalshelter-384a9",
    storageBucket: "agouraanimalshelter-384a9.appspot.com",
    messagingSenderId: "118210697007",
    appId: "1:118210697007:web:25c60d5840c99134a173da",
    measurementId: "G-SSVR2JXZ2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);