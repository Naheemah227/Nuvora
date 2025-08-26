<template>
  <div class="skincare-list">

   
    <ProductCard
      v-for="item in skincareProducts"
      :key="item.id"
      :content="item"
      routeName="SkinCareDetail"
    />
  </div>
</template>

<script setup>
import ProductCard from "@/components/common/ProductCard.vue";

const skincareProducts = [
  { id: 1, title: "Face Serum", description: "Hydrates skin", image: "/img/serum.jpg" },
  { id: 2, title: "Moisturizer", description: "Softens skin", image: "/img/moisturizer.jpg" },
];
</script>

