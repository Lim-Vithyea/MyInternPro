import axios from "axios";

const API_URL = "http://localhost:3002/api";
// Update user
export const updateUser = async (userId, updatedUserData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.put(`${API_URL}/updateUser/${userId}`, updatedUserData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error updating user:", err.response?.data || err.message);
    throw err;
  }
};
