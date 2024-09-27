<script setup>
import SideBar from '@/components/layouts/SideBar.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row px-xl-3">
      <!-- 사이드바 -->
      <div class="col-lg-2">
        <SideBar />
      </div>
      <!-- 오른쪽화면 프로필 정보 -->
      <!-- lg화면일때열10개차지 xl화면일때열8개차지 lg일때열3개차지 위마진 왼쪽마진  -->
      <div class="col-lg-10 col-xl-8 col-lg-3 mt-5 ms-5">
        <!-- 프로필정보창 -->
        <div class="profile-info mb-4">
          <h4 class="mb-3">프로필 정보</h4>
          <div class="profile-content d-flex" style="border: 2px; border-style: solid; border-color: #eaecef; border-radius: 10px">
            <img class="mx-4 my-4" src="@/assets/images/avatar-1.jpg" style="max-width: 10%; height: auto; border-radius: 50%" alt="Profile Picture" />
            <div class="profile-data mt-5">
              <h4>닉네임</h4>
              <p style="color: #8f9bb3">이메일</p>
            </div>
            <div class="edit-btn d-flex" style="margin-left: auto; max-width: 100%; margin-right: 4%">
              <button class="btn mt-5" style="border: 1px solid #ff8f17; max-height: 27%; background-color: #ff8f17; color: white">수정</button>
            </div>
          </div>
        </div>
        <!-- 프로필정보창 여기까지 -->
        <!-- 내역 -->
        <div class="history mb-4">
          <h4 class="mb-3">내역</h4>
          <div class="d-flex" style="border: 2px; border-style: solid; border-color: #eaecef; border-radius: 10px 10px 0 0; justify-content: center">
            <h5 class="flex-fill text-center my-3" style="width: 25%">찜한 매물</h5>
            <h5 class="flex-fill text-center my-3" style="width: 25%">찜한 버디즈</h5>
            <h5 class="flex-fill text-center my-3" style="width: 25%">신고한 매물</h5>
            <h5 class="flex-fill text-center my-3" style="width: 25%">신고한 버디즈</h5>
          </div>
          <div class="d-flex" style="border: 2px; border-style: solid; border-color: #eaecef; border-radius: 0 0 10px 10px; border-top: none; justify-content: center">
            <h5 class="flex-fill text-center my-3" style="width: 25%">1</h5>
            <h5 class="flex-fill text-center my-3" style="width: 25%">5</h5>
            <h5 class="flex-fill text-center my-3" style="width: 25%">0</h5>
            <h5 class="flex-fill text-center my-3" style="width: 25%">1</h5>
          </div>
        </div>
        <!-- ---프로필정보창 여기까지--- -->
        <!-- 버디즈 미등록시-->
        <div class="profile-info mt-5 mb-5 d-flex" style="justify-content: flex-end">
          <!-- <h4 class="mb-3">버디즈 이력</h4> -->
          <button
            class="btn-buddiz"
            style="border: 1px solid #eaecef; border-radius: 10px; width: 20%; background-color: #eaecef"
            onmouseover="this.style.backgroundColor='#ff8f17'; this.style.color='white';"
            onmouseout="this.style.backgroundColor='#eaecef'; this.style.color='#616b79';"
          >
            <h5 class="text-center my-2">버디즈 등록하기</h5>
          </button>
        </div>
        <!-- 버디즈 미등록시 여기까지 -->
        <!-- 버디즈 등록시 -->
        <!-- <div class="budiiz mb-5">
          <h4 class="mb-3">버디즈 이력</h4>
          <div class="budiiz-btn d-flex justify-content-start">
            <button style="border: 1px solid #eaecef; border-radius: 10px; width: 30%; background-color: #eaecef; background-color: #1e4475">
              <h5 class="text-center my-2" style="color: white">게시글 보러가기</h5>
            </button>
            <button style="border: 1px solid #eaecef; border-radius: 10px; width: 30%; background-color: #eaecef; margin-left: 1rem">
              <h5 class="text-center my-2" style="color: #616b79">수정하기</h5>
            </button>
          </div>
        </div> -->
        <!-- 버디즈 등록시 여기까지 -->
      </div>
    </div>
  </div>
</template>
<style>
.nav-pills .nav-link.active {
  background-color: #ff8f17;
  color: white;
}
.nav-link {
  text-decoration: none; /* 밑줄 제거 */
  color: black;
}

.nav-link:hover {
  text-decoration: none; /* 밑줄 제거 */
  color: #ff8f17;
}

.nav-link.active:hover {
  color: red;
}
.sidebar {
  margin-bottom: 20px;
  margin-right: 10px; /* 사이드바와 콘텐츠 사이 간격 */
  width: 180px; /* 사이드바 너비 고정 */
}
</style>
