import { useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

export default function Register() {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        console.log("Registration response:", data);
        Navigate("/")
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className="register-btn" type="submit">Register</button>
            </form>

            <p className="auth-link">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}