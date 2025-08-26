<template>
  <section class="container">
    <div class="section-content">
      <h5>Our Categories</h5>
      <h1>Shop By <span>Category</span></h1>
    </div>

    <div class="category-cards-container">
      <CategoryCard v-for="c in categories" :key="c.id" :content="c" />
    </div>

    <div class="banner-container row">
      <div class="col-12 col-md-6" v-for="card in 2" :key="card">
        <BannerCard01 />
      </div>
    </div>
  </section> 
</template>

<script setup>
import CategoryCard from "../common/CategoryCard.vue";


  import skincare from "../../assets/images/skincare.png" ;
import haircare from "../../assets/images/hair.jpg";
import makeup from "../../assets/images/makeup.jpg";
import fragrance from "../../assets/images/fragrance.jpg";
import nail from "../../assets/images/nail.jpg";
import BannerCard01 from "../common/BannerCard01.vue";

const categories = [
  { id: 1, img: skincare, title: "Skin care", des: "52 products" },
  { id: 2, img: haircare, title: "Hair care", des: "52 products" },
  { id: 3, img: makeup, title: "Make Up", des: "52 products" },
  { id: 4, img: fragrance, title: "Fragrance", des: "52 products" },
  { id: 5, img: nail, title: "Nail Care", des: "52 products" },              
];
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
  padding: 30px 10px;
}
h1 span {
  color: var(--accent-gold);
}

.category-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 30px;
}
</style>
