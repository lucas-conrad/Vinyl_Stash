import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">VinylStash</div>

            <div>
                <Link to="/">Home</Link>
                <Link to="/collection">My Collection</Link>
            </div>
        </nav>
    );
}