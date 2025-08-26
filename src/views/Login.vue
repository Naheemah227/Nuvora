<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Welcome Back 👋</h2>
      <p class="login-subtitle">Login to continue shopping</p>

      <form>
        <div class="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit" class="login-btn">Login</button>
      </form>

      <div class="extra-links">
        <a href="#">Forgot Password?</a>
        <a href="#">Create an Account</a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Background */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1b5e20, #2e7d32); /* darker green */

  padding: 20px;
}

/* Card */
.login-card {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Title */
.login-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.3rem;
}
.login-subtitle {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
}

/* Inputs */
.form-group {
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;
}
input:focus {
  border-color: #2575fc;
  box-shadow: 0 0 5px rgba(37, 117, 252, 0.5);
}

/* Button */
.login-btn {
  width: 100%;
  padding: 12px;
  background: #2575fc;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}
.login-btn:hover {
  background: #1a5bd9;
}

/* Links */
.extra-links {
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}
.extra-links a {
  color: #2575fc;
  text-decoration: none;
  transition: 0.3s;
}
.extra-links a:hover {
  text-decoration: underline;
}

/* Mobile responsiveness */
@media (max-width: 500px) {
  .login-card {
    padding: 1.5rem;
  }
  .login-title {
    font-size: 1.5rem;
  }
}
</style>
