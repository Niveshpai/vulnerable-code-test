import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// Your web app's Firebase configuration
var Config = {
  apiKey: "AIzaSyBLU4D7wK63XzawKB_TNTKRhwQNFLHx2Ow",
  authDomain: "my-new-app-b12c3.firebaseapp.com",
  projectId: "my-new-app-b12c3",
  storageBucket: "my-new-app-b12c3.appspot.com",
  messagingSenderId: "501118413310",
  appId: "1:501118413310:web:6b691e6abc3f516b6878af"
};

// Initialize Firebase
const fire = firebase.initializeApp(Config);
export default fire;