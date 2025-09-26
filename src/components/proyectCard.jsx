import MockUpBrowser from "./mockUpBrowser";
import { Link } from "react-router-dom";

const ProyectCard = ({
    title,
    description,
    href,
    icons = [],
    target = "_self",
}) => {
    return (
        <><div className="proyect-card">
            <div className="proyect-card-link">
                <Link to={href} target={target} rel={target ==="_blank" ? "noopener noreferrer": undefined}>
                    <span><i className="bi bi-arrow-up-right"></i></span>
                </Link>
            </div>
            {!!icons.length && (
            <div className="proyect-card-skills">
                {icons.map((IconNode, i)=>
                <span key={i} className="skill-icon">{IconNode}</span>
                )}
            </div>
            )}

            <div className="proyect-card-image">
                <MockUpBrowser />
            </div>
        </div><div className="proyect-card-info">
                <div className="proyect-card-info-title">
                    <h1 className="title-info">
                        {title}
                    </h1>
                </div>
                <div className="proyect-card-info-description">
                    <h3 className="description-proyect">
                        {description}
                    </h3>
                </div>
                <div className="proyect-card-button">
                    <Link to={href} target={target} rel={target ==="_blank" ? "noopener noreferrer": undefined} className="btn-shine">VER PROYECTO</Link>
                </div>
            </div></>
    );
}

export default ProyectCard;
