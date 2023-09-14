import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Skills from "../../components/skills/Skills";
import Journey from "../../components/journey/Journey";

const Portfolio = () => {
    return (
        <>
            <NavBar />

            <main className="main">
                <About />
                <Skills />
                <Journey />
            </main>

        </>
    );
}
export default Portfolio;