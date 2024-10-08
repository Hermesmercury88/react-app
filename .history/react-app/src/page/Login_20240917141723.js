import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Logic สำหรับจัดการการเข้าสู่ระบบ
    console.log('Form submitted');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white mt-6 rounded-lg shadow-md">
        <form onSubmit={handleLogin} className="p-3 w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Login
          </button>
        </form>

       
      </div>
    </div>
  );
}

export default Login;
