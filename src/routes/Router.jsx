import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CategoriesGrid from "../components/CategoriesGrid";
import OfferingsGrid from "../components/OfferingsGrid";
import Mentors from "../components/Mentors";
import Dashboard from "../pages/Dashboard";
import ProtectedRouter from "./ProtectedRouter";
import BookSuccess from "../components/BookSuccess";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categories",
                element: <CategoriesGrid></CategoriesGrid>
            },
            {
                path: "/features",
                element: <OfferingsGrid></OfferingsGrid>
            },
            {
                path: "/interviewers",
                element: <Mentors></Mentors>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path:'/booked',
                element: <BookSuccess></BookSuccess>
            }
        ]
    },
    
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
]);

export default Router;