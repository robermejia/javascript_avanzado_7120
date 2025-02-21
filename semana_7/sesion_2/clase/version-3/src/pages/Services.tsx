import {FC} from "react";
import {Outlet} from "react-router-dom";


const Services: FC = () => {
    <>
        <h3>Consumo de API con React</h3>
        <div className="d-flex justify-content-around">
            <link className="btn btn-sm btn-outline-primary" to={"fetch"}>Fetch</link>
            <link className="btn btn-sm btn-outline-primary" to={"axios"}>Axios</link>
            <link className="btn btn-sm btn-outline-primary" to={"alova"}>Alova</link>
        </div>
        <hr />
        <Outlet />  
    </>
}

export default Services
