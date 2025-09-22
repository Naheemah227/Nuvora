<template>
  <section class="row container-fluid">
    <div class="col-12 col-md-6">
      <div class="gallery my-5 ">
        <!-- Top row -->
    <img :src="skincare1" alt="Image 1" class="photo" />
    <img :src="skincare2" alt="Image 2" class="photo" />

    <!-- Bottom row -->
    <img :src="skincare3" alt="Image 3" class="photo" />
    <img :src="skincare4" alt="Image 4" class="photo" />

    <!-- Logo in the center -->
    <div class="logo-container">
      <img :src="logo" alt="Logo" class="logo"/>
    </div>



      </div>
    </div>
    <div class="col-12 col-md-6 about-text">
      <h5 class="text-center m-4">About US</h5>
      <h3>Your Journey to <span>Effortless Elegance</span></h3>
      <p class="my-5">
       Nuvora Cosmetics is more than just skincare — it’s a celebration of confidence, beauty, and self-care. Our mission is to empower individuals to look and feel their best by providing high-quality, safe, and effective cosmetic products that cater to diverse skin types and needs.
      </p>

      <div class="about-box d-flex gap-5 justify-content-center mx-2 my-4">
        <div class="text-center">
          <p>
            <span>50+</span> <br />
            SkinCare
          </p>
          <div class="line"></div>
        </div>
        <div class="text-center">
          <p>
            <span>100+</span><br />
        FaceCare 
          </p>
          <div class="line"></div>
        </div>
        <div class="text-center">
          <p style="">
            <span>20+</span> <br />
           HairCare
          </p>
        </div>
      </div>


      <h3 class="" style= "font-family: Playwrite MX Guides, cursive;">Noimot Adedasola</h3>
    </div>

  
    <router-link class="text-end" to="/about"> <p>read more about us here</p></router-link>
 
 
  </section>
</template>

<script setup>
import skincare1 from "../../assets/images/skincare1.jpg";
import skincare2 from "../../assets/images/skincare2.jpeg";
import skincare3 from "../../assets/images/skincare3.jpg";
import skincare4 from "../../assets/images/skincare4.jpg";
import logo from "../../assets/images/ChatGPT Image Jul 30, 2025, 08_59_38 PM.png"
</script>

<style scoped>
.gallery {
   display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  max-width: 300px;
  margin: auto;
  position: relative;
}
.gallery  img {
    width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}
.logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: white; */
  padding: 6px;
  border-radius: 50%;
  box-shadow: 0 6px 14px rgba(0,0,0,0.3);
  /* z-index: 2; ensure it's above images */
  z-index: 2;
}
.logo {
  width: 10px;
  height: 10px;
  object-fit: contain;
}
.about-text h3 span {
  color: var(--accent-gold);
}
.line {
  color: var(--accent-gold);
}
.about-box {
  color: rgb(191, 182, 182);
  background-color: var(--primary-green);
  border-radius: 10px;
  padding: 10px 5px;
  /* color: var(--accent-gold); */
  font-weight: 600;
  font-size: 20px;
}
.about-box span {
  color: var(--accent-gold);
}


@media (max-width: 768px){
  .about-box{
 
   padding: 10px 40px;
  }
  .about-box p{
  
    font-size: 10px;
}
}
</style>
