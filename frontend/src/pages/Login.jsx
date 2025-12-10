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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

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
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="auth-switch">
          Don’t have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}