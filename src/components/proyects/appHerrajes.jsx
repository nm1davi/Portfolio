import { Link } from "react-router-dom";
import { useEffect } from "react";

const AppHerrajes = () => {

    useEffect(() => {
        document.title = "Proyecto – App Herrajes";
    }, []);

    return (
        <div className="proyect-detail-container">
            <div className="proyect-detail-text">
                <h1>
                    APP HERRAJES
                </h1>
            </div>
            <div className="proyect-detail-info">
                <div className="proyect-image">
                    <img src="/img/appHerrajes/AppHerrajes.png" alt="Imagen 1 del proyecto App Herrajes" />
                    <img src="/img/appHerrajes/AppHerrajes1.png" alt="Imagen 1 del proyecto App Herrajes" />
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
                                El proceso de ventas se apoya en planillas Excel como fuente única de productos y precios.
                                Con un catálogo amplio y <strong className="hl-red">códigos alfanuméricos</strong>, la búsqueda es poco tolerante a<strong className="hl-red"> errores y lenta. </strong>
                                La gestión de listas de precios por proveedor se realiza de <strong className="hl-red">forma manual y asincrónica</strong>, por lo
                                que los ajustes llegan con retraso a los puntos de venta. <br />
                                Se propagan <strong className="hl-red">archivos desactualizados</strong> entre usuarios, generando diferencias de precio en mostrador y
                                pérdida de margen.
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
                                Implementación de una app de escritorio con catálogo basado en base de datos y motor de <strong className="hl-blue">búsqueda rápido por código, nombre y categoría. </strong>
                                El módulo de administración permite aplicar <strong className="hl-blue">ajustes porcentuales masivos</strong> por proveedor,
                                con registro de cambios. Las altas/bajas de productos se publican en <strong className="hl-blue">tiempo real</strong> al
                                resto del equipo. Esto asegura consistencia de precios, auditabilidad y respuesta inmediata en mostrador.
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
                                Actualización de precios por proveedor: de horas → <strong className="hl-green1">Minutos.</strong>
                            </li>
                            <li>
                                Desfase de precios: de días → <strong className="hl-green1">Mismo día / menor a 24 hs.</strong>
                            </li>
                            <li>
                                Errores de cobro: de frecuentes → <strong className="hl-green1">Casos puntuales.</strong>
                            </li>
                            <li>
                                Curva de aprendizaje del vendedor: de alta → <strong className="hl-green1">Baja (búsqueda guiada).</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-buttons">
                        <Link to={"https://github.com/nm1davi/APP-HERRAJES"} target="_blank" rel="noreferrer" className="btn-shine">VER CÓDIGO</Link>
                        <p className="repositorio-privado">REPOSITORIO PRIVADO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppHerrajes;
