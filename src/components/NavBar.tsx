import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";

const NavBar = () => {

    const smoothScrollTo = (e: string) => {
        const element = document.getElementById(e);
        element?.scrollIntoView({
            block: 'start',
            behavior: 'smooth' // smooth scroll
        })
    };

    /*============== Show Menu ==============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 100) header?.classList.add("scroll-header");
        else header?.classList.remove("scroll-header");
    });

    /*============== Toggle Menu ==============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className='header'>
            <nav className='nav container'>
                <Link to="/" className={activeNav === "#home" ?
                    "nav_logo active-link" : "nav_logo"} id='home'
                    onClick={() => setActiveNav('#home')}>JACKV.DEV
                </Link>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <div className="nav_link" onClick={() => smoothScrollTo('about')}>
                                <i className="uil uil-user nav_icon"></i> About
                            </div>
                        </li>
                        <li className="nav_item">
                            <div className="nav_link" onClick={() => smoothScrollTo('journey')}>
                                <i className="uil uil-scenery nav_icon"></i> Journey
                            </div>
                        </li>
                        <li className="nav_item">
                            <div className="nav_link" onClick={() => smoothScrollTo('work')}>
                                <i className="uil uil-file-alt nav_icon"></i> Work
                            </div>
                        </li>
                        <li className="nav_item">
                            <div className="nav_link" onClick={() => smoothScrollTo('gallery')}>
                                <i className="uil uil-images nav_icon"></i> Gallery
                            </div>
                        </li>
                        <li className="nav_item">
                            <div className="nav_link" onClick={() => smoothScrollTo('contact')}>
                                <i className="uil uil-message nav_icon"></i> Contact
                            </div>
                        </li>
                        <li className="nav_item">
                            <a href="https://drive.google.com/file/d/1RuUkVwUtv5crPAh-cS6EjJ1UAL4xw2Yd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav_link">
                                <i className="uil uil-folder nav_icon"></i> Resume
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    );
};

export default NavBar;