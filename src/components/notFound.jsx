import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <section className="not-found">
            <div className="notFound-container">
                <div className="notFound-container-title">
                    <h1 className="not-found-title">
                        <span>ERROR 404</span>
                        <span class="sep" aria-hidden="true"></span>
                        <span>PÁGINA NO ENCONTRADA</span>
                    </h1>
                </div>
                <div className="notFound-container-button">
                    <Link to={"/"}>
                        <button className="btn-shine btn-not-found">
                            VOLVER AL INICIO
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
