import axios from "axios";

const axiosCommon = axios.create({
    baseURL: 'https://close-shop-server.vercel.app'
    // baseURL: 'http://localhost:8000'
})
const useAxiosCommon = () => {
   return axiosCommon
};

export default useAxiosCommon;