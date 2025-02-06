
import React, { useEffect, useState } from "react";
import { showUserData } from "../Services/Showuser";

const Usertable = () => {
  const [users, setUsers] = useState([]); 
  const [err, setErr] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

//calling the imported funtion to fetch the data from the database
  useEffect(() => {
    const showData = async () => {
      try {
        const fetchedData = await showUserData();
        setUsers(fetchedData);
        console.log(fetchedData);
      } catch (err) {
        setErr(err.response?.data?.error || err.message);
      }
    };
    showData();
  }, []);

  // Calculate indexes for pagination
  //i don't underststand this either pls don't ask me anything about this
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);
  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //end change pages function
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      <h1 className="text-xl text-center font-bold text-blue-500 p-5">
        User Data
      </h1>
      {err && <p className="text-red-500 text-center">{err}</p>}
      <table className="w-full text-sm text-left rtl:text-right text-black-500">
        <thead className="text-xs text-blue-500 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Username</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">School Name</th>
            <th scope="col" className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>

        {/* if the data are greater than 0 this will show the data, in case you asked */}
          {currentRows.length > 0 ? (
            currentRows.map((user, index) => (
              <tr key={user.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">{indexOfFirstRow + index + 1}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.schoolname}</td>
                <td className="px-6 py-4 text-right">
                {/* i will implement this later(edit function) */}
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

{/* this make no sense to me either i just copy paste */}
{/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <button onClick={prevPage} disabled={currentPage === 1} className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}>Previous</button>
        <span className="px-4 py-2">Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(users.length / rowsPerPage)}
          className={`px-4 py-2 bg-gray-300 rounded ${ currentPage >= Math.ceil(users.length / rowsPerPage) 
            ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Usertable;
