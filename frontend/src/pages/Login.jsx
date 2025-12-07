import { useEffect, useState } from 'react';
import { API_BASE_URL, checkSession } from '../services/api';
import { Link } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({ username: '', password: '' });

    useEffect(() => {
        async function verify() {
            const session = await checkSession();
            if (session.loggedIn) {
                window.location.href = '/';
            }
        }
        verify();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        if (data.success) {
            window.location.href = '/';
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
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
                <button className="login-btn" type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}