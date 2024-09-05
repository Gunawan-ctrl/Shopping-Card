import axios from "axios";

const instance = axios.create({
    baseURL: "https://vuestore-api.vercel.app/api/",
    timeout: process.env.VITE_APP_TIMEOUT || 5000,
});
export default instance