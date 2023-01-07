import React, { useMemo, createContext, useContext, useEffect, useState } from 'react'
import {signInWithPopup, onAuthStateChanged,  signOut} from "firebase/auth";
import { auth, provider } from "../Firebase";



const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {

    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };

  const logOut = () => {
    signOut(auth)
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    // console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({googleSignIn, user, logOut}), []);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
