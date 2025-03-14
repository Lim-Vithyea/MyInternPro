import React from "react";
import "../../../index.css";
const StaffForm = () => {
  return (
    <div className="w-[99%] mx-auto p-6 mt-2 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded  khmer-text-lg">
      <h2 className="text-2xl font-bold  mb-4 mt-2 khmer-text">បញ្ជូលចំនួនបុគ្គលិក</h2>
      {/* <hr className="h-0.5 bg-gradient-to-b rounded from-blue-500 to-purple-500 border-0 my-6"/> */}
      <form>
      <div className="grid align-center lg:grid-cols-2 gap-6 py-3 md:grid-cols-2 sm:grid-cols-1 ">
        {/* Left Column */}
        <div>
          <label className="block khmer-text text-blue-500">បុគ្គលិកសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" required/>
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកមិនបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនក្របខណ្ឌសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនកិច្ចសន្យាសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនពីរថ្នាក់ពីរពេលសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនថ្នាក់គួបសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
        </div>
        {/* Right Column */}
        <div>
          <label className="block khmer-text text-blue-500">បុគ្គលិកស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកស្រីមិនបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">បុគ្គលិកស្រីបង្រៀន</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនក្របខណ្ឌស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនកិច្ចសន្យាស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនពីរថ្នាក់ពីរពេលស្រីសរុប</label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
          <label className="block khmer-text text-blue-500 mt-3">គ្រូបង្រៀនថ្នាក់គួបស្រីសរុប </label>
          <input type="number" className="w-full p-2 text-xs m-1 border  rounded  khmer-text" placeholder="បញ្ជូលចំនួនគ្រូ" />
        </div>
      </div>
      
      <button type="submit" className="mt-6 bg-blue-500 text-white px-4 py-2  rounded  khmer-text hov khmer-text">
        បញ្ជូល
      </button>
      </form>
    </div>
  );
};

export default StaffForm;