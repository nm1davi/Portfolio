import { Link } from "react-router-dom";
import { useEffect } from "react";

const ConsultorDePrecios = () => {
    useEffect(() => {
        document.title = "Proyecto – Consultor de Precios";
    }, []);

    return (
        <div className="proyect-detail-container">
            <div className="proyect-detail-text">
                <h1>
                    CONSULTOR DE PRECIOS
                </h1>
            </div>
            <div className="proyect-detail-info">
                <div className="proyect-image">
                    <img src="/img/consultorDePrecios/ConsultorDePrecios.png" alt="Imagen 1 del proyecto Consulor de precios" />
                    <img src="/img/consultorDePrecios/ConsultorDePrecios2.png" alt="Imagen 1 del proyecto Consulor de precios" />
                </div>
                <div className="proyect-detail-info-problem-impact-solution">
                    <div className="proyect-detail-problem">
                        <div className="proyect-detail-problem-title">
                            <h2>
                                DESAFÍO
                            </h2>
                        </div>
                        <ul>
                            <li>
                                Los clientes consultaban <strong className="hl-red">precios y disponibilidad de múltiples modelos;</strong> el equipo <strong className="hl-red">invertía tiempo en buscar</strong> listas y confirmar stock.
                                Ademas el uso para <strong className="hl-red">marketing era limitado,</strong> no había un punto único y ordenado para mostrar el catalogo de maquinarias.
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-solution">
                        <div className="proyect-detail-solution-title">
                            <h2>
                                ENFOQUE
                            </h2>
                        </div>
                        <ul>
                            <li>
                                Se desarrollo un <strong className="hl-blue">consultor de precios online</strong> centralizado: catálogo por categorías, cada máquina con precio, características e indicador de stock (sí/no).
                                La carga es única y actualizable, y el catálogo sirve tanto para <strong className="hl-blue">atención en mostrador como para campañas de marketing. </strong> 
                                Queda preparado para escalar a canal de venta incorporando carrito/checkout cuando se decida.
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-impact">
                        <div className="proyect-detail-impact-title">
                            <h2>
                                IMPACTO
                            </h2>
                        </div>
                        <ul>
                            <li>
                                Tiempo de respuesta: de buscar/confirmar → <strong className="hl-green1">Respuesta en minutos.</strong>
                            </li>
                            <li>
                                Visibilidad de stock: de incierta → <strong className="hl-green1">Clara por modelo (sí/no).</strong>
                            </li>
                            <li>
                                Consultas repetitivas: de frecuentes → <strong className="hl-green1">Autogestión con el catálogo.</strong>
                            </li>
                            <li>
                                Marketing: de piezas sueltas → <strong className="hl-green1">Landing navegable.</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-buttons">
                        <Link to={"https://github.com/nm1davi/god-is-good"} target="_blank" rel="noreferrer" className="btn-shine">VER CÓDIGO</Link>
                        <p className="repositorio-privado">REPOSITORIO PRIVADO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsultorDePrecios;
