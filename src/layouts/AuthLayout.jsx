import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div>
            <Navbar darkMode={darkMode} toggleTheme={toggleTheme}></Navbar>
            <Outlet></Outlet>
            <Footer darkMode={darkMode}></Footer>
        </div>
    );
};

export default AuthLayout;