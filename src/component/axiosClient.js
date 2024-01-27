import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://50.19.51.227:8081'
})

export default axiosClient;