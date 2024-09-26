<template>
  <div class="mb-4">
    <div class="text-primary" ref="sliderSnap"></div>
    <div class="nouislider-values">
      <div class="min">
        <span>{{ formattedFrom }}</span>
      </div>
      <div class="max">
        <span>{{ formattedTo }}</span>
      </div>
    </div>
    <input type="hidden" :value="sliderValues.from" />
    <input type="hidden" :value="sliderValues.to" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { useFilterStore } from '@/stores/filter';

const props = defineProps({
  sliderIndex: Number,
  slider: Object,
});

const filterStore = useFilterStore();
const sliderSnap = ref(null);

const sliderValues = ref({
  from: props.slider.from,
  to: props.slider.to,
});

// 단위와 포맷팅 함수
const formatValue = (value) => {
  if (props.slider.label === '보증금') {
    const smallUnit = value % 10000;
    const bigUnit = Math.floor(value / 10000);
    if (bigUnit > 0) {
      return `${bigUnit}억 ${smallUnit}만원`.trim();
    }
    return `${smallUnit}만원`.trim();
  }
  if (props.slider.label === '방 크기') {
    return `${value}평`;
  }
  return `${value}만원`; // 월세의 경우
};
const formattedFrom = computed(() => formatValue(sliderValues.value.from));
const formattedTo = computed(() => {
  const baseValue = formatValue(sliderValues.value.to);

  // 보증금 슬라이더일 때만 물결표시 추가
  if (
    props.slider.label === '보증금' &&
    sliderValues.value.to >= props.slider.maxRange
  ) {
    return `${baseValue}~`; // 최대값 도달 시
  }

  // 월세와 방 크기 슬라이더일 때 최대값 도달 시 최대값과 물결표시 추가
  if (
    (props.slider.label === '월세' || props.slider.label === '방 크기') &&
    sliderValues.value.to >= props.slider.maxRange
  ) {
    return `${baseValue}~`; // 최대값 도달 시
  }

  return baseValue;
});

// props.slider가 업데이트되면 로컬 상태도 업데이트
watch(
  () => props.slider,
  (newValue) => {
    sliderValues.value.from = newValue.from;
    sliderValues.value.to = newValue.to;

    if (sliderSnap.value) {
      sliderSnap.value.noUiSlider.set([newValue.from, newValue.to]);
    }
  }
);

onMounted(() => {
  noUiSlider.create(sliderSnap.value, {
    start: [sliderValues.value.from, sliderValues.value.to],
    connect: true,
    step: props.slider.step,
    range: {
      min: props.slider.minRange,
      max: props.slider.maxRange,
    },
  });

  // 슬라이더 업데이트 시 로컬 상태 및 필터 스토어 업데이트
  sliderSnap.value.noUiSlider.on('update', (values) => {
    const from = Math.round(values[0]);
    const to = Math.round(values[1]);

    // 로컬 상태 업데이트
    sliderValues.value.from = from;
    sliderValues.value.to = to;

    // 필터 스토어 업데이트
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
