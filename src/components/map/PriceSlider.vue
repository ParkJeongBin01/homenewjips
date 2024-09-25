<template>
  <div class="mb-4">
    <div class="text-primary" ref="sliderSnap"></div>
    <div class="nouislider-values">
      <div class="min">
        <span>{{ slider.from }} 만원</span>
      </div>
      <div class="max">
        <span>{{ slider.to }} 만원</span>
      </div>
    </div>
    <input type="hidden" :value="slider.from" />
    <input type="hidden" :value="slider.to" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import { useFilterStore } from '@/stores/filter';

const props = defineProps({
  sliderIndex: Number,
  slider: Object,
});

const filterStore = useFilterStore();
const sliderSnap = ref(null);

watch(
  () => props.slider,
  (newValue) => {
    if (sliderSnap.value) {
      sliderSnap.value.noUiSlider.set([newValue.from, newValue.to]);
    }
  }
);

onMounted(() => {
  noUiSlider.create(sliderSnap.value, {
    start: [props.slider.from, props.slider.to],
    connect: true,
    step: props.slider.step,
    range: {
      min: props.slider.minRange,
      max: props.slider.maxRange,
    },
  });

  // 슬라이더 업데이트 시 필터 스토어 업데이트
  sliderSnap.value.noUiSlider.on('update', (values) => {
    const from = Math.round(values[0]);
    const to = Math.round(values[1]);
    filterStore.setSliderValues(props.sliderIndex, from, to);
  });
});
</script>

<style scoped>
.nouislider-values .min,
.nouislider-values .max {
  font-size: 14px;
  margin-top: 10px;
}
</style>
