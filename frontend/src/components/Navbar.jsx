import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/api";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="logo">VinylStash</div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/collection">My Collection</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
        </nav>
    );
}