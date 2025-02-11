import { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import imagen from '../../public/vite.svg'
const Contenedor: FC = () => {
    return (
        <>
            <main className='container'>
                <div className="row mt-3">

                    <div className="col-sm-6">
                        <h1 className='container bg-dark text-light text-center'>Lista</h1>
                        <ol>
                            <li>Lunes</li>
                            <li>Martes</li>
                            <li>Miercoles</li>
                            <li>Jueves</li>
                            <li>Viernes</li>
                            <li>Sábado</li>
                            <li>Domingo</li>
                        </ol>

                    </div>
                    <div className="col-sm-6">
                        <h1 className='container bg-warning text-dark text-center'>Detalle</h1>
                        <p className="container ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nam magnam quia sequi voluptatum eligendi ipsam? Quod odit nihil eum veritatis odio vel magnam nobis perferendis incidunt mollitia laudantium ipsam, provident nemo autem, officiis in? Blanditiis laboriosam quam asperiores voluptas! Nihil magni possimus porro quisquam facere doloribus ut, fugiat sit modi labore perspiciatis culpa quam ipsum explicabo consequatur magnam,</p>
                        <img className='container p-5' src={imagen} alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}
export default Contenedor