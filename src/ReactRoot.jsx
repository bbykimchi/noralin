import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
// import ProjectPage from './pages/ProjectPage'; // Example of a future page

function ReactRoot() {
    const router = createHashRouter([
        {
            path: "/",
            element: <Home/>
        }
    ])
    return (
        <div>
            <Home/>
            <RouterProvider router={router}/>
        </div>
    );
}

export {ReactRoot};