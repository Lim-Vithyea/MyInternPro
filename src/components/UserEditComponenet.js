// import React from "react";

// const UserEditComponent = ({ selectedUser, setSelectedUser, handleUpdateUser, setEdit }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-bold mb-4">Edit User</h2>
//         <label className="block">Username:</label>
//         <input
//           type="text"
//           value={selectedUser?.username || ""}
//           onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
//           className="border p-2 w-full"/>
//         <label className="block">Role:</label>
//         <input
//           type="text"
//           value={selectedUser?.role || ""}
//           onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
//           className="border p-2 w-full"/>
//         <div className="flex justify-end mt-4">
//           <button onClick={() => setEdit(false)} className="bg-gray-500 text-white px-4 py-2 mr-2">
//             Cancel
//           </button>
//           <button onClick={handleUpdateUser} className="bg-blue-500 text-white px-4 py-2">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserEditComponent;


import React from "react";

const UserEditComponent = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h1 className="text-center font-semibold">🚨 We are really sorry 🚨</h1>
       <p className="text-red-500 font-medium text-xs p-[40px]">The feature is currently unavailable, because i can't implement the feature </p>
      </div>
    </div>
  );
};

export default UserEditComponent;
