import { FC } from "react";
import Lista from "./Lista";
import Detalle from "./Detalle";

const Contenedor: FC = () => {
    let frutas = ['Fresas','Plátanos','Naranjas','Piñas','Manzanas'];
    
    let titulo = "Naranjas";
    let contenido = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores provident alias, facilis ad quos ullam mollitia quibusdam similique ipsa autem eum debitis consequatur aut enim doloribus corrupti eligendi modi.";

    return (<main className="container">
        <div className="row">
            <Lista datos={frutas}/>
            <Detalle titulo={titulo} contenido={contenido} />
        </div>
    </main>);
}

export default Contenedor;