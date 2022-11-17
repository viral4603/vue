<template>
    <registration-presentation @postUser="postUser($event)" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import RegistrationPresentation from './registration-presentation/registration.presentation.vue'
import commanService from '@/services/comman.services'
export default defineComponent({
    name:'Registration Container',
    components:{
        RegistrationPresentation
    },
    methods:{
        postUser(data:any){
            commanService.postUser(data).then((res:any) =>{
                if(res) {
                    this.$router.push('/login')
                }
            })
        }
    }
})
</script>
