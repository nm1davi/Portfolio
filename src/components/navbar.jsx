const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="name-container">
                <h3 className="name">Nicolas Davi</h3>
            </div>
            <div className="links-container">
                <ul>
                    <li className="links"><a href="#about-me">Acerca de mí</a></li>
                    <li className="links"><a href="#technologies">Tecnologías</a></li>
                    <li className="links"><a href="#projects">Proyectos</a></li>
                    <li className="links"><a href="#about-me">Contacto</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
