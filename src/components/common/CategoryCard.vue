<template>
  <div class="container">
    <img :src="content.img" alt=""/>
    <h4>{{ content.title }}</h4>
    <p>{{ content.des }}</p>
  </div>
</template>

<script setup>
defineProps({
  content:{
    type: Object,
  }
});
</script>

<style scoped>
.container :hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
.container img {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}
.container img:hover{
  width: 220px;
  height: 220px;
  border-radius:150px ;
   /* transition: transform 0.4s ease; */
   transition: 0.4s ease-in-out;

}
h4 {
  margin-top: 10px;
}
p {
  color: rgba(0, 0, 0, 0.5);
}
</style>
