import { FC, FormEvent, useState } from "react";

const ControlForm : FC  = () => {
    const [nombre, setNombre]  = useState('');
    const [correo, setCorreo]  = useState('');
    const [edad, setEdad] =  useState('');
    
    const handleNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    }
    const handleCorreo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.target.value);
    } 
    const handleEdad = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEdad(e.target.value);
    }
    const procesarForm = (e: FormEvent) => {
        e.preventDefault();
        console.log(nombre);
        console.log(correo);
        console.log(edad);
        setNombre('');
        setCorreo('');
        setEdad('0');
    };
    
    return (<>
        <h3>Formulario con control</h3>
        <form onSubmit={procesarForm}>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" onChange={handleNombre} id="nombre" className="form-control" value={nombre} required/>
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" onChange={handleCorreo} id="correo" className="form-control" value={correo} required/>
            <label htmlFor="edad" className="form-label">Edad</label>
            <input type="number" onChange={handleEdad} id="edad" className="form-control" value={edad} required/>
            <p className="mt-4 text-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </p>
        </form>
    </>)
}

export default ControlForm;