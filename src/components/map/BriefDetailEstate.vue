, markerVisibleHandler
<template>
  <div class="brief-detail">
    <h3>마커 정보</h3>
    <p><strong>위도:</strong> {{ marker.getPosition().lat() }}</p>
    <p><strong>경도:</strong> {{ marker.getPosition().lng() }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// props로 marker 데이터를 받음
const props = defineProps({
  marker: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.brief-detail {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  background-color: #f9f9f9;
}

h3 {
  margin-top: 0;
}

p {
  margin: 5px 0;
}
</style>
