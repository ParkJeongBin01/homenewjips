export default [
  {
    // path: '/estate/:id',
    path: '/estate',
    name: 'estate',
    component: () => import('../pages/estate/EstateDetailPage.vue'),
    props: true,
  },
];
