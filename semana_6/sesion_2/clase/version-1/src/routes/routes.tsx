import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeComponent from "../pages/HomeComponent";
import SimpleForm from "../pages/SimpleForm";
import UncontrolForm from "../pages/UncontrolForm";
import ControlForm from "../pages/ControlForm";

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

export default router;