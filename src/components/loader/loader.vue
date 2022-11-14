<template>
  <div class="loader-wrapper w-100 h-100 d-flex align-items-center justify-content-center position-absolute"  v-if="isLoader">
  </div>
    <div class="lds-roller" v-if="isLoader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
</template>
<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    isLoader() {
      return store.state.loader;
    },
  },
});
</script>

