<template>
    <div class="container py-3">
        <h5 class="text-primary fw-bold">My Orders</h5>
        <div class="row g-2">
            <div class="col-4" v-for="(item,index) in orderList" :key="index">
                <div class="order-items border mb-3 p-3" >
                    <h6>Order Id: <span>{{ item.id }}</span></h6>
                    <div class="items" v-for="(orderItem,index) in item.items" :key="index">
                        <h5 class="fw-semibold">{{ orderItem.title }}</h5>
                        <p>{{ orderItem.description }}</p>
                        <div class="d-flex justify-content-between">
                            <h6>Price</h6>
                            <h6>{{ orderItem.price }}</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6>Discount</h6>
                            <h6>{{ orderItem.discountPercentage }}</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6>Selling Price</h6>
                            <h6>{{ orderItem.sellingPrice }}</h6>
                        </div>
                        <div class="d-flex justify-content-between border-bottom">
                            <h6>Quantity</h6>
                            <h6>{{ orderItem.quantity }}</h6>
                        </div>
                        <div class="d-flex justify-content-between fw-semibold">
                            <h6>Total Amount:</h6>
                            <h6>{{ orderItem.payAmount }}</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between fw-semibold">
                        <h6 class="fw-semibold">Total Paid Amount:</h6>
                        <h6 class="fw-semibold">{{ item.totalPaybleAmount }}</h6>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center" v-if="!orderList.length">
                <h4 class="mb-0 text-info">Your have no orders</h4>
                <p class="mb-0 ms-3"><router-link class="text-danger" :to="'/home'">continue shopping....</router-link></p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'User Details Presentaion',
    props:{
        orders:{
            required:true
        }
    },
    data() {
        return {
            orderList:[] as any
        }
    },
    watch:{
        orders(newVal:any) {
            this.orderList = newVal
        }
    }
    
})
</script>
