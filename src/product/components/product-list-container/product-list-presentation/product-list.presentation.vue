<template>
 <div class="container py-3">
    <div class="row gy-3">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="(items,index) in productListData" :key="index">
            <ProductCard :item=items
            @addItemTocart="addItemTocart($event)" />
        </div>
        <div class="text-center py-3" v-if="noSearchItems">
            <h5>No items found in search</h5>
        </div>
    </div>
 </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from "@/components/product-card.vue"
export default defineComponent({
   name:'Product list presentation',
   components:{
    ProductCard
   },
   props:{
    productList:{
        required:true
    },
    noSearchItems:{
        required:true
    }
   },
   emits:[
     "addTocart"
   ],
   data() {
    return {
        productListData:[] as any,
    }
   },
   watch:{
    productList(newValue) {
        if(newValue) {
            this.productListData = newValue;
        }
    }
   },
   methods:{
    addItemTocart(id:any) {
        this.$emit("addTocart",id)
    }
   }
})
</script>
