//// filepath: /d:/InternWork/MyInternPro/fronend/src/components/Usertable.js
import React, { useEffect, useState } from "react";
import { showUserData } from "../Services/Showuser";
import UserEditComponent from "./UserEditComponenet";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../index.css"

const Usertable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [err, setErr] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isEdit, setEdit] = useState(false);
  const rowsPerPage = 10;
  
  useEffect(() => {
    const showData = async () => {
      try {
        const fetchedData = await showUserData();
        setUsers(fetchedData);
        setFilteredUsers(fetchedData); // Initially set filtered data as all users
        console.log(fetchedData);
      } catch (err) {
        setErr(err.response?.data?.error || err.message);
      }
    };
    showData();

    //refresh every 30s automatically
    const setRefresh = setInterval(()=>{
      showData();
    },30000)
    return () => clearInterval(setRefresh);

  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredUsers(users); // Show all users if no search term
    } else {
      const lowercasedSearch = search.toLowerCase();
      const filtered = users.filter(
        (user) =>
          user.username.toLowerCase().includes(lowercasedSearch) ||
          user.schoolname.toLowerCase().includes(lowercasedSearch)
      );
      setFilteredUsers(filtered); 
    }
  }, [search, users]); // Re-run filtering when search or users data changes

  // Calculate indexes for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredUsers.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredUsers.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Edit function
  const handlEdit = () => {
    setEdit(true);
    setTimeout(() => {
      setEdit(false);
    }, 2000);
  };

  // Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFont("KhmerOSbattambang-normal");
    doc.text("User Data", 14, 10); // Title
    const tableColumn = ["No", "Username", "Role", "School Name"];
    const tableRows = users.map((user, index) => [
      index + 1,
      user.username,
      user.role,
      user.schoolname,
    ]);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
    doc.save("UserData.pdf"); 
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      <h1 className="text-xl text-center font-bold text-blue-500 p-5 khmer-text">ទិន្នន័យអ្នកប្រើប្រាស់</h1>
      {err && <p className="text-red-500 text-center">{err}</p>}
      {/* Search and Export */}
      <div className="gap-5 md:block lg:flex justify-between">
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-full max-w-sm border rounded"
          />
        </div>
        <button onClick={exportPDF} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">
          Export as PDF
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left rtl:text-right text-black-500">
          <thead className=" text-blue-500 uppercase bg-gray-200 text-[16px]">
            <tr>
              <th scope="col" className="px-6 py-3 khmer-text ">ល.រ</th>
              <th scope="col" className="px-6 py-3 khmer-text">ឈ្មោះអ្នកប្រើប្រាស់</th>
              <th scope="col" className="px-6 py-3 khmer-text">លេខកូតសាលារៀន</th>
              <th scope="col" className="px-6 py-3 khmer-text">ប្រភេទ</th>
              <th scope="col" className="px-6 py-3 khmer-text">ឈ្មោះសាលារៀន</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((user, index) => (
                <tr key={user.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">{indexOfFirstRow + index + 1}</td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4 text-green-500">{user.school_code}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4 khmer-text">{user.schoolname}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={handlEdit} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isEdit && <UserEditComponent />}
      {/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(filteredUsers.length / rowsPerPage)}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage >= Math.ceil(filteredUsers.length / rowsPerPage)
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Usertable;