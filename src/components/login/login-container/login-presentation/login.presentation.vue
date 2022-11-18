<template>
     <div class="wrapper w-100 h-100 d-flex position-relative align-items-center justify-content-center">
        <div class="overflow-hidden col-4 p-4 bg-light shadow-md rounded">
            <h5 class="text-secondary fw-semibold">Login User</h5>
            <Form  @submit="onSubmit"
                    :validation-schema="schema"
                    v-slot="{ errors }"
                    >                
                <div class="mb-2">
                    <label for="exampleEmailInput" class="form-label me-2">Email*</label>
                    <Field name="userEmail" type="email" class="form-control" id="exampleEmailInput" />
                    <ErrorMessage name="userEmail" :class="{ 'text-danger': errors.userEmail }"/>
                </div>            
                <div class="mb-3">
                    <label for="exampleInputPassword" class="form-label me-2">Password*</label>
                    <Field name="password" type="password" class="form-control" id="exampleInputPassword"/>
                    <ErrorMessage name="password" :class="{ 'text-danger': errors.password }"/>
                </div>                
                <div class="mb-3 text-end d-flex align-items-center justify-content-between">
                    <p class="mb-0">Not yet register <router-link :to="'/registration'" class="nav-link">
                        <span class="text-decoration-underline text-danger">Register Here!</span>
                     </router-link></p>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
                <div class="mb-3 text-center">
                    <h6 class="text-danger">{{errorMsg}}</h6>                         
                </div>
            </Form>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
    name:"Login Presentation",
    components:{
        Form,
        Field,
        ErrorMessage
    },
    props:['errorMsg'],
    emits:['loginUser'],
    data() {
        const schema = yup.object({
            userEmail:yup.string().required(),
            password:yup.string().min(6,'password length shoulbe min 6 character').matches(/^\S*$/, "No space required").required()
        })
        return {
            schema
        }
    },
    methods:{
        onSubmit(values:any) {
            this.$emit('loginUser',values)
        }
    }
 
})
</script>
