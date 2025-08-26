<template>
  <div class="container">
    <div class="text">
      <div class="flat">
        <h4>Flat 25% Discount</h4>
      </div>
      <h3>
        Special <span>Hair <br />Care</span> Deals
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
      <button>
        Shop Now <span><i class="bi bi-arrow-right-short"></i></span>
      </button>
    </div>
    <div class="image">
      <img :src="image1" alt="" />
    </div>
  </div>

    <div>
    <template v-for="content in contents" :key="content.id">
      <shop :content="content" />
    </template>

<shop/>
  </div>
  
</template>

<script setup>
import image1 from "@/assets/images/2025-01-16-removebg-preview.png";

// import SpecialHairDiscount from "../common/SpecialHairDiscount.vue";
import shop from "../common/shop.vue"


const content = [
  {
    id: 1,
    title: "Flat 25% Discouna",
    sybtitle: " Special <span>Hair <br />Care</span> Deals",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing eli",
    cta: "Shop now",
  },
  {
    id: 2,
    title: "Flat 20% Discount",
    subtitle: "Save big on Skin care",
    des: "dolor",
    cta: "Shop now",
  },
];
</script>

<style scoped>
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
  width:600px;

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
