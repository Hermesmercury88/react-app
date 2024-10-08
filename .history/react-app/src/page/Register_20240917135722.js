import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic สำหรับการจัดการฟอร์ม
    console.log('Form submitted');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Register</div>

        <div className="p-8 bg-white mt-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                id="
