import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../../assets/images/hero.png'
import Resume from '../../assets/files/Resume.pdf'
import '../styles/about.scss'

interface ReadMoreProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className="uil uil-language about_icon"></i>
                <h3 className="about_title">Languages</h3>
                <span className="about_subtitle">Vietnamese, English</span>
            </div>

            <div className="about_box">
                <i className="uil uil-music about_icon"></i>
                <h3 className="about_title">Hobbies</h3>
                <span className="about_subtitle">Reading, Listening</span>
            </div>

            <div className="about_box">
                <i className="uil uil-graduation-cap about_icon"></i>
                <h3 className="about_title">Graduation</h3>
                <span className="about_subtitle">May, 2025</span>
            </div>
        </div>
    )
}

const ReadMore: React.FC<ReadMoreProps> = ({ children }) => {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }
    return (
        <p className="about_description">
            {isReadMore ? text.slice(0, 2) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? ' READ MORE...' : ' ...READ LESS'}
            </span>
        </p>
    )
}

const About = () => {
    return (
        <section className="about section" id="about">
            <h2
                className="section_title"
                style={{ color: 'var(--title-color-dark)' }}
            >
                About Me
            </h2>
            <span className="section_subtitle">Let's get to know me</span>

            <div className="about_container container grid">
                <img src={Hero} alt="Myself" className="about_img" />

                <div className="about_data">
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delayChildren: 0.8 }}
                        className="about_data"
                    >
                        <Info />
                        <ReadMore>
                            <span role="img">👋🏻</span> Hi, I'm Long, but also go
                            by Jack. I'm a rising senior at the University of
                            Cincinnati. I'm pursuing a BS degree in Computer
                            Science with an anticipated graduation in May 2025.
                            I'm most passionate about solving real world
                            problems, advocating sustainability, and building
                            community-driven applications.
                            <br />
                            <br />
                            <span role="img">✨</span> I appreciate every
                            challenge I came across that helped cultivate my
                            self-efficacy in this risk-taking world. At STEAM
                            for Vietnam, I have a chance to work with many great
                            and talented people to delivery high-end computer
                            science course to Vietnamese children. I learned the
                            importance of staying open-minded to changes,
                            whether to be adapted to new environment,
                            programming languages, or attitudes. I feel
                            motivated as I discover ways to improve flexibility
                            and creative through ongoing discussions with others
                            to address a customer's changing needs.
                            <br />
                            <br />
                            <span role="img">⛱️</span> I love cleaning and
                            organize my workplace. I feel like if I can keep my
                            work area clean, I can successfully do other things
                            as well. I love reading and listening. I used to
                            spend hours to read the History of Greek ~quite
                            interesting indeed~. Coming to American, I found out
                            that I actually enjoy cooking for my friends as it
                            can help me to relieve stress from working and
                            studying.
                            <br />
                            <br />
                            <span role="img">🗽</span> What motivates me to get
                            up and get ready for work is the knowledge that I
                            have another opportunity to deliver love and
                            camaraderie to my neighborhood. I thrive in
                            occupations that promote variety and culture, and I
                            appreciate working with people from all walks of
                            life to achieve a common goal. Not only do I regard
                            it as an opportunity to gain new knowledge, but also
                            to connect profoundly with individuals through their
                            diverse perspectives on situations. I strive to be a
                            team player, to be aware of those around me's needs
                            and desires, and to thrive on positive
                            reinforcement.
                        </ReadMore>

                        <a
                            download={''}
                            href={Resume}
                            className="button button-flex about_button"
                        >
                            D O W N L O A D C V
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
