<!-- <template>
  <div class="card">
    <img :src="content.img" :alt="content.name" class="product-image" />
    <h5>{{ content.name }}</h5>
    <p>{{ content.price }}</p>
   <AddToCartBtn @click="addProduct(content)" />


    <!-- Navigate to product detail page  -->
    <!-- <router-link
      :to="{ name: 'ProductDetail', params: { id: content.id } }"
      class="btn view-details"
    >
      View Details
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  content: Object,
});

import AddToCartBtn from "./AddToCartBtn.vue";
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

const addProduct = (product) => {
  cart.addToCart(product);
};
</script>

<style scoped>
.card {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
img {
  max-width: 100%;
  border-radius: 8px;
}
.product-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
.view-details {
  color: var(--primary-green);
  border: 1px solid;
}
</style> --> -->


<template>
  <div class="card">
    <img :src="content.img" :alt="content.name" class="product-image" />
    <h5>{{ content.name }}</h5>
    <p>{{ content.price }}</p>


    <!-- <AddToCartBtn @click="addProduct(content)" /> -->
    

    <router-link
      :to="{ name: 'ProductDetail', params: { id: content.id } }"
      class="btn view-details"
    >
      View Details
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  content: Object,
});

import AddToCartBtn from "./AddToCartBtn.vue";
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

const addProduct = (product) => {
  console.log("Clicked! Product:", product); // debug log
  cart.addToCart(product);
};


</script>

<style scoped>
.card {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
img {
  max-width: 100%;
  border-radius: 8px;
}
.product-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
.view-details {
  color: var(--primary-green);
  border: 1px solid;
}
</style>


