import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginAlert from "../../components/LoginAlert";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      if (res.status === 200) {
        const { role } = res.data;
        onLogin();
        switch (role) {
          case "admin":
            setLogin(true);
            setTimeout(() => {
              navigate("/landing");
            }, 3000);
            break;
          case "user":
            setLogin(true);
            setTimeout(() => {
              navigate("/user/userdashboard");
            }, 3000);
            break;
          default:
            console.log("Error");
            break;
        }
      } else {
        alert("Please enter valid credentials.");
      }
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-blue-900 text-white p-6 md:p-12">
        <img src="/images/P10.png" alt="Emblem"
          className="w-40 h-40 md:w-52 md:h-52"/>
        <p className="text-lg md:text-2xl font-bold text-center">
          នាយកដ្ឋានបឋមសិក្សា
        </p>
        <p className="text-lg md:text-2xl font-bold text-center">
          ក្រសួងអប់រំ យុវជន​ និង កីឡា
        </p>
        <p className="text-xs md:text-sm pt-8 text-center">
          This is a web app that allows users to add student data.
        </p>
        <p className="text-xs md:text-sm mt-4 text-center">
          Created and designed by Lim Vithyea 2025
        </p>
      </div>
      {/* Right Side */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-6">
        <div className="p-6 md:p-8 bg-white rounded-lg w-full max-w-md">
          <h1 className="text-xl md:text-2xl font-bold text-center">សូមស្វាគមន៏</h1>
          <p className="text-center font-semibold text-lg md:text-xl mt-3">ចូលប្រព័ន្ធ</p>
          <form className="mt-6" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-blue-900">
                Username
              </label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                name="username"
                placeholder="Enter your username"
                className="mt-1 bg-gray-200 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-blue-900">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter your password"
                className="mt-1 bg-gray-200 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button type="submit"
              className="w-full mt-4 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              ចូលប្រព័ន្ធ
            </button>
            {login && <LoginAlert />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
