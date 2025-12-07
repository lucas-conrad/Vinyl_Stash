import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/collection", element: <Collection /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> }
]);