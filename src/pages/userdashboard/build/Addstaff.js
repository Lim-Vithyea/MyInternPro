import React from "react";
import "../../../index.css";
const StaffForm = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg  rounded  khmer-text-lg">
      <h2 className="text-3xl font-bold mx-2 mb-4 mt-2 text-blue-​700 khmer-text">បញ្ជូលចំនួនបុគ្គលិក</h2>
      <hr class="h-0.5 bg-gradient-to-b rounded from-blue-500 to-purple-500 border-0 my-6"/>




      <div className="grid align-center grid-cols-2 gap-6 py-3 ">
       
        {/* Left Column */}

        <div>
          <label className="block text-gray-​700 khmer-text text-blue-500">បុគ្គលិកសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          
          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">បុគ្គលិកមិនបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          
          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">បុគ្គលិកបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          
          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនក្របខណ្ឌសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />

          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនកិច្ចសន្យាសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          
          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនពីរថ្នាក់ពីរពេលសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />

          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនថ្នាក់គួបសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
        </div>
        
        {/* Right Column */}
        <div>
          <label className="block text-gray-​700 khmer-text text-blue-500">បុគ្គលិកស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          
          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">បុគ្គលិកស្រីមិនបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          
          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">បុគ្គលិកស្រីបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          
          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនក្របខណ្ឌស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />

          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនកិច្ចសន្យាស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />

          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនពីរថ្នាក់ពីរពេលស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />

          <label className="block text-gray-​700 khmer-text text-blue-500 mt-3">គ្រូបង្រៀនថ្នាក់គួបស្រីសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
        </div>
      </div>
      
      <button className="mt-6 bg-blue-500 text-white px-4 py-2  rounded  khmer-text hover:bg-blue-​700 khmer-text">
        បញ្ជូល
      </button>
    </div>
  );
};

export default StaffForm;