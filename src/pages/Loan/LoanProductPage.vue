<template>
  <div class="loan-page">
    <!-- Header with grey background -->
    <section class="header grey-background">
      <div class="header-content">
        <h1>외국인을 위한 대출</h1>
        <p>여러분을 위한 대출정보를 이용하세요!</p>
      </div>
    </section>

    <!-- Loan Details (Selected Loan Information) -->
    <section class="loan-details" v-if="selectedLoan">
      <h3>{{ selectedLoan.name }} 전세 자금 대출</h3>
      <p class="loan-subtitle">{{ selectedLoan.subtitle }}</p>
      
      <!-- Highlighted Description -->
      <div class="highlight-box">
        임대차 계약을 체결한 외국인 고객 및 소득을 증명할 수 있는 고객 대상. 대출 기간은 3개월에서 2년, 최대 10년까지 연장 가능.
      </div>
      
      <!-- Two-column layout for key details -->
      <div class="details-grid">
        <div class="detail-item">
          <img src="../../assets/icons/calendar-icon.png" alt="Calendar Icon" />
          <p><strong>기간</strong><br>{{ selectedLoan.duration }}</p>
        </div>
        <div class="detail-item">
          <img src="../../assets/icons/hand-icon.png" alt="Money Icon" />
          <p><strong>최고 금액</strong><br>{{ selectedLoan.maxAmount }}</p>
        </div>
      </div>

      <p><strong>상환 방법</strong><br>{{ selectedLoan.repayment }}</p>
      <p><strong>금리 및 이용</strong><br>{{ selectedLoan.interest }}</p>
      <p><strong>이용 안내</strong><br>{{ selectedLoan.usageInfo }}</p>
      <p><strong>상세 주소</strong><br><a :href="selectedLoan.link" target="_blank">{{ selectedLoan.link }}</a></p>
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
/* Global container */
.loan-page {
  padding: 2rem;
}

/* Grey background for the header section */
.header.grey-background {
  background-color: #f5f5f5;
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.header-content p {
  font-size: 1.2rem;
  color: #666;
}

/* Loan Details Section */
.loan-details {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.loan-details h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.loan-details .loan-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 10px;
}

/* Highlighted Description Box */
.highlight-box {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #333;
}

/* Two-column layout for duration and amount */
.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
}

.detail-item img {
  width: 40px;
  margin-right: 10px;
}

.detail-item p {
  margin: 0;
}

/* Loan Cards Section */
.loan-cards {
  margin-top: 40px;
}

.loan-cards h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

/* Loan grid with smaller cards */
.loan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.loan-card {
  background-color: #446688;
  padding: 20px;
  border-radius: 12px;
  color: white !important;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.loan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.loan-card * {
  color: white !important;
}

.loan-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.loan-card p {
  font-size: 1rem;
}

.loan-card .rate {
  font-size: 1rem;
}
</style>
