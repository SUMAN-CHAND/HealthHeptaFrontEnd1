import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://52.203.121.35:8081',
    timeout: 80000,
    withCredentials: true,
    credentials: 'include'
})
//52.203.121.35

export default axiosClient;