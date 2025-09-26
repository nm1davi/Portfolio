import About from "./about";
import Technologies from "./technologies";
import Proyects from "./proyects";
const Main = () => {
    return (
        <div className='main-container'>
            <section id= "about-me">
                <About />
            </section>
            <section id="technologies">
                <Technologies />
            </section>
            <section id="projects">
                <Proyects />
            </section>
        </div>
    );
}

export default Main;
