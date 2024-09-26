<template>
  <div style="background-color: #F5F6F7;">
    <div class="buddiz-banner">
      <h1>버디즈</h1>
      <p>나에게 꼭 맞는 버디를 찾아보세요!</p>
    </div>
  </div>
  
  <section class="content">
    <div class="container">
      <div class="row">

        <!-- 왼쪽 배너 시작 -->
        <div class="col-lg-3 me-lg-auto">
          <div class="card border-0 shadow mb-6 mb-lg-0">
            <!-- 사진 출력 부분 -->
            <div class="card-header bg-gray-100 py-4 border-0 text-center">
              <a class="d-inline-block" href="#">
                <img src="/src/assets/images/face1.jpg" alt="buddiz image" class="d-block avatar avatar-xxl p-2 mb-2" style="width: 100px; height: 100px;">
              </a>
              <!-- 실명 입력 -->
              <h5>카리나</h5>
              <p class="text-muted text-sm mb-0">Gwangjin-Gu, Jayang-Dong</p>
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2">
                  <img src="/src/assets/icons/star.svg" alt="star">
                  <svg class="svg-icon text-primary svg-icon-md">
                    <use xlink:href="#diploma-1"> </use>
                  </svg>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2">
                  <svg class="svg-icon text-primary svg-icon-md">
                    <use xlink:href="#checkmark-1"> </use>
                  </svg>
                </div>
              </div>
              <hr>
              <h6>Jack provided</h6>
              <ul class="card-text text-muted">
                <li>Government ID</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
            </div>
          </div>
        </div>


        <!-- 오른쪽 배너 시작 -->
        <div class="col-lg-9 ps-lg-5">
          <!-- 닉네임 -->
          <h1 class="hero-heading mb-0" style="">카리나 로켓펀치</h1>
          <div class="text-block">
            <p> 안녕하세요^^ 카리나입니다~ 벌써 한국에 온지도 3년이 지났네요..<br>
              그동안 배웠던 집구하기 꿀팁들을 다량 보유하고 있습니다~~!! <br>
              혼자서 집을 구하기 힘들거나 같이 발품팔 친구를 찾는다면 연락주세요 ☎☎ <br>
            </p>
          </div>

          <!-- 리뷰 시작 -->
           <br>
          <div class="text-block">
            <h5 class="mb-4">후기</h5>

            <!-- 리뷰 목록 출력 시작 -->
            
            <div class="d-flex d-block d-sm-flex review">
              <div v-for="review in reviewList" :key="review.id" class="text-md-center flex-shrink-0 me-4 me-xl-5">
                <img class="d-block avatar avatar-xl p-2 mb-2" 
                :src="review.profileImage" alt="review image">
                <span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div>
                <h6 class="mt-2 mb-1">{{ review.name }}</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">{{ review.content }}</p>
              </div>
            </div>

            <!-- 리뷰 목록 출력 끝 -->



            


            <div class="d-flex d-block d-sm-flex review">
              <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="../../src/assets/images/avatar-2.jpg" alt="Luke Skywalker"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div>
                <h6 class="mt-2 mb-1">Luke Skywalker</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
              </div>
            </div>
            <div class="d-flex d-block d-sm-flex review">
              <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="../../src/assets/images/avatar-3.jpg" alt="Princess Leia"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div>
                <h6 class="mt-2 mb-1">Princess Leia</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                </div>
                <p class="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
              </div>
            </div>
            <div class="d-flex d-block d-sm-flex review">
              <div class="text-md-center flex-shrink-0 me-4 me-xl-5"><img class="d-block avatar avatar-xl p-2 mb-2" src="../../src/assets/images/avatar-4.jpg" alt="Jabba Hut"><span class="text-uppercase text-muted text-sm">Dec 2018</span></div>
              <div>
                <h6 class="mt-2 mb-1">Jabba Hut</h6>
                <div class="mb-2"><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i><i class="fa fa-xs fa-star text-primary"></i>
                </div>
                <p class="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
              </div>
            </div>

            
            <!-- 리뷰 작성란 시작 -->
            <div class="py-5">
              <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview">Leave a review</button>
              <div class="collapse mt-4" id="leaveReview">
                <h5 class="mb-4">Leave a review</h5>
                <form class="form" id="contact-form" method="get" action="#">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-4">
                        <label class="form-label" for="name">Your name *</label>
                        <input class="form-control" type="text" name="name" id="name" placeholder="Enter your name" required="required">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-4">
                        <label class="form-label" for="rating">Your rating *</label>
                        <select class="form-select focus-shadow-0" name="rating" id="rating">
                          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                          <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                          <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                          <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="email">Your email *</label>
                    <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="review">Review text *</label>
                    <textarea class="form-control" rows="4" name="review" id="review" placeholder="Enter your review" required="required"></textarea>
                  </div>
                  <button class="btn btn-primary" type="submit">Post review</button>
                </form>
              </div>
            </div>
            <!-- 리뷰 작성란 끝 -->
          </div>
          <!-- 리뷰 끝 -->

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
        review: [
          {
            id: 1,
            name: '카리나',
            profileImage: '/src/assets/images/face1.jpg',
            rating: 5,
            content: '테스트다아.....................................ㅇㄹㄴㅇㄹㅇㄴㄹㅇㄹ',
          },
          
        ],
      };
    },
    computed: {
      filteredBuddizs() {

        let result = this.buddizs;

        return result;
    },
  },
    methods: {
  },
  };
  </script>

<style scoped>
.buddiz-banner{
    max-width: 984px;
    margin: 0 auto;
  }


</style>