import Http from "@/interceptor/http.interceptor";
const url = process.env.VUE_APP_URL;

class CommanService {
     postUser(data:any) {
        return Http.post(`${url}users`,data).then((res:any) => {
            return res.data
        })
    }
    getUsers() {
        return Http.get(`${url}users`).then((res:any)=>{       
            return res.data
        })
    }
}

const commanService = new CommanService()
export default commanService