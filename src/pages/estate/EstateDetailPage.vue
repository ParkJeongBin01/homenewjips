<template>
  <div class="estate-detail-page">
    <div>
      <div class="picArea">
        <h1 style="color: white">PICTURE AREA</h1>
      </div>
    </div>

    <div class="estate-content clearfix">
      <div class="estate-description">
        <p>설명</p>
      </div>

      <!-- 오른쪽: 플로팅 바 -->
      <div class="sticky-bar clearfix">
        <Vue3StickySidebar
          class="sidebar"
          containerSelector=".estate-content"
          innerWrapperSelector=".sidebar__inner"
        >
          <div class="sidebar__inner">
            <div class="estate-info">
              <div class="estate-info-detail">
                <p>보증금</p>
                <p class="p-value">₩ 8,000만</p>
              </div>

              <div class="estate-info-detail">
                <p>월세</p>
                <p class="p-value">₩ 60만</p>
              </div>

              <div class="estate-info-detail">
                <p>관리비</p>
                <p class="p-value">₩ 5만</p>
              </div>
              <hr class="divider" />
              <div class="estate-info-detail">
                <p>층수</p>
                <p class="p-value">3층 이상</p>
              </div>
              <div class="estate-info-detail">
                <p>면적</p>
                <p class="p-value">24.8 ㎡</p>
              </div>
              <div class="button-group">
                <button class="contact-button">연락하기</button>
                <button class="wishlist-button">매물 찜하기</button>
                <button class="report-button">신고하기</button>
              </div>
            </div>
          </div>
        </Vue3StickySidebar>
      </div>
    </div>
  </div>
</template>

<script setup>
import Vue3StickySidebar from 'vue3-sticky-sidebar';
</script>

<style scoped>
.estate-detail-page {
  padding: 20px;
  background-color: white;
  width: 100%;
}

.estate-content {
  display: flex;
  margin: 3rem;
}

.estate-description {
  flex: 6;
  height: 2000px;
}

.sticky-bar {
  flex: 4;
}

.sidebar__inner {
  transform: translate(0, 0); /* For browsers don't support translate3d. */
  transform: translate3d(0, 0, 0);
  will-change: position, transform;
  margin-top: 100px;
}
.contact-button {
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.estate-info {
  box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
}
.picArea {
  width: 100%;
  height: 500px;
  background-color: black;
}
.divider {
  border: 1px solid #ddd;
  margin: 15px 0;
}
.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.contact-button,
.wishlist-button {
  background-color: #f5f6f7;
  border: none;
  color: #616b79;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  font-size: 1rem;
}
.report-button {
  font-size: 0.75rem;
  border: none;
  background-color: white;
  color: #616b79;
}
.contact-button:hover,
.wishlist-button:hover,
.report-button:hover {
  background-color: #3f54e3;
  color: white;
}
.estate-info-detail {
  display: flex;
  justify-content: space-between;
}
.p-value {
  font-weight: 700;
}
</style>
