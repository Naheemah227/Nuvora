<template>
  <section>
    <div class="product-div"><h4 class="">Our Products</h4></div>
    <div class="container-fluid row">
      <div class="col-12 col-md-8">
        <h5 class="" style="font-size: 40px">
          Our <span>Best Seller Products</span>
        </h5>
      </div>

      <div class="col-12 col-md-4">
        <ViewAllBtn v-if="showButton" />
      </div>
    </div>

    <section class="product-grid">
      <Product v-for="p in products" :key="p.id" :content="p" />
    </section>

    <div class="shop-container">
      <div class="product-card"></div>
    </div>
  </section>
</template>

<script setup>

defineProps ({

    products: {
    type: Array,
    required: true
  },

  showButton:{
    type :Boolean,
    default:true,
  }
})
import ViewAllBtn from "../common/ViewAllBtn.vue";
import Product from "../common/ProductCard.vue";




</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem; /* spacing between cards */
  padding: 2rem;
}
.product-div {
  width: 200px;
  height: 100px;
  padding: 20px;
  color: black;
  background-image: url("../../assets/images/skincare.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  font-family: Arial, sans-serif;
  background: #f9f9f9;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.shop-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
</style>
