<template>
  <div class="filter-container">
    <DropDownFilter
      title="거래유형"
      checkboxLabel="거래유형"
      :checkboxes="['월세', '전세']"
      priceLabel="가격"
      :sliders="[
        filterStore.filters.sliders.deposit,
        filterStore.filters.sliders.rent,
      ]"
    />

    <DropDownFilter
      title="방 크기"
      :sliders="[filterStore.filters.sliders.size]"
    />
    <DropDownFilter
      title="층수"
      checkboxLabel="층수"
      :checkboxes="['1층', '2층 이상', '반지하', '옥탑방']"
    />
    <DropDownFilter
      title="구조"
      checkboxLabel="구조"
      :checkboxes="['원룸', '투룸', '쓰리룸 이상', '오피스텔']"
    />
  </div>

  <div class="container">
    <div class="detail-container scrollbar">
      <h2>경도: {{ selectedMarker?.latitude }}</h2>
      <h2>위도: {{ selectedMarker?.longitude }}</h2>

      <!-- <div v-for="(marker, index) in visibleMarkers" :key="index">
          <BriefDetailEstate :marker="marker" />
        </div> -->
      <BriefDetailEstate :estateId="1" />
      <BriefDetailEstate :estateId="2" />
      <BriefDetailEstate :estateId="3" />
      <BriefDetailEstate :estateId="3" />
      <BriefDetailEstate :estateId="3" />
      <BriefDetailEstate :estateId="3" />
    </div>

    <div id="map" ref="mapElement" class="map-container"></div>
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filter';
import DropDownFilter from '@/components/map/DropDownFilter.vue';
import BriefDetailEstate from '@/components/map/BriefDetailEstate.vue';
import { useMap } from './useMap';
import { onMounted, ref } from 'vue';

const filterStore = useFilterStore();

const mapElement = ref(null);
const visibleMarkerCount = ref(0);

const { initializeMap, markers, selectedMarker } = useMap();
onMounted(() => {
  initializeMap(mapElement.value, visibleMarkerCount);
});
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  min-width: 100%;
  padding: 0;
}

.detail-container {
  flex: 0.5;
  background: white;
  overflow-y: scroll;
}

.map-container {
  flex: 1;
}
.filter-container {
  display: flex;
  width: 100%;
  gap: 10px;
  border-bottom: 1px solid #8f9bb3;
  height: 10vh;
  align-items: center;
}
.scrollbar::-webkit-scrollbar {
  width: 10px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #9f9f9f;
  border-radius: 10px;
}

.scrollbar::-webkit-scrollbar-track {
  background: white;
}
</style>
