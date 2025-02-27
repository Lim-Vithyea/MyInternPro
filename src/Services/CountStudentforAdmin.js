import axios from "axios";

export const CountStudentforAdmin = async () => {
    const token = localStorage.getItem('token');
    const API = process.env.REACT_APP_API_URL;
    try {
        const res = await axios.get(`${API}countforadmin`,
            {headers: {Authorization: `Bearer ${token}` } }
        );
        return res.data;
    } catch (err) {
        console.log("Error", err)
    }
}