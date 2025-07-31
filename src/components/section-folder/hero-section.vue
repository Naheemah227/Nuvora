<template>
  <div class="overall-container">
    <div
      class="container d-flex align-items-center justify-content-between hero-section"
    >
      <!-- Hero Text Content -->
      <div class="hero-text ">
        <div class="logo img-fluid">
          <img :src="logoimage" alt="" />
          <h3>Glow with confidence, Shop with trust</h3>
        </div>
        <h1>
          Your Ultimate <span>Beauty <br />& Cosmetics Shop</span>
        </h1>
        <p>
          At Nuvora, we believe in the gentle power of nature. Our brand is
          dedicated to creating clean, effective, and sustainable products that
          nurture your skin and well-being. Rooted in simplicity and softness,
          we blend modern science with botanical ingredients to bring you
          skincare that feels as good as it looks — pure, honest, and kind.
          Nuvora is more than a brand — it's a lifestyle of calm confidence and
          nature.
        </p>

        <div class="shop">
          <button>
            Shop Now <span><i class="bi bi-arrow-right-short"></i></span>
          </button>
          <a href="">View all products</a>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="hero-image">
        <img :src="image1" alt="Hero Image" />
        <!-- <button>fast delivery </button> -->
      </div>

   
    </div>
       <div class="footer">
        <ul>
          <li>Skincare</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Makeup</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Hair CARE</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Fragrances</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Nail CARE</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Body care</li>
        </ul>
      </div>
  </div>
</template>

<script setup>
import image1 from "@/assets/images/2025-01-16-removebg-preview.png";
import logoimage from "@/assets/images/ChatGPT Image Jul 30, 2025, 08_59_38 PM.png";
</script>

<style scoped>
.overall-container {
  align-items: center;
  background: var(--soft-beige);
}
.logo {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  background: var(--warm-white);
  border-radius: 30px;
  gap: 10px;
  font-size: 0px;
}
.logo img {
  width: 30px;
  border-radius: 20px;
}

.container h1 span {
  color: var(--accent-gold, red);
}
.hero-text {
  margin-top: 40px;
  padding: 20px;
  padding-bottom: 20px;
}
.hero-text h1,
p {
  margin-top: 20px;
}
.shop {
  display: flex;
  align-items: center;
}
.shop button {
  background: var(--primary-green);
  color: white;
  padding: 10px 40px;
  border-radius: 25px;
  margin: 20px;
  border: none;
  font-size: 20px;
}
.shop a {
  color: var(--primary-green);
  margin: 20px;
  font-size: 20px;
}
.footer{
  display: flex;
 margin-top: 30px;
  background: var(--primary-green);
  justify-content: space-evenly;
 padding-top: 10px;
 padding-bottom: 5px;
  gap: 30px;
}

.footer ul,li  {
  display: flex;
  gap: 60px;
  font-size: 20px;
  color: white;
}


.footer i {
  color: var(--accent-gold);
  font-size: 25px;
}




/* RESPONSIVENESS */
@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  .shop {
    display: flex;
    flex-direction: column;
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    /* padding: 2px 2px; */
    gap: 0;
    margin-right: 30px;
  }
  .logo img {
    /* width: 60px; */
  }
  .hero-image img {
    width: 100%;
    align-items: center;
  }
}
</style>
