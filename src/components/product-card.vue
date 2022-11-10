<template>
<!-- product-card-start -->
  <div class="card">
    <img src="../assets/product-images/pexels-photo-90946.jpeg" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">
       {{ item.description }}
      </p>
      <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
  </div>
<!-- product-card-end -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "product card",
  props:{
    item:{
        required: true
    }
  }
});
</script>
