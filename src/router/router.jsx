import {
  createBrowserRouter,
  
} from "react-router-dom";
// import "./index.css";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/jobDetails";
import PrivateRoute from "./PrivateRoute";


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
            path:"/jobs/:id",
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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