import * as firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAfLgkTOs85lj_U2MsPg53LHI3asnIN9uM",
    authDomain: "database-b250b.firebaseapp.com",
    databaseURL: "https://database-b250b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database-b250b",
    storageBucket: "database-b250b.appspot.com",
    messagingSenderId: "301571011431",
    appId: "1:301571011431:web:38d60a701ba2f192d3b5c2",
    measurementId: "G-NPNBGG8BSH"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  