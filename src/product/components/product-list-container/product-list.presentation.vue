<template>
<!-- <span class="d-none">{{getRoute}}</span> -->
    {{getCurrentRouteName}}
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
        return {
            productList:[] as any,
        }
    },
    created() {
        productService.getProductList().then((res:any)=>{
            this.productList = res.data;
        })
    },
    computed:{
        getUpdatedRouteName() {
            return this.$route.path;
        }
    },
    watch:{
        getUpdatedRouteName(newVal) {
            newVal = newVal.replace(/\/+/g,'')
            if(newVal){
                productService.getCategoryViseProduct(newVal).then((res:any)=>{
                    this.productList = res.data;
                })
            }
        }
    }

})
</script>
