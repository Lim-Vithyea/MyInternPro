
import React from "react";
import Building from "../../../asset/bulinding.svg";
import BuildingTypeCard from "../../../components/BuildingCard";
import SaveIcon from "../../../asset/save-svgrepo-com.svg"

function AddBuilding() {
  return (
    <details className="border-2 p-4 rounded-md shadow-lg">
      <summary className="khmer-text text-blue-500 text-xl">បញ្ចូលទិន្នន័យអគារ</summary>
    <div className="w-[99%] mx-auto mt-2 bg-white rounded p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      {/* Header Section */}
      <div className="flex items-center">
        <img src={Building} className="w-10 h-10 mr-2" alt="Building Icon" />
        <h1 className="khmer-text text-blue-500 text-2xl font-bold">
          បញ្ចូលទិន្នន័យអគារ
        </h1>
      </div>
        <form>
          <div className="grid grid-cols-3 gap-4 py-5">
            <BuildingTypeCard title="បេតុងប្រក់ក្បឿង/ស័ង្គសី" buildingId="concrete_buildings" roomId="concrete_rooms"/>
            <BuildingTypeCard title="ឈើប្រក់ក្បឿង/ស័ង្គសី" buildingId="wood_buildings" roomId="wood_rooms"/>
            <BuildingTypeCard title="រោងដោល (ចំនួនអគារ និងបន្ទប់)" buildingId="shed_buildings" roomId="shed_rooms"/>
          </div>
          <div className="flex justify-end">
            <button
                className="w-[150px] h-[50px] flex justify-center items-center bg-blue-700 font-semibold text-white rounded-lg cursor-pointer hover:bg-blue-500 transition-all duration-300 khmer-text"
                type="submit"> រក្សាទុក
              <img src={SaveIcon} className="w-5 h-5 ml-[2px] "alt="icon"/>
            </button>
          </div>
        </form>
    </div>
    </details>
  );
}

// Reusable Building Type Card Componen

export default AddBuilding;
