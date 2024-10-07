<template>
  <div style="background-color: #F5F6F7;">
    <div class="buddiz-banner" style="margin-top: 10px; margin-bottom: 30px;">
      <h1>버디즈</h1>
      <p>나에게 꼭 맞는 버디를 찾아보세요!</p>
    </div>
  </div>

  <section class="content">
    <div class="container">
      <div class="row">
        <!-- 왼쪽 배너: 선택된 버디즈 기본 정보 -->
        <div class="col-lg-3 me-lg-auto">
          <div class="card border-0 shadow mb-6 mb-lg-0">
            <div class="card-header bg-gray-100 py-4 border-0 text-center">
              <a class="d-inline-block" href="#">
                <img :src="buddiz.imageUrl" alt="buddiz image" class="d-block avatar avatar-xxl p-2 mb-2" style="width: 100px; height: 100px;">
              </a>
              <h5>{{ buddiz.name }}</h5>
              <p class="text-muted text-sm mb-0">{{ buddiz.location }}</p>
            </div>
            <div class="card-body p-4">
              <div class="test">
                <div class="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2" style="width: 150px;">
                  <img :src="require('@/assets/icons/roundstar.png')" alt="star" style="width: 35px; height: 35px;">
                  <span style="margin-left: 10px; margin-top: 15px; display: inline; white-space: nowrap;">
                    {{ buddiz.rating }} ({{ buddiz.reviewsCount }})
                  </span>
                </div>
              </div>

              <div class="test" style="margin-top: 20px;">
                <div class="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2" style="width: 100px;">
                  <img :src="require('@/assets/icons/roundmoney.png')" alt="money" style="width: 35px; height: 35px;">
                  <span style="margin-left: 10px; margin-top: 15px;">
                    {{ buddiz.price }}₩
                  </span>
                </div>
              </div>
              <hr>
              <div class="card-text text-muted">
                {{ buddiz.character }}
              </div>
            </div>
          </div>
        </div>

        <!-- 오른쪽 배너: 상세 정보와 리뷰 목록 -->
        <div class="col-lg-9 ps-lg-5">
          <!-- 닉네임 및 기타 정보 -->
          <h1 class="hero-heading mb-0">{{ buddiz.nickname }}</h1>
          <div class="text-block">
            <p>
              <span style="margin-right: 7px;" class="badge badge-secondary-light">한국 자취 {{ buddiz.liveInKr }}년차</span>
              <span style="margin-right: 7px;" class="badge badge-secondary-light">활동 {{ buddiz.hiredTimes }}회</span>
              <span v-for="lan in buddiz.lans" :key="lan" class="badge badge-secondary-light" style="margin-right: 7px;">{{ lan }}</span>
            </p>
          </div>
          <div class="text-block">
            <p>{{ buddiz.selfInfo }}</p>
          </div>
          <br>

          <!-- 리뷰 목록 -->
          <h5 class="mb-4">후기</h5>
          <div v-for="review in reviews" :key="review.id" class="d-flex d-block d-sm-flex review">
            <div class="text-md-center flex-shrink-0 me-4 me-xl-5">
              <img :src="review.reviewerImage" alt="reviewer image" class="d-block avatar avatar-xxl p-2 mb-2" style="width: 100px; height: 100px;">
              <span class="text-uppercase text-muted text-sm">{{ review.createdAt }}</span>
            </div>
            <div>
              <h6 class="mt-2 mb-1">{{ review.nickname }}</h6>
              <div class="mb-2">
                <i v-for="star in review.rating" :key="star" class="fa fa-xs fa-star text-primary"></i>
                <i v-for="emptyStar in 5 - review.rating" :key="emptyStar" class="fa fa-xs fa-star text-gray-200"></i>
              </div>
              <p class="text-muted text-sm">{{ review.reviewContent }}</p>
            </div>
          </div>

          <!-- 리뷰 입력란 -->
          <div class="py-5">
            <button class="btn btn-outline-primary" type="button" @click="toggleReview">리뷰 남기기</button>
            <div v-show="isReviewVisible" class="mt-4">
              <h5 class="mb-4">리뷰 작성</h5>
              <form @submit.prevent="submitReview" class="form" id="contact-form">
                <div class="mb-4">
                  <label class="form-label" for="rating">평점 *</label>
                  <select class="form-select focus-shadow-0" v-model="rating" id="rating" required>
                    <option value="5">★★★★★ (5/5)</option>
                    <option value="4">★★★★☆ (4/5)</option>
                    <option value="3">★★★☆☆ (3/5)</option>
                    <option value="2">★★☆☆☆ (2/5)</option>
                    <option value="1">★☆☆☆☆ (1/5)</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="review">리뷰 내용 *</label>
                  <textarea class="form-control" v-model="reviewContent" rows="4" id="review" placeholder="리뷰를 입력하세요" required></textarea>
                </div>
                <button class="btn btn-primary" type="submit">리뷰 등록</button>
              </form>
            </div>
          </div>
        </div>
        <!-- 오른쪽 배너 끝 -->
      </div>
    </div>
  </section>
</template>

<script>
import buddizApi from '@/api/buddizApi';

export default {
  props: ['id'],
  data() {
    return {
      buddiz: {}, // 선택한 버디즈 정보
      reviews: [], // 버디즈에 대한 리뷰 목록
      // 리뷰 작성 폼 데이터 추가
      rating: 5,
      reviewContent: '',
      isReviewVisible: false, // 리뷰 입력란 표시 여부
    };
  },
  async created() {
    const buddizId = this.$route.params.id; // 라우트에서 버디즈 ID 받기
    try {
      // 버디즈 정보 가져오기
      const buddizData = await buddizApi.getBuddizDetail(buddizId);
      this.buddiz = buddizData;

      // 해당 버디즈 리뷰 목록 가져오기
      const reviewsData = await buddizApi.getBuddizReviews(buddizId);
      this.reviews = reviewsData;
    } catch (error) {
      console.error('버디즈 정보를 불러오는 중 오류가 발생했습니다:', error);
    }
  },
  methods: {
    // 리뷰 작성 메서드
    submitReview() {
      const reviewData = {
        rating: this.rating,
        content: this.reviewContent,
      };
      // buddizApi의 createReview 호출
      buddizApi.createReview(reviewData)
        .then(() => {
          alert('리뷰가 성공적으로 등록되었습니다.');
          this.resetForm(); // 리뷰 폼 초기화
        })
        .catch(error => {
          console.error('리뷰 등록에 실패했습니다:', error);
        });
    },
    // 리뷰 입력란 표시 토글 메서드
    toggleReview() {
      this.isReviewVisible = !this.isReviewVisible;
    },
    // 리뷰 폼 초기화 메서드
    resetForm() {
      this.rating = 5;
      this.reviewContent = '';
    }
  },
};
</script>




<style scoped>
.buddiz-banner {
  max-width: 1300px;
  margin: 0 auto;
}

.box {
  display: flex;
  /* 한 줄에 배치 */
  gap: 10px;
  /* 상자 간 간격 */
  justify-content: flex-start;
  /* 좌측 정렬 */
  align-items: center;
  /* 세로 가운데 정렬 */
  flex-wrap: wrap;
  /* 필요할 경우 줄바꿈 허용 */
}

.rounded-box {

  /* align-items: center; 수직 가운데 정렬 */
  /* justify-content: center; 수평 가운데 정렬 */
  /* white-space: nowrap; 텍스트 줄바꿈 방지 */
  /* font-size: 1em; 텍스트 크기 */
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  padding: 5px 5px 0px 10px;
  display: flex;
  flex-direction: column;
}

.badge {
  --bs-badge-padding-x: 0.7em;
  --bs-badge-padding-y: 0.5em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: 0.4rem;
  display: inline-block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
}

.badge-secondary-light {
  color: #e83e8c;
  background-color: #fce2ee;
}

.badge2 {
  --bs-badge-padding-x: 0.7em;
  --bs-badge-padding-y: 0.5em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: 0.4rem;
  display: block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
  margin-bottom: 10px;
}

.badge-secondary-light2 {
  color: #616B79;
  background-color: #F5F6F7;
}
</style>