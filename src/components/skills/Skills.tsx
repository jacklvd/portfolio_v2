import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';
import "../styles/skills.scss";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title" style={{ color: "var(--title-color-dark)" }}>Tech Stacks</h2>
            <span className="section_subtitle">Some of my technical skills</span>

            <div className="skills_container container grid">
                <Frontend />
                <Backend />
                <Tools />
            </div>
        </section>
    );
};

export default Skills;