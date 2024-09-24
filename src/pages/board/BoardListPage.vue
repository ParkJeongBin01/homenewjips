<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const page = ref({
  boardList: [
    { id: 1, title: '공지 1', content: '첫 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 2, title: '공지 2', content: '두 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 3, title: '공지 3', content: '세 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 4, title: '공지 4', content: '네 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 5, title: '공지 5', content: '다섯 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 6, title: '공지 6', content: '여섯 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 7, title: '공지 7', content: '일곱 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 8, title: '공지 8', content: '여덟 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 9, title: '공지 9', content: '아홉 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 10, title: '공지 10', content: '열 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 11, title: '공지 11', content: '열한 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 12, title: '공지 12', content: '열두 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 13, title: '공지 13', content: '열세 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 14, title: '공지 14', content: '열네 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 15, title: '공지 15', content: '열다섯 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 16, title: '공지 16', content: '열여섯 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 17, title: '공지 17', content: '열일곱 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
    { id: 18, title: '공지 18', content: '열여덟 번째 공지사항입니다.', imageUrl: 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg' },
  ],
  totalCount: 18,
});

const articles = computed(() => page.value.boardList);

const pageRequest = reactive({
  page: parseInt(route.query.page) || 1,
  amount: 6,
  searchType: '',
  searchValue: '',
  types: [],
});

// 페이지네이션 페이지 변경
const handlePageChange = async (pageNum) => {
  router.push({
    query: {
      page: pageNum,
      amount: pageRequest.amount,
      searchType: pageRequest.searchType,
      searchValue: pageRequest.searchValue,
      types: pageRequest.types,
    },
  });
};
</script>

<template>
  <div>
    <h1 class="mb-3">공지 사항</h1>

    <div class="mt-4">
      <div class="form-label">새로운 소식과 공지를 확인하세요!</div>
      <!-- 공지 사항을 article로 구성 -->
      <div class="row row-cols-md-2 row-cols-1 gy-md-5 gy-4 mb-lg-5 mb-4">
        <article class="col pb-2 pb-md-1" v-for="item in articles" :key="item.id">
          <a class="d-block position-relative mb-3" :href="`/board/${item.id}`">
            <img class="d-block rounded-3" :src="item.imageUrl || 'https://image.ajunews.com/content/image/2022/04/04/20220404181310254680.jpg'" alt="공지 이미지" />
          </a>
          <a class="fs-sm text-uppercase text-decoration-none" href="#">{{ item.title }}</a>
          <h3 class="h5 mb-2 pt-1">
            <a class="nav-link" :href="`/board/${item.id}`">{{ item.title }}</a>
          </h3>
          <p class="mb-3">{{ item.content }}</p>
          <a class="d-flex align-items-center text-decoration-none" :href="`/board/${item.id}`">
            <!--            <button class="btn btn-primary">자세히 보기</button>-->
          </a>
        </article>
      </div>
    </div>

    <!-- 페이지네이션 -->
    <div class="my-5 d-flex justify-content-center">
      <vue-awesome-paginate
        :total-items="page.totalCount"
        :items-per-page="pageRequest.amount"
        :max-pages-shown="5"
        :show-ending-buttons="true"
        v-model="pageRequest.page"
        @click="handlePageChange"
      >
        <template #first-page-button><i class="fa-solid fa-backward-fast"></i></template>
        <template #prev-button><i class="fa-solid fa-caret-left"></i></template>
        <template #next-button><i class="fa-solid fa-caret-right"></i></template>
        <template #last-page-button><i class="fa-solid fa-forward-fast"></i></template>
      </vue-awesome-paginate>
    </div>
  </div>
</template>
