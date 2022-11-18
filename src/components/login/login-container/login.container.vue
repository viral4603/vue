<template>
    <login-presentation :errorMsg="errorMsg" @loginUser="loginUser($event)"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LoginPresentation from './login-presentation/login.presentation.vue'
import commanService from '@/services/comman.services'
import store from '@/store'

export default defineComponent({
    name:"Login Container",
    components:{
        LoginPresentation
    },
    data() {
        return {
            allUser:[] as any,
            errorMsg:'' as any
        }
    },
    created() {
        this.getAllUser()
    },
    methods:{
        //when user add credintial it will chek user is valid or not
        loginUser(data:any) {
            if(this.allUser.some((ele:any)=>ele.email === data.userEmail)){
                this.allUser.forEach((element:any) => {
                    if(element.email === data.userEmail) {
                        if(element.password === data.password) {
                            const user = {
                                'userName':element.name,
                                'id': element.id,
                                'isLogin' : true,
                            }
                            this.$router.push('/home')
                            store.dispatch('setUser',user)
                        }
                        else {
                            this.errorMsg = `Password doesn't match`
                        }
                    }               
                });        
            }
            else {
                this.errorMsg = `Email address is not found please Enter valid email`
            }
        },
        getAllUser() {
             return commanService.getUsers().then((res:any)=>{
                this.allUser = res;
             })
        }
    }
})
</script>
