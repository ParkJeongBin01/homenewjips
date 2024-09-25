<template>
    <div class="loan-detail-page">
      <h1>{{ loan.name }}</h1>
      <p>최고 금액: {{ loan.maxAmount }}</p>
      <p>이자율: {{ loan.rate }}</p>
      <p>{{ loan.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  // Define more loan details using loanId from the route
  const loans = [
    {
      id: '1',
      name: 'KB WELCOME PLUS',
      maxAmount: '최고 1.5%',
      rate: '연 3.5 ~ 5.5%',
      description: 'This loan is designed for foreigners with long-term tenancy needs...',
    },
    {
      id: '2',
      name: 'KB 진세실심 대출보증',
      maxAmount: '최고 1.5%',
      rate: '연 3.5 ~ 5.5%',
      description: 'This loan provides guarantees for Jeonse deposits...',
    },
    {
      id: '3',
      name: 'KB 외국인 전용 주택 전세자금 대출',
      maxAmount: '최고 1.5%',
      rate: '연 3.5 ~ 5.5%',
      description: 'This loan is specifically for foreigners renting homes...',
    },
  ];
  
  // Get the loan based on the route parameter loanId
  const loan = computed(() => loans.find((l) => l.id === route.params.loanId));
  </script>
  
  <style scoped>
  .loan-detail-page {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .loan-detail-page h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .loan-detail-page p {
    margin-bottom: 10px;
  }
  </style>
  