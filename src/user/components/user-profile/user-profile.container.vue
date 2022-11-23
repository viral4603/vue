<template>
    <user-profile-presentation :userData="userData"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UserProfilePresentation from './user-profile-presentation/user-profile.presentation.vue'
import userService from '@/user/services/user.service'
import store from '@/store'

export default defineComponent({
    name:'User Profile Container',
    components:{
        UserProfilePresentation
    },
    data() {
        return {
            userData:{} as any
        }
    },
    created() {
       const user = localStorage.getItem("userInfo");
       if(user) {
            const userId =  JSON.parse(user).id
            this.getUserDetails(userId)
       }
    },
    methods: {
        getUserDetails(id:any){
            userService.getUserDeatils(id).then((res:any) => {
                this.userData = res;
            })
        }
    }
})
</script>
