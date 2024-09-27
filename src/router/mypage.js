export default [
  {
    path: '/mypage/mystatus',
    name: 'mystatus',
    component: () => import('../pages/mypage/MyStatusPage.vue'),
  },
  {

    path: '/mypage/blame',
    name: 'myblame',
    component: () => import('../pages/mypage/MyBlamePage.vue')
  }
];
