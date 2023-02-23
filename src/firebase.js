
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyC2Eu1_GsU2MXmHeIlWZeyS0oRtHESJ9SY",
    authDomain: "linked-in-clone-b3c80.firebaseapp.com",
    projectId: "linked-in-clone-b3c80",
    storageBucket: "linked-in-clone-b3c80.appspot.com",
    messagingSenderId: "27019093784",
    appId: "1:27019093784:web:f59bde38a2708e54c7a06d",
    measurementId: "G-QZXBXEVVE7"
  };

//   initialize The FireBase App
const firebaseApp = initializeApp(firebaseConfig)
// Get Fire Store
const db = getFirestore(firebaseApp);

// give access to authentiucation
const auth = getAuth(firebaseApp);

export{db,auth};