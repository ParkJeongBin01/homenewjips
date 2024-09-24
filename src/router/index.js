import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import authRotes from './auth';
import boardRotes from './board';
import travelRoutes from './travel';
import galleryRoutes from './gallery';
import mapRoutes from './map';
import chatRoutes from './chat';
import JoinPage from '@/pages/auth/JoinPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,

      path: '/auth/join',
      name: 'joinPage',
      component: JoinPage,
    },
    ...authRotes,
    ...boardRotes,
    ...travelRoutes,
    ...galleryRoutes,
    ...mapRoutes,
    ...chatRoutes,
  ],
});

export default router;
