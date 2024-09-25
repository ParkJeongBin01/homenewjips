<template>
    <div class="loan-page">
      <!-- Header -->
      <section class="header">
        <h1>외국인을 위한 대출</h1>
        <p>여러분을 위한 대출정보를 이용하세요!</p>
      </section>
  
      <!-- Information Section -->
      <section class="loan-info" v-if="selectedLoan">
        <h2>{{ selectedLoan.name }}</h2>
        <p><strong>상품 소제목:</strong> {{ selectedLoan.description }}</p>
        <p><strong>최고 금액:</strong> {{ selectedLoan.maxAmount }}</p>
        <p><strong>이자율:</strong> {{ selectedLoan.rate }}</p>
        <p><strong>기간:</strong> {{ selectedLoan.period }}</p>
        <p><strong>상환 방법:</strong> {{ selectedLoan.repaymentMethod }}</p>
        <p><strong>금리 및 이용:</strong> {{ selectedLoan.interestRate }}</p>
        <p><strong>이용 안내:</strong> {{ selectedLoan.usageInfo }}</p>
        <p><strong>상세 정보:</strong> <a :href="selectedLoan.detailsLink" target="_blank">{{ selectedLoan.detailsLink }}</a></p>
      </section>
  
      <!-- Loan Cards Section -->
      <section class="loan-cards">
        <h2>다른 대출 정보</h2>
        <div class="loan-grid">
          <LoanCard
            v-for="(loan, index) in loans"
            :key="index"
            :loan="loan"
            :is-selected="loan.id === selectedLoan?.id"
            @click="selectLoan(loan)"
          />
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import LoanCard from '@/components/LoanCard.vue';
  import { ref } from 'vue';
  
  const loans = [
    {
      id: '1',
      name: 'KB WELCOME PLUS',
      description: '상품 소개 및 최고 금액',
      maxAmount: '최고 1.5%',
      rate: '연 3.5 ~ 5.5%',
      period: '3개월에서 2년',
      repaymentMethod: '일시 상환 또는 원리금 상환 방식 가능',
      interestRate: '변동 금리, 연 3.5% 이내',
      usageInfo: '모든 조건을 충족해야 하며, 조건에 따라 이용 가능',
      detailsLink: 'https://obank.kbstar.com'
    },
    {
      id: '2',
      name: 'KB 진세실심 대출보증',
      description: '상품 소개 및 최고 금액',
      maxAmount: '최고 1.5%',
      rate: '연 3.5 ~ 5.5%',
      period: '3개월에서 2년',
      repaymentMethod: '일시 상환 또는 원리금 상환 방식 가능',
      interestRate: '변동 금리, 연 3.5% 이내',
      usageInfo: '모든 조건을 충족해야 하며, 조건에 따라 이용 가능',
      detailsLink: 'https://obank.kbstar.com/quics'
    },
    {
      id: '3',
      name: 'KB 외국인 전용 주택 전세자금 대출',
      description: '외국인을 위한 특별 대출 상품',
      maxAmount: '최고 2.5%',
      rate: '연 2.5 ~ 4.5%',
      period: '1년에서 5년',
      repaymentMethod: '원리금 균등 상환 방식',
      interestRate: '고정 금리, 연 4.0%',
      usageInfo: '주택 소유 외국인 대상',
      detailsLink: 'https://obank.kbstar.com/foreign'
    },
    {
      id: '4',
      name: 'KB 우대 전세 대출',
      description: '신규 전세 자금을 위한 대출',
      maxAmount: '최고 3.0%',
      rate: '연 3.0 ~ 4.0%',
      period: '6개월에서 3년',
      repaymentMethod: '혼합 상환 방식',
      interestRate: '변동 금리, 연 3.0%',
      usageInfo: '임차보증금의 80%까지 지원',
      detailsLink: 'https://obank.kbstar.com/viploan'
    },
    {
      id: '5',
      name: 'KB 소형 주택 대출',
      description: '소형 주택 구매 자금을 위한 대출',
      maxAmount: '최고 1.8%',
      rate: '연 2.5 ~ 4.5%',
      period: '6개월에서 2년',
      repaymentMethod: '원리금 균등 상환 방식',
      interestRate: '변동 금리, 연 2.5%',
      usageInfo: '소형 주택 구매 자금을 지원합니다.',
      detailsLink: 'https://obank.kbstar.com/smallloan'
    },
    {
      id: '6',
      name: 'KB 주택담보대출',
      description: '주택담보로 대출을 받을 수 있는 상품',
      maxAmount: '최고 4.0%',
      rate: '연 2.0 ~ 3.5%',
      period: '1년에서 10년',
      repaymentMethod: '원리금 상환 방식',
      interestRate: '고정 금리, 연 2.0%',
      usageInfo: '담보로 주택을 제공할 경우 지원됩니다.',
      detailsLink: 'https://obank.kbstar.com/mortgageloan'
    }
  ];
  
  const selectedLoan = ref(loans[0]);
  
  const selectLoan = (loan) => {
    selectedLoan.value = loan;
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when a card is clicked
  };
  </script>
  
  <style scoped>
  .loan-page {
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .header h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .loan-info {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 40px;
  }
  
  .loan-info a {
    color: #007bff;
    text-decoration: underline;
  }
  
  .loan-cards {
    margin-top: 40px;
  }
  
  .loan-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    .loan-grid {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
    }
  }
  
  @media (max-width: 480px) {
    .loan-grid {
      grid-template-columns: 1fr; /* 1 column for very small screens */
    }
  }
  </style>
  