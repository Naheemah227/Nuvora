<template>
    <div>
       <div class="footer">
        <ul class="m-0 py-4">
          <li>Skincare</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Makeup</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Hair CARE</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Fragrances</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Nail CARE</li>
          <li><i class="bi bi-leaf-fill"></i></li>
          <li>Body care</li>
        </ul>
      </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.footer {
  display: flex;
  margin-top: 30px;
  background: var(--primary-green);
  justify-content: space-evenly;
  padding-top: 10px;
  padding-bottom: 5px;
  gap: 30px;
  overflow: hidden;
}

.footer ul,
li {
  display: flex;

  gap: 60px;
  font-size: 20px;
  color: white;
}

.footer i {
  color: var(--accent-gold);
  font-size: 25px;
}

</style>