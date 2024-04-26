import React, { createContext, useState, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export const AuthContext = createContext(); 

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));

    const login = (token, userData) => {
        localStorage.setItem('token', token);
        setAuthToken(token);
        localStorage.setItem('userData', JSON.stringify(userData));
        setUserData(userData);

        const decodedToken = jwtDecode(token);
        const userRoles = decodedToken.roles;

        console.log(userData);
        console.log('Roles del usuario:', userRoles);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthToken(null);
        localStorage.removeItem('userData');
        setUserData(null);
    };

    const isAuthenticated = !!authToken;

    return (
        <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

