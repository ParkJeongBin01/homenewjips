<template>
    <div
      class="loan-card"
      :class="{ selected: isSelected }"
      @click="$emit('click')"
    >
      <h3>{{ loan.name }}</h3>
      <p>최고 금액: {{ loan.maxAmount }}</p>
      <p>이자율: {{ loan.rate }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    loan: Object,
    isSelected: Boolean,
  });
  </script>
  
  <style scoped>
  .loan-card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
  }
  
  .loan-card.selected {
    background-color: #e28409;
    color: #ffffff;
  }
  
  .loan-card:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .loan-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .loan-card p {
    margin: 5px 0;
  }
  </style>
  