<template>
  <div class="fluid-container">
    <div class="type-header">
      <h2>버디즈</h2>
      <div style="font-size: 17pt; margin-top: 8pt;">나에게 꼭 맞는 버디를 찾아보세요!</div>
    </div>

    <div class="buddiz-search">
      <!-- 필터와 목록을 가로로 정렬 -->
      <div class="content">
        <div class="filter-section">
          <p>닉네임으로 검색</p>
          <div class="search-bar">
            <input v-model="searchQuery" type="text" placeholder="검색어입력" class="search-input" />
            <button @click="fetchBuddizs" class="search-button"><i class="fa fa-search"></i></button> <!-- 검색 버튼 -->
          </div>
          <hr style="width:240px; border-bottom: 1.5px solid #ddd;">

          <div class="filter-options">
            <p>필터로 검색</p>
            <div class="filter-buttons">
              <button :class="{ 'active': selectedPersonality === '조용해요' }" 
                      @click="togglePersonalityFilter('조용해요')" 
                      class="filter-select">조용해요</button>
              <button :class="{ 'active': selectedPersonality === '친구해요' }" 
                      @click="togglePersonalityFilter('친구해요')" 
                      class="filter-select">친구해요</button>
            </div>

            <div class="filter-buttons">
              <button :class="{ 'active': selectedGender === '여성' }" 
                      @click="toggleGenderFilter('여성')" 
                      class="filter-select">여성</button>
              <button :class="{ 'active': selectedGender === '남성' }" 
                      @click="toggleGenderFilter('남성')" 
                      class="filter-select">남성</button>
            </div>
          </div>
          <hr style="width:240px; border-bottom: 1.5px solid #ddd;">

          <div class="sort-options">
            <p>정렬</p>
            <div class="filter-buttons">
              <button :class="{ 'active': selectedSort === '별점순' }" 
                      @click="selectedSort = '별점순'" 
                      class="filter-select">별점순</button>
              <button :class="{ 'active': selectedSort === '가격순' }" 
                      @click="selectedSort = '가격순'" 
                      class="filter-select">가격순</button>
            </div>
            <div class="filter-buttons">
              <button :class="{ 'active': selectedSort === '리뷰 많은 순' }" 
                      @click="selectedSort = '리뷰 많은 순'" 
                      style="width: 235px;" 
                      class="filter-select">리뷰 많은 순</button>
            </div>
          </div>
        </div>

        <!-- 버디즈 목록 -->
        <div class="buddiz-list">
          <div v-for="buddiz in paginatedBuddizs" :key="buddiz.id" class="buddiz-item under-line">
            <router-link :to="{name: 'buddizDetail', params:{id:buddiz.id}}" class="user-link" 
            exact-active-class="active-link">
              <img :src="buddiz.profileImage" alt="buddiz image" class="buddiz-image" />
              <div style="margin-top: 10px;">
                <h3 style="font-size: 25px; font-weight: bold; margin-bottom: 5px;">{{ buddiz.name }}</h3>
                <div style="font-size: 1em; margin: 5px;">
                  <p style="margin-bottom: 5px;"><img src="/src/assets/icons/starIcon.png" alt="star"
                      style="height: 18px; width: 18px;"> {{ buddiz.rating }}</p>
                  <p style="margin-bottom: 5px;">{{ buddiz.liveInKr }}</p>
                  <p style="margin-bottom: 5px;">{{ buddiz.character }}</p>
                </div>
              </div>
            </router-link>
          </div>

          <!-- 페이지네이션 -->
          <div class="my-5 d-flex justify-content-center">
            <vue-awesome-paginate
              :total-items="totalCount"
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
      </div>
    </div>
  </div>
</template>

<script>
import buddizApi from '@/api/buddizApi'; // API 파일에서 가져오기

export default {
  data() {
    return {
      pageRequest: {
        page: 1, // 초기 페이지
        amount: 10,  // 한 페이지에 출력할 버디즈 수 (10개로 설정)
        searchType: '',
        searchValue: '',
        types: [],
      },
      totalCount: 0, // DB에서 가져올 전체 데이터 수
      searchQuery: '',
      selectedPersonality: null,  // 성격 필터 초기값
      selectedGender: null,       // 성별 필터 초기값
      selectedSort: '별점순',      // 초기 정렬은 '별점순'
      buddizs: [],                // 서버에서 불러온 버디즈 데이터
    };
  },
  computed: {
    filteredBuddizs() {
      let result = this.buddizs;

      // 닉네임 검색 필터
      if (this.searchQuery) {
        result = result.filter((buddiz) =>
          buddiz.name.includes(this.searchQuery)
        );
      }

      // 성격 필터
      if (this.selectedPersonality) {
        result = result.filter(
          (buddiz) => buddiz.personality === this.selectedPersonality
        );
      }

      // 성별 필터
      if (this.selectedGender) {
        result = result.filter((buddiz) => buddiz.gender === this.selectedGender);
      }

      // 정렬 방식
      if (this.selectedSort === '별점순') {
        result.sort((a, b) => b.rating - a.rating);
      } else if (this.selectedSort === '가격순') {
        result.sort((a, b) => a.price - b.price);
      } else if (this.selectedSort === '리뷰 많은 순') {
        result.sort((a, b) => b.reviews - a.reviews);
      }

      return result;
    },

    // 페이지네이션에 따라 출력할 데이터 계산
    paginatedBuddizs() {
      const startIndex = (this.pageRequest.page - 1) * this.pageRequest.amount;
      const endIndex = startIndex + this.pageRequest.amount;
      return this.filteredBuddizs.slice(startIndex, endIndex);  // 현재 페이지에 맞는 데이터만 반환
    },
  },
  methods: {
    // 성격 필터 토글
    togglePersonalityFilter(personality) {
      this.selectedPersonality = this.selectedPersonality === personality ? null : personality;
    },
    // 성별 필터 토글
    toggleGenderFilter(gender) {
      this.selectedGender = this.selectedGender === gender ? null : gender;
    },

    // 서버에서 버디즈 데이터 가져오기
    async fetchBuddizs() {
      try {
        const data = await buddizApi.fetchBuddizs(this.searchQuery);
        this.buddizs = data.buddizs; // 불러온 데이터를 buddizs 배열에 할당
        this.totalCount = data.totalCount; // 전체 데이터 개수 업데이트
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    },
    // 페이지 변경 시 데이터 새로 가져오기
    handlePageChange(pageNum) {
      this.pageRequest.page = pageNum;
      this.fetchBuddizs(); // 페이지 변경될 때마다 새로 데이터 불러옴
    },
  },
  mounted() {
    this.fetchBuddizs(); // 컴포넌트가 마운트될 때 데이터 불러오기
  }
};
</script>



<style scoped>
.type-header {
    background-color: #F5F6F7;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-left: 6vh;
}

.buddiz-search {
  padding: 20px;
}

/* 필터와 목록을 가로로 배치 */
.content {
  display: flex;
}

.filter-section {
  width: 300px;
  margin-right: 5px;
}

.filter-select {
  margin: 5px;
 border-radius: 10px;
 background-color: #F5F6F7;

}

.buddiz-list {
  flex-grow: 1;
}

.buddiz-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  /* 여백 추가 */
  border-bottom: 1.5px solid #ddd;
  /* 각 항목 아래 밑줄 추가 */
}

.underline {
  width: 50%;
  /* 밑줄의 길이 조정 */
  border-bottom: 1px solid #ddd;
  /* 밑줄 추가 */
}

.buddiz-image {
  width: 140px;
  height: 140px;
  border-radius: 5px; 
  object-fit: cover;
}

.buddiz-search {
  /* padding: 20px; */
  max-width: 1024px;
  /* 원하는 최대 너비 설정 */
  margin: 0 auto;
  /* 페이지를 가운데 정렬하고 양옆에 간격을 줌 */
}


.search-bar {
  display: flex;
  /* 가로로 정렬 */
  max-width: 240px;
}

.search-input {
  flex-grow: 1;
  /* 입력란이 가능한 공간을 차지하도록 */
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  /* 버튼과 연결되는 부분의 모서리 라운드 처리 */
  background-color: #F5F6F7;
  max-width: 180px;
  border-radius: 10px 0 0 10px;
}

.search-button {
  background-color: #F5F6F7;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 0 5px 5px 0;
  /* 버튼과 연결되는 부분의 모서리 라운드 처리 */
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 60px;
  border-radius: 0 10px 10px 0;
}

.search-button:hover {
  background-color: #d0d0d0;
}

.filter-bottons {
  width: 240px;
}

button {
  width: 112.5px;
  background-color: #e0e0e0;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.active {
  background-color: #2c3e50;
  color: white;
}

button:hover {
  background-color: #d0d0d0;
}

.pagination {
  margin-top: 20px;
}

.user-link {
  text-decoration: none; /* 링크 밑줄 제거 */
  color: #000; /* 기본 글자색 */
  display: block; /* 링크 영역을 블록으로 만들어 전체 클릭 가능하게 */
  transition: color 0.3s; /* 색상 전환 효과 */
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
}

.user-link:hover {
  color: #007bff; /* 호버 시 링크 색상 변경 */
}

.active-link {
  font-weight: bold; /* 현재 활성 링크 강조 */
}

.filter-buttons{
  color: #F5F6F7;
}

</style>