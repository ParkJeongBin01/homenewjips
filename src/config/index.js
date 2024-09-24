export default {
  menus: [
    {
      title: '지도',
      url: '/board/list',
    },
    {
      title: '버디즈',
      url: '/travel/list',
    },
    {
      title: '환율',
      url: '/gallery/list',
    },
    {
      title: '공지사항',
      url: 'notice/list',
    },
  ],

  accoutMenus: {
    login: {
      url: '/auth/login',
      title: 'Login',
    },

    join: {
      url: '/auth/join',
      title: '마이페이지',
      icon: 'fa-solid fa-user-plus',
    },
  },
};
