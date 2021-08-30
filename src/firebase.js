import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  //Enter your API key from firebase
});

export const auth = app.auth();
export default app;
