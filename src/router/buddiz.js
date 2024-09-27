export default [
    {
      path: '/buddiz',
      name: 'buddizSearch',
      component: () => import('../pages/buddiz/buddizSearchPage.vue'),
    },
    {
      path: '/buddiz/userDetail',
      name: 'buddizDetail',
      component:()=>import('../pages/buddiz/buddizDetailPage.vue')
    }
  ];
  