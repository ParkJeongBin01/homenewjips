<script setup>
import { reactive, computed } from 'vue';
import MenuGroup from './menu/MenuGroup.vue';
import AccountMenuGroup from './menu/AccountMenuGroup.vue';
import config from '@/config';

let state = reactive({ isNavShow: false });

let navClass = computed(() => (state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'));

const toggleNavShow = () => (state.isNavShow = !state.isNavShow);
</script>

<template>
  <nav class="navbar navbar-expand-sm ">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/newjips.png" alt="Brand Logo" style="height: 100%; max-height: 50px;"></img>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" @click="toggleNavShow">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="navClass" style="display: flex; flex-grow: unset;" >
        <div style="flex-direction: row; display: flex;">
        <MenuGroup :menus="config.menus" />
        <AccountMenuGroup />
      </div>
      </div>
    </div>
  </nav>
</template>
<style>
</style>
