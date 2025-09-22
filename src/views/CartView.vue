<template>
  <div class="cart-container">
    <h2>Your Cart ({{ cart.cartCount }} items)</h2>

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty.</p>
    </div>

    <ul v-else>
      <li v-for="item in cart.items" :key="item.id" class="cart-item">
        <img :src="item.img" alt="" class="cart-img" />
        <div>
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: ${{ item.price * item.quantity }}</p>
          <button @click="cart.removeFromCart(item.id)">Remove</button>
        </div>
      </li>
    </ul>

    <h3 v-if="cart.items.length > 0">Total: ${{ cart.cartTotal }}</h3>
    <button v-if="cart.items.length > 0" @click="cart.clearCart()">Clear Cart</button>
  </div>
</template>
<style>
 .cart-img{
  width: 20%;
 }
</style>

<script setup>
import { useCartStore } from "@/stores/cart.js";

const cart = useCartStore();
</script>


