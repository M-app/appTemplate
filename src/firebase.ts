import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDbm_aM7BmG4WSWX00ZDxUE0UBHvaxtIqA",
    authDomain: "ffas-c64e1.firebaseapp.com",
    projectId: "ffas-c64e1",
    storageBucket: "ffas-c64e1.appspot.com",
    messagingSenderId: "1095185871185",
    appId: "1:1095185871185:web:7be2d17cd8e9a1815e6370"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth()
   
   export { auth, firebase}