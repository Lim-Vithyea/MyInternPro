import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchUserData } from "../pages/setting/Serviceuser";
import LogoutAlert from "./Alert";
import DropdownManage from "../pages/managedata/DropdownManage";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUserData();
        setUsername(data);
      } catch {
        console.log("Error fetching user data");
      }
    };
    getUser();
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowAlert(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const userPageItems1 = [
    { to: "/landing/managedata", label: "Add New User" },
    { to: "/landing/add-new-student/", label: "New Student" },
   
  ];
  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="fixed top-1 left-2 z-0 p-2 bg-blue-500 rounded-md md:hidden hover:bg-gray-300 font-bold text-white">
        ☰
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-[#1B1B69] text-white shadow-xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="h-full px-4 py-6 overflow-y-auto relative font-medium flex flex-col">
          <div className="flex justify-center ">
            <img
              src="/images/P10.png"
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <p className="text-lg md:text-xl font-bold text-center text-white pb-4">
            នាយកដ្ឋានបឋមសិក្សា
          </p>

          {/* User Profile */}
          <div className="text-center mb-6">
            <img
              src={username?.image || "/images/pf.jpg"}
              alt="user"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full transition-transform hover:scale-110 object-cover"
            />
            <p className="text-md md:text-lg font-semibold truncate px-2">
              {username.username}
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-2 flex-1">
            <li>
              <NavLink
                to="/landing/dashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-gray-700 border-2 border-green-500"
                      : "hover:bg-gray-700"
                  }`
                }>
                📊 <span className="ml-3 text-sm md:text-base">Dashboard</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/landing/managedata"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-gray-700 border-2 border-green-500"
                      : "hover:bg-gray-700"
                  }`
                }>
                📁{" "}
                <span className="ml-3 text-sm md:text-base">Manage Data</span>
              </NavLink>
            </li> */}

            {/* Dropdown */}
          
            <DropdownManage title="Manage Data User" items={userPageItems1} />



            <li>
              <NavLink
                to="/landing/setting"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-gray-700 border-2 border-green-500"
                      : "hover:bg-gray-700"
                  }`
                }>
                ⚙️ <span className="ml-3 text-sm md:text-base">Profile</span>
              </NavLink>
            </li>
          </ul>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-gray-600">
            <p className="text-xs text-gray-300 text-center">Created by Chea</p>
            <button
              onClick={handleLogout}
              className="w-full mt-3 text-red-500 hover:text-red-300 transition-colors text-sm">
              Log Out
            </button>
            {showAlert && <LogoutAlert />}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
