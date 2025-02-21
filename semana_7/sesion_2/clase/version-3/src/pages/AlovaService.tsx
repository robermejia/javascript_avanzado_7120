import { useRequest } from "alova/client";
import { FC, Fragment } from "react";
import { alovaInstance } from "../util/alova";

const AlovaService: FC = () => {
   const { data, loading, error } = useRequest<any, any>(
       alovaInstance.Get('/users'), { initialData: [] }
   );

   if (loading) return <p className="alert alert-info">Cargando</p>
   if (error) return <p className="alert alert-danger">{error.message}</p>

   console.log(data);
   return (<>
       <h5>Consumo con Alova</h5>
       {
           data
               ? <Fragment>{data.map((comen: any, i: number) => (
                   <div className="card my-2" key={i}>
                       <div className="card-body">
                           <p><strong>{comen.name}</strong></p>
                           <p><strong>Correo:</strong> {comen.email}</p>
                           <p><strong>Teléfono</strong>: {comen.phone}</p>
                           <p><strong>Dirección</strong>: {comen.address.street}</p>
                       </div>
                   </div>
               ))}
               </Fragment>
               : <p>Cargando datos</p>
       }
       {/*
           data
               ? <pre>{JSON.stringify(data, null, 2)}</pre>
               : <p>Cargando datos</p>
       */}
       <hr />
   </>)
};

export default AlovaService;