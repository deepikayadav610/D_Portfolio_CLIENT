import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { AppContext } from '../../context/App_Context'
import './Contact.css'
import profile from './img/deepikamumbai.jpeg';
import {ToastContainer, toast, Bounce} from 'react-toastify';
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
    const navigate = useNavigate();
    const { contact} = useContext(AppContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        if (typeof contact === 'function') {
            const result = await contact(name, email, message);

            toast.success(result.message, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            console.log(result);

            if (result.message === "Message sent successfully!") {
                setTimeout(() => {
                    navigate('/')
                }, 2500);
            }
        } else {
            console.error("ContactMe function is not available.");
        }
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".contact-section");
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const triggerHeight = window.innerHeight * 0.75;

                if (sectionTop < triggerHeight) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`contact-section ${isVisible ? "visible" : ""}`} id="contact">
                <div className="profile">
                    <img src={profile} alt="Profile" />
                    <h3>Deepika Yadav</h3>
                    <p>Let’s collaborate and create something extraordinary!</p>
                    <div className="contact-links">
                        <a href="https://linkedin.com/in/deepika-yadav-5a3502274" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                        <a href="https://github.com/deepikayadav610" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                        <a href="mailto:deepikaydv6104@example.com">
                            <FaEnvelope className="icon" />
                        </a>
                    </div>
                </div>

                <form onSubmit={submitHandler} className="contact-form">
                    <h3>Send Me a Message</h3>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required />
                    <textarea className="form-control"
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <ToastContainer/>
        </>
    );
};

export default ContactMe;
