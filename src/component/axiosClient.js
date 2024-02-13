import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://54.91.173.80:8081'
})

export default axiosClient;