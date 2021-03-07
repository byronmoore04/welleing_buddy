import firebase from "firebase/app";
import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAyBVfmwl7Mzvr-cTxEErzFnFUvx4gAF5Y",
  authDomain: "wellbeing-buddy.firebaseapp.com",
  projectId: "wellbeing-buddy",
  storageBucket: "wellbeing-buddy.appspot.com",
  messagingSenderId: "714633287482",
  appId: "1:714633287482:web:ee3dd102975bec1da42203"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

/*
if (window.location.hostname.includes("localhost")) {
  auth.useEmulator("http://localhost:9099");
  database.useEmulator("localhost", 9000);
}
*/


export default firebase;