import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import LoginAlert from '../../components/LoginAlert';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
 
    const navigate = useNavigate();
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:3002/api/login',{username, password})
        localStorage.setItem("token", res.data.token); 
        if (res.status === 200) {
          const {role} = res.data;
          onLogin();
          switch(role){
            case "admin":
              setLogin(true);
              setTimeout(() => {
                navigate('/landing'); 
              }, 3000);
              break;
            case "user":
              setLogin(true);
              setTimeout(() => {
                navigate('/user/userdashboard');
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
        alert ("Error")
      }
      };

  return (
    // left side
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 bg-blue-900 text-white">
        <img src="/images/P10.png" alt="Emblem" className="w-[200px] h-[200px]" />
        <p className="text-2xl font-bold">នាយកដ្ឋានបឋមសិក្សា</p>
        <p className="text-2xl font-bold">ក្រសួងអប់រំ យុវជន​ និង កីឡា</p>
        <p className='text-xs  pt-[100px]'>This is a web app that allow the users to add students data</p>
        <p className='items-end text-xs'>Created and design by Lim Vithyea 2025</p>
      </div>
      {/* right side */}
      <div className="flex items-center justify-center w-1/2">
        <div className="p-6 rounded-lg w-96">
          <h1 className="text-2xl font-bold text-center">សូមស្វាគមន៏</h1>
          <p className="text-center font-semibold text-xl mt-5">ចូលប្រព័ន្ធ</p>
          <form className="mt-6" onSubmit={handleLogin} >
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-blue-900">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                placeholder="Enter your username"
                className="mt-1 bg-gray-200 p-[10px] block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-blue-900">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter your password"
                className="mt-1 bg-gray-200 p-[10px] block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
            </div>
            <button
              type="submit"
              className="w-full mt-5 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              ចូលប្រព័ន្ធ
            </button>
            {login && <LoginAlert/> }
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login


