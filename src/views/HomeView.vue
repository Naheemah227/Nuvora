<template>
  <div class="container-fluid p-0">
    <!-- Hero Section -->
    <section>
      <HeroSection />
    </section>

    <!-- Categories Section -->
    <section>
      <CategorySection />
    </section>

    <!-- Products Section -->
    <section>
      <!-- <ProductSection :products="products.slice(0, 4)" /> -->
      <ProductSection :products="products.slice(0, 4)" :showButton="true" />
    </section>

    <!-- About Section -->
    <section>
      <AboutSection />
    </section>

    <section>
      <SocialMedia />
    </section>

    <section>
      <Faq />
    </section>

    <section>
      <Footer/>
    </section>

   
  </div>
</template>

<script setup>
// Import products data
import { products } from "@/data/product.js";

import HeroSection from "@/components/section-folder/HeroSection.vue";
import CategorySection from "@/components/section-folder/CategorySection.vue";
import ProductSection from "@/components/section-folder/ProductSection.vue";
import AboutSection from "@/components/section-folder/about-section.vue";
import SocialMedia from "@/components/section-folder/SocialMedia.vue";
import Faq from "@/components/section-folder/Faq.vue";
import Footer from "@/components/section-folder/Footer.vue";
</script>

<style scoped>
/* Example padding/margin fixes for sections */
section {
  margin-bottom: 3rem;
}
</style>
