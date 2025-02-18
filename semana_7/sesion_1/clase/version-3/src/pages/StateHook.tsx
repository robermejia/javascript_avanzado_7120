import { FC, useState } from "react";

const imagenes: string[] = [
    "https://picsum.photos/300/300",
    "https://picsum.photos/300",
    "https://picsum.photos/200/200"
];

const StateHook: FC = () => {
    const [count, setCount] = useState(0);
    const [indice, setIndice] = useState(0);

    //Controles del carrusel
    const retrocederImagen = () => {
        const prevIndice = indice !== 0 ? indice : imagenes.length;
        setIndice(prevIndice - 1);
    };

    const avanzarImagen = () => {
        const nextIndice = indice !== imagenes.length - 1 ? indice : -1;
        setIndice(nextIndice + 1);
    };

    return (<>
        <h3>State Hook</h3>
        <hr />
        <p>
            <strong>Valor: </strong>{count}
        </p>
        <button type="button" className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Aumentar
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={() => setCount(count - 1)}>
            Reducir
        </button>
        <hr />
        <h3>Imágenes</h3>
        <div className="row">
            {
                imagenes.map((imagen, index) =>
                    <div className="col" key={index}>
                        <img className="img-fluid" src={imagen} alt="" />
                    </div>)
            }
        </div>
        <h3>Carrusel</h3>
        <div className="row text-center">
            <div className="col-2">
                <button className="btn btn-sm btn-dark" onClick={retrocederImagen}>
                    &lt;
                </button>
            </div>
            <div className="col-8">
                <img className="img-fluid" src={imagenes[indice]} alt="" />
            </div>
            <div className="col-2">
                <button className="btn btn-sm btn-dark" onClick={avanzarImagen}>
                    &gt;
                </button>
            </div>
        </div>
    </>);
}

export default StateHook;