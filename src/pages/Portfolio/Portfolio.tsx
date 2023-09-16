import NavBar from "../../components/NavBar";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Journey from "../../components/journey/Journey";
import Work from "../../components/work/Work";
import Polaroids from "../../components/polaroid/Polaroids";

const Portfolio = () => {
    return (
        <>
            <NavBar />

            <main className="main">
                <About />
                <Skills />
                <Journey />
                <Work />
                <Polaroids />
            </main>

        </>
    );
}
export default Portfolio;