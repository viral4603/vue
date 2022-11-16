<template>
    <div class="wrapper w-100 h-100 d-flex position-relative">
                <div class="overflow-hidden col-5 registration-form-container p-4 bg-light position-absolute shadow-md rounded">
                    <h5 class="text-secondary fw-semibold">Register User</h5>
                    <Form  @submit="onSubmit"
                          :validation-schema="schema"
                          v-slot="{ errors }"
                          >
                        <div class="row">
                            <div class="col-6">
                                <div class="mb-2">
                                    <label for="exampleInputName1" class="form-label me-2">Name*</label>
                                    <Field name="name" type="name" class="form-control" id="exampleInputName1" />
                                    <ErrorMessage name="name" :class="{ 'text-danger': errors.name }"/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label me-2">Email Address*</label>
                                    <Field name="email" type="email" class="form-control" id="exampleInputEmail1"/>
                                    <ErrorMessage name="email" :class="{ 'text-danger': errors.email }"/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="exampleInputContact1" class="form-label">Contact Number*</label>
                                    <Field name="contactNo" type="text" class="form-control" id="exampleInputContact1"/>
                                    <ErrorMessage name="contactNo" :class="{ 'text-danger': errors.contactNo }"/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3 h-100">
                                    <label class="form-label">Select Gender*</label>
                                    <div class="radio-button d-flex align-items-center h-50">
                                        <div class="d-flex">
                                            <Field name="gender" class="me-1" type="radio" v-bind:value="'male'" id="maleMadioButton" />
                                            <label class="form-check-label me-3" for="maleMadioButton">Male</label>
                                        </div>
                                        <div class="d-flex">
                                            <Field  name="gender" class="me-1" type="radio" v-bind:value="'female'" id="femaleMadioButton" />              
                                            <label class="form-check-label" for="femaleMadioButton">Female</label>
                                        </div>
                                    </div>
                                    <ErrorMessage name="gender" :class="{ 'text-danger': errors.gender }"/>
                            </div>  
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password*</label>
                                    <Field name="password" type="password" class="form-control" id="exampleInputPassword1" />
                                    <ErrorMessage name="password" :class="{ 'text-danger': errors.password }"/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <label for="exampleInputPassword2" class="form-label">Retype Password*</label>
                                    <Field name="passwordConfirm" type="password" class="form-control" id="exampleInputPassword2" />
                                    <ErrorMessage name="passwordConfirm" :class="{ 'text-danger': errors.passwordConfirm }"/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                <!-- country-select-start -->
                                    <label for="exampleSelectCountry" class="form-label">Select Country</label>
                                    <Field as="select" name="country" id="exampleSelectCountry" class="form-select">
                                        <option selected disabled>Select Country</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Field>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <!-- country-select-start -->
                                    <label for="exampleSelectState" class="form-label">Select State</label>
                                    <Field as="select" name="state" id="exampleSelectState" class="form-select flex-grow-1">
                                        <option selected disabled>Select Country</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Field>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-3">
                                    <label for="exampleInputAddress" class="form-label">Address</label>
                                    <Field name="address" type="text" class="form-control" id="exampleInputAddress"/>
                                </div>                              
                                <div class="mb-3">
                                    <Field name="checkme" type="checkbox" id="exampleCheck1" class="form-check-input" v-bind:value="true" :checked="false"/>
                                    <label class="form-check-label ms-2" for="exampleCheck1">Agree terms and conditions</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-3 text-end">
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </div>
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
    name:'Registration Presentaion',
    components:{
        Form,
        Field,
        ErrorMessage
    },
    props:{

    },
    emits:['postUser'],
    data() {
        const schema = yup.object({
         name: yup.string().matches(/^[a-zA-z]+$/, "Required Alphabets only").required().label(""),
         email: yup.string().required().email().label(""),
         contactNo: yup.string().required(),
         gender: yup.string().required(),
         password:yup.string().min(6,'password length shoulbe min 6 character').matches(/^\S*$/, "No space required").required(),
         passwordConfirm:yup.string().oneOf([yup.ref('password'),null],'password must be match').required()
        });
        return {
            schema
        }
    },
    methods:{
        onSubmit(values:any) {
            this.$emit('postUser',values)
        }
    }
    
})
</script>
