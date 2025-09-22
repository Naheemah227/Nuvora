<template>
    <div class="admin-layout">
        <AdminLayout/>
    <aside class="sidebar">
      <router-link to="/admin/users">Users</router-link>
      <router-link to="/admin/orders">Orders</router-link>
      <router-link to="/admin/products">Products</router-link>
    </aside>
    <main class="content">
      <router-view /> s
    </main>
  </div>
</template>

<script setup>
import AdminLayout from '@/assets/layouts/AdminLayout.vue';

</script>

<style lang="scss" scoped>

</style>-->


