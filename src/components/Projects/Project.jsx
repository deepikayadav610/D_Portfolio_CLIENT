import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
    {
        title: "Elegant Flower Product Showcase",
        description: "A visually appealing and responsive landing page for flower products, designed with HTML, CSS, and JavaScript to provide a seamless user experience. 🌸✨",
        liveDemo: "https://deepikayadav610.github.io/flower_product_landing_page/",
        github: "https://github.com/deepikayadav610/flower_product_landing_page.git",
    },
    {
        title: "Minimal & Responsive Calculator",
        description: "A clean and user-friendly calculator built with HTML, CSS, and JavaScript, supporting basic arithmetic operations with a responsive design for all devices. 🔢✨",
        liveDemo: "https://deepikayadav610.github.io/Calculator/",
        github: "https://github.com/deepikayadav610/Calculator.git",
    },
    {
        title: "Delicious Sweets Product Showcase",
        description: "A visually appealing and responsive landing page for sweets items, built with HTML and CSS, for a smooth user experience. 🍬✨",
        liveDemo: "https://deepikayadav610.github.io/sweets_item_landing_page/",
        github: "https://github.com/deepikayadav610/sweets_item_landing_page.git",
    },
    {
        title: "Fun & Engaging Quiz Application",
        description: "A dynamic and responsive quiz app built with HTML, CSS, and JavaScript, featuring multiple questions, instant feedback, and an intuitive user interface. 🎯🧠",
        liveDemo: "https://deepikayadav610.github.io/Quiz_App/",
        github: "https://github.com/deepikayadav610/Quiz_App.git",
    },
    {
        title: "Modern & Responsive E-Learning Platform",
        description: "A user-friendly and responsive e-learning website built with HTML and CSS, offering an intuitive design and smooth navigation for online learning. 📚💻",
        liveDemo: "https://deepikayadav610.github.io/E-learning_website/",
        github: "https://github.com/deepikayadav610/E-learning_website.git",
    },
];

const Project = () => {
    return (
        <section id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn live-demo">
                                Live Demo
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github">
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Project;
