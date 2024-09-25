<template>
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-outline-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      {{ title }}
    </button>
    <form class="dropdown-menu p-4">
      <!-- 체크박스 -->
      <div v-if="checkboxes && checkboxes.length" class="mb-3">
        <label class="form-label-bold">{{ checkboxLabel }}</label>
        <div v-for="(checkbox, index) in checkboxes" :key="index">
          <input
            type="checkbox"
            class="form-check-input-outlined"
            :id="`dropdownCheck${index}`"
            :value="checkbox"
            @change="handleCheckboxChange(checkbox, $event.target.checked)"
          />
          {{ checkbox }}
        </div>
      </div>

      <!-- 슬라이더 -->
      <div v-if="sliders && sliders.length" class="mb-3">
        <label class="form-label-bold">{{ priceLabel }}</label>
        <div v-for="(slider, index) in sliders" :key="index">
          <label :for="`costLabel${index}`" class="form-label">
            {{ slider.label }}
          </label>
          <!-- 각 슬라이더에 슬라이더 데이터 전달 -->
          <PriceSlider :slider="slider" :sliderIndex="index" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useFilterStore } from '@/stores/filter';
import PriceSlider from '@/components/map/PriceSlider.vue';
import { Dropdown } from 'bootstrap';

const props = defineProps({
  title: String,
  checkboxLabel: String,
  checkboxes: Array,
  priceLabel: String,
  sliders: Array,
});

const filterStore = useFilterStore();

const handleCheckboxChange = (checkbox, checked) => {
  const category = props.checkboxLabel; // 거래유형, 층수, 구조 등을 category로 사용
  filterStore.setCheckboxValue(category, checkbox, checked);
  console.log('penguin checked');
};
</script>

<style scoped>
.form-label-bold {
  font-weight: bold;
}
.dropdown-menu {
  width: 300%;
}
.form-check-input-outlined {
  outline-color: #4e66f8;
}
.btn-outline-secondary:focus {
  background-color: #4e66f8;
}
</style>
