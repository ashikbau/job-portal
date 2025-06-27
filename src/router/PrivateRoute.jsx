import { useContext } from "react";
import AuthContex from "../contex/AuthContex/AuthContex";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {


    const {user,loading} = useContext(AuthContex);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }

    if(user){
        return children
    }
    
    return <Navigate to="/signin" state={location?.pathname}></Navigate>
};

export default PrivateRoute;
