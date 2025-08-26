<template>
 <div class="product-page">
    <!-- Product Image -->
    <div class="image-section">
      <img :src="product.image" :alt="product.title" />
    </div>

    <!-- Product Details -->
    <div class="details-section">
      <h1>{{ product.title }}</h1>
      <p class="price">${{ product.price }}</p>
      <p class="description">{{ product.description }}</p>

      <div class="actions">
        <button class="btn add" @click="addToCart(product)">Add to Cart</button>
        <button class="btn buy">Buy Now</button>
      </div>
    </div>
  </div>

    <!-- Reviews -->
  <div class="reviews">
    <h2>Customer Reviews</h2>
    <ul>
      <li v-for="(review, index) in product.reviews" :key="index">
        ⭐ {{ review }}
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>