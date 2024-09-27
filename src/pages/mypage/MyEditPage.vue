<script setup>
import { ref } from 'vue';
// import avatar from '../assets/images/myeongsu.jpg';

// const avatar = new URL('@/assets/images/myeongsu.jpg', import.meta.url).href;
// const avatar = require('@/assets/images/myeongsu.jpg');
// const avatarUrl = ref(avatar);

const avatar = new URL('@/assets/images/myeongsu.jpg', import.meta.url).href;
console.log('Avatar URL:', avatar); // URL 확인

const avatarUrl = ref(avatar);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarUrl.value = e.target.result; // 미리보기 이미지 업데이트
      console.log('file loaded', e.target.result); //결과 확인
    };
    reader.readAsDataURL(file);
  } else {
    console.log('No file selected'); // 파일 선택 여부 확인
  }
};
</script>

<template>
  <div class="container-fluid">
    <!-- 사이드바 왼쪽으로 이동시 줄이면 됨. -->
    <div class="row px-xl-3">
      <!-- 영역을 12개중 2개 분량사용 -->
      <div class="col-lg-2">
        <div class="sticky-top mb-5" style="top: 120px">
          <!-- 사이드바 -->
          <div class="sidebar">
            <!-- mt-4 mb-4로 top,bottom 마진줌. -->
            <h2 class="sidebar-header mt-4 mb-4">마이 페이지</h2>
            <nav class="nav nav-pills flex-column">
              <!-- 아래쪽마진/활성화 -->
              <router-link class="nav-link mb-2" to="/mypage/mystatus"> 내 상태 </router-link>
              <router-link class="nav-link mb-2" to="/mypage/myedit" active-class="active">
                <!-- 활성화했을 때 배경색 붙이고 싶으면 mb-2빼 -->
                개인 정보 수정
              </router-link>
              <router-link class="nav-link mb-2" to="#"> 위시리스트 </router-link>
              <router-link class="nav-link mb-2" to="#"> 신고목록 </router-link>
              <router-link class="nav-link mb-2" to="/"> 로그아웃 </router-link>
            </nav>
          </div>
        </div>
      </div>
      <!-- 오른쪽화면 -->
      <div class="col-lg-10 col-xl-8 col-lg-3 mt-5 ms-5">
        <!-- 개인정보시작 -->
        <div class="card border mb-5">
          <div class="card-header border-bottom">
            <h4 class="card-header-title">개인정보</h4>
          </div>
          <div class="card-body">
            <form class="row g-3">
              <div class="col-12">
                <label class="form-label ms-1" style="color: #bababa">
                  프로필 사진을 업로드하세요.
                  <span class="text-danger">*</span>
                </label>
                <div class="d-flex align-items-start mb-3">
                  <label class="mt-3 ms-5" for="uploadfile" title="Replace this pic" style="cursor: pointer; display: flex; align-items: center; justify-content: center">
                    <!-- Avatar place holder -->
                    <div>
                      <img class="avatar-img" :src="avatarUrl" style="width: 100px; height: 100px; object-fit: contain; border-radius: 50%" />
                    </div>
                  </label>
                  <!-- 업로드 버튼 -->
                  <!-- <label class="btn btn-sm mb-0 ms-0 mt-3" for="uploadfile" style="border: 1px solid; margin-left: -100px; cursor: pointer">수정</label> -->
                  <input type="file" id="uploadfile" style="display: none" accept="image/*" @change="onFileChange" />
                </div>
              </div>
              <!-- 닉네임 -->
              <div class="col-md-6">
                <!-- label과 input의 간격 조정(mb-2) -->
                <label class="nicname mb-2">
                  닉네임
                  <span class="text-danger">*</span> </label
                ><br />
                <input class="text-nicname w-100" value="" type="text" placeholder="닉네임을 입력하세요." style="border: 2px solid #eaecef; border-radius: 3px; padding: 2%" />
              </div>
              <!-- 이메일 -->
              <div class="col-md-6">
                <!-- label과 input의 간격 조정(mb-2) -->
                <label class="Email mb-2">
                  이메일
                  <span class="text-danger">*</span> </label
                ><br />
                <input class="text-email w-100" value="" type="email" placeholder="이메일 주소를 입력하세요." style="border: 2px solid #eaecef; border-radius: 3px; padding: 2%" />
              </div>
              <!-- 이름 -->
              <div class="col-md-6">
                <!-- label과 input의 간격 조정(mb-2) -->
                <label class="name mb-2">
                  이름
                  <span class="text-danger">*</span> </label
                ><br />
                <input class="text-name w-100" value="" type="text" placeholder="이름을 입력하세요." style="border: 2px solid #eaecef; border-radius: 3px; padding: 2%" />
              </div>
              <!-- 성별 -->
              <div class="col-md-6">
                <!-- label과 input의 간격 조정(mb-2) -->
                <label class="gender mb-3">
                  성별
                  <span class="text-danger">*</span> </label
                ><br />
                <div class="d-flex gap-4">
                  <div class="check-gender radio-bg-light">
                    <input class="check-manbox" type="radio" name="gender" id="man" checked />
                    <label class="check-manlabel" for="man">남자</label>
                  </div>
                  <div class="check-gender radio-bg-light">
                    <input class="check-womanbox" type="radio" name="gender" id="woman" />
                    <label class="check-womanlabel" for="woman">여자</label>
                  </div>
                </div>
              </div>
              <!-- 상태 메시지 -->
              <!-- <div class="col-12">
                <label class="message mb-2">상태 메시지</label><br />
                <textarea
                  class="text-message w-100"
                  rows="5"
                  spellcheck="false"
                  placeholder="메시지를 입력하세요."
                  style="border: 2px solid #eaecef; border-radius: 3px"
                ></textarea>
              </div> -->
              <!-- 수정하기 버튼 -->
              <div class="col-12 text-end">
                <button class="btn mb-1 me-3" style="border: 1px solid #ff8f17; max-height: 100%; background-color: #ff8f17; color: white">수정</button>
              </div>
              <!-- 끝 -->
            </form>
          </div>
          <!-- card-body End -->
        </div>
        <!-- card-border End -->
        <!-- 비밀번호 변경 -->
        <div class="card border mb-5">
          <div class="card-header card-bottom">
            <h4 class="card-header-title">비밀번호 변경</h4>
          </div>
          <form class="card-body">
            <div class="mb-3">
              <label class="form-label">비밀번호</label>
              <input class="form-control" type="password" placeholder="비밀번호를 입력하세요." />
            </div>
            <div class="mb-3">
              <label class="form-label">새로운 비밀번호</label>
              <input class="form-control" type="password" placeholder="새로운 비밀번호를 입력하세요." />
            </div>
            <div class="mb-3">
              <label class="form-label">비밀번호 확인</label>
              <input class="form-control" type="password" placeholder="새로운 비밀번호 확인" />
            </div>
            <div class="col-12 text-end">
              <button class="btn mb-1 me-3" style="border: 1px solid #ff8f17; max-height: 100%; background-color: #ff8f17; color: white">수정</button>
            </div>
          </form>
          <!-- card-body End -->
        </div>
        <!-- caed-border End -->
      </div>
      <!-- 오른쪽 화면 끝 -->
    </div>
  </div>
</template>
<style>
.nav-pills .nav-link.active {
  background-color: #ff8f17;
  color: white;
}
.nav-link:hover {
  text-decoration: none; /* 밑줄 제거 */
  color: #ff8f17;
}
.nav-link {
  text-decoration: none; /* 밑줄 제거 */
  color: black;
}
.sidebar {
  margin-bottom: 20px;
  margin-right: 10px; /* 사이드바와 콘텐츠 사이 간격 */
  width: 180px; /* 사이드바 너비 고정 */
}
</style>
