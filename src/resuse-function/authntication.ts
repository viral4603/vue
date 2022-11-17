import store from "@/store"

export default function auth() {
    function isUserLogin(to:any,from:any,next:any) {
        if(store.getters.getUserDeatils.isUserLogin) {
            next()
        }        
    }
    return {
        isUserLogin
    }
}
