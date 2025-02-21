import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import reactHook from "alova/react";

export const alovaInstance = createAlova(
   {
       baseURL: 'https://jsonplaceholder.typicode.com',
       statesHook: reactHook,
       requestAdapter: adapterFetch(),
       responded: response =>{
           if(response.status !== 200){
               throw new Error('Solicitud fallida');
           }
           return response.json();
       }
   }
);

 