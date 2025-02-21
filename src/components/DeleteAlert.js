import React from 'react'
import { useState,useEffect } from 'react';
const DeleteAlert = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
    setTimeout(() => setShow(true), 10); // Slight delay for smooth effect
  }, []);
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ${
          show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
        }`}>
        <h1 className="text-center font-semibold">🚨 Delete 🚨</h1>
        <p className="text-red-500 font-medium text-xs p-[40px]">
          Are you sure you want to delete?
        </p>
      </div>
    </div>
    </div>
  )
}

export default DeleteAlert
