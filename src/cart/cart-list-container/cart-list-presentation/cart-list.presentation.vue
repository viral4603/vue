<template>
  <div class="container">
    <div class="heading d-flex justify-content-between align-items-center mb-3">
        <h5 class="text-primary fw-bold mb-0"><span class="icon-cart text-warning"></span> Cart List items </h5>
        <button type="button" class="btn btn-primary">CheckOut</button>
    </div>
    <div class="row gy-3">
      <div class="col-12 col-md-3" v-for="(items, index) in cartList" :key="index">
        <ProductCard 
        :item="items"
        :isCartView="isCartView"
        @addTocart="addToCart($event)"
        @removeCartItem="removeCartItem($event)" />
      </div>
      <div class="col-12 text-center" v-if="!cartList.length">
        <h4 class="text-secondary">No record found</h4>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "@/components/product-card.vue";

export default defineComponent({
  name: "cart list presentation",
  components: {
    ProductCard,
  },
  emits:[
    "addTocart",
    "removeItemFromCart"
  ],
  props:{
    cartList:{
        required:true
    }
  },
  data() {
    return {
        isCartView:true
    }
  },
  created() {

  },
  methods:{
    addTocart(id:any) {
        this.$emit("addTocart",id)
    },
    removeCartItem(id:any) {
        this.$emit("removeItemFromCart",id)
    }
  }
});
</script>
