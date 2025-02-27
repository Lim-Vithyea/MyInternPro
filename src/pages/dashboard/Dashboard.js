import React, { useState, useEffect } from 'react';
import DetailCard from '../../components/Detailcard';
import { countUser } from '../../Services/Countuser';
import { countSchool } from '../../Services/Countschool';
import { CountStudentforAdmin } from '../../Services/CountStudentforAdmin';
import "../../index.css"
import GenderAdminPieChart from '../../components/PiechartAdmin';

const Dashboard = () => {
  const [totalUser, setTotalUsers] = useState(0); 
  const [totalSchool, setTotalSchool] = useState(0); 
  const [student,setTotalStudent] = useState('');
  const [female,setFemale] = useState('');

  useEffect(() => {
    //count user in database
    const showCountedData = async () => {
      try {
        const fetchedData = await countUser(); 
        setTotalUsers(fetchedData.totalUsers); // Correct key from backend
      } catch (err) {
        console.error('Error fetching user data:', err); 
      }
    };
    //count school in database
    const showCountedSchool = async () => {
      try {
        const fetchedSchoolData = await countSchool(); 
        setTotalSchool(fetchedSchoolData.totalSchool);
      } catch (err) {
        console.error('Error fetching user data:', err); 
      }
    };
    //count studdent
    const getData = async () => {
        try {
          const getDataFromStudent = await CountStudentforAdmin();
          setTotalStudent(getDataFromStudent.total_students);
          setFemale(getDataFromStudent.total_female_students);
        } catch (err) {
          throw err;
        }
      }

    getData();
    showCountedData();
    showCountedSchool();
  }, [totalSchool]);

  return (
    <div className="min-h-screen">
      <div className="w-full bg-white flex items-center justify-center border-b-2">
        <img src="/images/P10.png" alt="Emblem" className="w-6 h-6" />
        <h1 className="text-start pt-3 pb-3 font-bold text-xs">Dashboard</h1>
      </div>
      <div className='w-[95%] md:w-[98%] min-h-[300px] mx-auto my-4 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-all duration-300'>
        <h1 className='p-4 md:p-5 font-bold text-lg sm:text-xl md:text-xs lg:text-xl khmer-text'>ទិន្នន័យសរុប</h1>
        <div className='flex justify-center items-center p-2 sm:p-4'>
          <div className='w-full flex max-w-[300px] h-auto aspect-square sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]'>
            <GenderAdminPieChart/>
          </div>
        </div>
      </div>
      <div className='mx-3 my-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <DetailCard 
            title={"អ្នកប្រើប្រាស់សរុប"}  
            value={totalUser} 
            text_color={"text-blue-500"}/>
          <DetailCard 
            title={"សិស្សសរុប"} 
            value={student} 
            text_color={"text-red-500"}/>
          <DetailCard 
            title={"សាលារៀនសរុប"} 
            value={totalSchool} 
            text_color={"text-yellow-500"}/>
          <DetailCard 
            title={"សិស្សស្រី"} 
            value={female} 
            text_color={"text-green-500"}/>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
