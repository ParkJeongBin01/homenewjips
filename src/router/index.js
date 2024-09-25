import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/pages/HomePage.vue';
import authRoutes from '/src/router/auth.js';
import boardRoutes from '/src/router/board.js';
import mapRoutes from '/src/router/map.js';
import chatRoutes from '/src/router/chat.js';
import buddizRoutes from '/src/router/buddiz.js';
import loanRoutes from '/src/router/loan.js'; // Import loan routes
import guideRoutes from '/src/router/guide.js'; // Import guide routes
import buddizForm from '/src/router/buddizForm.js'; // Import buddizForm routes

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
    ...guideRoutes, // Add guide routes here
    ...buddizForm, // Add buddizForm routes here
  ],
});

export default router;
