import { createContext, useContext } from "react";

const DatoContext = createContext(true);

export const useDatoContext = () => {
    return useContext(DatoContext);
}
