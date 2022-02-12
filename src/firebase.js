import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/database"
import "firebase/storage"


export const firebaseConfig = {
    apiKey: "AIzaSyC_IEp-n7zWNERpT7drUKlb6vxUazFmiEk",
    authDomain: "reproduccionrst.firebaseapp.com",
    databaseURL: "https://reproduccionrst-default-rtdb.firebaseio.com",
    projectId: "reproduccionrst",
    storageBucket: "reproduccionrst.appspot.com",
    messagingSenderId: "1072709149528",
    appId: "1:1072709149528:web:a3e3961172c7cacce8fb2d",
    measurementId: "G-0XY4XPESBM"
  };
  
  firebase.initializeApp(firebaseConfig);
  export var storage = firebase.storage();
  export const auth = firebase.auth;
  export default firebase