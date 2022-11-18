import Http from "@/interceptor/http.interceptor";
const url = process.env.VUE_APP_URL
class UserService {
    getUserDeatils(id:any) {
        return Http.get(`${url}users/${id}`).then((res:any) => {
            return res.data
        })
    }
}

const userService = new UserService();
export default userService;