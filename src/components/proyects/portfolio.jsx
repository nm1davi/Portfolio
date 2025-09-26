import { Link } from "react-router-dom";
import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        document.title = "Proyecto – PORTFOLIO";
    }, []);

    return (
        <div className="proyect-detail-container">
            <div className="proyect-detail-text">
                <h1>
                    PORTFOLIO
                </h1>
            </div>
            <div className="proyect-detail-info">
                <div className="proyect-image portfolio-img">
                    <img src="/img/portfolio/Portfolio.png" alt="Imagen 1 del proyecto Consulor de precios" />
                    <img src="/img/portfolio/Portfolio1.png" alt="Imagen 1 del proyecto Consulor de precios" />
                </div>
                <div className="proyect-detail-info-problem-impact-solution">
                    <div className="proyect-detail-problem">
                        <div className="proyect-detail-problem-title">
                            <h2>
                                ¿POR QUÉ UN PORTFOLIO?
                            </h2>
                        </div>
                        <ul>
                            <li>
                                La idea es tener una <strong className="hl-blue">“tarjeta de presentación” viva y compartible,</strong> un punto único donde ver trabajos
                                reales, cómo fueron <strong className="hl-blue">resueltos y qué resultados logran.</strong> Ahorra tiempo (se comparte un link y ya se puede visualizar),
                                <strong className="hl-blue">ordena la comunicación</strong> y sirve también como base para marketing.
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-impact">
                        <div className="proyect-detail-impact-title">
                            <h2>
                                MEJORA OBTENIDA
                            </h2>
                        </div>
                        <ul>
                            
                            
                            
                            
                            

                            <li>
                                🟢 <strong className="hl-green2">TRANSPARENCIA:</strong> muestra funcionalidades, stack, repos/demos.
                            </li>
                            <li>
                                🟢 <strong className="hl-green2">CONTEXTO PREVIO:</strong> facilita que clientes lleguen informados a la reunión.
                            </li>
                            <li>
                                🟢 <strong className="hl-green2">ESCALABLE:</strong> listo para sumar casos de estudio, testimonios o captaciones nuevas.
                            </li>
                            <li>
                                🟢 <strong className="hl-green2">COHERENCIA:</strong> línea visual y narrativa consistente en todo el material.
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-buttons">
                        <Link to={"https://github.com/nm1davi/god-is-good"} target="_blank" rel="noreferrer" className="btn-shine">VER CÓDIGO</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
