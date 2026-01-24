import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded auth for demonstration
        if (username === 'admin' && password === 'admin123') {
            sessionStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Panel</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-[#ed2585] outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-[#ed2585] outline-none"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#ed2585] text-white py-2 rounded font-semibold hover:bg-[#c9186b]">
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center text-xs text-gray-500">
                    Default: admin / admin123
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
