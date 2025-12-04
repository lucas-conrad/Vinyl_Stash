import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">Vinyl Stash</h1>

            <div className="nav-right">
                <Link to="/collection" className="account-btn">
                    My Collection
                </Link>
            </div>
        </nav>
    );
}