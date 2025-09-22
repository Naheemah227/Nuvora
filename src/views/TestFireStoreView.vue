<script setup>
import { onMounted } from "vue";
import { testFirestore } from "@/services/TestFireStore";

onMounted(() => {
  testFirestore();
});
</script>

<template>
  <div>Testing Firestore... Check the browser console and your Firebase console.</div>
</template>
