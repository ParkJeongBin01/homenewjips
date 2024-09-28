<template>
    <div class="ai-card">
        <router-link to="/ai">
          <img src="@/assets/images/chatbot.png">
        </router-link>
    </div>
</template>

<style scoped>
.ai-card {
    position: fixed;        /* 스크롤해도 위치 고정 */
    bottom: 4vh;           /* 화면 하단에서 20px 위에 위치 */
    right: 4vh;      
    z-index: 1000;     
    background-color: #6841EA;
    padding: 15px;
    border-radius: 50%;     /* 둥근 모서리로 만들기 */
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.4); /* 그림자 효과 */
  }
  .ai-card img {
    width: 50px;            /* 이미지 크기 조정 */
    height: 50px;
    object-fit: inherit;
  }
</style>

<script>
import { reactive, computed } from 'vue';


</script>