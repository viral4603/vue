<template>
  <ul class="nav bg-info flex-column d-inline-block border py-2">
    <li class="nav-item">
       <router-link :to="'/user-profile'" class="nav-link" @click="closeMenu()"><span>User Profile</span></router-link>
      <!-- <a class="nav-link" aria-current="page" href="#">User Profile</a> -->
    </li>
    <li class="nav-item">
      <router-link :to="'/cart-list'" class="nav-link" @click="closeMenu()"><span>Cart Items</span> 
      <span class="ms-2 text-white fs-6">{{ getCartItemsCount }}</span></router-link>
    </li>
    <li class="nav-item">
       <router-link :to="'/orders'" class="nav-link" @click="closeMenu()"><span>My Orders</span></router-link>
    </li>
    <li class="nav-item">
       <router-link :to="'/favourite'" class="nav-link" @click="closeMenu()"><span>Favourite</span>
       <span class="ms-2 text-white fs-6">{{ getFavouriteItems }}</span></router-link>       
    </li>
    <li class="nav-item">
      <a class="nav-link" @click="logoutUsers()">Logout</a>
    </li>
  </ul>
</template>

<script lang="ts">
import productStore from "@/product/store/product.store";
import store from "@/store";
import { defineComponent } from "vue";


export default defineComponent({
  name: "User menu",
  components: {},
  emits:['closeMenu'],
  methods:{
    logoutUsers() {
      const obj = {
        isUserLogin:false,
        userName:''
      }
      store.dispatch('setUser',obj)
      localStorage.removeItem("userInfo")
      this.$router.push('/login')
    },
    closeMenu() {
      this.$emit('closeMenu')
    }
  },
  computed:{
    getCartItemsCount() {
      return productStore.getters.getCart.length;
    },
    getFavouriteItems() {
      return productStore.getters.getFavouriteItems.length;
    }
  }
});
</script>
