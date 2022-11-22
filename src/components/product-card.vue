<template>
<!-- product-card-start -->
  <div class="card position-relative p-2 h-100">
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
    <!-- product-image -->
    <div class="image-wrapper overflow-hidden d-flex align-items-center justify-content-center">
      <figure class="mb-0 d-flex justify-content-center card-image">
        <img :src="require(`../assets/product-images/${item.image}`)" class="img-fluid" :alt="item.image" />
      </figure>
    </div>

    <div class="card-body d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-between">
        <div class="product-details">
          <h6 class="card-title mb-0 text-secondary">{{ item.title }}</h6> 
        </div>
        <div class="price-details">
          <h6 class="fw-bold text-info">{{ item.sellingPrice }}$</h6>
          <h6><span class="fw-bold text-decoration-line-through mb-0">{{ item.price }}</span>$ <span class="text-success">{{ Math.round(item.discountPercentage) }}</span>%</h6>
        </div>
      </div>
      <p class="card-text overflow-hidden">
        <small>
          {{ item.description }}
        </small>        
      </p>
      <div class="d-flex align-items-end">
        <button class="btn btn-primary" @click="getCheckout(item.id)">Buy Now</button>
      </div>
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
    findCartItemIndex(id:any) {
      return productStore.getters.getFavouriteItems.findIndex((ele:any) => ele === id);
    },
    //item add to checkout
    getCheckout(id:any) {
      if(!productStore.getters.getCart.includes(id)){
        productStore.dispatch("addItemsTocart",id);
      }
      this.$router.push(`checkout/${id}`)
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
