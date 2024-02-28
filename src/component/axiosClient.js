import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.healthhepta.com',
    timeout: 80000,
    withCredentials: true,
    credentials: 'include'
})
//52.203.121.35

export default axiosClient;