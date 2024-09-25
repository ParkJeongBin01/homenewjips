<!-- LoanCard.vue -->
<template>
    <div class="loan-card" @click="$emit('click')">
      <h3>{{ loan.name }}</h3>
      <p>최고 금액: {{ loan.maxAmount }}</p>
      <p>이자율: {{ loan.rate }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    loan: Object,
  });
  </script>
  
  <style scoped>
  .loan-card {
    background-color: #0058a3; /* Updated color for cards */
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
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
  