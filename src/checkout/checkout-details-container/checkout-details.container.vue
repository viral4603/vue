<template>
    <checkout-details-presentation :productList= product />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CheckoutDetailsPresentation from './checkout-details-presentation/checkout-details.presentation.vue';
import productStore from "@/product/store/product.store"
export default defineComponent({
  name: "Checkout details container",
  components:{
    CheckoutDetailsPresentation
  },
  props: {},
  emits: [],
  data() {
    return {
      product:[] as any
    }
  },
  created() {
    if(this.$route.params.id){
      this.product = this.getAllProductList.filter((ele:any) => ele.id == this.$route.params.id)
    }
    else{
      this.product = this.getAllProductList.filter((ele:any) => productStore.getters.getCart.includes(ele.id))
    }
  },
  computed:{
    getAllProductList(){
      return productStore.getters.getAllProductList
    }
  }
});
</script>
