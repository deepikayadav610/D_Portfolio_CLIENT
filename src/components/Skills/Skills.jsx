import React from 'react';
import './Skills.css';
import frontend from './img/frontend.webp';
import backend from './img/backend.jfif';
import mobiledev from './img/mobile-developer.jpg';
import programmingImg from './img/programmingImg.jpg';
import softSkills from './img/softSkills.webp';

// Certificate Images
import cert1 from './img/nielit-certificate.jpg';
import cert2 from './img/web_development_certificate.png';
import cert3 from './img/linkedin_certificate.jpeg';
import cert4 from './img/NPTELcertificate.jpeg';

const Skills = () => {
    return (
        <div className="skills-container" id='skills'>
            <h3 className='text-center mb-5'>Skills And Certifications</h3>
            <div className="skills-item">
                {[
                    { img: frontend, title: "Front-end Technologies", domain: "HTML, CSS, ReactJS", detail: "Passionate Frontend Developer crafting responsive, user-friendly, and visually appealing web experiences." },
                    { img: backend, title: "Back-end & Databases", domain: "Node.js, MySQL, MongoDB", detail: "Backend Developer proficient in building scalable APIs, managing databases, and ensuring seamless server-side functionality." },
                    { img: mobiledev, title: "Tools & Frameworks", domain: "Flutter, Dart", detail: "Skilled in Flutter & Dart, building cross-platform apps with smooth UI, robust performance, and seamless functionality." },
                    { img: programmingImg, title: "Programming Languages", domain: "JavaScript, Python, PHP", detail: "Proficient in JavaScript, Python, and PHP, developing dynamic web applications and backend solutions with efficiency." },
                    { img: softSkills, title: "Soft Skills", domain: "Collaborative & Efficient", detail: "Effective communicator, team player, problem solver, and strong time management skills." }
                ].map((skill, index) => (
                    <div className="skills-content" key={index}>
                        <img src={skill.img} alt={skill.title} />
                        <h3>{skill.title}</h3>
                        <p className="skills-domain">{skill.domain}</p>
                        <p className="skills-detail">{skill.detail}</p>
                    </div>
                ))}
            </div>
            <div className="certificate-section">
                <h3 className='text-center mt-4 mb-5'>Certifications</h3>
                <div className="certificate-items">
                    <div className="certificate-content">
                        <img src={cert1} alt="certificate1" />
                        <div className="link-btn m-3">
                            <a href={cert1}>Verify</a>
                        </div>
                    </div>
                    <div className="certificate-content">
                        <img src={cert2} alt="certificate1" />
                        <div className="link-btn m-3">
                            <a href="https://trainings.internshala.com/s/v/3280610/1f82c7e2">Verify</a>
                        </div>                    </div>
                    <div className="certificate-content">
                        <img src={cert3} alt="certificate1" />
                        <div className="link-btn m-3">
                            <a href="https://www.linkedin.com/learning/certificates/a353df80a60cabfca8804b0906588cf592c60f81ff506a051751838044c791ab?trk=share_certificate">Verify</a>
                        </div>                    </div>
                    <div className="certificate-content">
                        <img src={cert4} alt="certificate1" />
                        <div className="link-btn m-3">
                            <a href="https://internalapp.nptel.ac.in/NOC/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S95160058903992870.pdf">Verify</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
