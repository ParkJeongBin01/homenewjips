import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-awesome-paginate/dist/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueAwesomePaginate from 'vue-awesome-paginate';
import { createNaverMap } from 'vue3-naver-maps';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// 네이버지도 연동
app.use(createNaverMap, {
  clientId: 'rh50w4ol02',
  category: 'ncp',
  subModules: [],
});

app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);

app.mount('#app');
