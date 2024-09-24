<template>
  <div class="filter-container">
    <DropDownFilter title="거래유형 1 " labelTradeType="거래유형" />
    <DropDownFilter title="거래유형 2" />
    <DropDownFilter title="거래유형 3" />
    <DropDownFilter title="거래유형 4" />
  </div>
  <div class="container">
    <div class="detail-container">
      <h2>경도: {{ selectedMarker?.latitude }}</h2>
      <h2>위도: {{ selectedMarker?.longitude }}</h2>
    </div>
    <div id="map" ref="mapElement" class="map-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useMap } from './useMap';
import DropDownFilter from '@/components/DropDownFilter.vue';
const mapElement = ref(null);
const { initializeMap, markers, selectedMarker } = useMap();

onMounted(() => {
  initializeMap(mapElement.value);
});
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.detail-container {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: white;
}

.map-container {
  flex: 1;
}
.filter-container {
  display: flex;
}
</style>
