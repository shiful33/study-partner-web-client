import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import AuthContext from './AuthContext';
;

export const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        user,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;