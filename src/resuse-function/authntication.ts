import router from "@/router"
import store from "@/store"

export default function auth() {
    function isUserLogin(to:any,from:any,next:any) {
        if(localStorage.hasOwnProperty('userInfo')) {
            next()
        }        
    }
    function isUserNotLogin(to:any,from:any,next:any) {
        if(!localStorage.hasOwnProperty('userInfo')) {
            next()
        }
        else {
            router.push('/home')
        }
    }
    return {
        isUserLogin,
        isUserNotLogin
    }
}
