import React from 'react'
import deepikaImg from './img/deepikamumbai.jpeg'
import './About.css'

const About = () => {
    return (
        <>
            <div className="about-container" id='about'>
                <h1 className='text-center mb-2'>About Me</h1>
                <div className="about-content ">
                    <div className="about-text p-4">
                        <div className="img-section ">
                            <img src={deepikaImg} alt="deepika" />
                        </div>
                        <p className="">Hi, I’m <span>Deepika Yadav</span>, a dedicated and passionate web
                            developer with a solid
                            foundation in <span>Computer Science</span> &
                            Engineering. Currently pursuing my <span>B.Tech</span> with a CGPA of 7.50, I have developed
                            expertise in web
                            technologies like <span>HTML,
                                CSS, JavaScript, ReactJS, Node.js, and databases like MySQL & MongoDB</span>. My experience spans
                            multiple
                            virtual
                            internships where I
                            honed my skills in building responsive, dynamic web applications.
                            <br />
                            I’m continuously learning and applying new technologies, including <span>Flutter,
                                Dart,
                                and
                                Python</span>, to solve real-world
                            problems and create user-friendly web solutions. I'm actively seeking opportunities to grow
                            professionally
                            and expand my
                            knowledge in both <span>web development and app development with backend integration</span>.
                        </p>
                    </div>
                    <div className="education-container mt-4" id="education">
                        <h3>My Education</h3>
                        <div className="education">

                            <div className="education-item">
                                <div className="education-content">
                                    <p><b>Bachelor of Technology (B.Tech) in Computer Science & Engineering</b></p>
                                    <p>Deen Dayal Upadhyaya Gorakhpur University Gorakhpur</p>
                                    <p><i>November 2021 - Present</i></p>
                                    <p><b>CGPA:</b> 7.50/10</p>
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="education-content">
                                    <p><b>Senior Secondary (12th Grade)</b></p>
                                    <p>Central Public Academy, Chauri Chaura, Gorakhpur</p>
                                    <p><i>April 2020 - March 2021</i></p>
                                    <p><b>Percentage:</b> 73.6%</p>
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="education-content">
                                    <p><b>Secondary (10th Grade)</b></p>
                                    <p>Central Public Academy, Chauri Chaura, Gorakhpur</p>
                                    <p><i>April 2018 - March 2019</i></p>
                                    <p><b>Percentage:</b> 84.6%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About