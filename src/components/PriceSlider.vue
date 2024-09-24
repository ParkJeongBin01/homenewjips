<template>
  <div class="mb-4">
    <div class="text-primary" ref="sliderSnap"></div>
    <div class="nouislider-values">
      <div class="min">
        <span ref="sliderValueFrom"></span><span>만원</span>
      </div>
      <div class="max"><span ref="sliderValueTo"></span><span>만원</span></div>
    </div>
    <input type="hidden" name="pricefrom" ref="inputFrom" :value="from" />
    <input type="hidden" name="priceto" ref="inputTo" :value="to" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

// 초기 값 설정
const from = ref(1000);
const to = ref(10000);

const sliderSnap = ref(null); // 슬라이더 참조
const sliderValueFrom = ref(null); // 슬라이더 값 참조
const sliderValueTo = ref(null);
const inputFrom = ref(null); // 숨겨진 input 필드 참조
const inputTo = ref(null);

onMounted(() => {
  noUiSlider.create(sliderSnap.value, {
    start: [from.value, to.value],
    snap: false,
    connect: true,

    step: 1,
    range: {
      min: 0,
      max: 30000,
    },
  });

  sliderSnap.value.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) {
      sliderValueFrom.value.innerHTML = values[handle]; // 첫 번째 핸들 값
      inputFrom.value.value = values[handle]; // 첫 번째 숨겨진 input 값
    } else {
      sliderValueTo.value.innerHTML = values[handle]; // 두 번째 핸들 값
      inputTo.value.value = values[handle]; // 두 번째 숨겨진 input 값
    }
  });
});
</script>

<style scoped>
/* 슬라이더 스타일 커스터마이징 */
.nouislider-values .min,
.nouislider-values .max {
  font-size: 14px;
  margin-top: 10px;
}
</style>
