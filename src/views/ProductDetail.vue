 <!-- <template>
    <div>
<img :src="currentProduct.img" :alt="currentProduct.name" />
<h2>{{ currentProduct.name }}</h2>
<p>{{ currentProduct.price }}</p>
<button @click="addToCart(currentProduct)">Add to Cart</button>

    </div>
</template> -->
<script setup>
import { useRoute } from "vue-router";
import { products } from "@/data/product.js"; // ✅ correct file name
import AddToCartBtn from "@/components/common/AddToCartBtn.vue";

const route = useRoute();
const productId = route.params.id; // comes from /product/:id

// find the product (convert id to Number if your product ids are numbers)
const product = products.find((p) => p.id === Number(productId));
</script>

<template>
  <div v-if="product" class="detail-container">
    <img :src="product.img" :alt="product.name" class="detail-image" />
    <div class="info">
      <h1>{{ product.name }}</h1>
      <p class="price">{{ product.price }}</p>
      <p>{{ product.description || "No description available." }}</p>
      <AddToCartBtn/>
    </div>
  </div>

  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<style scoped>

.detail-container {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  align-items: flex-start;
}

.detail-image {
  width: 300px;
  max-width: 100%; /* ✅ shrink properly on mobile */
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px; /* prevent stretching on large screens */
}

.price {
  font-weight: bold;
  color: #444;
  margin-top: 10px;
}

/* ✅ Responsive adjustments */
@media (max-width: 768px) {
  .detail-container {
    flex-direction: column; /* stack image + info */
    align-items: center;
    text-align: center;
  }

  .info {
    max-width: 100%;
  }

  .detail-image {
    width: 100%;
    max-width: 400px; /* don’t let it grow too large */
  }
}

@media (max-width: 480px) {
  .detail-container {
    padding: 10px;
  }

  .detail-image {
    max-width: 100%;
  }

  h1 {
    font-size: 1.5rem;
  }

  .price {
    font-size: 1rem;
  }
}


</style>

