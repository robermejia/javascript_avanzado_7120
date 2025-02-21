import axios from "axios";
import { FC, Fragment, useEffect, useRef, useState } from "react";

const AxiosService: FC = () => {
   const postRef = useRef<any>(null);
   const [postId, setPostId] = useState(1);
   const [comentarios, setComentarios] = useState<any>(null)

   useEffect(
       () => {
           axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
               .then(resp => setComentarios(resp.data))
               .catch(error => console.error("Error:", error));
       }, [postId]);

   const buscarComentarios = () => {
       setPostId(postRef.current.value);
   };

   return (<>
       <h5>Consumo con Axios</h5>
       <hr />
       <label className="label-form" htmlFor="postId">Id del post</label>
       <input className="form-control" type="number" min={1} max={100} ref={postRef} required/>
       <button className="btn btn-sm btn-success my-3" type="button" onClick={buscarComentarios}>Buscar comentarios</button>

       <h4>Comentarios del post con ID :{postId}</h4>
       {
           comentarios
               ? <Fragment>{comentarios.map((comen:any,i:number)=>(
                   <div className="card my-2" key={i}>
                       <div className="card-header">
                           <p><strong>{comen.name}</strong></p>
                           <span><b>De:</b> {comen.email}</span>
                       </div>
                       <div className="card-body">
                           <p><strong>Mensaje</strong>: {comen.body}</p>
                       </div>
                   </div>
               ))}
               </Fragment>
               : <p className="alert alert-warning">Cargando datos</p>
       }
       {/*
           comentarios
               ? <pre>{JSON.stringify(comentarios, null, 2)}</pre>
               : <p>Cargando datos</p>
       */}
   </>)
};

export default AxiosService;