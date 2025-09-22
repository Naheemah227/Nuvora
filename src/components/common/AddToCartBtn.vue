<!-- <template>
    <div>
<button>Add to cart</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
button {
  background: var(--primary-green);
  padding: 15px 50px;
  border-radius: 70px;
  color: white;
  border: 0;
}
button:hover {
  background: #1b5e20; /* slightly darker green */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px); /* subtle lift effect */
}

</style> -->

<template>
  <button @click="handleClick">Add to cart</button>
</template>

<script setup>

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click"); // emits to parent
};
</script>

<style scoped>
button {
  background: green;
  color: white;
  padding: 10px 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
}
button:hover {
  background: darkgreen;
}
</style>
