import React from 'react';

const Usermangedata = () => {
  return (
    <div className="w-[98%] mx-auto mt-2 bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <h1 className="font-bold text-2xl text-blue-700 text-start">Add Student</h1>
      <div className="mt-6">
        <form>
          {/* Form Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="family-name" className="block text-sm font-medium text-gray-700">Family Name</label>
              <input type="text" id="family-name" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="given-name" className="block text-sm font-medium text-gray-700">Given Name</label>
              <input type="text" id="given-name" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="name-in-latin" className="block text-sm font-medium text-gray-700">Name in Latin</label>
              <input type="text" id="name-in-latin" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
              <input type="text" id="grade" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div>
              <label htmlFor="date-of-birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" id="date-of-birth" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="place-of-birth" className="block text-sm font-medium text-gray-700">Place of Birth</label>
              <input type="text" id="place-of-birth" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone-number" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <select id="gender" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>s
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button type="submit" className="w-[180px] h-[50px] bg-blue-700 rounded-xl hover:bg-blue-400 transition-all duration-300 shadow-lg text-white font-bold">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usermangedata;
