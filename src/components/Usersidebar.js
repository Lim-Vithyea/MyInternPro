import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutAlert from "./Alert";
import '../index.css'
const Usersidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowAlert(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-2 z-0 md:hidden p-2 text-white rounded-md font-bold bg-blue-500 text-xl">☰</button>
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#1B1B69] text-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-[15%]`}>
        <div className="h-full px-4 py-6 overflow-y-auto">
          <div className="flex justify-center">
            <img src="/images/P10.png" alt="Emblem" className="w-[100px] h-[100px]" />
          </div>
          <p className="text-lg font-bold text-center khmer-text pt-5 pb-6">នាយកដ្ឋានបឋមសិក្សា</p>
          <ul className="space-y-4 font-medium">
            <li>
              <NavLink
                to="/user/userdashboard"
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-colors
                  ${isActive ? 'bg-gray-700 border-2 border-green-500' : 'hover:bg-gray-700'}`
                }>
                <span className="ms-3">📊 Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/usermanagedata"
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-colors
                  ${isActive ? 'bg-gray-700 border-2 border-green-500' : 'hover:bg-gray-700'}`
                }>
                <span className="ms-3">📁 Manage</span>
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center ">
          <div className="absolute bottom-6 text-center">
            <p className="text-xs text-gray-300 font-semibold">Created by Chea</p>
            <button
              onClick={handleLogout}
              className=" text-red-500 font-normal hover:underline">Log out
            </button>
            {showAlert && <LogoutAlert/>}
          </div>
          </div>
        </div>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Usersidebar;
