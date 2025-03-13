import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoutAlert from "./Alert";
// import Usermangedata from "../pages/userdashboard/Usermangedata";
import UserDropdown from "./UserDropdown";
import dashboardIcon from "../asset/dashboard.svg";
import BuilderDropdown from "../pages/userdashboard/build/BuilderDropdown";


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
      navigate("/");
    }, 2000);
  };
  //  user page items
  const userPageItems2 = [
    { to: "/user/add-student-class", label: "បញ្ជូលទិន្នន័យសិស្ស " },
    { to: "/user/infrastructure", label: "ហេត្ថារចនាសម្ព័ន្ធ" },
    { to: "/user/data-display", label: "មើលទិន្នន័យ" },
  ];
  const builderItem1 = [
    { to: "/user/add-staff",label: "បញ្ចូលចំនួនបុគ្គលិក",},
    { to: "/user/infrastructure", label: "ហេត្ថារចនាសម្ព័ន្ធ" }
  ];
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-2 z-0 md:hidden p-2 text-white rounded-md font-bold bg-blue-500 text-xl">
        ☰
      </button>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#1B1B69] text-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-[15%]`}>
        <div className="h-full px-4 py-6 overflow-y-auto">
          <div className="flex justify-center">
            <img
              src="/images/P10.png"
              alt="Emblem"
              className="w-[100px] h-[100px]"
            />
          </div>
          <p className="text-lg font-bold text-center khmer-text pt-5 pb-6">
            នាយកដ្ឋានបឋមសិក្សា
          </p>
          <ul className="space-y-4 font-medium">
            <li>
              <NavLink
                to="/user/userdashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-gray-700 border-2 border-green-500"
                      : "hover:bg-gray-700"
                  }`
                }>
                <img
                  src={dashboardIcon}
                  alt="Dashboard Icon"
                  className="w-6 h-6"
                />
                <span className="ms-3 khmer-text">តារាង</span>
              </NavLink>
            </li>
            <UserDropdown
              className="ms-3 khmer-text"
              title="📁 ទិន្នន័យ"
              items={userPageItems2}
            />
            <BuilderDropdown
              className="ms-3 khmer-text"
              title="បញ្ចូលទិន្នន័យអគារ"
              items={builderItem1}
            />
            {/* <li>
              <NavLink
                to="/user/usermanagedata"
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-colors
                  ${isActive ? 'bg-gray-700 border-2 border-green-500' : 'hover:bg-gray-700'}`
                }>
                <span className="ms-3">📁 Manage</span>
              </NavLink>
            </li> */}
          </ul>
          <div className="flex justify-center">
            <div className="absolute bottom-6 text-center">
              <p className="text-xs text-gray-300 font-semibold">
                Created by Chea
              </p>
              <button
                onClick={handleLogout}
                className="text-red-500 font-normal hover:underline">
                Log out
              </button>
              {showAlert && <LogoutAlert />}
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
