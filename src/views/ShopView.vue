<template>
  <div>
    <ProductSection :showButton="false" :products="products" />
    <Leaf />
  </div>
</template>
<script setup>




import Leaf from "@/components/common/Leaf.vue";

import ProductSection from "@/components/section-folder/ProductSection.vue";
// Import the products array
import { products } from "@/data/product.js";
</script>
<style scoped></style>
