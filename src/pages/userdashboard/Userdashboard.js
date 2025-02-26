import React from "react";
import { fetchUserData } from "../setting/Serviceuser";
import { StatsCard } from "../../components/StatsCard";
import { useState, useEffect } from "react";
import GenderPieChart from "../../components/Piechart";
import "../../index.css"
import { countStudent } from "../../Services/CountStudent";


const Userdashboard = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [student,setStudent] = useState(0);
  const [femalestudent, setFemalestudent] = useState(0);

  useEffect(() => {
    const getStudentData = async ()=>{
      try {
        const studentData = await countStudent();
        setStudent(studentData.total_students);
        setFemalestudent(studentData.total_female_students);
      }
      catch {
        console.log("Error")
      }
    }
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUser(data);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
        console.log(error);
      }
    };
    getUserData();
    getStudentData();
  }, [error]);


  return (
    <div className="w-[100%] flex flex-row">
      <div className="w-full">
        <h1 className="font-bold text-blue-500 text-2xl text-center py-2">
          Dashboard
        </h1>
        <div
          className="w-[95%] md:w-[98%] min-h-[400px] mx-auto my-2 rounded-xl 
          shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
          transition-all duration-300">
          <h1 className="p-4 md:p-5 font-bold text-lg sm:text-xs md:text-xl lg:text-2xl khmer-text">
            {user.schoolname}
          </h1>
          <div className="flex justify-center items-center p-2 sm:p-4">
            <div className="w-full max-w-[300px] h-auto aspect-square sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
              <GenderPieChart />
            </div>
          </div>
        </div>
        <main className="flex-1 pl-4 pr-4 pt-1">
          <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatsCard title="ចំនួនសិស្សសរុប" value={student} color={"text-blue-500"} />
            <StatsCard title="ចំនួនសិស្សប្រុស" value={student - femalestudent} color={"text-blue-500"} />
            <StatsCard title="ចំនួនសិស្សស្រី" value={femalestudent} color={"text-pink-500"} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Userdashboard;
