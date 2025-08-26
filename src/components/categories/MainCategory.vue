<template>
  <div class="products-grid">
    <SkincareCard v-for="c in categories" :key="c.id" :content="c" />
  </div>

  <SpecialHairDiscount/>
   <SkincareCard/>
</template>

<script setup>
// import SkincareCard from "../common/CategoryCard.vue";
// import SkinCareCard from "../common/SkinCareCard.vue";
// import SkincareCard from "@/components/common/CategoryCard.vue";


import skincare from "@/assets/images/skincare.png";
import haircare from "@/assets/images/hair.jpg";
import makeup from "@/assets/images/makeup.jpg";
import fragrance from "@/assets/images/fragrance.jpg";
import nails from "@/assets/images/nails.jpg";

import SpecialHairDiscount from "../common/SpecialHairDiscount.vue";

const categories = [
  { id: 1, img: skincare, title: "Skin care", des: "52 products" },
  { id: 2, img: haircare, title: "Hair care", des: "52 products" },
  { id: 3, img: makeup, title: "Make Up", des: "52 products" },
  { id: 4, img: fragrance, title: "Fragrance", des: "52 products" },
  { id: 5, img: nails, title: "Nail Care", des: "52 products" }
];
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 30px;
}
/* .products-grid :hover {
 transition: transform 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
} */




</style>
