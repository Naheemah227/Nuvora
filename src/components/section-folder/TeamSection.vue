<template>
  <div class="team container">
    <h3 class="my-5">Meet Our Team</h3>
    <div class="team-grid">
      <div class="team-card">
        <img :src="image" alt="Team Member" />
        <h4> Noimot Adedasola</h4>
        <p>Founder & CEO</p>
      </div>
      <div class="team-card">
        <img :src="image" alt="Team Member" />
        <h4>Noimot Adedasola </h4>
        <p>Creative Director</p>
      </div>
      <div class="team-card">
        <img :src="image" alt="Team Member" />
        <h4>Noimot Adedasola</h4>
        <p>Marketing Lead</p>
      </div>
      <div class="team-card">
        <img :src="image" alt="Team Member" />
        <h4> Noimot Adedasola</h4>
        <p>Product Developer</p>
      </div>
    </div>
  </div>

</template>

<script setup>
// import image from "../../assets/images/me.jpg"
import image from "@/assets/images/my-image.jpeg"

</script>

<style  scoped>
/* Team Section */
.team h3,
.values h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #222;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.team-card {
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  background: #fafafa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}
.team-card:hover {
  transform: translateY(-5px);
}
.team-card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
}
.team-card h4 {
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 600;
}
.team-card p {
  color: #777;
  font-size: 0.95rem;
}

</style>