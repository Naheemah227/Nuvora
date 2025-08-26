<template>
   
  <div class="shop">
              <button>
                Shop Now <span><i class="bi bi-arrow-right-short"></i></span>
                
              </button>
              <a href="">View all products</a>
            </div>
   
</template>

<script setup>


</script>

<style  scoped>
.shop {
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.shop button {
  background: var(--primary-green);
  color: white;
  padding: 10px 40px;
  border-radius: 25px;

  border: none;
  font-size: 20px;
}
.shop a {
  color: var(--primary-green);
  margin: 20px;
  font-size: 20px;
}
</style>