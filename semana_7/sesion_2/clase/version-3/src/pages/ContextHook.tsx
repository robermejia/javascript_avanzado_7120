import { FC } from "react";
import { useDatoContext } from "../context/DatoContext";

const ContextHook: FC = () => {
    //invocar al contexto desde un archivo diferente
    const dato: boolean = useDatoContext();
    return (<>
        <h3>Hook de contexto</h3>
        <p>Dato: {dato ? 'true' : 'false'}</p>
    </>);
};

export default ContextHook;