/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout";
import AboutLayout from "../layout/AboutLayout";
import ContactLayout from "../layout/ContactLayout";

const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))
const About = lazy(() => import("../pages/about/About"))
const Contact = lazy(() => import("../pages/contact/Contact"))
const Vacancy = lazy(() => import("../pages/vacancy/Vacancy"))




export const element = createBrowserRouter ([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/about",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "vacancy",
                element: <Vacancy />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
])