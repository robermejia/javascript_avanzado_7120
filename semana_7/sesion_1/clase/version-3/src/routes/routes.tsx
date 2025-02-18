import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import HomeComponent from "../pages/HomeComponent";
import SimpleForm from "../pages/SimpleForm";
import UncontrolForm from "../pages/UncontrolForm";
import ControlForm from "../pages/ControlForm";
import StateHook from "../pages/StateHook";
import ContextHook from "../pages/ContextHook";
import RefHook from "../pages/RefHook";
import EffectsHook from "../pages/EffectsHook";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<>Regresar</>}>
        <Route errorElement={<>Regresar</>}>
            <Route index={true} element={<HomeComponent />} />
            <Route path={"form-simple"} element={<SimpleForm />} />
            <Route path={"form-sin-control"} element={<UncontrolForm />} />
            <Route path={"form-con-control"} element={<ControlForm />} />
            <Route path={"hook-state"} element={<StateHook />} />
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