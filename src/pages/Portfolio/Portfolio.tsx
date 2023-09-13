import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Skills from "../../components/skills/Skills";

const Portfolio = () => {
    return (
        <>
            <NavBar />

            <main className="main">
                <About />
                <Skills />
            </main>

        </>
    );
}
export default Portfolio;