<template>
 <div class="container">
    <div class="row gy-3">
        <div class="col-12 col-md-3" v-for="(items,index) in productListData" :key="index">
            <ProductCard :item=items
            @addItemTocart="addItemTocart($event)" />
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
    }
   },
   emits:[
     "addTocart"
   ],
   data() {
    return {
        tempdata:{

        },
        productListData:[] as any
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
