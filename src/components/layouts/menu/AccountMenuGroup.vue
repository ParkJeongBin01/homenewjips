<script setup>
import MenuItem from './MenuItem.vue';
import AccountMenuItem from './AccountMenuItem.vue';
import config from '@/config';
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';

const { login, join } = config.accoutMenus;
const auth = useAuthStore();

const islogin = computed(() => auth.isLogin);
const nickname = computed(() => auth.nickname);
</script>

<template>
  <ul class="navbar-nav ms-auto">
    <template v-if="islogin">
      <!-- 로그인 성공 -->
      <AccountMenuItem :nickname="nickname" />
    </template>
    <template v-else>
      <MenuItem :menu="login" />
    </template>
  </ul>
</template>
