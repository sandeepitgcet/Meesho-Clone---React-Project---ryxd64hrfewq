// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

export const signUp = async (email, password) => {
    const isError = false;
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
    })
    .catch((error) => {
        isError = true;
        console.log(error);
    });
    
    return {
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
            isError = true;
        });
    return {
        'isError': isError
    };
};