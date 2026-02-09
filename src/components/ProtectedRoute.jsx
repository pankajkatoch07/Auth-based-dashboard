import { Navigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function ProtectedRoute({children}) {
    //context consumer
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    //children is a reserved react prop and is always lowercase
    return children;
}

export default ProtectedRoute;