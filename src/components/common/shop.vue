<template>
  <div>
    <h4>hii</h4>
    <!-- <SpecialHairDiscount /> -->

    <div class="category-card">
      <img :src="content.img" alt="" />

      <h4>{{ content.title }}</h4>
      <p>{{ content.des }}</p>
    </div>
  </div>
</template>

<script setup>
import SpecialHairDiscount from "./SpecialHairDiscount.vue";

defineProps({
  content: {
    type: Object,

    default: () => ({ img: "", title: "", des: "" }),
  },
});
</script>

<style>
.container {
  display: flex;
  justify-content: space-between; /* Space between text and image */
  align-items: center;
  padding: 20px;
  width: 500px;
  height: 350px;
  border-radius: 20px;
  background: var(--light-gray);
  overflow: hidden; /* Prevent overflow */
}
.flat {
  background: var(--accent-gold);
  padding: 0 10px;
  border-radius: 20px;
}
.flat h4 {
  white-space: nowrap;
}
span {
  color: var(--accent-gold);
}
h3 {
  font-size: 40px;
  font-weight: 600;
}
.image img {
  width: 600px;

  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
button {
  background: var(--primary-green);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;

  border: none;
  font-size: 20px;
}
button span {
  color: white;
}
</style>
