<template>
  <header class="">
    <navTop />
    <mainNav />

    <router-link to="/cart"><i class="bi bi-cart-dash " style="justify-content:
    flex-end; display: flex; font-size: 20px; margin-top: 10px;"></i>({{ cart.cartCount }})
    
  </router-link>

  </header>
</template>

<script setup>
import mainNav from "../navigation/main-nav.vue";
import navTop from "../navigation/nav-top.vue";


import { useCartStore } from "@/stores/cart";
const cart = useCartStore();
</script>

<style lang="scss" scoped></style>
