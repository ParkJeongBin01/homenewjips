export default [
    {
      path: '/blame/agent',
      name: 'blame/agent',
      component: () => import('../pages/blame/BlameAgent.vue'),
    },    
    {
        path: '/blame/buddiz',
        name: 'blame/buddiz',
        component: () => import('../pages/blame/BlameBuddiz.vue'),
      },
  ];