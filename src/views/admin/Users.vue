<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAllUsers } from "@/services/UserService";

const users = ref([]);

onMounted(async () => {
  users.value = await getAllUsers();
});
</script>




<style lang="scss" scoped>

</style>