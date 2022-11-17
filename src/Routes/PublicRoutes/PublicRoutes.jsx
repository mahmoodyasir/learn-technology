import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Courses from "../../Components/Courses/Courses";
import Faq from "../../Components/Faq/Faq";
import Blog from "../../Components/Blog/Blog";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import {domain} from "../../rootdomain";
import CourseDetail from "../../Components/CourseDetail/CourseDetail";
import CheckOut from "../../Components/CheckOut/CheckOut";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Standard404 from "../../Components/Standard404/Standard404";
import Home from "../../Home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch(`${domain}/highlighted`)
            },
            {
                path: "/courses",
                element: <Courses/>,
            },
            {
                path: "/courses/:id",
                element: <CourseDetail/>,
                loader: ({params}) => fetch(`${domain}/courses/${params.id}`)

            },
            {
                path: "/courses/:id/checkout/:id",
                element:<PrivateRoutes><CheckOut/></PrivateRoutes>,
                loader: ({params}) => fetch(`${domain}/courses/${params.id}`)
            },
            {
                path: "/faq",
                element: <Faq/>
            },
            {
                path: "/blog",
                element: <Blog/>,
                loader: () => fetch(`${domain}/blogs`)
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
      path: "*",
      element: <Standard404 />
    },
    {
      path: "/error",
      element: <Standard404 />
    },

])