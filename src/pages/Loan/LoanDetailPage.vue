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
    name: 'KB WELCOME PLUS 전세대출',
    category: '상품 소개 및 최고 금액',
    maxAmount: '최대 2억 원',
    rate: '연 3.74% 이내',
    period: '3개월에서 2년',
    repaymentMethod: '일시 상환, 원리금 균등 상환 또는 혼합 상환 방식 가능',
    interest: 'COFIX 기준 변동 금리, 연 3.74% 이내',
    usageInstructions: '모든 조건을 충족해야 하며, 조건에 따라 우대 금리가 적용될 수 있습니다.',
    detailsUrl: 'https://obank.kbstar.com'
  },
  {
    id: '2',
    name: '전세자금대출 상품',
    category: '상품 소개 및 최고 금액',
    maxAmount: '최대 4억 원 (보증금의 80%)',
    rate: '최저 4.27% ~ 최고 6.29%',
    period: '10개월 ~ 25개월',
    repaymentMethod: '만기일시상환',
    interest: '연 4.27% ~ 6.29%',
    usageInstructions: '신용등급, 연소득, 주택가액 등에 따라 대출 한도 및 금리 적용',
    detailsUrl: 'https://obank.kbstar.com'
  },
  {
    id: '3',
    name: '전세자금대출',
    category: '상품 소개 및 최고 금액',
    maxAmount: '최대 2억2천2백만원, 채권보전시 4억4천4백만원',
    rate: '최저 4.21% ~ 최고 6.22%',
    period: '최소 1년, 최대 10년',
    repaymentMethod: '일시상환, 혼합상환',
    interest: '최저 4.21%, 최고 6.22%',
    usageInstructions: '보증료, 인지세 등',
    detailsUrl: 'https://obank.kbstar.com'
  },
  {
    id: '4',
    name: '카카오뱅크 전월세 보증금대출',
    category: '상품 소개 및 최고 금액',
    maxAmount: '최대 4억원',
    rate: '최저 4.057% ~ 최고 6.172%',
    period: '10개월 이상 25개월 이내',
    repaymentMethod: '일시상환',
    interest: '연 4.057% ~ 6.172%',
    usageInstructions: '신용평가, 소득에 따라 대출 한도와 금리 결정',
    detailsUrl: 'https://www.kakaobank.com'
  },
  {
    id: '5',
    name: '하나은행 대출',
    category: '상품 소개 및 최고 금액',
    maxAmount: '최대 5천만 원',
    rate: '최저 4.057% ~ 최고 6.172%',
    period: '일시상환: 1년, 분할상환: 5년 이내',
    repaymentMethod: '일시상환, 통장대출, 원(리)금균등분할상환',
    interest: '최저 4.057% ~ 최고 6.172%',
    usageInstructions: '신용평가, 거래 실적에 따라 대출 한도와 금리 결정, 금리 인하 요구권 행사 가능',
    detailsUrl: 'https://www.hanabank.com'
  }
]
  ;

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