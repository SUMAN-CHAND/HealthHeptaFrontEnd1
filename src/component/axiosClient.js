import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://54.152.101.228:8081'
})

export default axiosClient;