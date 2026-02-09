import {useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const {user , logout} = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <nav className="navbar" >
            {/* optional ? chaining operator saves from app crashing if no user object is found */}
            <span>Logged in as: {user?.email}</span>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

export default Navbar;