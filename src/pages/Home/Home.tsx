import PlanetCanvas from '../../components/canvas/Planet';
import Socials from './Socials';
import Description from './Description';
import './styles/home.scss'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Socials />

                    <div className="home_img"></div>

                    <Description />

                </div>

            </div>
            <PlanetCanvas />
        </section>

    );
}
export default Home;