'use client'
import { useState } from 'react';
import Image from 'next/image';
import hamburgerIcon from '../assets/hamburger.png'; 

function NavBar() {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative bg-purple-800 p-3">
            <div className="flex items-center justify-between w-full mx-auto">
                <p className="text-white">SFU SURGE</p>
                <div className="hidden md:flex space-x-4 text-white">
                    <ul className="flex space-x-4">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>EVENTS</li>
                        <li>SPONSOR US</li>
                        <li>JOIN OUR TEAM</li>
                    </ul>
                </div>
                <button
                    className="md:hidden relative"
                    onClick={toggleMenu}
                >
                    <Image 
                        src={hamburgerIcon} 
                        alt="Menu Icon" 
                        width={40} 
                        height={40} 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                </button>
            </div>

            <div className={`fixed inset-0 bg-purple-800 text-white p-6 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button 
                    className="absolute top-4 right-4"
                    onClick={toggleMenu}
                >
                    <Image 
                        src={hamburgerIcon} 
                        alt="Close Menu" 
                        width={40} 
                        height={40} 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                    />
                </button>
                <ul className="mt-12 space-y-4">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>EVENTS</li>
                    <li>SPONSOR US</li>
                    <li>JOIN OUR TEAM</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
