<template>
  <div v-if="product" class="detail-container">
    <img :src="product.img" :alt="product.name" />
    <div class="info">
      <h1>{{ product.name }}</h1>
      <p class="price">{{ product.price }}</p>
      <p>{{ product.description || "No description available." }}</p>
    </div>
  </div>

  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const products = [
  { id: 1, name: "Face Serum", price: "₦5000", img: "https://via.placeholder.com/200x180?text=Face+Serum", description: "Hydrates skin deeply." },
  { id: 2, name: "Facial Hydrating Serum", price: "₦10000", img: "https://via.placeholder.com/200x180?text=Hydrating+Serum", description: "Perfect for dry skin." },
  { id: 3, name: "Face Cream", price: "₦15000", img: "https://via.placeholder.com/200x180?text=Face+Cream", description: "Nourishes your skin." },
  // ... add all others
];

// find product by route param
const product = products.find((p) => p.id === Number(route.params.id));
</script>

<style scoped>
.detail-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}
.detail-container img {
  max-width: 300px;
  border-radius: 10px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.price {
  font-size: 1.5rem;
  color: #d63384;
  font-weight: bold;
}
</style>

