<script setup>
import { computed, reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

//////////////////////////////////////////////////////////
const member = reactive({
  id: '',
  password: '',
});

const error = ref('');

const disableSubmit = computed(() => !(member.id && member.password));

const login = async () => {
  console.log(member);
  try {
    await auth.login(member);
    if (router.query.next) {
      router.push({ name: route.query.next });
    } else {
      // 일반
      router.push('/');
    }
  } catch (e) {
    // 로그인 에러
    console.log('에러=======', e);
    error.value = e.response.data;
  }
};
//////////////////////////////////////////////////////////
</script>

<template>
  <!-- 배경색 -->
  <body class="bg-light">
    <main class="page-wrapper">
      <div class="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
        <div class="card card-body" style="max-width: 940px">
          <a class="position-absolute top-1 end-0 nav-link fs-sm py-1 px-2 me-3" href="#" onclick="window.history.go(-1); return false;">
            <i class="fi-arrow-long-left fs-base me-2"></i>Go back</a>
              <div class="row mx-0 align-item-center">
                <div class="col-md-6 border-end-md p-2 p-sm-1">
                  <div>
                    <h3>안녕하세요!</h3>
                    <h3>다시 만나서 반가워요 :)</h3>
                  </div>
                  <img src="@/assets/images/Loginimg.png" style="height: 100%; max-height: 60%;"> </img>
                    <div class="mt-4 mt-sm-5">
                    계정이 없으신가요??
                    <a href="#">회원가입</a>
                    </div>
                </div>

<!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ오른쪽 화면ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->

        <div class="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
          <a class="btn btn-outline-info w-100 mb-3" href="#">
            <i class="fi-google fs-lg me-1">
              ::before
            </i>
              Sign in with Google
          </a>
          <div class="d-flex align-items-center py-3 mb-3">
            <hr class="w-100">
            <div class="px-3">or</div>
            <hr class="w-100">
          </div>
            <form class="needs-validation" novalidate>
                <div class="mb-4">
                  <label class="form-label mb-2" for="signin-email">Email address</label>
                  <input class="form-control" type="email" id="signin-email" placeholder="Enter your email" required>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <label class="form-label mb-0" for="signin-password">Password</label>
                    <a class="fs-ms" href="#">Forgot Password?</a>
                  </div>
                  <div class="password-toggle">
                    <input class="form-control" type="password" id="signin-password" placeholder="Enter Password" required>
                    <label class="password-toggle-btn" aria-label="Show/hide password">
                      <input class="password-toggle-check" type="checkbox">
                      <span class="password-toggle-indicator">
                        ::before
                      </span>
                    </label>
                  </div>  
                </div>
                  <button class="btn btn-primary btn-lg w-100" type="submit">Sign in</button>
            </form>
        </div>
            </div>
        </div>
      </div>
    </main>
  </body>

  <!-- <div class="mt-5 mx-auto" style="width: 500px">
    <h1 class="my-5">
      <i class="fa-solid fa-right-to-bracket"></i>
      로그인
    </h1>

    <form @submit.prevent="login">
      <div class="mb-3 mt-3">
        <label for="id" class="form-label">
          <i class="fa-solid fa-user"></i>
          사용자 ID:
        </label>
        <input type="text" class="form-control" placeholder="사용자 ID" v-model="member.id" required />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">
          <i class="fa-solid fa-lock"></i>
          비밀번호:
        </label>
        <input type="password" class="form-control" placeholder="비밀번호" v-model="member.password" required />
      </div>

      <div v-if="error" class="text-danger">{{ error }}</div>

      <button type="submit" class="btn btn-primary mt-4" :disabled="disableSubmit">
        <i class="fa-solid fa-right-to-bracket"></i>
        로그인
      </button>
    </form>
  </div> -->
</template>
