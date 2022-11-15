<template>
    <div class="container">
        <div class="heading mb-3">
          <h5 class="text-primary fw-bold mb-0"><span class="icon-cart text-warning"></span>CheckOut Items</h5>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 border-end">
            <h5 class="fw-bold text-warning text-decoration-underline mb-3">Product details :</h5>
            <div class="product-details pb-2 mb-2 border-bottom" v-for="(items,index) in checkoutItems" :key="index" >
              <h6>Name: <span class="text-primary ms-2">{{ items.title }}</span></h6>
              <h6>Price: <span class="text-primary ms-2">{{ items.sellingPrice }} $</span></h6>
              <div class="d-flex justify-content-between">
                <div class="col-6">
                  <h6 class="mb-3">Quantity: {{ items?.quantity }}</h6>
                  <h6>Total Amount: {{ items?.payAmount }} $</h6>
                </div>
                <div class="col-6 d-flex justify-content-between align-items-start">
                   <button class="btn btn-primary" @click="decreaseQuantity(items.id,items.sellingPrice)"><span class="icon-minus"></span></button>
                    <h6 class="fw-bold mb-0"> {{ items.quantity }}</h6>
                   <button class="btn btn-primary" @click="increaseQuantity(items.id,items.sellingPrice)"><span class="icon-plus"></span></button>
                </div>               
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <h5 class="fw-bold text-warning text-decoration-underline mb-3">Payment Details :</h5>
            <h6 class="mb-4">Total Payable amount : <span class="fw-bold">{{ getTotalPayableAmounts }}</span> $ </h6>
            <div class="payment-option mb-3">
                <h6 class="text-secondary fw-semibold">Select Payment Option</h6>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="paymentOptions" id="G-pay" :value="'gpay'" v-model="paymentOption">
                <label class="form-check-label ms-3" for="G-pay">
                  G-Pay
                </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="paymentOptions" id="DebitCard" :value="'debitCard'" v-model="paymentOption">
                  <label class="form-check-label ms-3" for="DebitCard">
                    Debit Card
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="paymentOptions" id="CreditCard" :value="'creditCard'" v-model="paymentOption">
                  <label class="form-check-label ms-3" for="CreditCard">
                    Credit Card
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="paymentOptions" id="CreaditCard" :value="'cashOnDelivery'" v-model="paymentOption">
                  <label class="form-check-label ms-3" for="CreaditCard">
                    Cash On Delivery
                  </label>
                </div>
            </div>
            <button class="btn btn-secondary" @click="addToOrder()" :disabled="!paymentOption">Pay</button>
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
      required:true,
      type:[] as any
      },
    },
  emits: ['addOrder'],
  data() {
    return {
    checkoutItems:[] as any,
      checkoutProducts:[] as any,
      totalPayment:[] as any,
      paymentOption:'' as string
    }
  },
  created(){
      this.checkoutProducts = this.productList
      this.checkoutItems = this.productList.map((element:any)=>{
          element.quantity = 1;
          element.payAmount = element.sellingPrice * element.quantity;
        return element
      })
  },
  computed:{
    getTotalPayableAmounts(){
      if(this.checkoutItems.length) {
        return this.checkoutItems.reduce((total:any,ele:any)=>{ 
        total = total + ele.payAmount
        return total
        },0)}
    }
   },
  methods:{
    //increase quantity of chekout items
    increaseQuantity(id:any,price:any){
          let index = this.checkoutItems.findIndex((ele:any) => ele.id === id)
          this.checkoutItems[index].quantity++
          this.checkoutItems[index].payAmount = this.checkoutItems[index].quantity * price;  
    },
    //decrease quantity of chekout items
    decreaseQuantity(id:any,price:any){       
          let index = this.checkoutItems.findIndex((ele:any) => ele.id === id)
          if(this.checkoutItems[index].quantity !== 1){
            this.checkoutItems[index].quantity--
            this.checkoutItems[index].payAmount = this.checkoutItems[index].quantity * price;
          }     
    },
    //get details of checkout item 
    getCheckoutItemsDetails(id:any){
      return this.checkoutItems.find((ele:any) => ele.id === id)
    },
    //when user pay payment order item will add to order
    addToOrder(){
      const order = { 
        "items":this.checkoutItems,
        "paymentMethod":this.paymentOption,
        "totalPaybleAmount":this.getTotalPayableAmounts
      }
      this.$emit('addOrder',order)
    }
  },
  watch:{
    productList(newVal) {
      this.checkoutProducts = newVal
    }
  }
});
</script>
