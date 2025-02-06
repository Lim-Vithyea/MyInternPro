// import React from 'react'

// const Header = ({image,username,schoolname}) => {
//   return (
//     <div className='w-full flex justify-between pt-[10px] border-b-2 border-grey-300'>
//       <h1> </h1>
//       <div className='pl-[140px] flex justify-center items-center'>
//       <img src="/images/P10.png" alt="Logo" className="w-8 h-8 "/>
//       <h2 className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold text-center">{schoolname}</h2>
//      </div>
//         <div className='pr-[10px] pt-1 pb-1 flex'>
//         <div className='flex pr-[10px] pt-[10px]'>
//         <h1 className='sm:text-sm block lg:text-xs xl:text-xl'>Hello!<span className='text-blue-500 font-xs font-bold'> {username}</span> </h1>
//         </div>
//         <img src={image ||"/images/pf.jpg"} alt="Emblem" className="w-[40px] h-[40px] rounded-full border-2 border-blue-500"/>
//         </div>
//     </div>
//   )
// }

// export default Header

import React from "react";

const Header = ({ image, username, schoolname }) => {
  return (
    <div className="w-full flex justify-between items-center p-2 border-b-2 border-gray-300">
      
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <img src="/images/P10.png" alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-center">
          {schoolname}
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <h1 className="text-xs sm:text-sm md:text-md lg:text-lg">
          Hello, <span className="text-blue-500 font-bold">{username}</span>
        </h1>
        <img
          src={image || "/images/pf.jpg"}
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500 object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
