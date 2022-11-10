<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item fw-bold">
              <router-link :to="'/home'" class="nav-link">
                Home
              </router-link>
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
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>      
      </div>
    </nav>
    <!-- categories-nav-start -->
    <nav class="categories navbar navbar-expand-lg mt-2">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
            <li class="categories-item ms-lg-2 mt-1 mt-lg-0 fw-bold" v-for="(item,index) in categories" :key="index">
              <router-link :to="`/${item.routeName}`" class="nav-link" @click="setRoute()">
                {{item.name}}
              </router-link>
            </li>
        </ul>
    </nav>
    <!-- categories-nav-end  -->

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import productService from "@/product/services/product.service";
import productStore from "@/product/store/product.store";
export default defineComponent({
  setup() {},
  data() {
    return {
      categories: [],
    };
  },
  created() {
    productService.getCategoriesList().then((res: any) => {
      this.categories = res;
      console.log(this.categories);
    });
    productService.getCategoryViseProduct('Electronics').then((res:any) => {
      console.log(res.data)
    })
  },
  methods:{
    setRoute(){
      debugger
      productStore.dispatch('setCurrentRoute',this.$route.name)

      console.log(productStore.getters.getCurrentRouteName)
    }
  }
});
</script>