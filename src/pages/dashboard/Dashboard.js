import React, { useState, useEffect } from 'react';
import DetailCard from '../../components/Detailcard';
import GenderPieChart from '../../components/Piechart';
import { countUser } from '../../Services/Countuser';
import { countSchool } from '../../Services/Countschool';

const Dashboard = () => {
  const [totalUser, setTotalUsers] = useState(0); 
  const [totalSchool, setTotalSchool] = useState(0); 

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
    showCountedData();
    showCountedSchool();
  }, [totalSchool]);

  return (
    <div className="min-h-screen">
      <div className='w-full flex items-center justify-center border-b-2 p-2 md:p-0'>
        <img src="/images/P10.png" alt="Emblem" className="w-5 h-5 md:w-8 md:h-8 mb-1"/>
        <h1 className='text-sm md:text-lg lg:text-xl pl-2 font-bold'>Dashboard</h1>
      </div>
      <div className='w-[95%] md:w-[98%] min-h-[300px] mx-auto my-4 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-all duration-300'>
        <h1 className='p-4 md:p-5 font-bold text-lg sm:text-xl md:text-xs lg:text-xl'>Overall Data</h1>
        <div className='flex justify-center items-center p-2 sm:p-4'>
          <div className='w-full flex max-w-[300px] h-auto aspect-square sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]'>
            <GenderPieChart />
          </div>
        </div>
      </div>
      <div className='mx-3 my-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <DetailCard 
            title={"Total User"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={totalUser} 
            text_color={"text-blue-500"}/>
          <DetailCard 
            title={"Total staff"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={"N/A"} 
            text_color={"text-red-500"}/>
          <DetailCard 
            title={"Total School"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={totalSchool} 
            text_color={"text-yellow-500"}/>
          <DetailCard 
            title={"No title"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={"N/A"} 
            text_color={"text-green-500"}/>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
