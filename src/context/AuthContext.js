import React, { useContext, useState, useEffect } from 'react';
import { auth, signinWithGoogle } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signinWithGoogle
    }
    
    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
}