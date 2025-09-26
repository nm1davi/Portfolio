import { useEffect } from "react";

const AppVinitec = () => {

    useEffect(() => {
        document.title = "Proyecto – App Vinitec";
    }, []);

    return (
        <div className="proyect-detail-container">
            <div className="proyect-detail-text">
                <h1>
                    APP VINITEC
                </h1>
            </div>
            <div className="proyect-detail-info">
                <div className="proyect-image">
                    <img src="/img/appVinitec/AppVinitec.png" alt="Imagen 1 del proyecto App Vinitec" />
                    <img src="/img/appVinitec/AppVinitec2.png" alt="Imagen 1 del proyecto App Vinitec" />
                    <img src="/img/appVinitec/AppVinitec1.png" alt="Imagen 1 del proyecto App Vinitec" />
                </div>
                <div className="proyect-detail-info-problem-impact-solution">
                    <h1 className="version-title">
                        Versión Administrativa
                    </h1>
                    <div className="proyect-detail-problem">
                        <div className="proyect-detail-problem-title">
                            <h2>
                                DESAFÍO
                            </h2>
                        </div>
                        <ul>
                            <li>
                                El fraccionamiento registraba en <strong className="hl-red">planillas manuales</strong>; los datos operativos
                                llegaban al cierre del servicio y la conciliación con bodega era <strong className="hl-red">tardía. </strong>
                                Ese desfase derivaba en <strong className="hl-red">mora, desvalorización del producto y pérdida parcial
                                de información</strong> de procesos.
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
                                App de escritorio para <strong className="hl-blue">registro digital en tiempo real, </strong>
                                con validaciones en origen por encargado de bodega (lotes, cantidades, estados),
                                tablero de <strong className="hl-blue">seguimiento para facturación y conciliación.</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="proyect-detail-impact admin-version">
                        <div className="proyect-detail-impact-title">
                            <h2>
                                IMPACTO
                            </h2>
                        </div>
                        <ul>
                            <li>
                                Mora: reducción significativa (de doble dígito → <strong className="hl-green1">Un dígito</strong>).
                            </li>
                            <li>
                                Desvalorización por demora: reducción notable → <strong className="hl-green1">Bajo a un dígito.</strong>
                            </li>
                            <li>
                                Conciliación: de días → <strong className="hl-green1">Horas.</strong>
                            </li>
                            <li>
                                Pérdida de información → <strong className="hl-green1">Bajó a nivel marginal.</strong>
                            </li>
                        </ul>
                    </div>
                    <h1 className="version-title">
                        Versión Operarios
                    </h1>
                    <div className="proyect-detail-problem">
                        <div className="proyect-detail-problem-title">
                            <h2>
                                DESAFÍO
                            </h2>
                        </div>
                        <ul>
                            <li>
                                El equipo registraba en papel. Las planillas se juntaban y recién <strong className="hl-red">llegaban
                                al terminar el servicio completo;</strong> recién ahí se podía verificar si lo cargado
                                coincidía con lo de bodega. Mientras tanto había demoras, posibles errores de
                                carga, datos incompletos de insumos, <strong className="hl-red">tiempos muertos sin medir y rendiciones </strong>
                                (viandas/traslados) <strong className="hl-red">tardías y desparejas.</strong>
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
                                <strong className="hl-blue">App en tablet</strong> con pasos guiados, controles al momento de cargar 
                                (cantidades, estados y horarios) y <strong className="hl-blue">registro simple</strong> de viandas, traslados 
                                y tiempos muertos desde el dispositivo. Las planillas firmadas digitalmete 
                                por encargado de bodega <strong className="hl-blue">se envían al cierre 
                                de cada día/turno</strong> para que administración vea todo en a tiempo.                            
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
                                Planillas: todas juntas al fin del servicio → <strong className="hl-green1">Al cierre de cada día.</strong>
                            </li>
                            <li>
                                Errores de carga: frecuentes → <strong className="hl-green1">Casos puntuales.</strong>
                            </li>
                            <li>
                                Tiempos muertos: sin visibilidad → <strong className="hl-green1">Medidos por causa y hora.</strong>
                            </li>
                            <li>
                                Registro de insumos: incompleto → <strong className="hl-green1">Claro y en el momento.</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="proyect-detail-buttons">
                        <p className="repositorio-privado">REPOSITORIO PRIVADO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppVinitec;
