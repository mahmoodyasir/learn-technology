import React, {createContext, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth'
import app from "../Firebase/firebase.config";
import useLocalStorage from 'use-local-storage'


export const AuthContext = createContext();
export const ThemeContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pdfdata, setPdfdata] = useState("");

    const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {user, loading, setLoading, setUser, pdfdata, setPdfdata, createUser, updateUserProfile, signIn, logOut, providerLogin}

    const themInfo = {theme, setTheme}
    return (
        <AuthContext.Provider value={authInfo}>
            <ThemeContext.Provider value={themInfo}>
                {children}
            </ThemeContext.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
