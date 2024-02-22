import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://52.203.121.35:8081',
    timeout: 80000,
    withCredentials: true,
    credentials: 'include'
})
//52.203.121.35

export default axiosClient;