<script setup></script>

<template>
  <div class="container-fluid">
    <!-- 사이드바 왼쪽으로 이동시 줄이면 됨. -->
    <div class="row px-xl-3">
      <!-- 영역을 12개중 2개 분량사용 -->
      <div class="col-lg-2">
        <div calss="sticky-top mb-5" style="top: 120px">
          <!-- 사이드바 -->
          <div class="sidebar">
            <!-- mt-4 mb-4로 top,bottom 마진줌. -->
            <h1 class="sidebar-header mt-4 mb-4">마이 페이지</h1>
            <nav class="nav nav-pills flex-column">
              <!-- 아래쪽마진/활성화 -->
              <router-link class="nav-link mb-2" to="/mypage/mystatus" active-class="active">
                <!-- 활성화했을 때 붙이고 싶으면 mb-2빼 -->
                내 상태
              </router-link>
              <router-link class="nav-link mb-2" to="#"> 개인 정보 수정 </router-link>
              <router-link class="nav-link mb-2" to="#"> 위시리스트 </router-link>
              <router-link class="nav-link mb-2" to="#"> 신고목록 </router-link>
              <router-link class="nav-link mb-2" to="/"> 로그아웃 </router-link>
            </nav>
          </div>
        </div>
      </div>
      <!-- 오른쪽화면 프로필 정보 -->
      <!-- lg화면일때열10개차지 xl화면일때열8개차지 lg일때열3개차지 위마진 왼쪽마진  -->
      <div class="col-lg-10 col-xl-8 col-lg-3 mt-5 ms-5">
        <!-- 프로필정보창 -->
        <div class="profile-info mb-3">
          <h3 class="mb-3">프로필 정보</h3>
          <div class="profile-image d-flex" style="border: 1px; border-style: solid; border-color: #8f9bb3; border-radius: 3px">
            <img class="mx-4 my-4" src="@/assets/images/avatar-1.jpg" style="max-width: 10%; height: auto; border-radius: 50%" alt="Profile Picture" />
            <div class="profile-data mt-5">
              <h4>닉네임</h4>
              <p style="color: #8f9bb3">이메일</p>
            </div>
          </div>
        </div>
        <!-- 프로필정보창 여기까지 -->
        <!-- 내역 -->
        <div class="history mb-3">
          <h3 class="mb-3">내역</h3>
          <div class="d-flex" style="border: 1px; border-style: solid; border-color: #8f9bb3; border-radius: 3px 3px 0 0; background-color: #f3f9f7">
            <h5 class="flex-fill text-center my-3">찜한 매물</h5>
            <h5 class="flex-fill text-center my-3">찜한 버디즈</h5>
            <h5 class="flex-fill text-center my-3">신고한 매물</h5>
            <h5 class="flex-fill text-center my-3">신고한 버디즈</h5>
          </div>
          <div class="d-flex" style="border: 1px; border-style: solid; border-color: #8f9bb3; border-radius: 0 0 3px 3px; background-color: #f3f9f7; border-top: none">
            <h5 class="flex-fill text-center my-3">1</h5>
            <h5 class="flex-fill text-center my-3">5</h5>
            <h5 class="flex-fill text-center my-3">0</h5>
            <h5 class="flex-fill text-center my-3">1</h5>
          </div>
        </div>
        <!-- ---프로필정보창 여기까지--- -->
        <!-- 버디즈 미등록시-->
        <div class="profile-info mb-3">
          <h3 class="mb-3">버디즈 이력</h3>
          <div class="buddiz" style="border: 1px solid #eaecef; width: 30%; background-color: #eaecef">
            <h5 class="text-center my-2" style="color: #616b79">버디즈 등록하기</h5>
          </div>
        </div>
        <!-- 버디즈 미등록시 여기까지 -->
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
</style>
