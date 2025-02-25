
import axios from 'axios';
export const countSchool = async () => {
  try {
    const token = localStorage.getItem('token');
    const API = process.env.REACT_APP_API_URL;
    if (!token) throw new Error('No token found');
    const res = await axios.get(`${API}countschool`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error('Error fetching user data:', err);
    throw err;
  }
};
