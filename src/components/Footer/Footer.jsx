import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Importing CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© {new Date().getFullYear()} Deepika Yadav. All Rights Reserved.</p>
                <div className="social-icons">
                    <a href="https://linkedin.com/in/deepika-yadav-5a3502274" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon-btn linkedin" />
                    </a>
                    <a href="https://github.com/deepikayadav610" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon-btn github" />
                    </a>
                    <a href="mailto:deepikaydv6104@example.com">
                        <FaEnvelope className="icon-btn email" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
