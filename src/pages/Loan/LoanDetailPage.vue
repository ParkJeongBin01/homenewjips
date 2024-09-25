<template>
    <div class="loan-detail">
      <h2>{{ loan.name }}</h2>
      <p>상품 소재목: {{ loan.category }}</p>
      <p>최고 금액: {{ loan.maxAmount }}</p>
      <p>이자율: {{ loan.rate }}</p>
      <p>기간: {{ loan.period }}</p>
      <p>상환 방법: {{ loan.repaymentMethod }}</p>
      <p>금리 및 이용: {{ loan.interest }}</p>
      <p>이용 안내: {{ loan.usageInstructions }}</p>
      <p>
        상세정보: 
        <a :href="loan.detailsUrl" target="_blank">상세정보</a> <!-- Link as a clickable hyperlink -->
      </p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const loans = [
    {
      id: '1',
      name: 'KB WELCOME PLUS',
      category: '상품 소개 및 최고 금액',
      maxAmount: '최고 1.5%',
      rate: '연 3.5 ~ 5.5%',
      period: '3개월에서 2년',
      repaymentMethod: '일시 상환 또는 원리금 균등 상환 방식 가능',
      interest: '변동 금리, 연 3.5% 이내',
      usageInstructions: '모든 조건을 충족해야 하며, 조건에 따라 이용 가능',
      detailsUrl: 'https://obank.kbstar.com/quics?page=C060283&cc=b028364:b061618&brand상품코드=LN20001121&QSL=F',
    },
    {
      id: '2',
      name: 'KB 진세실심 대출보증',
      category: '상품 소개 및 최고 금액',
      maxAmount: '최고 1.5%',
      rate: '연 3.5 ~ 5.5%',
      period: '3개월에서 2년',
      repaymentMethod: '일시 상환 또는 원리금 균등 상환 방식 가능',
      interest: '변동 금리, 연 3.5% 이내',
      usageInstructions: '모든 조건을 충족해야 하며, 조건에 따라 이용 가능',
      detailsUrl: 'https://another-example.com',
    },
    // Add more loans here...
  ];
  
  const loan = computed(() => loans.find((l) => l.id === route.params.loanId));
  </script>
  
  <style scoped>
  .loan-detail {
    padding: 20px;
  }
  
  .loan-detail a {
    color: blue;
    text-decoration: underline;
  }
  
  .loan-detail a:hover {
    color: darkblue;
  }
  </style>
  