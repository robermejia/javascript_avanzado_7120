import { FC } from "react";
import { Link } from "react-router-dom";

const MenuComponent: FC = () => {
    return (<nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Typicode App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuSignos"
                aria-controls="menuSignos" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menuSignos">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Formularios
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={"form-simple"}>Formulario simple</Link></li>     
                            <li><Link className="dropdown-item" to={"form-sin-control"}>Formulario sin control</Link></li>
                            <li><Link className="dropdown-item" to={"form-con-control"}>Formulario con control</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"servicios"}>Servicios</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Hooks
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={"hook-state"}>Hook de estado</Link></li>
                            <li><Link className="dropdown-item" to={"hook-context"}>Hook de contexto</Link></li>  
                            <li><Link className="dropdown-item" to={"hook-ref"}>Hook de referencia</Link></li>
                            <li><Link className="dropdown-item" to={"hook-effects"}>Hook de efectos</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}

export default MenuComponent;