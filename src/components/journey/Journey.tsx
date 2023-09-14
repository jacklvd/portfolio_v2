/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "../styles/journey.scss"
import { client } from "../../client/client"

const Journey = () => {

    const [toggleState, setToggleState] = useState(2);
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        client.fetch('*[_type == "experience"]').then((data) => setExperiences(data))
            .catch(console.error);
    }, []);

    useEffect(() => {
        client.fetch('*[_type == "education"]').then((data) => setEducations(data))
            .catch(console.error);
    }, []);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <section className="experience section" id="journey">
            <h2 className="section_title" style={{ color: "var(--title-color-dark)" }}>Journey</h2>
            <span className="section_subtitle">My Personal Path</span>

            <div className="experience_container container">
                <div className="experience_tabs">
                    <div className={
                        toggleState === 1
                            ? "experience_button experience_active button-flex"
                            : "experience_button button-flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap experience_icon"></i> Education
                    </div>

                    <div className={
                        toggleState === 2
                            ? "experience_button experience_active button-flex"
                            : "experience_button button-flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt experience_icon"></i> Experience
                    </div>
                </div>

                {/* Education */}
                <div className={
                    toggleState === 1
                        ? "experience_content experience_content-active"
                        : "experience_content"}
                    onClick={() => toggleTab(1)}
                >
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delayChildren: 0.8 }}
                        className="experience_content-active"
                    >
                        <div className="timeline">
                            {educations.map((education: any, index: number) => (
                                <div className={`container_experience ${index % 2 === 0 ? 'left' : 'right'}`} key={education.id}>
                                    <div className="content">
                                        <h3 className="experience_title">{education.title}</h3>
                                        <span className="experience_subtitle">{education.subtitle}</span>
                                        <div className="experience_calendar">
                                            <i className="uil uil-calendar-alt"></i> {education.date}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Experience */}
                <div className={
                    toggleState === 2
                        ? "experience_content experience_content-active"
                        : "experience_content"}
                    onClick={() => toggleTab(2)}
                >
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delayChildren: 0.8 }}
                        className="experience_content-active"
                    >
                        <div className="timeline">
                            {experiences.map((experience: any, index: number) => (
                                <div className={`container_experience ${index % 2 === 0 ? 'left' : 'right'}`} key={experience.id}>
                                    <div className="content">
                                        <h3 className="experience_title">{experience.title}</h3>
                                        <span className="experience_subtitle">{experience.subtitle}</span>
                                        <div className="experience_calendar">
                                            <i className="uil uil-calendar-alt"></i> {experience.date}
                                        </div>
                                        <ul>
                                            {experience.description.map((detail: any) => (
                                                <li className="experience_detail">{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Journey;