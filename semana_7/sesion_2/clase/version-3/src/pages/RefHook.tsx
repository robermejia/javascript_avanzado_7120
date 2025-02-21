import { FC, useRef } from "react"

const RefHook: FC = () => {
    const fechaRef = useRef<HTMLInputElement>(null);

    const focusFecha = () => {
        if (fechaRef.current) { fechaRef.current.focus(); }
    }
    
    return (<>
        <h3>Hook de referencia</h3>
        <div>
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellidos' />
            <input type="email" placeholder='Correo' />
            <input ref={fechaRef} type="date" />
            <button onClick={focusFecha}>Enfocar fecha</button>
        </div>
    </>)
}

export default RefHook;