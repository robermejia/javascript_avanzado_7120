import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const Services : FC = () => {
    return(<>
        <h3>Consumir de API con React</h3>
        <div className="d-flex justify-content-around">
            <Link to={"fetch"} className="btn btn-sm btn-outline-primary">Fetch</Link>
            <Link to={"axios"} className="btn btn-sm btn-outline-primary">Axios</Link>
            <Link to={"alova"} className="btn btn-sm btn-outline-primary">Alova</Link>
            <Link to={"prueba"} className="btn btn-sm btn-outline-primary">Prueba</Link>
        </div>
        
        <hr />
        <Outlet/>
    </>)

}

export default Services