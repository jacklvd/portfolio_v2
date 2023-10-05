import { motion } from 'framer-motion'

function Social() {
    return (
        <div className="home_social">
            <motion.div
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="home_social"
            >
                <a
                    href="https://www.instagram.com/jacklvd_/"
                    className="home_social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="uil uil-instagram"></i>
                </a>
                <a
                    href="https://github.com/jacklvd"
                    className="home_social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="uil uil-github-alt"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/itsmejack/"
                    className="home_social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="uil uil-linkedin-alt"></i>
                </a>
                <a
                    href="https://drive.google.com/file/d/1CCvBSb8x1mBjsLrzZfoGrkdRRLByS_8t/view?usp=sharing"
                    className="home_social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="uil uil-bag-alt"></i>
                </a>
            </motion.div>
        </div>
    )
}

export default Social
