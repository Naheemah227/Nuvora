<template>
 <div class="overall-container ">
   <div class="container " style="height: 100vh">
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0 d-flex align-items-center">
        <div class="card border-0 bg-transparent" style="border-radius: 0">
          <div class="card-body hero-text">
            <div class="logo img-fluid">
              <img :src="logoimage" alt="" />
              <h4>Glow with confidence, Shop with trust</h4>
            </div>
            <h5 class="card-title">
              Your Ultimate <span>Beauty <br />& Cosmetics Shop</span>
            </h5>
            <p class="card-text mt-3">
              Novora is a modern beauty brand blending nature and science to
              elevate everyday skincare. Rooted in purity, our products inspire
              confidence through gentle, effective self-care.
            </p>
            <div>
              <shopButton/>
          
            </div>
       
          </div>
        </div>
      </div>
      <div class=" col-sm-6 mb-3 mb-sm-0  d-flex align-items-center ">
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

 </div>
 <div>
 <Leaf/>
 </div>
</template>

<script setup>
import image1 from "@/assets/images/2025-01-16-removebg-preview.png";
import logoimage from "@/assets/images/ChatGPT Image Jul 30, 2025, 08_59_38 PM.png";
import shopButton  from "../common/button.vue";
import Leaf from "../common/Leaf.vue";

</script>

<style scoped>

.overall-container {
  background: var(--light-gray);
  width: 100%;
}

.container {
  width: 100%;
  height: 100vh; /* full viewport */
  display: flex;
  align-items: center;
}

.hero-text {
  max-width: 600px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--warm-white);
  border-radius: 30px;
  padding: 10px 20px;
  margin-bottom: 20px;
}

.logo img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
}

.logo h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

h5 {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.3;
}

h5 span {
  color: var(--accent-gold);
}

.card-text {
  font-size: 1rem;
  margin-top: 15px;
  line-height: 1.6;
}

.detail-btn {
  margin-top: 20px;
}

.hero-image img {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: cover;
  object-position: bottom;
  border-radius: 12px;
}

/* ✅ Tablet */
@media (max-width: 992px) {
  h5 {
    font-size: 32px;
  }
  .card-text {
    font-size: 0.95rem;
  }
  .logo h4 {
    font-size: 14px;
  }
}

/* ✅ Mobile */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto; /* remove fixed vh on small screens */
    padding: 40px 20px;
    text-align: center;
  }

  .row {
    flex-direction: column-reverse; /* stack image below text */
  }

  .hero-text {
    max-width: 100%;
    margin-bottom: 30px;
  }

  h5 {
    font-size: 26px;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .logo {
    flex-direction: column;
    gap: 5px;
    padding: 8px 12px;
  }

  .logo img {
    width: 30px;
    height: 30px;
  }
}

/* ✅ Extra small */
@media (max-width: 480px) {
  h5 {
    font-size: 22px;
  }
  .card-text {
    font-size: 0.85rem;
  }
  .logo h4 {
    font-size: 12px;
    text-align: center;
  }
}



</style>


