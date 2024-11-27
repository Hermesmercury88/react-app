import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('token');
        return token ? { token } : null;  // Adjust this based on how you want to handle the user state
    });  // Adjust based on how you manage authentication
    console.log(user)
    const login = (token) => {
        setUser({ token });
        localStorage.setItem('token', token);  // Store the token in localStorage under 'token' key
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};