import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";

const NavBar = () => {

    const smoothScrollTo = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const element = document.getElementById('about, skills, journey, gallery, contact');
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
                        {/* <Link activeClass='active-link' smooth spy to='about'> */}
                        <li className="nav_item">
                            <a href="" className="nav_link" onClick={smoothScrollTo}>
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>
                        {/* </Link>
                        <Link activeClass='active-link' smooth spy to='skills'> */}
                        <li className="nav_item">
                            <a href="" className="nav_link" onClick={smoothScrollTo}>
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>
                        {/* </Link>
                        <Link activeClass='active-link' smooth spy to='journey'> */}
                        <li className="nav_item">
                            <a href="" className="nav_link" onClick={smoothScrollTo}>
                                <i className="uil uil-scenery nav_icon"></i> Journey
                            </a>
                        </li>
                        {/* </Link>
                        <Link activeClass='active-link' smooth spy to='gallery'> */}
                        <li className="nav_item">
                            <a href="" className="nav_link" onClick={smoothScrollTo}>
                                <i className="uil uil-images nav_icon"></i> Gallery
                            </a>
                        </li>
                        {/* </Link>
                        <Link activeClass='contact' smooth spy to='contact'> */}
                        <li className="nav_item">
                            <a href="" className="nav_link" onClick={smoothScrollTo}>
                                <i className="uil uil-message nav_icon"></i> Contact
                            </a>
                        </li>
                        {/* </Link> */}
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