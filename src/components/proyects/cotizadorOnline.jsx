import { Link } from "react-router-dom";
import { useEffect } from "react";
const CotizadorOnline = () => {

    useEffect(() => {
        document.title = "Proyecto – Cotizador Online";
    }, []);

    return (
        <div className="proyect-detail-container">
            <div className="proyect-detail-text">
                <h1>
                    COTIZADOR ONLINE
                </h1>
            </div>
            <div className="proyect-detail-info">
                <div className="proyect-image cotizador">
                    <img src="/img/cotizador/Cotizador.png" alt="Imagen 1 del proyecto cotizador" />
                    <img src="/img/cotizador/Cotizador1.png" alt="Imagen 2 del proyecto cotizador" />
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
                                Cotización manual en <strong className="hl-red">papel</strong> con <strong className="hl-red">errores de montos y condiciones,</strong> sin estandarizar forma de
                                pago, vigencia ni entrega; caligrafía confusa y <strong className="hl-red">armado lento.</strong>
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
                                <strong className="hl-blue">Digitalice y unifique</strong> la forma de cotizar con plantillas y campos obligatorios (forma de pago, vigencia, entrega).
                                Apliqué <strong className="hl-blue">validaciones de montos e impuestos</strong> y reglas de cálculo iguales para todo el equipo.
                                La salida es un documento (PDF O PNG) <strong className="hl-blue">legible</strong> con marca y condiciones completas.
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
                                Errores de monto/condiciones: de frecuentes → <strong className="hl-green1">Casos puntuales.</strong>
                            </li>
                            <li>
                                Tiempo de cotización: de varios minutos → <strong className="hl-green1">Un par de minutos.</strong>
                            </li>
                            <li>
                                Claridad para el cliente → <strong className="hl-green1">Condiciones legibles y completas.</strong>
                            </li>
                            <li>
                                Consistencia → <strong className="hl-green1">Mismas reglas de cálculo y presentación.</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-buttons">
                        <Link to={"https://cotizadordavihnos.onrender.com/"} target="_blank" rel="noreferrer" className="btn-shine">VER PROYECTO</Link>
                        <Link to={"https://github.com/nm1davi/Cotizador"} target="_blank" rel="noreferrer" className="btn-shine">VER CÓDIGO</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CotizadorOnline;
