import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://54.242.107.214:8081'
})

export default axiosClient;