<template>
  <div style="background-color: #F5F6F7;">
    <div class="buddiz-banner">
      <h1>버디즈</h1>
      <p>나에게 꼭 맞는 버디를 찾아보세요!</p>
    </div>
  </div>

  <div class="buddiz-search">
    <!-- 필터와 목록을 가로로 정렬 -->
    <div class="content">
      <div class="filter-section">
        <p>닉네임으로 검색</p>
        <div class="search-bar">
          <input v-model="searchQuery" type="text" placeholder="검색어입력" class="search-input" />
          <button class="search-button"><i class="fa fa-search"></i></button>
        </div>
        <hr style="width:240px; border-bottom: 3px solid #ddd;">

        <div class="filter-options">
          <p>필터로 검색</p>
          <div class="filter-buttons">
            <button :class="{'active': selectedPersonality === '조용해요'}" @click="selectedPersonality = '조용해요'" class="filter-select">조용해요</button>
            <button :class="{'active': selectedPersonality === '친구해요'}" @click="selectedPersonality = '친구해요'"class="filter-select">친구해요</button>
          </div>
          
          <div class="filter-buttons">
            <button :class="{'active': selectedGender === '여성'}" @click="selectedGender = '여성'"class="filter-select">여성</button>
            <button :class="{'active': selectedGender === '남성'}" @click="selectedGender = '남성'"class="filter-select">남성</button>
          </div>
        </div><hr style="width:240px; border-bottom: 3px solid #ddd;">

        <div class="sort-options">
          <p>정렬</p>
          <div class="filter-buttons">
            <button :class="{'active': selectedSort === '별점순'}" @click="selectedSort = '별점순'" class="filter-select">별점순</button>
            <button :class="{'active': selectedSort === '가격순'}" @click="selectedSort = '가격순'" class="filter-select">가격순</button>
          </div>
          <div class="filter-bottons">
            <button :class="{'active': selectedSort === '리뷰 많은 순'}" @click="selectedSort = '리뷰 많은 순'" style="width: 235px;" class="filter-select">리뷰 많은 순</button>
          </div>
        </div>
      </div>

      <!-- 버디즈 목록 -->
      <div class="buddiz-list">
        <div v-for="buddiz in filteredBuddizs" :key="buddiz.id" class="buddiz-item under-line">
          <img :src="buddiz.profileImage" alt="buddiz image" class="buddiz-image" />
          <div style="margin-top: 10px;">
            <h3 style="font-size: 20px; font-weight: bold;">{{ buddiz.name }}</h3>
            <div style="font-size: 0.9em;">
              <p>별점: {{ buddiz.rating }}</p>
              <p>{{ buddiz.description }}</p>
              <p>{{ buddiz.career }}</p>
            </div>
          </div>
        </div>
      </div>
  
      

    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        selectedPersonality: null,  // 변경된 부분: 초기값을 null로 설정 (버튼 해제를 위해 사용)
        selectedGender: null,       // 변경된 부분: 초기값을 null로 설정 (버튼 해제를 위해 사용)
        selectedSort: '별점순',      // 초기 정렬은 '별점순'
        currentPage: 1,
        buddizs: [
          {
            id: 1,
            name: '카리나',
            profileImage: '/src/assets/images/face1.jpg',
            rating: 4.8,
            career: '한국 자취 2년차',
            description: '유쾌함, ENFP, 친구해요',
          },
          {
            id: 2,
            name: '마이콜',
            profileImage: 'src/assets/images/face2.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 3,
            name: '다니엘',
            profileImage: 'src/assets/images/face3.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 4,
            name: '호날두',
            profileImage: 'src/assets/images/face4.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 5,
            name: '린가드',
            profileImage: 'src/assets/images/face5.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 6,
            name: '케빈',
            profileImage: 'src/assets/images/face6.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 7,
            name: '아이묭',
            profileImage: 'src/assets/images/face7.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 8,
            name: '진',
            profileImage: 'src/assets/images/face8.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 9,
            name: '하니',
            profileImage: 'src/assets/images/face9.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
          {
            id: 10,
            name: '레이',
            profileImage: 'src/assets/images/face10.jpg',
            rating: 4.8,
            career: '한국 자취 3년차',
            description: '유쾌함, ENFP, 조용해요...',
          },
        ],
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
      totalPages() {
        return Math.ceil(this.buddizs.length / 10);
      },
    },
    methods: {
    // 변경된 부분: 성격 필터를 토글하는 메서드
    togglePersonalityFilter(personality) {
      // 현재 선택된 필터를 다시 클릭하면 해제 (null로 설정)
      this.selectedPersonality = this.selectedPersonality === personality ? null : personality;
    },
    
    // 변경된 부분: 성별 필터를 토글하는 메서드
    toggleGenderFilter(gender) {
      // 현재 선택된 필터를 다시 클릭하면 해제 (null로 설정)
      this.selectedGender = this.selectedGender === gender ? null : gender;
    },
    
    // 변경된 부분: 정렬 필터를 토글하는 메서드
    toggleSortFilter(sort) {
      // 현재 선택된 정렬 필터를 다시 클릭하면 해제 (null로 설정)
      this.selectedSort = this.selectedSort === sort ? null : sort;
    },
    
    changePage(page) {
      this.currentPage = page;
    },
  },
  };
  </script>
  
  <style scoped>

  .buddiz-banner{
    max-width: 984px;
    margin: 0 auto;
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

  .filter-select{
    margin: 5px;
  }
  
  .buddiz-list {
    flex-grow: 1;
  }
  
  .buddiz-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px; /* 여백 추가 */
  border-bottom: 3px solid #ddd; /* 각 항목 아래 밑줄 추가 */
}

  .underline {
  width: 50%; /* 밑줄의 길이 조정 */
  border-bottom: 1px solid #ddd; /* 밑줄 추가 */
}

  .buddiz-image{
    width: 140px;
    height: 140px;
  }
  
  .buddiz-search {
  /* padding: 20px; */
  max-width: 1024px; /* 원하는 최대 너비 설정 */
  margin: 0 auto; /* 페이지를 가운데 정렬하고 양옆에 간격을 줌 */
}


.search-bar {
  display: flex; /* 가로로 정렬 */
  max-width: 240px;
}

.search-input {
  flex-grow: 1; /* 입력란이 가능한 공간을 차지하도록 */
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px; /* 버튼과 연결되는 부분의 모서리 라운드 처리 */
  background-color: #e0e0e0;
  max-width: 180px;
}

.search-button {
  background-color: #e0e0e0;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 0 5px 5px 0; /* 버튼과 연결되는 부분의 모서리 라운드 처리 */
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 60px;
}

.search-button:hover {
  background-color: #d0d0d0;
}

.filter-bottons{
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
</style>


