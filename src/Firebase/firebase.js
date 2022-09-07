// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCoP8nvRgpu9U06JKClQvO6pPLifiMSZ9k',
  authDomain: 'rhine-eb4e5.firebaseapp.com',
  projectId: 'rhine-eb4e5',
  storageBucket: 'rhine-eb4e5.appspot.com',
  messagingSenderId: '928284579202',
  appId: '1:928284579202:web:990020c255f15706d8eb9b',
  measurementId: 'G-CDZ3YW7X0M',
};

// Initialize Firebase
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
