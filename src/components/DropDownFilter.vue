<template>
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-outline-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      하이하이
    </button>
    <form class="dropdown-menu p-4">
      <div class="mb-3">
        <label for="tradeType" class="form-label-bold">거래유형</label>
        <div>
          <input
            type="checkbox"
            class="form-check-input-outlined"
            id="dropdownCheck2"
          />월세
          <input
            type="checkbox"
            class="form-check-input-outlined"
            id="dropdownCheck2"
          />
          전세
        </div>
        <label class="form-label-bold">가격</label>
        <div>
          <label for="costLabel" class="form-label" ref="deposit">보증금</label>
        </div>
        <div>
          <PriceSlider />
        </div>
        <div>
          <label for="costLabel" class="form-label" ref="monthlyPee"
            >월세</label
          >
        </div>
        <div>
          <PriceSlider />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { Dropdown } from 'bootstrap';
import PriceSlider from '@/components/PriceSlider.vue';
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
