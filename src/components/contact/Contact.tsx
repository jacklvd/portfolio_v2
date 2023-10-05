import '../styles/contact.scss'

const Media = () => {
    return (
        <div className="media_info grid">
            <a
                href="https://www.instagram.com/jacklvd_/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="media_box">
                    <i className="uil uil-instagram media_icon"></i>
                    <h3 className="media_title">jacklvd</h3>
                </div>
            </a>
            <a
                href="https://github/jacklvd"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="media_box">
                    <i className="uil uil-github-alt media_icon"></i>
                    <h3 className="media_title">jacklvd</h3>
                </div>
            </a>
            <a
                href="https://www.linkedin.com/in/itsmejack"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="media_box">
                    <i className="uil uil-linkedin-alt media_icon"></i>
                    <h3 className="media_title">itsmejack</h3>
                </div>
            </a>
        </div>
    )
}

const Script = () => {
    return (
        <div className="content_container">
            <p className="contact_content">
                Feel free to reach out to me. I am always opened to connect and
                discuss projects.
                <br />
                Also, I am willing to take the opportunities to be part of your
                vision!
            </p>
            <div className="social_container"></div>
        </div>
    )
}

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2
                className="section_title"
                style={{ color: 'var(--title-color-dark)' }}
            >
                Let's Connect
            </h2>
            <span className="section_subtitle">Stay in touch</span>
            <div className="contact_container container grid">
                <Media />
                <Script />
            </div>
        </section>
    )
}

export default Contact
