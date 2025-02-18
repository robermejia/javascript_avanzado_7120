import { FC, FormEvent } from "react";

const procesarForm = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(formData);
    console.log(payload)
}

const SimpleForm: FC = () => {
    return (<>
        <h3>Formulario simple</h3>
        <hr />
        <form onSubmit={procesarForm}>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" name="nombre" id="nombre" className="form-control" required/>
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" name="correo" id="correo" className="form-control" required/>
            <label htmlFor="edad" className="form-label">Edad</label>
            <input type="number" name="edad" id="edad" className="form-control" required/>
            <p className="mt-4 text-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </p>
        </form>
    </>)
}

export default SimpleForm;