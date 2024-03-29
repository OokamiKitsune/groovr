"use client"
import React from "react";
import { useRouter } from 'next/navigation';


const NavBar: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <nav className="navbar">
            <a href="/" onClick={() => handleNavigation("/")}>Profile</a>
            <a href="/settings" onClick={() => handleNavigation("/settings")}>Settings</a>
            <a href="/about" onClick={() => handleNavigation("/about")}>About</a>
        </nav>
    );
}

export default NavBar;