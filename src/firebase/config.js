// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd5Xt9HM2m9f-9qMYz0w-_6DMHCr8SobU",
  authDomain: "pixelblog-web.firebaseapp.com",
  projectId: "pixelblog-web",
  storageBucket: "pixelblog-web.appspot.com",
  messagingSenderId: "18367651973",
  appId: "1:18367651973:web:72e17179b750c990ad89ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }