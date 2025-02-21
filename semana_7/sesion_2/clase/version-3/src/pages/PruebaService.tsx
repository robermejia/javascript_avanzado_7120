import { FC, Fragment, useEffect, useRef, useState } from "react";

const FetchService: FC = () => {
    const paisRef = useRef<any>(null);
    const [nombre, setNombre] = useState("peru");
    const [paises, setPaises] = useState<any>(null);

    const buscarpais = () => {
        setNombre(paisRef.current.value)
    };

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${nombre}`)
            .then(response => response.json())
            .then(json => setPaises(json))
            .catch(e => console.error("Error:", e));
    }, [nombre]);

    return (<>

        <h5>API paises</h5>
        <label className="label-form" htmlFor="postId">Países a buscar</label>
        <input className="form-control" type="text" required  ref={paisRef}/>
        <button className="btn btn-sm btn-success my-3" type="button" onClick={buscarpais}>Buscar</button>

        <hr />
        <ul>
            {
                paises
                    ? <Fragment>
                        {paises.map((pais: any, i: number) => (
                            <li>Nombre oficial del país: {pais.name.official} - Población: {pais.population} </li>
                        ))}
                    </Fragment>
                    : <li>Sin datos</li>
            }
        </ul>
        <hr />
    </>)
};

export default FetchService;