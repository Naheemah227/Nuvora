<template>
  <div class="top d-none d-md-block">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="#"
            >Call us : 123-456-789</router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <p class="navbar-nav mx-auto mb-2 mb-lg-0 text-white">
              Sign up and GET up to 20% OFF for your first order.
              <router-link
                to="signup"
                class="ps-1 link-sign-up"
                style="color: var(--accent-gold)"
              >
                Sign up now
              </router-link>
            </p>

            <div class="social-icons d-flex">
              <ul>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-x-twitter"></i></li>
                <li><i class="fa-brands fa-pinterest"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-square-youtube"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.top {
  background: var(--primary-green);
}

.navbar-brand {
  color: #fff;
}
.social-icons{
  padding: 15px 0 0 0;
}

.social-icons ul {
  list-style: none;
  display: flex;
  gap: 10px;
}

.social-icons ul li {
  display: flex;
  font-size: 12px;
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  align-items: center;
  text-align: center;
  justify-content: center;



}


</style>
