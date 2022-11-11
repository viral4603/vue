<template>
<!-- product-card-start -->
  <div class="card position-relative">
    <div class="icons position-absolute cart-icons">
      <span class="icon-cart fs-5" 
       :class="[getCartItems.includes(item?.id) ? 'added' : '' ]"
       :title="[getCartItems.includes(item?.id) ? 'already into cart' : 'add to the cart']"
        @click="addToCart(item.id)"></span>
      <span class="ms-2 fs-5"
       :class="[getFavouriteItems.includes(item?.id) ? 'icon-heart1 text-danger' : 'icon-heart']" 
       :title="[getFavouriteItems.includes(item?.id) ? 'Already in favourite' : 'Add to favourite']" @click="addTOfaviourite(item.id)"></span>
    </div>
    <img src="../assets/product-images/pexels-photo-90946.jpeg" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">
       {{ item.description }}
      </p>
      <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
  </div>
<!-- product-card-end -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import productStore from "@/product/store/product.store"

export default defineComponent({
  name: "product card",
  props:{
    item:{
        required: true
    }
  },
  methods:{
    //add item to cart
    addToCart(id:any) {
      if(!productStore.getters.getCart.includes(id)){
        productStore.dispatch("addItemsTocart",id)
      }
      else {
        alert ('items already addeed to the cart')        
      }
    },
    //add items to favourite
    addTOfaviourite(id:any) {
      if(!productStore.getters.getFavouriteItems.includes(id)){
        productStore.dispatch("addItemsToFavouirite",id)
      }
      else{
        let findIndex = productStore.getters.getFavouriteItems.findIndex((ele:any) => ele === id);
        productStore.dispatch("removeFromFavourite",findIndex)
      }
    }
  },
  computed:{
    getCartItems(){
      return productStore.getters.getCart
    },
    getFavouriteItems(){
      return productStore.getters.getFavouriteItems
    }
  }
});
</script>
