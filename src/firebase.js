import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const app = firebase.initializeApp({
    apiKey: 'AIzaSyBRPqcUcmZgyofiTRoNtMWe4L18_1GMxZM',
    authDomain: 'auth-app-db14e.firebaseapp.com',
    projectId: 'auth-app-db14e',
    storageBucket: 'auth-app-db14e.appspot.com',
    messagingSenderId: '1065204019570',
    appId: '1:1065204019570:web:f351ba8e3a86a18f81adeb'
});

export const auth = app.auth();
export default app
