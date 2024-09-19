export default [
  {
    path: '/map',
    name: 'map',
    component: () => import('../pages/map/MainMapPage.vue'),
  },
  //   {
  //     path: '/map/pin/:id',
  //     name: 'pinDetail',
  //     component: () => import('../pages/map/PinDetailPage.vue'),
  //     props: true,
  //   },
];
