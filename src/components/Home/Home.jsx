import React from 'react';
import deepikayadav from './img/deepikayadav.png';
import './Home.css';
import resume from './docs/resumeDeepika.pdf'

const Home = () => {
    return (
        <div className="home-container mt-5">
            <div className="home-content ">
                <div className="image-container">
                    <img src={deepikayadav} alt="Deepika Yadav" className="profile-image" />
                </div>
                <div className="text-container">
                    <p className="intro-text">
                        I'm a <span className="highlight">Full Stack Web Developer & App Developer.</span>
                    </p>
                    <p className='intro-content'>Hi, I’m <span className="highlight"> Deepika Yadav,</span> a dedicated Full-Stack Web Developer from Mumbai, India📍. With a deep passion for technology, I’m constantly exploring new ways to innovate and create seamless web and app solutions. I’m always excited to tackle new challenges and contribute to impactful projects.</p>
                    <a href={resume} className="btn btn-custom resume-button mt-2" download>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
