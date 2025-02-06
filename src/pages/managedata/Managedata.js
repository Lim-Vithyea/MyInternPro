import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Usertable from "../../components/Usertable";

const Managedata = () => {
  
  const [message, setMessage] = useState("");
  const [schools, setSchools] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
    schoolid: "",
  });
  //get schooldata
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/school");
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };
    fetchSchools();
  }, []);
  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/api/insert", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(response.data.message);
      setFormData({ username: "", password: "", role: "", schoolid: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
      const errorMsg = error.response?.data?.error || error.response?.data?.details || "Unknown error";
      setMessage(`Failed to add user: ${errorMsg}`);
    }
  };
  return (
    <div>
    <div className="w-full bg-white flex items-center justify-center border-b-2">
        <img src="/images/P10.png" alt="Emblem" className="w-10 h-10" />
        <h1 className="text-start pt-3 pb-3 font-bold">Manage Data</h1>
      </div>
    <div className="w-[98%] mx-auto mt-4 bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg">
      <h1 className="font-bold text-2xl text-blue-700">Add User</h1>
      {/* message if error */}
      {message && (<div className="mt-4 p-2 bg-blue-100 text-blue-700 rounded">{message}</div>)}
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 items-start">
          <div className="sm:col-span-4 grid grid-cols-1 sm:grid-cols-4 gap-4 mt-7">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" id="username"  required placeholder="Enter your username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                onChange={handleChange}
                value={formData.username}/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter your password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
                onChange={handleChange}
                value={formData.password}/>
            </div>
            <div>
              <label htmlFor="role"
                className="block text-sm font-medium text-gray-700">Role
              </label>
              <select name="role" id="role" onChange={handleChange} value={formData.role} required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          {/* school */}
            <div>
              <label htmlFor="schoolid" className="block text-sm font-medium text-gray-700">School</label>
              <select name="schoolid" id="schoolid" onChange={handleChange} value={formData.schoolid} required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select School</option>
                {schools.map((school) => (<option key={school.id} value={school.sid}>{school.schoolname}</option>))}
              </select>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full cursor-pointer hover:bg-blue-100 transition-all">
              <img src="/images/pf.jpg" alt="user" className="border-[3px] border-blue-500 rounded-full"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 mr-3 ">
          <button type="submit"
            className="w-[180px] h-[50px] bg-blue-700 rounded-xl hover:bg-blue-400 transition-all duration-300 shadow-lg text-white font-bold">
            Save
          </button>
        </div>
      </form>   
    </div>
    <Usertable/>
    </div>
  );
};

export default Managedata;