import { FC, Fragment, useEffect, useState } from "react";

const FetchService: FC = () => {
   const [albums, setAlbums] = useState<any>(null);

   useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/albums')
           .then(response => response.json())
           .then(json => setAlbums(json))
           .catch(e => console.error("Error:", e));
   }, []);

   return (<>
       <h5>Consumo con Fetch</h5>
       <table className="table">
           <thead>
               <tr>
                   <th>ID</th>
                   <th>ID del usuario</th>
                   <th>Título del album</th>
               </tr>
           </thead>
           <tbody>
               {
                   albums
                       ? <Fragment>{albums.map((album: any, i:number) => (
                           <tr key={i}>
                               <th>{album.id}</th>
                               <th>{album.userId}</th>
                               <td>{album.title}</td>
                           </tr>
                       ))}
                       </Fragment>
                       : <tr><th colSpan={3}>Cargando datos</th></tr>
               }
           </tbody>
       </table>
       {/*
           albums
               ? <pre>{JSON.stringify(albums, null, 2)}</pre>
               : <p>Cargando datos</p>
       */}
       <hr />
   </>)
};

export default FetchService;