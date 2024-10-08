import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

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
          </Routes>
          </div>
          </BrowserRouter >
  );
}

export default App;
