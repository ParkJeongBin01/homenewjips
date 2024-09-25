import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import authRoutes from './auth';
import boardRoutes from './board';
import mapRoutes from './map';
import chatRoutes from './chat';
import buddizRoutes from './buddiz';
import loanRoutes from './loan'; // Import loan routes
import guideRoutes from './guide'; // Import guide routes
import buddizForm from './buddizForm';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    ...authRoutes,
    ...boardRoutes,
    ...mapRoutes,
    ...chatRoutes,
    ...buddizRoutes,
    ...loanRoutes, // Add loan routes here    
    ...authRotes,
    ...boardRotes,
    ...mapRoutes,
    ...chatRoutes,
    ...buddizRoutes,
    ...guideRoutes
    ...buddizForm,
  ],
  
});

export default router;
