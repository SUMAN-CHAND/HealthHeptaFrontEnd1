import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8081'
})

export default axiosClient;