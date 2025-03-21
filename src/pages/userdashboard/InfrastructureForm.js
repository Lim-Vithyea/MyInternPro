import React from "react";
import SaveIcon from "../../asset/save-svgrepo-com.svg";
import Class from "../../asset/class.svg";
import Building from "../../asset/bulinding.svg"

const facilities = [
  { id: "lab", name: "បន្ទប់ពិសោធន៍" },
  { id: "library", name: "បណ្ណាល័យ" },
  { id: "studyroom", name: "បន្ទប់សិក្សាគរុកោសល្យ" },
  { id: "computer_room", name: "បន្ទប់សិក្សាកុំព្យូរទ័រ" },
  { id: "workshop", name:"រោងជាង"},
  { id: "sportfield", name:"ទីលានកីឡា"},
  { id: "park", name: "សួនបំណិនជីវិត"},
  { id: "playground", name: "កន្លែងកុមារលេង"},
  { id: "nursing_room", name: "បន្ទប់សុខភាព"},
  { id: "fence_gate", name: "របង-ខ្លោងទ្វារ"},
  { id: "toilet", name: "បង្គន់អនាម័យ"},
  { id: "handwashing", name: "កន្លែងលាងដៃ"},
  { id: "electricity", name: "បណ្តាញអគ្គិសនី"},
  { id: "wifi", name: "បណ្តាញអ៊ីនធើណេត"},
  { id: "cantine", name: "អាហារដ្ឋាន"},
  
];

const answer1 = [
    { label: "មាន", value: "yes", color: "text-green-500",},
    { label: "គ្មាន", value: "no", color: "text-red-500", },
]
const answer2 = [
    { label: "ដំណើរការ", value: "operational", color: "text-green-500", },
    { label: "មិនដំណើរការ", value: "non-operational", color: "text-red-500"},
]

const InfrastructureForm = () => {

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("It's works");
    }


  return (
    <div>
        <div className="w-[99%] mx-auto mt-2 bg-white rounded p-6 sm:p-8 lg:p-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="flex ">
                <img src={Class} className="w-10 h-10 mr-2" alt="icon"/>
            <h1 className="text-blue-700 font-bold khmer-text text-2xl text-start">
                    ហេត្ថារចនាសម្ព័ន្ធសាលារៀន
            </h1>
            </div>
            <h4 className="text-gray-400 khmer-text text-start pt-5 italic"><span className="text-red-500 khmer-text">សម្គាល់*:</span> សូមជ្រើសយកចម្លើយ ២ ក្នុង ១សំណួរ*</h4>
            <form className="pt-10" onSubmit={handleSubmit}>
                {facilities.map((facility, index) => (
                    <div className="flex flex-col md:flex-row md:items-center md:gap-6  px-4 py-2" key={facility.id}>
                        {/* Facility Name */}
                        <div className="w-full md:w-[500px] flex items-center">
                        <h2 className="py-3 md:py-5 pr-2 text-blue-500 font-semibold">{index + 1}.</h2>
                        <h2 className="khmer-text text-blue-500 text-[18px] py-3 md:py-5 text-center md:text-left">
                            {facility.name}
                        </h2>
                        </div>
                        {/* Options */}
                        <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-[1200px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b-2 border-gray-300 py-5 ">
                            {[...answer1, ...answer2].map((option) => (
                                <div className="flex items-center gap-2" key={option.value}>
                                <input
                                    type="checkbox"
                                    name={facility.id}
                                    value={option.value}
                                    className="w-5 h-5"/>
                                <label className={`${option.color} khmer-text`}>{option.label}</label>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
                {/* Submit Button */}
                <div className="py-10 flex justify-center md:justify-end px-4">
                    <button
                        className="w-[150px] h-[50px] flex justify-center items-center bg-blue-700 font-semibold text-white rounded-lg cursor-pointer hover:bg-blue-500 transition-all duration-300 khmer-text"
                        type="submit">
                        រក្សាទុក
                        <img src={SaveIcon} className="w-5 h-5 ml-[2px] "alt="icon"/>
                    </button>
                </div>
            </form>
        </div>
        <div className="w-[99%] mx-auto mt-2 bg-white rounded p-6 sm:p-8 lg:p-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="flex ">
                <img src={Building} className="w-10 h-10 mr-2" alt="icon"/>
                <h1 className="khmer-text text-blue-500 text-2xl font-bold">ទិន្នន័យអគារ</h1>
            </div>
                
        </div>
    </div>

  );
};

export default InfrastructureForm;

