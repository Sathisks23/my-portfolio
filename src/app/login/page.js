'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Store the JWT token in localStorage or cookies
        localStorage.setItem('token', data.token);
        setMessage('Login successful');
        router.push('/user/dashboard'); // Redirect to the dashboard
      } else {
        setMessage(data.message); // Show error message from API
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {message && (
        <p className={`mb-4 ${message === 'Login successful' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
      </form>
      <div className="mt-2 pt-2">
        <p className="font-light text-ms text-neutral-500">
          Don&apos;t have an account? <Link className="font-bold text-sky-500" href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
