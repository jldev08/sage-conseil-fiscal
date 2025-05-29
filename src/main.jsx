import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Services} from "./pages/Services.jsx";
import {About} from "./pages/About.jsx";
import {DeclarationImpot} from "./pages/DeclarationImpot.jsx";
import "./assets/styles/slick-theme.min.css";
import "./assets/styles/slick.min.css";
const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        index:true
    },
    {
        path: "/contact",
        Component: Contact,
    },
    {
        path: "/services",
        Component: Services,
    },
    {
        path: "/declaration-impots-en-ligne",
        Component: DeclarationImpot,
    },
    {
        path: "/apropos-de-nous",
        Component: About,
    },
]);
const root = document.getElementById('root');
createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
