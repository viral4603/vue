<template>
  <ul class="nav bg-info flex-column d-inline-block border py-2">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#">User Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Cart Itmes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">My Orders</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Favourite</a>
    </li>
    <li class="nav-item">
      <a class="nav-link">Logout</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User menu",
  components: {},
});
</script>
