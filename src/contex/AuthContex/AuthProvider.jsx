import React, { useEffect, useState } from 'react';
import AuthContex from './AuthContex';
import auth from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signInUser =(email,password)=>{
         setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth,GoogleProvider)
    }

    const userSignOut = ()=>{
        return signOut(auth)
    }



    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
         console.log("Firebase auth state changed:", currentUser);
            setUser(currentUser);
            // console.log("captured", currentUser)
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        userSignOut
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;