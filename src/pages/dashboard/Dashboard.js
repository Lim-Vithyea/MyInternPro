
import React from 'react';
import DetailCard from '../../components/Detailcard';
// import { fetchUserData } from '../setting/Serviceuser';
// import { useState, useEffect } from 'react';
import GenderPieChart from '../../components/Piechart';




const Dashboard = () => {
//   const [user, setUser] = useState({});
//   const [error, setError] = useState('');

//  useEffect(() => {
//   const getUserData = async () =>{
//     try {
//       const data = await fetchUserData();
//       setUser(data);
//     } catch (err) {
//       setError(err.response?.data?.error || err.message);
//     }
//   };
//   getUserData();
// },[]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className='w-full flex items-center justify-center border-b-2 p-2 md:p-0'>
        <img src="/images/P10.png" alt="Emblem" className="w-5 h-5 md:w-8 md:h-8 mb-1"/>
        <h1 className='text-sm md:text-lg lg:text-xl pl-2 font-bold'>Dashboard</h1>
      </div>
      {/* Graph*/}
      <div className='w-[95%] md:w-[98%] min-h-[300px] mx-auto my-4 rounded-xl 
        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
        transition-all duration-300'>
          <h1 className='p-4 md:p-5 font-bold text-lg sm:text-xl md:text-xs lg:text-xl'>Overall Data</h1>
          <div className='flex justify-center items-center p-2 sm:p-4'>
            <div className='w-full flex max-w-[300px] h-auto aspect-square sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]'>
              <GenderPieChart />
             
            </div>
        </div>
      </div>
      {/* Cards Grid */}
      <div className='mx-3 my-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <DetailCard 
            title={"Total Student"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={"15263"} 
            text_color={"text-blue-500"}/>
          <DetailCard 
            title={"Total staff"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={"1263"} 
            text_color={"text-red-500"}/>
          <DetailCard 
            title={"Total School"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={"152"} 
            text_color={"text-yellow-500"}/>
          <DetailCard 
            title={"No title"} 
            link={"https://github.com/Lim-Vithyea"} 
            value={"1263"} 
            text_color={"text-green-500"}/>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;