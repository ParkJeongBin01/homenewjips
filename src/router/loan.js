import LoanProductPage from '../pages/Loan/LoanProductPage.vue';
import LoanDetailPage from '../pages/Loan/LoanDetailPage.vue';

const loanRoutes = [
  {
    path: '/loanproduct',
    name: 'loan-product',
    component: LoanProductPage,
  },
  {
    path: '/loandetail/:loanId', // Dynamic route for specific loan products
    name: 'loan-detail',
    component: LoanDetailPage,
    props: true, // Pass loanId as prop
  },
];

export default loanRoutes;
