
import React, { useState, useEffect } from "react";
import Usersidebar from "../../components/Usersidebar";
import Userdashboard from "./Userdashboard";
import Usermangedata from "./Usermangedata";
import Header from "../../components/Header";
import { Route, Routes } from "react-router-dom";
import { fetchUserData } from "../setting/Serviceuser";
import { PrivateRoute } from "../dashboard/Landing";
import DropdownManage from "../../components/DropdownManage";

const Userlanding = () => {
  const [user, setUser] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      try {
        const data = await fetchUserData();
        setUser(data);
      } catch {
        console.log("Error");
      }
    };
    getImage();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className={`absolute md:relative bg-gray-800 text-white transition-all duration-300 ${
          isSidebarOpen ? "left-0 w-2/3 sm:w-1/3" : "-left-full md:w-[15%]"
        } h-full md:block`}>
        <Usersidebar/>
      </div>
      <div className="flex-1 flex flex-col">
        <Header
          schoolname={user.schoolname}
          image={user.image}
          username={user.username}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      <div className="p-4 flex-grow overflow-auto">
          <Routes>
            <Route path="/userdashboard" element={<PrivateRoute element={<Userdashboard />} />}/>
            <Route path="/usermanagedata" element={<PrivateRoute element={<Usermangedata />} />}/>
            <Route path="/dropdownUser" element={<PrivateRoute element={<DropdownManage />} />}/>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Userlanding;
