import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://3.80.80.216:8081'
})

export default axiosClient;