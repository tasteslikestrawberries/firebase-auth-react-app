import React, {useContext, useState, useEffect} from 'react'

//services
import { auth } from '../firebase';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, pasword){
        return auth.createUserWithEmailAndPassword(email,pasword)
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    

    const value={
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
