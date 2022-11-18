<template>
    <order-details-presentation
    :orders ="orders" />
</template>
<script lang="ts">
import store from '@/store'
import { defineComponent } from 'vue'
import OrderDetailsPresentation from './order-details-presentation.vue/order-details.presentation.vue'
import commanService from '@/services/comman.services'

export default defineComponent({
    name:'Order Details Container',
    components:{
        OrderDetailsPresentation
    },
    data() {
        return {
            orders:[] as any
        }
    },
    methods:{

    },
    created() {
        const userId = store.getters.getUserDeatils.userId;
        commanService.getOrders(userId).then((res:any) => {
            this.orders = res;
        })
    }
})
</script>