<template>
  <CartListPresentation
    :cartList="cartList"
    @addItemsTocart="addTocart($event)"
    @removeItemFromCart="removeItemFromCart($event)"
  ></CartListPresentation>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CartListPresentation from "./cart-list-presentation/cart-list.presentation.vue";
import productService from "@/product/services/product.service";
import productStore from "@/product/store/product.store";
import common from "@/resuse-function/common"
export default defineComponent({
  name: "Cart list container",
  components: {
    CartListPresentation,
  },
  data() {
    const { findIndexfromCartItem } = common();
    return {
      cartList: [] as any,
      findIndexfromCartItem
    };
  },
  created() {
   this.getCartList()
  },
  methods: {
    removeItemFromCart(id: any) {
      let index = this.findIndexfromCartItem(id);
      productStore.dispatch("removeItemFromCart", index);
      this.getCartList()
    },

    findCartItemIndex(id:any){
      return productStore.getters.getFavouriteItems.findIndex((ele:any) => ele === id);
    },

    //get cartList from cartItems
    getCartList() {
         let getCartListIds = productStore.getters.getCart;
    productService.getProductList().then((res: any) => {
      this.cartList = res.data.filter((ele: any) =>
        getCartListIds.includes(ele.id)
      );
    });
    }

  },
});
</script>
