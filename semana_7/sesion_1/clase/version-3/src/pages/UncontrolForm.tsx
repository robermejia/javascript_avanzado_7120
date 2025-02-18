import { FC, FormEvent, useRef } from "react";

const UncontrolForm: FC = () => {

    const nombreRef : any = useRef(null);
    const correoRef : any = useRef(null);
    const edadRef : any = useRef(null);
    
    const procesarForm = (e: FormEvent) => {
        e.preventDefault();
        console.log(nombreRef.current.value);
        console.log(correoRef.current.value);
        console.log(edadRef.current.value);
    };
    
    return (<>
        <h3>Formulario sin control</h3>
        <form onSubmit={procesarForm}>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" ref={nombreRef} id="nombre" className="form-control" required/>
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" ref={correoRef} id="correo" className="form-control" required/>
            <label htmlFor="edad" className="form-label">Edad</label>
            <input type="number" ref={edadRef} id="edad" className="form-control" required/>
            <p className="mt-4 text-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </p>
        </form>
    </>)
}

export default UncontrolForm;