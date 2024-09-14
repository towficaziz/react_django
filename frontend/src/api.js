import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api= axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) =>{
        const tocken = localStorage.getItem(ACCESS_TOKEN);
        if(tocken){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api;
