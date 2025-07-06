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
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplications from "../pages/ViewApplications/ViewApplications";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      }
      ,
      {
        path: "/myApplications",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      }
      ,
      {
        path: "/myPosteJobs",
        element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
      }
      ,
      {
        path: "/addJob",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      }
      ,
      {
        path: "/viewApplications/:job_id",
        element: <PrivateRoute><ViewApplications /></PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`);

          const data = await res.json();

          console.log("🔥 Loader fetched data:", data);  // ⬅️ This will show what the browser actually received

          return data;
        }
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
    ]
  },
]);
export default router;