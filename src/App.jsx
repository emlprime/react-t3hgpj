import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { initializeApp } from "firebase/app";
​​import {
​​  GoogleAuthProvider,
​​  getAuth,
​​  signInWithPopup,
​​  signInWithEmailAndPassword,
​​  createUserWithEmailAndPassword,
​​  sendPasswordResetEmail,
​​  signOut,
​​} from "firebase/auth";
​​import {
​​  getFirestore,
​​  query,
​​  getDocs,
​​  collection,
​​  where,
​​  addDoc,
​​} from "firebase/firestore";
import './style.css';
import Fight from './Fight';
import { getCurrentUser } from './CurrentUser';

// Configure Firebase.
//TODO remove api key from github
const config = {
  apiKey: "AIzaSyBtTdVWE1AZ1JRENUUiAlzqlIXsaTVhCkc",
  authDomain: "nidaviller-fe.firebaseapp.com",
  projectId: "nidaviller-fe",
  storageBucket: "nidaviller-fe.appspot.com",
  messagingSenderId: "830609655365",
  appId: "1:830609655365:web:7939d7676912521f3f852c",
  measurementId: "G-VYGK0HG7EE"
};
const app = ​​initializeApp(config);
​​const auth = getAuth(app);
​​//const db = getFirestore(app);
// Configure FirebaseUI.


function App() {
  const [isSignedIn, setIsSignedIn] = useState(true); // Local signed-in state.

  
  return (
    <div>
      <h1>Epicurean Brawl</h1>

      <Style>
        <Fight />
      </Style>
    </div>
  );
}

export default App;

const Style = styled.div`
.left {
  color: blue;
} 
.right {
  color: red;
}
`;
