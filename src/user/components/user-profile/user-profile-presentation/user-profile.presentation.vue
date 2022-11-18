<template>
    <div class="container py-3">
        <h5 class="text-primary fw-bold">User Profile</h5>
        <div class="row">
            <div class="col-2">
                <h5>Name</h5>
            </div>
            <div class="col-10">
                <h5 class="text-primary">{{ userDeatails.name }}</h5>
            </div>
            <div class="col-2">
                <h5>email</h5>
            </div>
            <div class="col-10">
                <h5 class="text-primary">{{ userDeatails.email }}</h5>
            </div>
            <div class="col-2">
                <h5>Contact Number</h5>
            </div>
            <div class="col-10">
                <h5 class="text-primary">{{ userDeatails.contactNo }}</h5>
            </div>
            <div class="col-2">
                <h5>Gender</h5>
            </div>
            <div class="col-10">
                <h5 class="text-primary">{{ userDeatails.gender }}</h5>
            </div>
            <div class="col-2">
                <h5>Address</h5>
            </div>
            <div class="col-10">
                <h5 class="text-primary">{{ userDeatails.address }}</h5>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'User Profile Presentation',
    props:{
        userData:{
            required:true
        }
    },
    data() {
        return {
            userDeatails:{} as any
        }
    },
    watch:{
        userData(newVal:any) {
            this.userDeatails = newVal;
        }
    }
})
</script>
