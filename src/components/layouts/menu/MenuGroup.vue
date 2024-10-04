<script setup>
import MenuItem from './MenuItem.vue';
import { useI18n } from 'vue-i18n'; // i18n 사용
import { computed, ref } from 'vue';
import router from '@/router';
// 이미지 가져오기
const messageIcon = new URL('@/assets/icons/message.png', import.meta.url).href;
console.log('Avatar URL:', messageIcon); // URL 확인
const messageOnIcon = new URL('@/assets/icons/messageon.png', import.meta.url).href;
console.log('Avatar URL:', messageOnIcon); // URL 확인

const messageIconUrl = ref(messageIcon);
const messageOnIconUrl = ref(messageOnIcon);

// import messageIcon from '@/assets/icons/message.png';
// import messageOnIcon from '@/assets/icons/messageon.png';

const props = defineProps({
  menus: { type: Array, required: true },
});
// i18n 훅 사용
const { t, locale } = useI18n(); // locale도 가져옵니다.
const changing = (lan) => {
  locale.value = lan; // 언어 변경 로직
  console.log(`Language changed to: ${lan}`); // 콘솔에 언어 변경 확인
  // 언어 변경 로직
};

const displayLanguage = computed(() => {
  return locale.value === 'ko' ? '한국어' : 'vietnamese';
});

// 채팅 활성화 여부를 나타내는 ref
const isChatActive = ref(false); // 필요에 따라 true로 설정
</script>

<template>
  <ul class="navbar-nav">
    <template v-for="(menu, index) in menus" :key="menu.title">
      <!-- 채팅 메뉴는 아이콘만 표시 -->
      <li v-if="index === 3" class="nav-item">
        <router-link to="/chat">
          <img class="mt-2" :src="isChatActive ? messageOnIconUrl : messageIconUrl" />
        </router-link>
      </li>
      <MenuItem v-if="menu.title != '채팅'" :menu="menu" />

      <!-- '공지사항' 후에 드롭다운 추가 -->
      <li v-if="index === 2" class="nav-item dropdown">
        <button class="btn dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown">
          {{ displayLanguage }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li @click="changing('ko')">
            <a class="dropdown-item" href="#">한국어</a>
          </li>
          <li @click="changing('vn')">
            <a class="dropdown-item" href="#">vietnamese</a>
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>
