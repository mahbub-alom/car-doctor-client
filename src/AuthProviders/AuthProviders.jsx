import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext= createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const googleProvider = new GoogleAuthProvider();

const signUp = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser (currentUser);
        console.log(currentUser);
        setLoading(false)
        if(currentUser && currentUser.email){
            const loggedUser ={
                email:currentUser.email
              }
            fetch('https://car-doctor-server-black-rho.vercel.app/jwt',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(loggedUser)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log('jwt response',data);
                //warning: local storage is not the best (second best place) to store access token
                localStorage.setItem('car-access-token', data.token);
              })
        }
        else{
            localStorage.removeItem('car-access-token')
        }
    })
    return () =>{
        return unsubscribe;
    }
},[])

const authInfo ={
    user,
    loading,
    signUp,
    signIn,
    logOut,
    googleLogin
    
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
