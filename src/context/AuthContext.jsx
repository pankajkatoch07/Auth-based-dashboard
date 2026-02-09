import {createContext , useContext, useEffect, useState} from 'react';

//context creater
const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(()=> {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email) => {
        const userData = {email};
        setUser(userData);
        localStorage.setItem("user" , JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        //this is context provider
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
