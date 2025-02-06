
import axios from 'axios';
export const getSchool = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    const res = await axios.get('http://localhost:3002/api/school', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error('Error fetching user data:', err);
    throw err;
  }
};
