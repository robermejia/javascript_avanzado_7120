import { FC } from "react";

const Lista: FC<any> = (props: { datos: string[] }) => {

    let listado = props.datos.map(fruta =><li>{fruta}</li>);
    
    return (<div className="col-6">
        <h3>Lista de frutas</h3>
        <ul>{listado}</ul>
    </div>);
}

export default Lista
    ;