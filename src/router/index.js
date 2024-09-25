import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import authRotes from './auth';
import boardRotes from './board';
import mapRoutes from './map';
import chatRoutes from './chat';
import buddizRoutes from './buddiz';
import buddizForm from './buddizForm';
import buddiz from './buddiz';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    
    ...authRotes,
    ...boardRotes,
    ...mapRoutes,
    ...chatRoutes,
    ...buddizRoutes,
    ...buddizForm,
  ],
  
});

export default router;
