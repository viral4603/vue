<template>
  <!-- <span class="d-none">{{getRoute}}</span> -->
  {{ getCurrentRouteName }}
  <ProductListPresentation :productList="productList" @addTocart="addItemsTocart($event)">
  </ProductListPresentation>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductListPresentation from "./product-list-presentation/product-list.presentation.vue";
import productService from "@/product/services/product.service";
import productStore from "@/product/store/product.store";
export default defineComponent({
  components: {
    ProductListPresentation,
  },
  data() {
    return {
      productList: [] as any,
    };
  },
  created() {
    if(this.$route.path == '/home') {
      this.getAllItems();
      
    }
    else{
      this.getItemsByCategories(this.$route.path)
    } 
  },
  computed: {
    getUpdatedRouteName() {
      return this.$route.path;
    },
  },
  watch: {
    getUpdatedRouteName(newVal) {
      if (newVal) {
        if(newVal == '/home'){
           this.getAllItems();
        }
        else{
          this.getItemsByCategories(newVal)
        }
      }
    },
  },
  methods: {
    addItemsTocart(id: any) {
      if (!productStore.getters.getCart.includes(id)) {
        productStore.dispatch("addItemsTocart", id);
      } else {
        alert("items already addeed to the cart");
      }
    },
    getAllItems() {
       productService.getProductList().then((res: any) => {
        this.productList = res;
          productStore.dispatch("addProductList",res)
      });
    },
    getItemsByCategories(category:any) {
        category = category.replace(/\/+/g, "");
        productService.getCategoryViseProduct(category).then((res: any) => {
          this.productList = res;        
        });
    }
  },
});
</script>
