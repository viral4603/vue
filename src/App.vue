<template>
  <loader></loader>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/loader/loader.vue"
export default defineComponent({
  components:{
    Loader
  },
  setup() {},
});
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
</style>
