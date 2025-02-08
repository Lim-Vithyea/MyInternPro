
import React, { useEffect, useState } from "react";
import UserEditComponent from "./UserEditComponenet";
import { showSchoolData } from "../Services/Showschool";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Schooltable = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [filteredSchool, setFilteredSchool] = useState([]);
  const [err, setErr] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isEdit, setEdit] = useState(false);
  const rowsPerPage = 10;
  
  useEffect(() => {
    const displaySchoolData = async () => {
      try {
        const fetchedData = await showSchoolData();
        setSchoolData(fetchedData);
        setFilteredSchool(fetchedData); // Initially set filtered data as all users
        console.log(fetchedData);
      } catch (err) {
        setErr(err.response?.data?.error || err.message);
      }
    };
    displaySchoolData();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredSchool(schoolData); // Show all users if no search term
    } else {
      const lowercasedSearch = search.toLowerCase();
      const filtered = schoolData.filter(
        (school) =>
          school.school_code.toString().includes(lowercasedSearch) ||
          school.schoolname.toLowerCase().includes(lowercasedSearch)
      );
      setFilteredSchool(filtered); 
    }
  }, [search, schoolData]); // Re-run filtering when search or users data changes

  // Calculate indexes for pagination
  //idk what this is don't ask me anything

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredSchool.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredSchool.length / rowsPerPage)) {
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
    doc.text("School Data", 14, 10); // Title
    const tableColumn = ["No", "School Code", "School name"]; // Headers
    const tableRows = schoolData.map((schools, index) => [
      index + 1,
      schools.school_code,
      schools.schoolname,
    ]);
    doc.autoTable({
      head: [tableColumn], // Column headers
      body: tableRows, // Data rows
      startY: 20, // Start below the title
    });
    doc.save("SchoolData.pdf"); 
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      <h1 className="text-xl text-center font-bold text-blue-500 p-5">School Data</h1>
      {err && <p className="text-red-500 text-center">{err}</p>}
      {/* Search Input */}
      <div className=" gap-5 md:block lg:flex justify-between">
      <div className="mb-4 flex ">
        <input type="text" placeholder="Search school..." value={search}
          onChange={(e) => setSearch(e.target.value)} 
          className="px-4 py-2 w-full max-w-sm border rounded"/>
      </div>
      {/* Export button */}
      <button onClick={exportPDF} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">
        Export as PDF
      </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left rtl:text-right text-black-500">
          <thead className="text-xs text-blue-500 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">No</th>
              <th scope="col" className="px-6 py-3">School code</th>
              <th scope="col" className="px-6 py-3">School Name</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((schools, index) => (
                <tr key={schools.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">{indexOfFirstRow + index + 1}</td>
                  <td className="px-6 py-4 text-green-500">{schools.school_code}</td>
                  <td className="px-6 py-4">{schools.schoolname}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={handlEdit} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">No school found</td>
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
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredSchool.length / rowsPerPage)}
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage >= Math.ceil(filteredSchool.length / rowsPerPage) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Schooltable;

