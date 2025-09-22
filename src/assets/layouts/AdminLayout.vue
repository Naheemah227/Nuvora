<template>
      <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <h2>My Admin</h2>
      </div>
      <nav>
        <router-link to="/admin" class="link" exact-active-class="active">Dashboard</router-link>
        <router-link to="/admin/users" class="link" exact-active-class="active">Users</router-link>
        <router-link to="/admin/orders" class="link" exact-active-class="active">Orders</router-link>
        <router-link to="/admin/products" class="link" exact-active-class="active">Products</router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Topbar -->
      <header class="topbar">
        <div class="left">
          <h1>{{ pageTitle }}</h1>
        </div>
        <div class="right">
          <span class="admin-name">Admin</span>
          <button @click="logout" class="logout-btn">Logout</button>
        </div>
      </header>

      <!-- Page Content -->
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup>

</script>

<style  scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: #2c3e50;
  color: white;
  padding: 20px;
}
.sidebar .logo {
  margin-bottom: 30px;
}
.sidebar nav {
  display: flex;
  flex-direction: column;
}
.sidebar .link {
  color: #bdc3c7;
  padding: 12px;
  margin: 5px 0;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
}
.sidebar .link:hover {
  background: #34495e;
  color: #fff;
}
.sidebar .active {
  background: #1abc9c;
  color: white;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Topbar */
.topbar {
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
}
.topbar .left h1 {
  font-size: 18px;
  margin: 0;
}
.topbar .right {
  display: flex;
  align-items: center;
  gap: 15px;
}
.admin-name {
  font-weight: bold;
}
.logout-btn {
  background: #e74c3c;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.logout-btn:hover {
  background: #c0392b;
}

/* Page content */
.content {
  flex: 1;
  padding: 20px;
  background: #fdfdfd;
}
</style>