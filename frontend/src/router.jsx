import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/collection", element: <Collection /> }
]);