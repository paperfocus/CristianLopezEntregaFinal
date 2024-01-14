
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnJab5RzyRlLtD9GvGiz8hhzVBCTwKM-s",
  authDomain: "proyectofinal-9fab0.firebaseapp.com",
  projectId: "proyectofinal-9fab0",
  storageBucket: "proyectofinal-9fab0.appspot.com",
  messagingSenderId: "362846500027",
  appId: "1:362846500027:web:eb87858de062bbf054e59e",
  measurementId: "G-VLW28RW0KY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('DB Object:', db); // Agrega esta línea para imprimir db en la consola

export { db };

/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: "G-VLW28RW0KY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('DB Object:', db); // Agrega esta línea para imprimir db en la consola

export { db }; */