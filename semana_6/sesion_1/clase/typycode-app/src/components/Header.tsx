import { FC } from "react"
import imagen from '../../public/vite.svg'
const Header: FC = () => {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <img className="col-lg-1 col-md-1" src={imagen} alt="" />
                    <h2 className="col-lg-2 col-md-2 text-center p-3 text-light">Header</h2>
                </div>
            </div>

        </>
    )
}
export default Header