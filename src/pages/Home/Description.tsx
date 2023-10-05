import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Description = () => {
    return (
        <div className="home_data">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="home_data"
            >

                <h3 className="home_intro">Hi, my name is</h3>
                <h1 className="home_title">Jack Vo</h1>
                <h3 className="home_subtitle">
                    <Typewriter
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {

                            typewriter

                                .typeString("a Curious Scholar")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("a Technology Lover")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("a Problem Solver")
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </h3>
                <p className="home_description">Welcome to my world, where it is full of stars even in the morning!</p>

                <Link to="/portfolio" className="button button-flex home_button">
                    P O R T F O L I O <i className="uil uil-arrow-right button_icon"></i>
                </Link>
            </motion.div>

        </div>
    );
};

export default Description;