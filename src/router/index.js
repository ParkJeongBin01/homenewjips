import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import authRoutes from './auth';
import boardRoutes from './board';
import mapRoutes from './map';
import chatRoutes from './chat';
import blameRoutes from './blame';
import buddizRoutes from './buddiz';
import buddizForm from './buddizForm';
import guideRoutes from './guide';
import loanRoutes from './loan';
import Blp from '@/pages/board/BoardListPage.vue';
import Bdp from '@/pages/board/BoardDetailPage.vue';
import JoinPage from '@/pages/auth/JoinPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/auth/join',
      name: 'joinPage',
      component: JoinPage,
    },
    {
      path: '/board',  // 공지 리스트 페이지
      name: 'Blp',
      component: Blp,
    },
    {
      path: '/board/:no',  // 개별 공지 상세 페이지
      name: 'Bdp',
      component: Bdp,
      props: true  // URL 파라미터를 props로 전달
    },
    ...authRoutes,
    ...boardRoutes,
    ...mapRoutes,
    ...chatRoutes,
    ...blameRoutes,
    ...buddizRoutes,
    ...loanRoutes, // Add loan routes here    
    ...guideRoutes, // Add guide routes here
    ...buddizForm, // Add buddizForm routes here
  ],
});

export default router;
