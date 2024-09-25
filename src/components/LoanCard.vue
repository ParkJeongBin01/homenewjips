<template>
    <div class="loan-card" @click="$emit('click')">
      <h3>{{ loan.name }}</h3>
      <p>{{ loan.subtitle }}</p>
      <p class="rate">{{ loan.rate }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    loan: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .loan-card {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    text-align: center;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .loan-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
  
  .loan-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .loan-card p {
    font-size: 0.9rem;
    color: #555;
  }
  
  .loan-card .rate {
    font-size: 1rem;
    color: #888;
  }
  </style>
  