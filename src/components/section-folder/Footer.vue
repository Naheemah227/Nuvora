<template>
  <footer class="footer-section">
    <div class="container">
      <!-- Top Section -->
      <div class="footer-top">
        <!-- About -->
        <div class="footer-about">
          <h3>Nuvora Cosmetics</h3>
          <p>
            Premium skincare and cosmetic products designed to enhance your natural beauty. Safe, effective, and ethically made.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul class="mx-4">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </div>

        <!-- Follow Us -->
        <div class="footer-social">
          <h4 class="my-4">Follow Us</h4>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for exclusive offers & updates</p>
          <form @submit.prevent="subscribe">
            <input class="my-4" type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <p>@ {{ new Date().getFullYear() }} Nuvora Cosmetics. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
function subscribe() {
  alert("Thank you for subscribing!");
}
</script>

<style scoped>
.footer-section {
  background: #134513; /* primary green */
  /* color: #fff; */
  color: black;
  padding: 3rem 2rem;
  font-family: Arial, sans-serif;
}

.footer-section a {
  /* color: #fff; */
    color: var(--accent-gold);

  text-decoration: none;
}

.footer-section a:hover {
  color: #d4af37; /* accent gold */
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-about h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #d4af37; /* accent gold */
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-social .social-icons {
  display: flex;
  gap: 1rem;
}

.footer-social .social-icons a {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #d4af37; /* gold background */
  color: #006400; /* green icon */
  transition: transform 0.3s;
}

.footer-social .social-icons a:hover {
  transform: scale(1.2);
}

.footer-newsletter input {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  margin-right: 0.5rem;
  width: 60%;
  max-width: 200px;
}

.footer-newsletter button {
  padding: 0.5rem 1rem;
  border: none;
  background: #d4af37; /* gold */
  color: #006400; /* green */
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer-newsletter button:hover {
  background: #fff;
  color: #006400;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 1rem;
  font-size: 0.9rem;
}
</style>
