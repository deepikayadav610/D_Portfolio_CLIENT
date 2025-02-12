import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Navbar (Fixed Top) */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    {/* Logo Section */}
                    <Link className="navbar-brand" to={"/"}>
                        <strong>°Dee℘iҜส°<span>Ƴส∂คv࿐</span> </strong>
                    </Link>

                    {/* Navbar Toggle Button for Mobile */}
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#" className='nav-link'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className='nav-link'>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className='nav-link'>Skills & Certifications</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className='nav-link'>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#experience" className='nav-link'>Experience/Internships</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className='nav-link'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                <ul className="sidebar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills & Certifications</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
