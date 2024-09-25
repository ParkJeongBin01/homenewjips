<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


</script>

<template>
    <div class="container-fluid px-0">
        <!-- header -->
        <div class="type-header">
            <h2>신고하기</h2>
            <div style="font-size: 17pt; margin-top: 8pt;">매물, 부동산, 버디즈 등 문제 상황을 신고하세요 !</div>
        </div>

        <form>
            <div class="box">
                <h4 class="mb-4">신고 버디즈 정보</h4>

                <div  class="d-flex align-items-center ms-3">
                    <img
                        id="profile"
                        src="../../assets/images/default_profile.jpg"
                        alt=""
                        class="imgProfile" />

                    <table class="table table-bordered ms-4">
                        <tbody>
                            <tr>
                                <th>닉네임</th>
                                <td>돈까스 냉면 세트</td>
                            </tr>
                            <tr>
                                <th>이메일 주소</th>
                                <td>dont1234@gmail.com</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
            </div>

            <div class="box">
                <h4 class="mb-4">신고 사유</h4>
                <table class="table table-bordered ms-3">
                    <tbody>
                        <tr>
                            <td>
                                <label for="blameOption" class="d-flex align-items-center" style="margin-top: 6px; margin-bottom: 6px;">
                                    <input class="form-check-input mt-0" type="checkbox" value="1" aria-label="Checkbox for following text input">
                                    <span class="ms-3">불법 행위</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="blameOption" class="d-flex align-items-center" style="margin-top: 6px; margin-bottom: 6px;">
                                    <input class="form-check-input mt-0" type="checkbox" value="2" aria-label="Checkbox for following text input">
                                    <span class="ms-3">인종차별적 행위</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="blameOption" class="d-flex align-items-center" style="margin-top: 6px; margin-bottom: 6px;">
                                    <input class="form-check-input mt-0" type="checkbox" value="3" aria-label="Checkbox for following text input">
                                    <span class="ms-3">폭언, 폭행</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="blameOption" class="d-flex align-items-center" style="margin-top: 6px; margin-bottom: 6px;">
                                    <input class="form-check-input mt-0" type="checkbox" value="4" aria-label="Checkbox for following text input">
                                    <span class="ms-3">동행 승인 후 잠수</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="blameOption" class="d-flex align-items-center" style="margin-top: 6px; margin-bottom: 6px;">
                                    <input class="form-check-input mt-0" type="checkbox" value="5" aria-label="Checkbox for following text input">
                                    <span class="ms-3">기타 부적절한 버디즈</span>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="box">
                <h4 class="mb-4">신고 내용</h4>
                <textarea class="form-control ms-3" id="content" rows="5" placeholder="신고 내용을 입력해주세요."></textarea>
            </div>

            <div class="container-fluid d-flex justify-content-center mb-5 box mt-4" style="gap: 15px;">
                <button class="button-box me-4" style="background-color: #F5F6F7;">취소</button>
                <button class="button-box ms-4" style="background-color: #344356; color: #FFFFFF;">확인</button>
            </div>
        </form>
    </div>
</template>

<style>
.type-header {
    background-color: #F5F6F7;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-left: 6vh;
}

.box {
    padding-top: 4vh;
    padding-left: 6vh;
    padding-right: 10vh;
}

.box-title {
    font-size: 17pt;
    font-weight: bold;
}

.button-box {
    border-radius: 5pt;
    padding-top: 10pt;
    padding-bottom: 10pt;
    padding-left: 80pt;
    padding-right: 80pt;
    border: 0;
    font-size: 14pt;
}

.table tr th {
    background-color: #344356;
    color: white;
    text-align: center;
    width: 30vh;
}

.table {
    overflow: hidden;
}

.table th, .table tr {
    padding-top: 15px;
    padding-bottom: 15px;
    vertical-align: middle;
}

input[type="checkbox"]:checked + span {
        color: #FF8F17;
        font-weight: bold;
}

input[type="checkbox"] + span {
    color: #616B79;
}

.imgProfile {
    height: 18vh;
    border-radius: 5px;
}
</style>