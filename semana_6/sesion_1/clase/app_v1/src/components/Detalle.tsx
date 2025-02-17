import { FC } from "react";
import ImgVite from "/vite.svg";

const Detalle : FC<any> = (props: {titulo : string, contenido: string}) => {
    let titulo = props.titulo;
    let contenido = props.contenido;
    return (<main className="col-6">
        <h4>{titulo}</h4>
        <hr />
        <p>{contenido}</p>
        <img src={ImgVite} className="img-fluid" width={200}/>
    </main>);
}

export default Detalle;