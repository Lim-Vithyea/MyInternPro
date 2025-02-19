import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DisplayData() {
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState("");
  const navigate = useNavigate();

  const handleEdit = async (id) => {
    try {
      navigate(`/user/edit-student-data/${id}`);
    } catch (error) {
      setError("Error navigating to edit page: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("តើអ្នកពិតជាចង់លុបទិន្នន័យនេះមែនទេ?")) {
      try {
        setLoading(true);
        await axios.delete(
          `http://localhost:3002/api/delete-student-data/${id}`
        );
        await fetchStudentData(); // Reuse the fetch function instead of duplicating code
      } catch (error) {
        setError("Error deleting data: " + error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchStudentData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3002/api/get-student-data"
      );
      setStudentData(response.data);
      setFilteredData(response.data); // Initialize filtered data with all student data
      setError(null);
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGradeChange = (event) => {
    const grade = event.target.value;
    setSelectedGrade(grade);

    if (grade === "") {
      setFilteredData(studentData); // If no grade is selected, show all data
    } else {
      const filtered = studentData.filter((data) => {
        return (
          data.grade1 === grade ||
          data.grade2 === grade ||
          data.grade3 === grade ||
          data.grade4 === grade ||
          data.grade5 === grade ||
          data.grade6 === grade
        );
      });
      setFilteredData(filtered);
    }
  };


  useEffect(() => {
    fetchStudentData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-2-1 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-1 bg-red-50 text-red-600 rounded-lg">
        <p>{error}</p>
        <button
          onClick={fetchStudentData}
          className="mt-1 px-1 py-1 bg-red-600 text-white rounded-md hover:bg-red-700">
          សាកល្បងម្តងទៀត
        </button>
      </div>
    );
  }

  return (
    <div className="w-full p-1">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-2xl  p-2 font-bold text-blue-700 khmer-text">
          ទិន្នន័យសិស្សតាមថ្នាក់
        </h2>

        {/* Grade Filter Dropdown */}
        <select
          value={selectedGrade}
          onChange={handleGradeChange}
          className="px-1 py-1 border khmer-text rounded-md"
        >
          <option value="">ជ្រើសរើសថ្នាក់</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 1">Grade 1</option>
        </select>

        <button
          onClick={fetchStudentData}
          className="px-1 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
          ធ្វើបច្ចុប្បន្នភាព
        </button>
      </div>

<div className="overflow-x-auto w-full  shadow-lg rounded-lg">
<h2 className="text-xl  p-2 font-bold text-blue-600 khmer-text text-center">ថ្នាក់មត្តេយ្យ</h2>
  <table className="min-w-full overflow-x-scroll table-fixed bg-white">
    <thead className="bg-gray-100">
       
      <tr className="khmer-text text-gray-700">
        <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-12">ល.រ</th>
        <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-24">ប្រភេទថ្នាក់</th>
        <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-24">ចំនួនថ្នាក់មត្តេយ្យ</th>
        <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-24">ចំនួនសិស្សថ្នាក់មត្តេយ្យសរុប</th>
        <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-24">ចំនួនសិស្សស្រីថ្នាក់មត្តេយ្យសរុប</th>
        <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-32">ថ្ងៃបញ្ចូល</th>
        <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-32">Actions</th>
              
      </tr>
    </thead>
    <tbody>
      {filteredData.length === 0 ? (
        <tr>
          <td colSpan="4" className="px-1 py-1 text-center text-gray-500 khmer-text">
            មិនមានទិន្នន័យ 
          </td>
        </tr>
      ) : (
        filteredData.map((data, index) => (
          <tr key={data.id || index} className="hover:bg-gray-50 khmer-text text-center">
            <td className="px-1 py-3 border-2 border-blue-300 text-center w-12">{data.id}</td>
            <td className="px-1 py-3 border-2 border-blue-300 text-center w-12">{data.id}</td>
            <td className="px-1 py-1 border-2 border-blue-300 text-center w-24">{data.kindergarten}</td>
            <td className="px-1 py-1 border-2 border-blue-300 text-center w-24">{data.totalKindergarten}</td>
            <td className="px-1 py-1 border-2 border-blue-300 text-center w-24">{data.girlsKindergarten}</td>
            <td className="px-1 py-1 border-2 border-blue-300 text-center">
                    {new Date(data.created_at).toLocaleDateString("km-KH")}
                  </td>
            <td className="px-1 py-1 border-2 border-blue-300 text-center">
            
              <button
                onClick={() => handleEdit(data.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md mr-1 hover:bg-blue-600 transition-colors">
                កែប្រែ
              </button>
              <button
                onClick={() => handleDelete(data.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
                លុប
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

        {/* <table className="min-w-full table-fixed bg-white">
        <thead className="bg-gray-100">
        <tr>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-20">Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Total Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Girls Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-20">Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Total Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Girls Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-20">Grade 3</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Total Grade 3</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Girls Grade 3</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-20">Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Total Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Girls Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-20">Grade 5</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Total Grade 5</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Girls Grade 5</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-20">Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Total Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-24">Girls Grade 1</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-32">Created At</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="22" className="px-1 py-1 text-center text-gray-500 khmer-text">
                  មិនមានទិន្នន័យ
                </td>
              </tr>
            ) : (
              filteredData.map((data, index) => (
                <tr key={data.id || index} className="hover:bg-gray-50 khmer-text text-center">
                  <td className="px-1 py-1 border-2 border-blue-300">{data.id}</td>
                  <td className="px-1 py-1 border-2 border-blue-300">{data.kindergarten}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.totalKindergarten}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.girlsKindergarten}</td>
                  <td className="px-1 py-1 border-2 border-blue-300">{data.grade1}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.totalGrade1}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.girlsGrade1}</td>
                  <td className="px-1 py-1 border-2 border-blue-300">{data.grade2}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.totalGrade2}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.girlsGrade2}</td>
                  <td className="px-1 py-1 border-2 border-blue-300">{data.grade3}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.totalGrade3}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.girlsGrade3}</td>
                  <td className="px-1 py-1 border-2 border-blue-300">{data.grade4}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.totalGrade4}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.girlsGrade4}</td>
                  <td className="px-1 py-1 border-2 border-blue-300">{data.grade5}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.totalGrade5}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.girlsGrade5}</td>
                  <td className="px-1 py-1 border-2 border-blue-300">{data.grade6}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.totalGrade6}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{data.girlsGrade6}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">
                    {new Date(data.created_at).toLocaleDateString("km-KH")}
                  </td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">
                    <button
                      onClick={() => handleEdit(data.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md mr-1 hover:bg-blue-600 transition-colors">
                      កែប្រែ
                    </button>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
                      លុប
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table> */}
     
    </div>
    
  );
}

export default DisplayData;
