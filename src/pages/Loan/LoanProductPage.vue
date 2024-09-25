<template>
    <div class="loan-page">
      <!-- Header with background image -->
      <section class="header">
        <div class="header-content">
          <h1>외국인을 위한 대출</h1>
          <p>여러분을 위한 대출정보를 이용하세요!</p>
        </div>
      </section>
  
      <!-- Loan Details (Selected Loan Information) -->
      <section class="loan-details" v-if="selectedLoan">
        <h3>{{ selectedLoan.name }}</h3>
        <!-- Updated to position labels above each information -->
        <p><strong>상품 소제목:</strong> {{ selectedLoan.subtitle }}</p>
        <p><strong>최고 금액:</strong> {{ selectedLoan.maxAmount }}</p>
        <p><strong>이자율:</strong> {{ selectedLoan.rate }}</p>
        <p><strong>기간:</strong> {{ selectedLoan.duration }}</p>
        <p><strong>상환 방법:</strong> {{ selectedLoan.repayment }}</p>
        <p><strong>금리 및 이용:</strong> {{ selectedLoan.interest }}</p>
        <p><strong>이용 안내:</strong> {{ selectedLoan.usageInfo }}</p>
        <a :href="selectedLoan.link" target="_blank">상세정보</a> <!-- Clickable link -->
      </section>
  
      <!-- Loan Cards Section -->
      <section class="loan-cards">
        <h2>다른 대출 정보</h2>
        <div class="loan-grid">
          <LoanCard
            v-for="(loan, index) in loans"
            :key="index"
            :loan="loan"
            @click="goToLoanDetail(loan)"
          />
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import LoanCard from '@/components/LoanCard.vue';
  

  const loans = [
  {
    id: 1,
    name: 'KB WELCOME PLUS',
    subtitle: '임차보증금 80% 이내, 최대 2억까지',
    maxAmount: '최고 1.5%',
    rate: '연 3.5 ~ 5.5%',
    duration: '3개월에서 2년',
    repayment: '일시 상환, 원리금 균등 상환 또는 혼합 상환 방식 가능',
    interest: '변동 금리, 연 3.74% 이내',
    usageInfo: '모든 조건을 충족해야 하며, 조건에 따라 우대 금리가 적용될 수 있습니다.',
    link: 'https://obank.kbstar.com',
  },
  {
    id: 2,
    name: 'KB 전세실심 대출보증',
    subtitle: '전세보증금 90%까지',
    maxAmount: '최고 1.5%',
    rate: '연 3.5 ~ 5.5%',
    duration: '3개월에서 2년',
    repayment: '일시 상환, 원리금 균등 상환 방식 가능',
    interest: '변동 금리, 연 3.5% 이내',
    usageInfo: '모든 조건을 충족해야 하며, 조건에 따라 이용 가능',
    link: 'https://obank.kbstar.com',
  },
  {
    id: 3,
    name: 'KB 외국인 전용 주택 전세자금 대출',
    subtitle: '외국인을 위한 전세자금 대출',
    maxAmount: '최고 1.5%',
    rate: '연 3.5 ~ 5.5%',
    duration: '3개월에서 2년',
    repayment: '일시 상환, 원리금 균등 상환 방식 가능',
    interest: '연 3.5%',
    usageInfo: '조건에 따라 이용 가능',
    link: 'https://obank.kbstar.com',
  },
  {
    id: 4,
    name: 'KB 신용대출',
    subtitle: '최대 5천만원까지',
    maxAmount: '최고 2.5%',
    rate: '연 4.0 ~ 6.0%',
    duration: '최대 3년',
    repayment: '월 상환 방식',
    interest: '연 4.0%',
    usageInfo: '신용 조건에 따라 이용 가능',
    link: 'https://obank.kbstar.com',
  },
  {
    id: 5,
    name: 'KB 자동차 대출',
    subtitle: '자동차 구매를 위한 대출',
    maxAmount: '최고 3.0%',
    rate: '연 4.5%',
    duration: '최대 5년',
    repayment: '원리금 균등 상환',
    interest: '연 4.5%',
    usageInfo: '차량 구입에만 사용 가능',
    link: 'https://obank.kbstar.com',
  },
  {
    id: 6,
    name: 'KB 주택담보대출',
    subtitle: '주택 구입을 위한 담보 대출',
    maxAmount: '최고 4.0%',
    rate: '연 3.8%',
    duration: '최대 30년',
    repayment: '원리금 균등 상환',
    interest: '연 3.8%',
    usageInfo: '주택 구입 조건에 따라 이용 가능',
    link: 'https://obank.kbstar.com',
  },
];
  

const selectedLoan = ref(null);

const goToLoanDetail = (loan) => {
  selectedLoan.value = loan;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
/* Header styling */
.header {
  background-color: #f5f5f5; /* Light grey background */
  padding: 60px 0;
  text-align: center;
}

.header-content {
  color: #333;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.header p {
  font-size: 1.2rem;
}

/* Loan Details Styling */
.loan-details {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.loan-details h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.loan-details p {
  margin: 5px 0;
  color: #666;
}

.loan-details a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.loan-details a:hover {
  text-decoration: underline;
}

/* Loan Cards Section */
.loan-cards {
  margin-top: 40px;
}

.loan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
}

.loan-grid .loan-card {
  background-color: #1e88e5; /* Updated Blue color for loan cards */
  padding: 20px;
  color: white;
  text-align: center;
  border-radius: 12px; /* More rounded corners for the card shape */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
  cursor: pointer;
  transition: transform 0.2s ease-in-out; /* Transition for hover effect */
}

.loan-grid .loan-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  background-color: #1565c0; /* Darker blue on hover */
}
</style>