import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Skills from "../../components/skills/Skills";
import Journey from "../../components/journey/Journey";
import Work from "../../components/work/Work";

const Portfolio = () => {
    return (
        <>
            <NavBar />

            <main className="main">
                <About />
                <Skills />
                <Journey />
                <Work />
            </main>

        </>
    );
}
export default Portfolio;