<template>
    <div class="container">
        <div class="heading mb-3">
          <h5 class="text-primary fw-bold mb-0"><span class="icon-cart text-warning"></span>CheckOut Items</h5>
        </div>
        <div class="row">
          <div class="col-6 border-end">
            <h5>Product details</h5>
            <div class="product-details" v-for="(items,index) in checkoutProducts" :key="index">
              <h5>Name: <span class="text-primary ms-2">{{ items.title }}</span></h5>
              <h5>Price: <span class="text-primary ms-2">{{ items.sellingPrice }} $</span></h5>
              <div class="d-flex justify-content-between">
                <div class="col-6">
                  <h5>Quantity: {{ getQuantitesId(items.id) ? getQuantitesId(items.id) : 1 }}</h5>
                </div>
                <div class="col-6 d-flex justify-content-between align-items-center">
                   <button class="btn btn-primary" @click="decreaseQuantity(items.id,items.sellingPrice)"><span class="icon-minus"></span></button>
                    <h5 class="fw-bold mb-0"> {{ getQuantitesId(items.id) ? getQuantitesId(items.id) : 1 }}</h5>
                   <button class="btn btn-primary" @click="increaseQuantity(items.id,items.sellingPrice)"><span class="icon-plus"></span></button>
                </div>               
              </div>
            </div>
          </div>
          <div class="col-6">
            <h5 class="text-end">Payment Details</h5>
            <h5 class="mb-0">Total Payement : </h5>
          </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkout details presentation",
  props: {
    productList:{
      required:true
      },
    },
  emits: [],
  data() {
    return {
    quantityWithId:[] as any,
      checkoutProducts:[] as any,
      totalPayment:0
    }
  },
  created(){
      this.checkoutProducts = this.productList
  },
  computed:{
  },
  methods:{
    increaseQuantity(id:any){
      let quantity = 1;
      quantity++;
      let idObject = {
        'id':id,
        'quantity':quantity
      }
       if(this.quantityWithId.find((ele:any) => ele.id === id)) {
          let index = this.quantityWithId.findIndex((ele:any) => ele.id === id)
          this.quantityWithId[index].quantity++
       }
       else {
         this.quantityWithId.push(idObject)
       }
      this.getQuantitesId(id)
    },
    decreaseQuantity(id:any){
       if(this.quantityWithId.find((ele:any) => ele.id === id)) {
          let index = this.quantityWithId.findIndex((ele:any) => ele.id === id)
          if(this.quantityWithId[index].quantity !== 1){
            this.quantityWithId[index].quantity--
          }
       }
      this.getQuantitesId(id)
    },
    getQuantitesId(id:any){
      return this.quantityWithId.find((ele:any) => ele.id === id)?.quantity
    }
  },
  watch:{
    productList(newVal) {
      this.checkoutProducts = newVal
    }
  }
});
</script>
