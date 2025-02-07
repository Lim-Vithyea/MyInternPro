
import React, { useEffect, useState } from "react";
import { showUserData } from "../Services/Showuser";
import UserEditComponent from "./UserEditComponenet";
import jsPDF from "jspdf";
import "jspdf-autotable";
<<<<<<< HEAD
=======
// import * as XLSX from "xlsx";
>>>>>>> d423c6701bc1f0e85a49c64e136560d063062909

const Usertable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [err, setErr] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isEdit, setEdit] = useState(false);
  const rowsPerPage = 10;
  
<<<<<<< HEAD
=======
 //excel export
  // const exportToExcel = (users) => {
  //   const ws = XLSX.utils.json_to_sheet(users); // Convert data to sheet
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Users"); // Add sheet to workbook
  //   XLSX.writeFile(wb, "UserData.xlsx");
  //   };

>>>>>>> d423c6701bc1f0e85a49c64e136560d063062909
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
  //idk what this is don't ask me anything

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
  //end change page

  //edit function
  const handlEdit = () =>{
    setEdit(true);
    setTimeout(() => {
      setEdit(false);
    }, 2000);
  };

  //export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("User Data", 14, 10); // Title
    const tableColumn = ["No", "Username", "Role", "School Name"]; // Headers
    const tableRows = users.map((user, index) => [
      index + 1,
      user.username,
      user.role,
      user.schoolname,
    ]);
    doc.autoTable({
      head: [tableColumn], // Column headers
      body: tableRows, // Data rows
      startY: 20, // Start below the title
    });
    doc.save("UserData.pdf"); 
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      <h1 className="text-xl text-center font-bold text-blue-500 p-5">User Data</h1>
      {err && <p className="text-red-500 text-center">{err}</p>}
      {/* Search Input */}
<<<<<<< HEAD
      <div className=" gap-5 md:block lg:flex">
      <div className="mb-4">
        <input type="text" placeholder="Search users..." value={search}
          onChange={(e) => setSearch(e.target.value)} 
          className="px-4 py-2 w-full max-w-sm border rounded"/>
      </div>
      {/* Export button */}
      <button onClick={exportPDF} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">
        Export as PDF
      </button>
      
=======
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      {/* Search Input */}
        <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-full sm:w-1/3 border rounded"/>
        {/* Export Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button 
            onClick={exportPDF} 
            className="px-4 py-2 bg-green-500 text-white rounded w-full sm:w-auto">
            Export as PDF
          </button>
          {/* <button 
            onClick={() => exportToExcel(users)} 
            className="px-4 py-2 bg-green-500 text-white rounded w-full sm:w-auto">
            Export to Excel
          </button> */}
        </div>
>>>>>>> d423c6701bc1f0e85a49c64e136560d063062909
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left rtl:text-right text-black-500">
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
            {currentRows.length > 0 ? (
              currentRows.map((user, index) => (
                <tr key={user.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">{indexOfFirstRow + index + 1}</td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">{user.schoolname}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={handlEdit} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
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
      {isEdit && <UserEditComponent/>}
      {/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <button onClick={prevPage} disabled={currentPage === 1} className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}>
          Previous
        </button>
        <span className="px-4 py-2">Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredUsers.length / rowsPerPage)}
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage >= Math.ceil(filteredUsers.length / rowsPerPage) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Usertable;

