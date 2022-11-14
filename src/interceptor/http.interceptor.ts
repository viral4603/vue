import store from "@/store";
import axios from "axios";

const Http = axios.create({
    baseURL: process.env.VUE_APP_URL
})

//pre processing of every request
Http.interceptors.request.use((config:any) =>{
    store.dispatch('showLoader')
    return config
})

//pre processing of every response
Http.interceptors.response.use(response=>{
    setTimeout(()=>{
        store.dispatch('hideLoader');
    },500)
    return response
})

export default Http