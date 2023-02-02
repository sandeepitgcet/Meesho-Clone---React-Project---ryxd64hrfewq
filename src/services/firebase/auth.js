// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as signOutFirebase } from "firebase/auth";
import { doc, getDoc, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZZh2fpKcvOyKSllhw7CYUAkWRzZ2acU",
  authDomain: "myshop-d8e99.firebaseapp.com",
  projectId: "myshop-d8e99",
  storageBucket: "myshop-d8e99.appspot.com",
  messagingSenderId: "113102324625",
  appId: "1:113102324625:web:b607badda251c88e04d030"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export const signUp = async (email, password) => {
    const isError = false;
    
    const USER = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => userCredential)
        .catch((error) => {
            //isError = true;
            console.error(error);
            return error;
        });
    //console.log(USER);
    return {
        ...USER,
        'isError': isError
    };
};

export const signIn = async (email, password) => {
    const isError = false;
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {  
            console.error(error);
            //isError = true;
        });
    return {
        'isError': isError
    };
};

export const signOutLogin = async () => {
    signOutFirebase(auth).then(() => {
        console.log("signed out");
      }).catch((error) => {
        console.log("signed out");
      });
}

export const addUser = async (userId,user) => {
    const res = await addDoc(collection(db, "users"), {...user,'uid':userId}).catch((error) => {
        console.log("Error is "+error);
    });
    console.log(res);
    return res;
}

