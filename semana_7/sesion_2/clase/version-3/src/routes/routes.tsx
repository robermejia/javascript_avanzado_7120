import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import HomeComponent from "../pages/HomeComponent";
import SimpleForm from "../pages/SimpleForm";
import UncontrolForm from "../pages/UncontrolForm";
import ControlForm from "../pages/ControlForm";

import ContextHook from "../pages/ContextHook";
import RefHook from "../pages/RefHook";
import EffectsHook from "../pages/EffectsHook";
import Services from "../pages/Services";
import FetchService from "../pages/FetchService";
import AxiosService from "../pages/AxiosService";
import AlovaService from "../pages/AlovaService";
import PruebaService from "../pages/PruebaService";



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<>Regresar</>}>
        <Route errorElement={<>Regresar</>}>
            <Route index={true} element={<HomeComponent />} />
            <Route path={"form-simple"} element={<SimpleForm />} />
            <Route path={"form-sin-control"} element={<UncontrolForm />} />
            <Route path={"form-con-control"} element={<ControlForm />} />
            <Route path={"servicios"} element={<Services />}>
                <Route path={"fetch"} element={<FetchService />} />
                <Route path={"axios"} element={<AxiosService />} />
                <Route path={"alova"} element={<AlovaService />} />
                <Route path={"prueba"} element={<PruebaService />} />
            </Route>
            <Route path={"hook-ref"} element={<RefHook />} />
            <Route path={"hook-context"} element={<ContextHook />} />
            <Route path={"hook-effects"} element={<EffectsHook />} />
        </Route>
    </Route>
));
/*
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <>Regresar</>,
        children: [
            {
                errorElement: <>Regresar</>,
                children: [
                    { index: true, element: <HomeComponent /> },
                    { path: 'form-simple', element: <SimpleForm /> },
                    { path: 'form-sin-control', element: <UncontrolForm /> },
                    { path: 'form-con-control', element: <ControlForm /> },
                ]
            }
        ]
    }
]);
*/
export default router;