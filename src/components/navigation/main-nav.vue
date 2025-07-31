<template>
  <div>
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px"
    >
      <div class="container">
        <a
          class="navbar-brand d-flex text-center align-items-center gap-2"
          href="#"
        >
          <img class="logo-image" :src="logoimage" alt="" />
          <h5 class="m-0 primary-green" style="font-weight: 700">NOVORA</h5>
        </a>
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
          <ul class="menu navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Skincare</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">MakeUp</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Hair Care</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <ul class="icons d-flex">
          <li><i class="bi bi-search"></i></li>
          <li><i class="bi bi-heart"></i></li>
          <li><i class="bi bi-handbag"></i></li>
          <li><i class="bi bi-person"></i></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import logoimage from "@/assets/images/ChatGPT Image Jul 30, 2025, 08_59_38 PM.png";
</script>

<style scoped>
ul {
  display: flex;
  font-weight: 600;
  padding: 0;
  margin: 0;
  list-style: none;
  align-items: center;
}
ul li {
  display: block; /* or remove this rule completely */
  padding: 8px 10px;
}
.icons {
  gap: 0px;
  list-style: none;
  color: black;
  justify-content: center;
}
.logo-image {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>
