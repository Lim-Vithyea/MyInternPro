import axios from "axios";

export const showSchoolData = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error("No token found");
        const res = await axios.get('http://localhost:3002/api/show_schools', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return res.data;  
    } catch (err) {
        console.error("Can't fetch the data", err);
        throw err; 
    }
};
