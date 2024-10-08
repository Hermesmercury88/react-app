import './App.css';
import './index.css'; 
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, BrowserRouter, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Users from './page/User';
import AboutUs from './page/About';
import Login from './page/Login';
import Register from './page/Register';
import NotPage from './page/Notpage';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
 };

const LayoutAdmin = () => {
  return (
    <ProtectedRoute>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
          <Outlet /> {/* Outlet ใช้สำหรับแสดงคอมโพเน้นลูกใน LayoutAdmin */}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutAdmin />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<Users />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<NotPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;