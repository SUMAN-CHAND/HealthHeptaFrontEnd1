import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://54.91.173.80:8081',
    timeout: 80000,
    withCredentials: true,
    credentials: 'include'
})
//54.91.173.80

export default axiosClient;