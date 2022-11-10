<template>
<!-- <span class="d-none">{{getRoute}}</span> -->

    <ProductListPresentation :productList=productList>
    </ProductListPresentation>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProductListPresentation from './product-list-presentation/product-list.presentation.vue'
import productService from '@/product/services/product.service'
import productStore from '@/product/store/product.store'
export default defineComponent({
    components:{
        ProductListPresentation
    },
    data() {
        const routeName = this.$route.name
        return {
            productList:[] as any,
            routeName
        }
    },
    created() {
        productService.getProductList().then((res:any)=>{
            this.productList = res.data;
        })
        console.log(productStore.state.currrentRouteName)
    },
    computed:{
        getCurrentRouteName() {
            // if(productStore.getters.getCurrentRouteName){
            //     productService.getCategoryViseProduct(this.$route.name).then((res:any)=>{
            //         this.productList = res.data;
            //     })
            // }
            debugger
            return productStore.getters.getCurrentRouteName
        }
    }

})
</script>
