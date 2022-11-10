<template>
  <headerComponet></headerComponet>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import pageTitle from "@/resuse-function/page-title";
import headerComponet from "./core/header.vue";
export default defineComponent({
  name: "app-cell",
  components: {
    headerComponet
  },
  setup() {
    const { setPageTitle } = pageTitle();
    return {
      setPageTitle,
    };
  },
  created() {
    this.setPageTitle("Shopping-App");
  },
});
</script>
