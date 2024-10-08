import api from '@/api';  // axios 기반의 API 인스턴스를 가져옵니다.

const BASE_URL = '/api/buddiz';
const headers = { 'Content-Type': 'multipart/form-data' };

export default {
  // 모든 리뷰를 가져오는 함수
  async getAllReviews() {
    const { data } = await api.get(BASE_URL);
    console.log('GET ALL REVIEWS: ', data);
    return data;
  },

  // 특정 리뷰를 가져오는 함수
  async getReview(id) {
    const { data } = await api.get(`${BASE_URL}/${id}`);
    console.log('GET REVIEW', data);
    return data;
  },

  // 리뷰를 생성하는 함수
  async createReview(review) {
    const formData = new FormData();
    formData.append('rating', review.rating);
    formData.append('reviewContent', review.content);  // 컬럼명과 통일

    if (review.files) {
      for (let i = 0; i < review.files.length; i++) {
        formData.append('imgFile', review.files[i]);  // imgFile로 이름 수정
      }
    }

    const { data } = await api.post(BASE_URL, formData, { headers });
    console.log('CREATE REVIEW: ', data);
    return data;
  },


  // 리뷰를 업데이트하는 함수
  async updateReview(review) {
    const formData = new FormData();
    formData.append('uno', review.id);  // PK 컬럼명과 통일
    formData.append('name', review.name);
    formData.append('rating', review.rating);
    formData.append('email', review.email);
    formData.append('reviewContent', review.content);  // 컬럼명과 통일

    if (review.files) {
      for (let i = 0; i < review.files.length; i++) {
        formData.append('files', review.files[i]);
      }
    }

    const { data } = await api.put(`${BASE_URL}/${review.id}`, formData, { headers });
    console.log('UPDATE REVIEW: ', data);
    return data;
  },

  // 리뷰를 삭제하는 함수
  async deleteReview(id) {
    const { data } = await api.delete(`${BASE_URL}/${id}`);
    console.log('DELETE REVIEW: ', data);
    return data;
  },

  // 버디즈 목록 가져오기
  async fetchBuddizs(searchQuery) {
    const response = await api.get(BASE_URL, {
      params: {
        search: searchQuery,
      },
    });
    return response.data;
  },
  // 버디즈 상세 정보 가져오기
  async getBuddizDetail(id) {
    const response = await api.get(`${BASE_URL}/userDetail/${id}`);
    return response.data;
  },

  // 해당 버디즈의 리뷰 목록 가져오기
  async getBuddizReviews(id) {
    const response = await api.get(`${BASE_URL}/reviews/${id}`);
    return response.data;
  },
};
