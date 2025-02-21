import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayData() {
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState("");

  // Function to fetch data from the API
  const fetchStudentData = async () => {
    try {
      const token = localStorage.getItem("token");
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3002/api/showstudentdata",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStudentData(response.data);
      console.log(response.data);
      // Filter data based on the current selected grade
      if (selectedGrade === "") {
        setFilteredData(response.data);
      } else {
        const filtered = response.data.filter((data) => {
          return (
            data.grade1 === selectedGrade ||
            data.grade2 === selectedGrade ||
            data.grade3 === selectedGrade ||
            data.grade4 === selectedGrade ||
            data.grade5 === selectedGrade ||
            data.grade6 === selectedGrade
          );
        });
        setFilteredData(filtered);
      }
      setError(null);
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [selectedGrade]);

  // Handle grade filter change
  const handleGradeChange = (e) => {
    const grade = e.target.value;
    setSelectedGrade(grade);
    // Immediately filter data if available
    if (grade === "") {
      setFilteredData(studentData);
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

  // Delete a record and then refetch data
  // const handleDelete = async (id) => {
  //   if (window.confirm("តើអ្នកពិតជាចង់លុបទិន្នន័យនេះមែនទេ?")) {
  //     try {
  //       setLoading(true);
  //       await axios.delete(`http://localhost:3002/api/delete-student-data/${id}`);
  //       await fetchStudentData();
  //     } catch (error) {
  //       setError("Error deleting data: " + error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  // Placeholder for edit functionality
  const handleEdit = (id) => {
    // Add your edit logic here (e.g., navigate to an edit form)
    console.log("Edit record", id);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-1 bg-red-50 text-red-600 rounded-lg">
        <p>{error}</p>
        <button
          onClick={fetchStudentData}
          className="mt-1 px-1 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          សាកល្បងម្តងទៀត
        </button>
      </div>
    );
  }

  return (
    <div className="w-full p-1">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-2xl p-2 font-bold text-blue-700 khmer-text">
          ទិន្នន័យសិស្សតាមថ្នាក់
        </h2>
        {/* Grade Filter Dropdown */}
        <select
          value={selectedGrade}
          onChange={handleGradeChange}
          className="px-1 py-1 border khmer-text rounded-md">
          <option value="">ជ្រើសរើសថ្នាក់</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
        </select>
        <button
          onClick={fetchStudentData}
          className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 khmer-text m-3">
          ធ្វើបច្ចុប្បន្នភាព
        </button>
      </div>
      <div className=" w-full shadow-lg rounded-lg">
        <h2 className="text-xl p-2 font-bold text-blue-600 khmer-text text-center">
          ថ្នាក់មត្តេយ្យ
        </h2>
        <table className="min-w-full overflow-x- table-fixed bg-white">
          <thead className="bg-gray-100">
            <tr className="khmer-text text-gray-700">
              <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-12">ល.រ</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-24">ចំនួនថ្នាក់មត្តេយ្យ</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-24">ចំនួនសិស្សសរុប</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-24">ចំនួនសិស្សស្រី</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-32">ថ្ងៃបញ្ចូល</th>
              <th className="px-1 py-3 border-2 border-blue-300 text-center khmer-text w-32"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-1 py-1 text-center text-gray-500 khmer-text">
                  មិនមានទិន្នន័យ
                </td>
              </tr>
            ) : (
              filteredData.map((data, index) => (
                <tr key={data.id || index} className="hover:bg-gray-50 khmer-text text-center">
                  <td className="px-1 py-3 border-2 border-blue-300 text-center w-12">{index + 1}</td>
                  <td className="px-1 py-3 border-2 border-blue-300 text-center w-12">{data.kindergarten}<span className="khmer-text"> បន្ទប់</span></td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center w-24 text-blue-500">{data.total_kindergarten_students} <span className="khmer-text text-blue-500"> នាក់</span></td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center w-24 text-pink-500">{data.female_kindergarten_students}<span className="khmer-text text-pink-500"> នាក់</span></td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center">{new Date(data.created_at).toLocaleDateString("km-KH")}</td>
                  <td className="px-1 py-1 border-2 border-blue-300 text-center w-32">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md mr-1 hover:bg-blue-600 transition-colors khmer-text">
                      កែប្រែ
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors khmer-text">លុប
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayData;


