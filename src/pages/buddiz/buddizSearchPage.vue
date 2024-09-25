<template>
    <div class="buddiz-search">
      <h1>버디즈</h1>
      <p>나에게 꼭 맞는 버디를 찾아보세요!</p>
  
      <!-- 필터와 목록을 가로로 정렬 -->
      <div class="content">
        <!-- 검색 필터 -->
        <div class="filter-section">
          <input v-model="searchQuery" type="text" placeholder="닉네임으로 검색" />
  
          <div class="filter-options">
            <label>
              <input type="radio" v-model="selectedGender" value="여성" /> 여성
            </label>
            <label>
              <input type="radio" v-model="selectedGender" value="남성" /> 남성
            </label>/Users/brucerinderman/Library/CloudStorage/OneDrive-Personal/New_front/newjips_Frontend/src/pages/buddy
          </div>
  
          <div class="sort-options">
            <select v-model="selectedSort">
              <option value="별점순">별점순</option>
              <option value="가격순">가격순</option>
              <option value="리뷰 많은 순">리뷰 많은 순</option>
            </select>
          </div>
        </div>
  
        <!-- 버디즈 목록 -->
        <div class="buddiz-list">
          <div v-for="buddiz in filteredBuddizs" :key="buddiz.id" class="buddiz-item">
            <img :src="buddiz.profileImage" alt="buddiz image" />
            <div>
              <h3>{{ buddiz.name }}</h3>
              <p>별점: {{ buddiz.rating }}</p>
              <p>{{ buddiz.description }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- 페이지네이션 -->
      <div class="pagination">
        <button @click="changePage(page)" v-for="page in totalPages" :key="page">{{ page }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        selectedGender: '',
        selectedSort: '별점순',
        currentPage: 1,
        buddizs: [
          {
            id: 1,
            name: '닉네임1',
            profileImage: 'path/to/image1.jpg',
            rating: 4.8,
            description: '한국 자취 2년차, 유쾌함, ENFP, 친구예요',
          },
          {
            id: 2,
            name: '닉네임2',
            profileImage: 'path/to/image2.jpg',
            rating: 4.8,
            description: '한국 자취 3년차, 유쾌함, ENFP, 조용해요...',
          },
          // 더 많은 버디즈 데이터를 추가하세요
        ],
      };
    },
    computed: {
      filteredBuddizs() {
        // 닉네임 검색 필터
        let result = this.buddizs.filter((buddiz) =>
          buddiz.name.includes(this.searchQuery)
        );
  
        // 성별 필터
        if (this.selectedGender) {
          result = result.filter(
            (buddiz) => buddiz.gender === this.selectedGender
          );
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
      changePage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>
  
  <style scoped>
  .buddiz-search {
    padding: 20px;
  }
  
  /* 필터와 목록을 가로로 배치 */
  .content {
    display: flex;
  }
  
  .filter-section {
    width: 250px;
    margin-right: 20px;
  }
  
  .buddiz-list {
    flex-grow: 1;
  }
  
  .buddiz-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .pagination {
    margin-top: 20px;
  }
  </style>
  