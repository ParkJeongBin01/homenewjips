<template>
  <div class="buddy-card">
    <img :src="image" alt="buddy image" />
    <h3>{{ name }}</h3>
    <p>{{ occupation }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  occupation: String,
  image: {
    type: String,
    default: 'default-avatar.jpg', // 기본 아바타 이미지 경로
  }
})
</script>

<style scoped>
.buddy-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  width: 150px;
  text-align: center;
}
.buddy-card img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
