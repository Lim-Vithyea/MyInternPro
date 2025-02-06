
// // import React from "react";
// // import Sidebar from "../../components/Sidebar";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import Dashboard from "./Dashboard";
// // import Managedata from "../managedata/Managedata";
// // import Profile from "../setting/Profile";

// // export const PrivateRoute = ({ element }) => {
// //   const token = localStorage.getItem('token');
// //   return token ? element : <Navigate to="/" replace />;
// // };

// // const Landing = () => {

// //   return (
// //     <div className="flex">
// //       <div className="w-[15%]">
// //         <Sidebar/>
// //       </div>
// //       <div className="flex-1">
// //         <Routes>
// //           {/* <Route path="/dashboard" element={PrivateRoute element={<Dashboard />}} /> */}
// //           {/* <Route path="/managedata" element={<Managedata />} /> */}
// //           {/* <Route path="/setting" element={<Setting />} /> */}
// //           <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
// //           <Route path="/managedata" element={<PrivateRoute element={<Managedata />} />} />
// //           <Route path="/setting" element={<PrivateRoute element={<Profile />} />} />
// //           <Route path="*" element={<Navigate to="dashboard" />} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Landing;

// import React, { useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Managedata from "../managedata/Managedata";
// import Profile from "../setting/Profile";

// export const PrivateRoute = ({ element }) => {
//   const token = localStorage.getItem("token");
//   return token ? element : <Navigate to="/" replace />;
// };

// const Landing = () => {
//   const [sidebarOpen] = useState(true); // Sidebar toggle state

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div
//         className={` text-white ${
//           sidebarOpen ? "w-[20%] md:w-[15%]" : "w-[0px] md:w-[60px]"
//         } transition-all duration-300 ease-in-out`}>
//         <Sidebar />
//       </div>
//       {/* Content */}
//       <div className="flex-1">
//         <Routes>
//           <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
//           <Route path="/managedata" element={<PrivateRoute element={<Managedata />} />} />
//           <Route path="/setting" element={<PrivateRoute element={<Profile />} />} />
//           <Route path="*" element={<Navigate to="dashboard" />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import React from "react";
import Sidebar from "../../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Managedata from "../managedata/Managedata";
import Profile from "../setting/Profile";

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
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/managedata" element={<PrivateRoute element={<Managedata />} />} />
          <Route path="/setting" element={<PrivateRoute element={<Profile />} />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;