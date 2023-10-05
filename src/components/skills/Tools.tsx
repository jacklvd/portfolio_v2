import { motion } from 'framer-motion'

const Tools = () => {
    return (
        <div className="skills_content">
            <h3
                className="skills_title"
                style={{ color: 'var(--title-color-dark)' }}
            >
                Developer Tools
            </h3>

            <div className="skills_box">
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delayChildren: 0.8 }}
                    className="skills_box"
                >
                    <div className="skills_group">
                        <div className="skills_data">
                            <i className="bx bxl-github skills_icon"></i>
                            <div>
                                <h3 className="skills_name">GitHub</h3>
                                <span className="skills_level">
                                    Proficiency
                                </span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <i className="bx bxl-figma skills_icon"></i>
                            <div>
                                <h3 className="skills_name">Figma</h3>
                                <span className="skills_level">
                                    Proficiency
                                </span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <i className="bx bxl-visual-studio skills_icon"></i>
                            <div>
                                <h3 className="skills_name">VSCode</h3>
                                <span className="skills_level">
                                    Proficiency
                                </span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <i className="bx bx-terminal skills_icon"></i>
                            <div>
                                <h3 className="skills_name">Terminal</h3>
                                <span className="skills_level">
                                    Proficiency
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="skills_group">
                        <div className="skills_data">
                            <i className="bx bxl-git skills_icon"></i>
                            <div>
                                <h3 className="skills_name">Git</h3>
                                <span className="skills_level">
                                    Proficiency
                                </span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <i className="bx bxl-netlify skills_icon"></i>
                            <div>
                                <h3 className="skills_name">Netlify</h3>
                                <span className="skills_level">Familiar</span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <i className="bx bxl-markdown skills_icon"></i>
                            <div>
                                <h3 className="skills_name">Markdown</h3>
                                <span className="skills_level">
                                    Proficiency
                                </span>
                            </div>
                        </div>
                        <div className="skills_data">
                            <i className="bx bxl-gitlab skills_icon"></i>
                            <div>
                                <h3 className="skills_name">GitLab</h3>
                                <span className="skills_level">Familiar</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Tools
