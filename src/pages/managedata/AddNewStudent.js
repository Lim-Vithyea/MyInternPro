import React from "react";

const AddNewStudent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-[#1B1B69] flex items-center px-6 py-4 shadow-md">
        <img src="/images/P10.png" alt="Emblem" className="w-12 h-12" />
        <h1 className="text-white font-bold text-lg sm:text-xl ml-4">
          Manage Data / Add Student    
        </h1>
      </div>

      {/* Form Section */}
      <div className="w-[95%] mx-auto my-6 bg-white p-6 rounded-xl shadow-lg">
        <h1 className="font-bold text-2xl text-blue-700">Add Student</h1>
        <form className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Family Name", type: "text" },
              { label: "Given Name", type: "text" },
              { label: "Name in Latin", type: "text" },
              { label: "Grade", type: "text" },
              { label: "Date of Birth", type: "date" },
              { label: "Place of Birth", type: "text" },
              { label: "Phone Number", type: "tel" },
            ].map(({ label, type }, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type={type}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            ))}
            
            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="w-[180px] h-[50px] bg-blue-700 rounded-xl hover:bg-blue-500 text-white font-bold shadow-md transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Student Data Section */}
      <div className="w-[95%] mx-auto my-6 bg-white p-6 rounded-xl shadow-lg">
        <h1 className="font-bold text-2xl text-blue-700">Student Data</h1>
        {/* Student Data Table or List Goes Here */}
      </div>
    </div>
  );
};

export default AddNewStudent;
