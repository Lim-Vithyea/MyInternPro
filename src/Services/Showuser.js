import axios from 'axios';

export const showUserData = async () => {
  try {
    const token = localStorage.getItem('token');
    const API = process.env.REACT_APP_API_URL;
    if (!token) throw new Error('No token found');
    const res = await axios.get(`${API}alluser`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;//this will return the data
  } catch (err) {
    console.error('Error fetching user data:', err);
    throw err;
  }
};
