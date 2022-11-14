<template>
<!-- product-card-start -->
  <div class="card position-relative">
    <div class="icons position-absolute cart-icons">
      <span class="icon-delete" @click="removeItemFromCart(item.id)" v-if="isCartView ? true : false">

      </span>
      <span class="icon-cart fs-5 ms-2" 
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
    },
    isCartView:{
      required:true
    }
  },
  emits:[
    "addItemTocart",
    "removeCartItem"
  ],
  methods:{
    //add item to cart emit id to parent
    addToCart(id:any) {
      this.$emit("addItemTocart",id)
    },

    //add items to favourite
    addTOfaviourite(id:any) {
      if(!productStore.getters.getFavouriteItems.includes(id)){
        productStore.dispatch("addItemsToFavouirite",id)
      }
      else{
        let findIndex = this.findCartItemIndex(id)
        productStore.dispatch("removeFromFavourite",findIndex)
      }
    },
    //removeItems from cart
    removeItemFromCart(id:any) {
      this.$emit("removeCartItem",id)     
    },
    findCartItemIndex(id:any){
      return productStore.getters.getFavouriteItems.findIndex((ele:any) => ele === id);
    }
  },
  computed:{
    getCartItems(){
      return productStore.getters.getCart
    },
    getFavouriteItems(){
      return productStore.getters.getFavouriteItems
    },
  }
});
</script>
