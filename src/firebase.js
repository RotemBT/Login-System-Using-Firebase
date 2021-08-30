import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAe-KHVfaugniyj3GB_Etj2WI1LEx7-01Q",
  authDomain: "auth-development-82fb9.firebaseapp.com",
  databaseURL: "https://auth-development-82fb9-default-rtdb.firebaseio.com",
  projectId: "auth-development-82fb9",
  storageBucket: "auth-development-82fb9.appspot.com",
  messagingSenderId: "747038168401",
  appId: "1:747038168401:web:b442aadc5fe93596e8af70",
});

export const auth = app.auth();
export default app;
