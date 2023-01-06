import { useContext, createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
         from "firebase/auth";

import { auth } from "../Firebase";
 
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
    };


const logOut = () => (
    signOut(auth)
)

useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    // console.log('User, currentUser');
    });
    return () => {
        unsubscribe();
    }
},[])

    return (
        <AuthContextProvider value ={{ googleSignIn, logOut, user }}>
                {children}
        </AuthContextProvider>
    )
    }


export const UserAuth = () => {return useContext(AuthContext)}
