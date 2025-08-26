\<template>
  <section class="follow-us-section">
    <div class="container">
      <h2>Follow Us</h2>
      <p>Stay connected and get the latest updates</p>
      
      <div class="social-icons">
        <a href="https://facebook.com" target="_blank" class="icon facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="icon twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="icon instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" class="icon linkedin">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for this simple section
</script>

<style scoped>
.follow-us-section {
  text-align: center;
  padding: 4rem 2rem;
  background: #f7f7f7;
}

.follow-us-section h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.follow-us-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #333;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
  background: #007bff;
}

.icon.facebook { background: #3b5998; }
.icon.twitter { background: #1da1f2; }
.icon.instagram { background: #e4405f; }
.icon.linkedin { background: #0077b5; }
</style>
