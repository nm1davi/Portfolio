import { Link } from "react-router-dom";
import { useEffect } from "react";

const AppBarberia = () => {
    useEffect(() => {
        document.title = "Proyecto – App Barbería";
    }, []);

    return (
        <div className="proyect-detail-container">
            <div className="proyect-detail-text">
                <h1>
                    APP BARBERÍA
                </h1>
            </div>
            <div className="proyect-detail-info">
                <div className="proyect-image barber-img">
                    <img src="/img/appBarberia/AppBarberia.png" alt="Imagen 1 del proyecto barberia" />
                    <img src="/img/appBarberia/AppBarberia2.png" alt="Imagen 1 del proyecto barberia" />
                    <img src="/img/appBarberia/AppBarberia1.png" alt="Imagen 1 del proyecto barberia" />
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
                                La barbería no contaba con sistema. Cada sucursal llevaba un <strong className="hl-red">libro diario manual</strong> y, al cierre,
                                enviaba fotos por WhatsApp al administrador. Con tres sucursales, el cierre exigía consolidar y
                                revisar imágenes una por una, <strong className="hl-red">verificar que no faltaran servicios</strong> y calcular comisiones por barbero de
                                forma manual. La fidelización del cliente <strong className="hl-red">no estaba instrumentada:</strong> no había visibilidad de puntos ni de
                                beneficios canjeables.
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
                                Se hizo una implementación de una aplicación integral que <strong className="hl-blue">unifica fidelización y operación diaria.</strong> Cada sucursal 
                                registra sus servicios en un libro digital con <strong className="hl-blue">carga guiada (servicio, precio, barbero); </strong> 
                                el sistema asigna puntos automáticamente y centraliza la información en un panel de administración con 
                                filtros por fecha y por barbero. De este modo, el administrador reemplaza el intercambio de fotos por un 
                                <strong className="hl-blue"> tablero en línea.</strong> Dispone un catálogo de canje y saldo de puntos <strong className="hl-blue">visibles para el cliente.</strong>
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
                                Cierre de caja: de fotos y manual → <strong className="hl-green1">Tablero en línea.</strong>
                            </li>
                            <li>
                                Errores de registro: de frecuentes → <strong className="hl-green1">Casos puntuales</strong>
                            </li>
                            <li>
                                Visibilidad multi-sucursal: de dispersa → <strong className="hl-green1">Centralizada y filtrable</strong>
                            </li>
                            <li>
                                Fidelización: puntos claros y canjeables → <strong className="hl-green1">Mayor frecuencia de cliente.</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-buttons barber">
                        <Link to={"https://god-is-good-c4rw.onrender.com/?fbclid=PAZXh0bgNhZW0CMTEAAaf67UIcP553VQQ_-X3xXW_Sl51-iYL9Mei0uWPT-XLsNxwzukjE0eoNEa2aMw_aem_1lYURdR2Cpkj_LusrG8rvw"} target="_blank" rel="noreferrer" className="btn-shine">VER PROYECTO</Link>
                        <Link to={"https://github.com/nm1davi/god-is-good"} target="_blank" rel="noreferrer" className="btn-shine">VER CÓDIGO</Link>
                        <p className="repositorio-privado">REPOSITORIO PRIVADO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppBarberia;
