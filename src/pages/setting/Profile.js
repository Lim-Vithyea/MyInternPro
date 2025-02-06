
import React, { useEffect, useState } from 'react';
import { fetchUserData } from './Serviceuser';

const Profile = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    const getUserData = async () =>{
      try {
        const data = await fetchUserData();
        setUser(data);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      }
    };
    getUserData();
},[]);

  return (
    <div>
      <div className="w-full bg-white flex items-center justify-center border-b-2">
        <img src="/images/P10.png" alt="Emblem" className="w-10 h-10" />
        <h1 className="text-start pt-3 pb-3 font-bold">{user.username} Profile</h1>
      </div>
      {error ? (<h1 className="text-red-500">{error}</h1>) : (
        <>
        <div className='flex justify-center pt-[100px] pb-[20px]'>
        <img src={user.image ? user.image : "/images/pf.jpg"} 
        alt='person' 
        className='w-[200px] h-[200px] bg-blue-500 rounded-full transform transition duration-200 hover:scale-110 cursor-pointer'/>
        </div>
        <div className='text-center'>
        <h1 className='font-bold text-2xl items-center text-blue-600'>Username: {user.username}</h1>
        <h1 className='text-red-600 font-bold text-sl'>Role: {user.role}</h1>
        <h1 className='text-green-500 font-bold text-sl'>School: {user.schoolname}</h1>
        </div>
        </>
      )}
    </div>
  );
};

export default Profile;
