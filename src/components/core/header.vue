<template>
  <div class="header bg-light">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <h1 class="mb-0 fs-4 fw-semibold text-warning me-4">MY shopy</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item fw-bold">
              <router-link :to="'/home'" class="nav-link"> Home </router-link>
            </li>
            <li class="nav-item ms-lg-2 mt-1 mt-lg-0 fw-bold">
              <router-link :to="'/product'" class="nav-link">
                Product
              </router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchText"
            />
            <button class="btn btn-outline-success" @click.prevent="searchItems()">
              Search
            </button>
          </form>
          <ul class="navbar-nav mt-3 mt-lg-0 mb-2 mb-lg-0 d-flex flex-row align-items-center">
            <li class="nav-item">            
                <router-link :to="'/login'"><button class="btn btn-primary" v-if="!getUserDeatils?.isLogin">login</button></router-link>
            </li>
            <li class="nav-item fw-bold cursor-pointer position-relative ms-3 ms-lg-0">
              <router-link :to="'/cart-list'" class="nav-link">
                <span class="icon-cart fs-4"></span>
                <span class="cart-items-count ms-2 position-absolute rounded-circle text-center bg-secondary text-white">{{ getCartItemsCount }}</span>
              </router-link>
            </li>
            <li class="nav-item fw-bold cursor-pointer position-relative" v-if="getUserDeatils?.isLogin">
               <a class="nav-link" @click="expandUserMenu()">
                  <figure class="user-profile rounded-circle overflow-hidden mb-1">                  
                    <img src="../../assets/product-images/profile_user.jpg" class="img-fluid" alt="user-image">
                  </figure>            
                </a>
                <div class="user-container position-absolute">
                  <user-menu @closeMenu="closeMenu()"/>
                </div>
            </li>
            <li class="nav-item ms-3 ms-lg-0" v-if="getUserDeatils?.userName ">
                <h6 class="fw-bold">{{getUserDeatils?.userName ? getUserDeatils?.userName : ''}}</h6>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- categories-nav-start -->
    <nav class="categories navbar navbar-expand-lg bg-light border-top">
      <div class="container">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
          <li class="categories-item ms-lg-2 mt-1 mt-lg-0 fw-bold" v-for="(item, index) in categories" :key="index" >
            <router-link :to="`/${item.routeName}`" class="nav-link" @click="setRoute()">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- categories-nav-end  -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import productService from "@/product/services/product.service";
import productStore from "@/product/store/product.store";
import store from "@/store"
import UserMenu from "@/user/components/user-menu/user-menu.vue"
import emitter from '@/emitter/emitter.mitt'

export default defineComponent({
  components:{
    UserMenu
  },
  data() {
    return {
      categories: [],
      isProfileClick:false,
      searchText:'' as string,
    };
  },
  created() {
    productService.getCategoriesList().then((res: any) => {
      this.categories = res;
    });
    productService.getCategoryViseProduct("Electronics").then((res: any) => {
    });
  },
  methods: {
    setRoute() {
      productStore.dispatch("setCurrentRoute", this.$route.name);
    },
    expandUserMenu() {
      const userMenuElemt = document.querySelector('.user-container')
      if(this.isProfileClick) {
        userMenuElemt?.classList.remove('expand')
        this.isProfileClick = false
      }
      else{
        userMenuElemt?.classList.add('expand')
        this.isProfileClick = true
      }
    },
    searchItems(){
      if(this.searchText) {
        emitter.emit('seachText', this.searchText)
        this.searchText = ''
      }
      // this.searchText = ''
    },
    closeMenu() {
      this.expandUserMenu()
    }
  },
  computed: {
    getCartItemsCount() {
      return productStore.getters.getCart.length;
    },
    getUserDeatils() {
      if(localStorage.hasOwnProperty('userInfo')){
        const user = localStorage.getItem("userInfo")
        if(user) {
          return JSON.parse(user)
        }
      }
    }
  },
});
</script>