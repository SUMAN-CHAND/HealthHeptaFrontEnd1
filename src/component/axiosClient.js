import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://3.95.170.196:8081'
})

export default axiosClient;