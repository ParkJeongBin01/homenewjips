export default [
  {
    path: '/mypage/mystatus',
    name: 'mystatus',
    component: () => import('../pages/mypage/MyStatusPage.vue'),
  },
  {
    path: '/mypage/myedit',
    name: 'myedit',
    component: () => import('../pages/mypage/MyEditPage.vue'),
  },
];
