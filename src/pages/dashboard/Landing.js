import React from "react";
import Sidebar from "../../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Managedata from "../managedata/Managedata";
import DropdownManage from "../../components/DropdownManage";
import Profile from "../setting/Profile";
import AddNewStudent from "../managedata/AddNewStudent";

export const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/" replace />;
};

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="md:ml-64 transition-all duration-300">
        <Routes>
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/managedata"
            element={<PrivateRoute element={<Managedata />} />}
          />
          <Route
            path="/managedata"
            element={<PrivateRoute element={<DropdownManage />} />}
                />

           <Route
            path="/add-new-student"
            element={<PrivateRoute element={<AddNewStudent />} />}
          />
          <Route
            path="/setting"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
