<script setup>
import { ref } from 'vue';
import LoanCard from '@/components/LoanCard.vue';

const loans = [
{
    id: 1,
    name: 'KB WELCOME PLUS',
    subtitle: '임차보증금 80% 이내, 최대 2억까지',
    maxAmount: '최고 1.5%',
    rate: '연 3.5 ~ 5.5%',
    duration: '3개월에서 2년',
    repayment: '일시 상환, 원리금 균등 상환 또는 혼합 상환 방식 가능', 
    interest: '변동 금리, 연 3.74% 이내',
    usageInfo: '모든 조건을 충족해야 하며, 조건에 따라 우대 금리가 적용될 수 있습니다.',
    link: 'https://obank.kbstar.com',
  },
  {
    id: 2,
    name: 'KB 전세실심 대출보증',
    subtitle: '전세보증금 90%까지',
    maxAmount: '최고 1.5%',
    rate: '연 3.5 ~ 5.5%',
    duration: '3개월에서 2년',
    repayment: '일시 상환, 원리금 균등 상환 방식 가능',
    interest: '변동 금리, 연 3.5% 이내',
    usageInfo: '모든 조건을 충족해야 하며, 조건에 따라 이용 가능',
    link: 'https://obank.kbstar.com',
  },
  {
    id: 3,
    name: 'KB 외국인 전용 주택 전세자금 대출',
    subtitle: '외국인을 위한 전세자금 대출',
    maxAmount: '최고 1.5%',
    rate: '연 3.5 ~ 5.5%',
    duration: '3개월에서 2년',
    repayment: '일시 상환, 원리금 균등 상환 방식 가능',
    interest: '연 3.5%',
    usageInfo: '조건에 따라 이용 가능',
    link: 'https://obank.kbstar.com',
  }];

  const goToLoanDetail = (loan) => {
    // url 요청 보내는 방식으로 변경
    // Fix Loan url type
  };
</script>

<template>
  <div class="container-fluid px-0">
    <!-- 메인 검색탭 -->
    <section class="container-fluid my-4 px-xxl-4 mb-5">
      <div class="jarallax card align-items-center justify-content-center border-0 p-md-5 p-4 overflow-hidden mt-n3" 
          style="min-height: 55vh; ">
          <span class="img-overlay opacity-50"></span>
          <img class="img-overlay" src="@/assets/images/main_img.jpg">
        <div class="content-overlay" style="max-width: 856px;">
          <h2 class="display-5 mb-5 pb-md-3 text-white text-center">버디즈와 함께 안전한 집을 찾아보세요 !</h2>
          <form class="form-group d-block">
            <div class="row g-0">
              <div class="col-md-10 d-sm-flex align-items-center">
                <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                  <button class="btn searchbar btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton1">
                    <img class="me-2" src="@/assets/icons/home.svg">
                    <span class="dropdown-toggle-label" style="font-weight: 500;">월세</span>
                  </button>
                  <input type="hidden">
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">월세</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">전세</span></a></li>
                  </ul>
                </div>
                <hr class="d-sm-none my-2">
                <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                  <button class="btn searchbar btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                    <img class="me-2" src="@/assets/icons/marker-pin.svg">
                    <span class="dropdown-toggle-label" style="font-weight: 500;">지역</span></button>
                  <input type="hidden">
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">어린이대공원역</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">건대입구역</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">강남</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">홍대</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">성수</span></a></li>
                  </ul>
                </div>
                <hr class="d-sm-none my-2">
                <div class="dropdown w-sm-50" data-bs-toggle="select">
                  <button class="btn searchbar btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                    <img class="me-2" src="@/assets/icons/rows.svg">
                    <span class="dropdown-toggle-label" style="font-weight: 500;">방구조</span></button>
                  <input type="hidden">
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">원룸</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">투룸</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">쓰리룸 이상</span></a></li>
                    <li><a class="dropdown-item" href="#"><span class="dropdown-item-label">오피스텔</span></a></li>
                  </ul>
                </div>
              </div>
              <hr class="d-md-none mt-2">
              <div class="col-md-2 d-sm-flex align-items-center pt-3 pt-md-0">
                <button class="btn btn-lg btn-icon px-3 w-100" type="button" style="background-color: #FF8F17; color: white;">검색</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- 전세 대출 추천 -->
    <div class="ms-5 me-5 mb-5">
      <h3 class="head-title">전세 대출 추천</h3>
      <div class="d-flex mb-4">
        <span class="subtitle ">외국인을 위한 전세 대출을 추천합니다.</span>
        <span class="position-absolute end-0 me-5"><link href="" class="btn-more"></link>더보기</span>
      </div>

      <div class="loan-grid pb-3">
        <LoanCard
          v-for="(loan, index) in loans"
          :key="index"
          :loan="loan"
          @click="goToLoanDetail(loan)" />
      </div>
    </div>

    <!-- 핫플 지역 -->
    <div class="ms-5 me-5 mb-5">
      <h3 class="head-title">핫플 지역</h3>
      <div class="d-flex mb-4">
        <span class="subtitle ">한국의 최근 인기 지역을 추천합니다.</span>
      </div>

      <div class="hotPlace-grid pb-3">
        <!-- 홍대 -->
        <div class="col">
          <a class="card shadow-sm border-0" href="">
            <div class="card-img-top card-img-hover" style="height: 27vh;">
              <img src="https://i.pinimg.com/564x/66/a2/ab/66a2ab3dc8ed82cd11376c277c74d47c.jpg" alt="">
            </div>
            <div class="card-body text-center">
              <h3 class="mb-0 fs-base text-nav">홍대</h3>
            </div>
          </a>
        </div>

        <!-- 성수 -->
        <div class="col">
          <a class="card shadow-sm border-0" href="">
            <div class="card-img-top card-img-hover" style="height: 27vh;">
              <img src="https://mediahub.seoul.go.kr/uploads/mediahub/2023/07/wHQEGwBLgYQBpvjKWCwKdRHPEmBMwLFy.png" alt="">
            </div>
            <div class="card-body text-center">
              <h3 class="mb-0 fs-base text-nav">성수</h3>
            </div>
          </a>
        </div>
          
        <!-- 강남 -->
        <div class="col">
          <a class="card shadow-sm border-0" href="">
            <div class="card-img-top card-img-hover" style="height: 27vh;">
              <img src="https://i.pinimg.com/564x/b3/e6/58/b3e658c5d2947f52b0b23bd96e0bf5a6.jpg" alt="">
            </div>
            <div class="card-body text-center">
              <h3 class="mb-0 fs-base text-nav">강남</h3>
            </div>
          </a>
        </div>

        <!-- 건대 -->
        <div class="col">
          <a class="card shadow-sm border-0" href="">
            <div class="card-img-top card-img-hover" style="height: 27vh;">
              <img src="https://cdn.news.unn.net/news/photo/202111/518970_321294_1325.jpg" alt="">
            </div>
            <div class="card-body text-center">
              <h3 class="mb-0 fs-base text-nav">건대</h3>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- 최근 등록 매물 -->
    <div class="ms-5 me-5 mb-5">
      <h3 class="head-title">최근 등록 매물</h3>
      <div class="d-flex mb-4">
        <span class="subtitle ">최근 등록된 신규 매물입니다.</span>
        <span class="position-absolute end-0 me-5"><link href="" class="btn-more"></link>더보기</span>
      </div>

      <div>
          <div class="row gx-4 mx-0 pb-3" data-carousel-options="{&quot;items&quot;: 4, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;992&quot;:{&quot;items&quot;:4}}}">
            <!-- Item-->
            <div class="col">
              <div class="card shadow-sm card-hover border-0 h-100">
                <div class="card-img-top card-img-hover"><a class="img-overlay" href="real-estate-single-v1.html"></a>
                  <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info">New</span></div>
                  <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button>
                  </div><img src="@/assets/images/03.jpg" alt="Image">
                </div>
                <div class="card-body position-relative pb-3">
                  <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">월세</h4>
                  <h3 class="h6 mb-2 fs-base"><a class="nav-link stretched-link" href="real-estate-single-v1.html">광진안틸리아 | 17.49㎡</a></h3>
                  <p class="mb-2 fs-sm text-muted">서울 광진구 화양로34</p>
                  <div class="fw-bold"><i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>1,000 / 40</div>
                </div>
              </div>
            </div>

            <!-- Item-->
            <div class="col">
              <div class="card shadow-sm card-hover border-0 h-100">
                <div class="card-img-top card-img-hover"><a class="img-overlay" href="real-estate-single-v1.html"></a>
                  <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info">New</span></div>
                  <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button>
                  </div><img src="@/assets/images/03.jpg" alt="Image">
                </div>
                <div class="card-body position-relative pb-3">
                  <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">전세</h4>
                  <h3 class="h6 mb-2 fs-base"><a class="nav-link stretched-link" href="real-estate-single-v1.html">하이뷰오피스텔 | 17.49㎡</a></h3>
                  <p class="mb-2 fs-sm text-muted">서울 광진구 화양로34</p>
                  <div class="fw-bold"><i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>25,000</div>
                </div>
              </div>
            </div>

            <!-- Item-->
            <div class="col">
              <div class="card shadow-sm card-hover border-0 h-100">
                <div class="card-img-top card-img-hover"><a class="img-overlay" href="real-estate-single-v1.html"></a>
                  <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info">New</span></div>
                  <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button>
                  </div><img src="@/assets/images/03.jpg" alt="Image">
                </div>
                <div class="card-body position-relative pb-3">
                  <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">월세</h4>
                  <h3 class="h6 mb-2 fs-base"><a class="nav-link stretched-link" href="real-estate-single-v1.html">광진안틸리아 | 17.49㎡</a></h3>
                  <p class="mb-2 fs-sm text-muted">서울 광진구 화양로34</p>
                  <div class="fw-bold"><i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>1,000 / 40</div>
                </div>
              </div>
            </div>

            <!-- Item-->
            <div class="col">
              <div class="card shadow-sm card-hover border-0 h-100">
                <div class="card-img-top card-img-hover"><a class="img-overlay" href="real-estate-single-v1.html"></a>
                  <div class="position-absolute start-0 top-0 pt-3 ps-3"><span class="d-table badge bg-info">New</span></div>
                  <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i class="fi-heart"></i></button>
                  </div><img src="@/assets/images/03.jpg" alt="Image">
                </div>
                <div class="card-body position-relative pb-3">
                  <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">전세</h4>
                  <h3 class="h6 mb-2 fs-base"><a class="nav-link stretched-link" href="real-estate-single-v1.html">하이뷰오피스텔 | 17.49㎡</a></h3>
                  <p class="mb-2 fs-sm text-muted">서울 광진구 화양로34</p>
                  <div class="fw-bold"><i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>25,000</div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>

    <!-- 가이드 -->
    <div class="ms-5 me-5 mb-5">
      <h3 class="head-title">한국 부동산 가이드</h3>
      <div class="d-flex mb-4">
        <span class="subtitle ">NewJips가 알려주는 쉽고 간단한 부동산 가이드</span>
        <span class="position-absolute end-0 me-5"><link href="" class="btn-more"></link>더보기</span>
      </div>

      <div class="row">
        
        <div class="col-6 col-md-4 mb-3">
          <div class="card border-0 shadow hover-animate">
            <div class="card-body">
              <div class="icon-box mb-3">
                <img src="@/assets/icons/bank-note.svg" style="height: 5vh;">
              </div>
              <h5 class="guide-card-title">주택임대차계약과 법률 상식</h5>
              <p>주택임대차계약서 작성 시 알아두면 좋은 법률 상식</p>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-30px">
          <div class="card border-0 shadow hover-animate">
            <div class="card-body">
              <div class="icon-box mb-3">
                <img src="@/assets/icons/bank-note.svg" style="height: 5vh;">
              </div>
              <h5 class="guide-card-title">주택임대차계약과 법률 상식</h5>
              <p>주택임대차계약서 작성 시 알아두면 좋은 법률 상식</p>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-30px">
          <div class="card border-0 shadow hover-animate">
            <div class="card-body">
              <div class="icon-box mb-3">
                <img src="@/assets/icons/bank-note.svg" style="height: 5vh;">
              </div>
              <h5 class="guide-card-title">주택임대차계약과 법률 상식</h5>
              <p>주택임대차계약서 작성 시 알아두면 좋은 법률 상식</p>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-30px">
          <div class="card border-0 shadow hover-animate">
            <div class="card-body">
              <div class="icon-box mb-3">
                <img src="@/assets/icons/bank-note.svg" style="height: 5vh;">
              </div>
              <h5 class="guide-card-title">주택임대차계약과 법률 상식</h5>
              <p>주택임대차계약서 작성 시 알아두면 좋은 법률 상식</p>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-30px">
          <div class="card border-0 shadow hover-animate">
            <div class="card-body">
              <div class="icon-box mb-3">
                <img src="@/assets/icons/bank-note.svg" style="height: 5vh;">
              </div>
              <h5 class="guide-card-title">주택임대차계약과 법률 상식</h5>
              <p>주택임대차계약서 작성 시 알아두면 좋은 법률 상식</p>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4 mb-30px">
          <div class="card border-0 shadow hover-animate">
            <div class="card-body">
              <div class="icon-box mb-3">
                <img src="@/assets/icons/bank-note.svg" style="height: 5vh;">
              </div>
              <h5 class="guide-card-title">주택임대차계약과 법률 상식</h5>
              <p>주택임대차계약서 작성 시 알아두면 좋은 법률 상식</p>
            </div>
          </div>
        </div>
          
        </div>
    </div>


</div>
</template>

<style scoped>
  .ps-sm-3 {
    padding-left: 1rem !important;
  }

.fs-xs {
  font-size: 0.85rem !important;
}
.fw-normal {
  font-weight: 400 !important;
}

.text-primary {
  color: #fd5631 !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.card:hover > .card-img-hover .img-overlay {
  opacity: 0.33 !important;
}

.card-img-hover .position-absolute {
  z-index: 5;
}

.h-100 {
  height: 100% !important;
}

.border-0 {
  border: 0 !important;
}

.card-img-hover {
  position: relative;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.card-img-hover .img-overlay {
  opacity: 0 !important;
}

.card-hover {
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out !important;
}

.card-hover:hover, .card-hover.show {
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08), 0 0.25rem 0.75rem rgba(31, 27, 45, 0.08);
}

.card-img-hover .content-overlay {
  position: absolute;
  transition: opacity 0.25s ease-in-out;
  opacity: 0;
}

.fs-base {
  font-size: 1rem !important;
}

.text-nav {
  color: #454056 !important;
}

  .border-end-sm {
    border-right: 1px solid #efecf3 !important;
  }
  
  .w-sm-50 {
    width: 50% !important;
  }

.col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .d-sm-flex {
    display: flex !important;
  }

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

  .d-sm-none {
    display: none !important;
  }

  .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

h1 {
  line-height: 1.2;
  font-size: 1rem;
}

h3 {
  line-height: 1.3;
}


@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 700;
  line-height: 1.2;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.375rem 1rem;
  clear: both;
  font-weight: 400;
  color: #454056;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #fd5631;
  background-color: transparent;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fd5631;
  text-decoration: none;
  background-color: transparent;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #9691a4;
  pointer-events: none;
  background-color: transparent;
}
.dropdown-menu li:hover > .dropdown-item {
  color: #fd5631;
}
.dropdown-menu .active > .dropdown-item {
  color: #fd5631;
}
.dropdown-menu .active > .dropdown-item,
.dropdown-menu .dropdown-item.active {
  pointer-events: none;
}
.dropdown-menu.dropdown-menu-dark li:hover > .dropdown-item {
  color: #fff;
}
.dropdown-menu.dropdown-menu-dark .active > .dropdown-item {
  color: #fff;
}
.dropdown-menu.w-100 {
  min-width: 100%;
}

.dropdown-item {
  transition: color 0.2s ease-in-out;
}
.dropdown-item > i {
  margin-top: -0.125rem;
  transition: opacity 0.25s ease-in-out;
}
.dropdown-item:hover > i, .dropdown-item.active > i {
  opacity: 1 !important;
}


.searchbar {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: #666276;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.575rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.d-block {
  display: block !important;
}

.text-center {
  text-align: center !important;
}

.content-overlay {
  position: relative;
  z-index: 5;
}

.jarallax {
  position: relative;
  z-index: 0;
}
 
.loan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.hotPlace-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.head-title, .btn-more, .guide-card-title {
  color: #111111;
}

.subtitle {
  font-size: larger;
  color: #3E444E;
  font-weight: 500;
}

.card-img-top img, .img-overlay {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  
.card-img-top img {
  border-top-left-radius: calc(0.75rem - 1px);
  border-top-right-radius: calc(0.75rem - 1px);
}


  .icon-box {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    text-align: center;
    line-height: 4rem;
    background-color: #F8E3ED;
  }

  .img-overlay {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.25s ease-in-out;
  background-color: #1f1b2d;
  opacity: 0.5;
  z-index: 1;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.dropdown-toggle.btn-link {
  box-shadow: none;
}

.btn-link {
  border: 0;
  background-color: transparent !important;
  color: #666276;
  font-weight: bold;
  text-decoration: none;
}
.btn-link:hover {
  color: #fd5631;
}
.btn-link.btn-light {
  color: rgba(255, 255, 255, 0.7);
}
.btn-link.btn-light:hover {
  color: #fff;
}

.dropdown-toggle.btn-link {
  color: #9691a4;
}

.dropdown-toggle.btn-link:hover, .form-group .dropdown-toggle.btn-link.show {
  color: #454056;
}

.form-group-light .dropdown-toggle.btn-link {
  color: rgba(255, 255, 255, 0.5);
}
.form-group-light .dropdown-toggle.btn-link:hover, .form-group-light .dropdown-toggle.btn-link.show {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #efecf3;
  border-radius: 0.75rem;
  text-decoration: none;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem 1.25rem;
}

.card-img-top {
  width: 100%;
}

.card-img-top {
  border-top-left-radius: calc(0.75rem - 1px);
  border-top-right-radius: calc(0.75rem - 1px);
}

.dropdown-toggle {
  display: block;
  position: end;
}

.dropdown-toggle::after {
   display: block;
    position: absolute;
    top: 50%;
    right: 1rem;
    margin-top: -0.3rem;
  }

  .dropdown-menu {
  margin-bottom: 0.75rem;
  padding-top: 0;
  padding-bottom: 0;
  border: 0;
  border-left: 2px solid transparent;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
}

.form-group {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #efecf3;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08), 0 0.25rem 0.75rem rgba(31, 27, 45, 0.08);
}

.dropdown .dropdown-toggle::before,
.dropup .dropdown-toggle::before,
.dropend .dropdown-toggle::before {
  display: none;
}
</style>