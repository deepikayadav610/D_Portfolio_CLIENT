import React, { useEffect, useRef, useState } from "react";
import "./Experience.css"; // Make sure to include the CSS

const Experience = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stops observing after animation triggers
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={`experience-section ${isVisible ? "visible" : ""}`} id="experience">
            <h3 className="text-center mb-5">Experience/Internships</h3>
            <div className="experience-content">
                <p className="text-center p-3">
                    <span>Technology Intern -</span> Innovage Fintech Private Limited: Jun 2024 - Sep 2024
                    <br />
                    I recently completed a Summer Internship at Innovage Fintech Private Limited (June 2024 - September 2024) in Mumbai. During this internship, I contributed to a variety of exciting projects, such as:
                </p>
                <ul>
                    <li>Flutter POC-1</li>
                    <li>Flutter POC-2</li>
                    <li>5nance Emailer HTML</li>
                    <li>Fin Score Web Design</li>
                </ul>
                <p className="text-center p-3">
                    <span>Web Development Internships (Virtual):</span> Jul 2023 - Sep 2023
                    <br />

                    Focused on dynamic front-end and back-end features to improve user experience.
                </p>
            </div>
        </div>
    );
};

export default Experience;
