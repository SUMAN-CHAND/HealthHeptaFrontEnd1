import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.healthhepta.com',
    timeout: 80000,
    withCredentials: true,
    credentials: 'include'
})
//52.203.121.35
//https://api.healthhepta.com
// http://localhost:8081

export default axiosClient;