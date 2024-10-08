import './App.css';
import './index.css'; 
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Users from './page/User';
import AboutUs from './page/About';
import Login from './page/Login';
import Register from './page/Register';

const LayoutAdmin = () => {
  return (
 
     <div className="flex">
 
     <Sidebar />
 
     <div className="flex-1">
 
      <Header />
 
      <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
 
       <Outlet /> {/* Outlet  คือส่วนที่จะแสดงคอมโพเน้นลูกในธีมของแอดมิน */}
 
      </div>
 
     </div>
 
    </div>
 
   );
 
 }

function App() {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<Users />} />
          <Route path='/about' element={<AboutUs />} />
          </Routes>
      </div>
    </div>
          </BrowserRouter >
  );
}

export default App;
