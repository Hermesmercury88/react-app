import './App.css';
import './index.css'; 
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, BrowserRouter, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';  // นำเข้า useLocation และ Navigate
import Dashboard from './page/Dashboard';
import Users from './page/User';
import AboutUs from './page/About';
import Login from './page/Login';
import Register from './page/Register';
import NotPage from './page/Notpage';

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
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="/user" element={<Users />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
