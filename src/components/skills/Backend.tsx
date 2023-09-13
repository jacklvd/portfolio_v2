const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title" style={{ color: "var(--title-color-dark)" }}>Backend Developer</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bxl-python skills_icon'></i>
                        <div>
                            <h3 className="skills_name">Python</h3>
                            <span className="skills_level">Proficiency</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className='bx bxl-c-plus-plus skills_icon' ></i>
                        <div>
                            <h3 className="skills_name">C++</h3>
                            <span className="skills_level">Proficiency</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className='bx bxl-django skills_icon'></i>
                        <div>
                            <h3 className="skills_name">Django</h3>
                            <span className="skills_level">Familiar</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className='bx bxl-nodejs skills_icon'></i>
                        <div>
                            <h3 className="skills_name">NodeJS</h3>
                            <span className="skills_level">Familiar</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bxl-java skills_icon'></i>
                        <div>
                            <h3 className="skills_name">Java</h3>
                            <span className="skills_level">Proficiency</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className="bx bx-data skills_icon"></i>
                        <div>
                            <h3 className="skills_name">SQLite</h3>
                            <span className="skills_level">Familiar</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className='bx bxl-flask skills_icon'></i>
                        <div>
                            <h3 className="skills_name">Flask</h3>
                            <span className="skills_level">Familiar</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <i className='bx bxl-firebase skills_icon'></i>
                        <div>
                            <h3 className="skills_name">FireBase</h3>
                            <span className="skills_level">Familiar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;