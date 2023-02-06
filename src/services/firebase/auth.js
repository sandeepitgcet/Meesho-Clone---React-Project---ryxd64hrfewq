// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as signOutFirebase } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { updateProfile } from 'firebase/auth';
import process from "process";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env)

const firebaseConfig = {
    apiKey: 'AIzaSyCHZZh2fpKcvOyKSllhw7CYUAkWRzZ2acU',
    authDomain: 'myshop-d8e99.firebaseapp.com',
    projectId: 'myshop-d8e99',
    storageBucket: 'myshop-d8e99.appspot.com',
    messagingSenderId: '113102324625',
    appId: '1:113102324625:web:b607badda251c88e04d030'
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export const signUp = async (userInput) => {
    const isError = false;
    console.log(userInput);

    const USER = await createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
        .then((userCredential) => {
            console.log("SIgn Up successfull")
            updateProfile(auth.currentUser, {
                displayName:`${userInput.fname} ${userInput.lname}`
            })
            addUser(userCredential.user.uid, userInput);
            return userCredential;
        }).catch((error) => {
            console.error(error);
            return error;
        });
    //console.log(USER);
    return USER;
};

export const signIn = async (email, password) => {
    const isError = false;
    const USER = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {  
            console.log("Error in signIn")
            console.error(error);
            return error;
        });
    return USER;
};

export const signOutLogin = async () => {
    signOutFirebase(auth).then(() => {
        console.log("signed out");
      }).catch((error) => {
        console.log("Error in Sign Out");
        console.log(error)
      });
}

export const addUser = async (userId,user) => {
    const res = await addDoc(collection(db, "users"), {...user,'uid':userId}).catch((error) => {
        console.log("Error is "+error);
    });
    //console.log(res);
    return res;
}

