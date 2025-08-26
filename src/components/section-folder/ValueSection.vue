<template>
  
  <!-- Values Section -->
  <div class="values container ">
    <h3 class="text-center my-5">Our Values </h3>
    <div class="values-grid">
      <div class="value-card">
        <span>🌱</span>
        <h4>Sustainability</h4>
        <p>Eco-friendly packaging and cruelty-free products.</p>
      </div>
      <div class="value-card">
        <span>💖</span>
        <h4>Customer Care</h4>
        <p>Your beauty, your confidence, our priority.</p>
      </div>
      <div class="value-card">
        <span>🎨</span>
        <h4>Innovation</h4>
        <p>Blending science and nature for the best results.</p>
      </div>
      <div class="value-card">
        <span>🌍</span>
        <h4>Diversity</h4>
        <p>Beauty for every skin tone and type.</p>
      </div>
      <div class="value-card">
        <span>🔬</span>
        <h4>Quality</h4>
        <p>Dermatologist tested and approved.</p>
      </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
.value-card {
  background: #fff;
  padding: 25px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}
.value-card:hover {
  transform: translateY(-5px);
}
.value-card span {
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
}
.value-card h4 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
.value-card p {
  font-size: 0.95rem;
  color: #666;
}

</style>