<template>
  <div class="container" style="height: 100vh">
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card border-0 bg-transparent" style="border-radius: 0">
          <div class="card-body">
            <div class="logo img-fluid">
              <img :src="logoimage" alt="" />
              <h4>Glow with confidence, Shop with trust</h4>
            </div>
            <h5 class="card-title">
              Your Ultimate <span>Beauty <br />& Cosmetics Shop</span>
            </h5>
            <p class="card-text">
              Novora is a modern beauty brand blending nature and science to
              elevate everyday skincare. Rooted in purity, our products inspire
              confidence through gentle, effective self-care.
            </p>
            <div class="shop">
              <button>
                Shop Now <span><i class="bi bi-arrow-right-short"></i></span>
              </button>
              <a href="">View all products</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card border-0 bg-transparent" style="border-radius: 0">
          <img
            :src="image1"
            class="img-fluid d-block border-0"
            style="
              max-height: 100vh;
              object-fit: cover;
              object-position: bottom;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from "@/assets/images/2025-01-16-removebg-preview.png";
import logoimage from "@/assets/images/ChatGPT Image Jul 30, 2025, 08_59_38 PM.png";

</script>

<style scoped>
.logo img {
  width: 30px;
  border-radius: 20px;
}</style>
