import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
// import ProjectPage from './pages/ProjectPage'; // Example of a future page

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>
    }
])

function ReactRoot() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export { ReactRoot };