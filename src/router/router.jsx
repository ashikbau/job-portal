import {
  createBrowserRouter,
  
} from "react-router-dom";
// import "./index.css";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/signin",
            element: <SignIn></SignIn>
        },
    ]
  },
]);
export default router;