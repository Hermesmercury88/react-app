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
import

function App() {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Routes>
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
