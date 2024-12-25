import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    
    const [ user, setUser ] = useState(null);
    console.log(user);
    //for registration
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    //for login
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        return signOut(auth);
    };
    //observe login
    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });
        return ()=>unsubscriber; //component will unmount from firebase

    }, []);

    const authInfo = {
        user,
        setUser,
        signInUser,
        createUser,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;