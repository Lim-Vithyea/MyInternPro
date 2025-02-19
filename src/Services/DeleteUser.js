import axios from "axios";

export const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`http://localhost:3002/api/deleteuser/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("User deleted successfully");
    } catch (error) {
      console.error("Delete failed:", error);
      alert(error.response?.data?.error || "Delete failed. Please try again.");
    }
  };
  