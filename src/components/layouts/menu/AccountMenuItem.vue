<script setup>
const props = defineProps({ id: String, nickname: String });

const avatar = `/api/member/${props.id}/avatar`;
</script>

<template>
  <li class="nav-item">
    <router-link class="nav-link" to="/mypage/mystatus">
      {{ nickname }}
      <img :src="avatar" class="avatar avatar-sm" />
    </router-link>
  </li>
</template>
<style></style>
<!-- 로그인 된 상태 -->
