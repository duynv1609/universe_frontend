<script lang="ts" setup>
const app = useAppConfig();
</script>

<template>
  <footer class="footer mt-20">
    <v-container>
      <v-row>
        <div class="v-col-12 v-col-sm-8 v-col-md-6 v-col-lg-4 v-col-xl-3">
          <div class="footer__flixtv">
            <img src="~/assets/images/logo.png" alt="" class="logo-footer" />
          </div>
          <p class="footer__tagline pt-4">
            Vũ Trụ Phim, <br />
            Website phim vũ trụ.
          </p>
          <div class="footer__social pt-4 d-flex">
            <a href="#" target="_blank" class="pr-3"
              ><svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                  fill="#3B5998"
                />
                <path
                  d="M16.5634 23.8197V15.6589H18.8161L19.1147 12.8466H16.5634L16.5672 11.4391C16.5672 10.7056 16.6369 10.3126 17.6904 10.3126H19.0987V7.5H16.8457C14.1394 7.5 13.1869 8.86425 13.1869 11.1585V12.8469H11.4999V15.6592H13.1869V23.8197H16.5634Z"
                  fill="white"
                /></svg
            ></a>
            <a href="#" target="_blank"
              ><svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                  fill="#010101"
                />
                <path
                  d="M13.2143 13.1245V12.4195C12.9696 12.3808 12.7224 12.3595 12.4747 12.356C10.0763 12.3509 7.95291 13.9051 7.23271 16.1928C6.51252 18.4805 7.36263 20.9708 9.33138 22.3405C7.85664 20.7622 7.44716 18.4646 8.28583 16.474C9.1245 14.4834 11.0547 13.1716 13.2143 13.1245Z"
                  fill="#25F4EE"
                />
                <path
                  d="M13.3472 21.1097C14.6881 21.1079 15.7904 20.0515 15.8491 18.7118V6.75693H18.0332C17.9886 6.50713 17.9673 6.25373 17.9696 6H14.9824V17.9433C14.9327 19.2898 13.8279 20.3564 12.4804 20.3586C12.0778 20.3552 11.6817 20.2561 11.3248 20.0697C11.794 20.7197 12.5456 21.1062 13.3472 21.1097Z"
                  fill="#25F4EE"
                />
                <path
                  d="M22.1125 10.8133V10.1489C21.3087 10.1491 20.5227 9.91193 19.8533 9.46704C20.4401 10.1493 21.2332 10.6219 22.1125 10.8133Z"
                  fill="#25F4EE"
                />
                <path
                  d="M19.8534 9.46693C19.1939 8.71597 18.8304 7.75063 18.8306 6.75122H18.0333C18.2414 7.86795 18.8996 8.84996 19.8534 9.46693Z"
                  fill="#FE2C55"
                />
                <path
                  d="M12.4747 15.343C11.324 15.3489 10.325 16.1372 10.0517 17.2551C9.77836 18.3729 10.3009 19.5333 11.3191 20.0695C10.7674 19.3078 10.6895 18.301 11.1174 17.4635C11.5453 16.626 12.4067 16.0992 13.3472 16.0999C13.598 16.103 13.8471 16.1419 14.0868 16.2155V13.1762C13.842 13.1395 13.5948 13.1202 13.3472 13.1184H13.2143V15.4296C12.9733 15.365 12.7242 15.3358 12.4747 15.343Z"
                  fill="#FE2C55"
                />
                <path
                  d="M22.1125 10.813V13.1242C20.6245 13.1214 19.1751 12.6503 17.9696 11.7779V17.8507C17.9632 20.881 15.5049 23.3341 12.4746 23.3341C11.3493 23.3361 10.251 22.9889 9.33136 22.3403C10.8662 23.991 13.2547 24.5344 15.3525 23.71C17.4504 22.8857 18.8301 20.8616 18.8306 18.6076V12.5522C20.0401 13.4189 21.4913 13.8838 22.9792 13.8812V10.9054C22.6879 10.9045 22.3975 10.8735 22.1125 10.813Z"
                  fill="#FE2C55"
                />
                <path
                  d="M17.9696 17.851V11.7782C19.1787 12.6456 20.6301 13.1105 22.1182 13.1071V10.7959C21.2391 10.6102 20.4441 10.1438 19.8532 9.46693C18.8994 8.84996 18.2413 7.86795 18.0331 6.75122H15.849V18.7119C15.8053 19.779 15.0906 20.7013 14.0682 21.01C13.0458 21.3186 11.9401 20.9459 11.3132 20.0813C10.295 19.5451 9.77243 18.3847 10.0457 17.2669C10.319 16.1491 11.3181 15.3607 12.4688 15.3548C12.7197 15.357 12.9688 15.396 13.2084 15.4704V13.1591C11.0368 13.1959 9.09197 14.5124 8.25091 16.5149C7.40985 18.5174 7.83142 20.8277 9.32553 22.4041C10.2543 23.0313 11.3541 23.3562 12.4746 23.3344C15.5049 23.3344 17.9632 20.8812 17.9696 17.851Z"
                  fill="white"
                /></svg
            ></a>
          </div>
        </div>

        <div class="v-col-12 v-col-sm-8 v-col-md-6 v-col-lg-4 v-col-xl-3">
          <div class="v-row">
            <div class="v-col-12">
              <h3 class="footer__title">Thể Loại</h3>
            </div>

            <div class="v-col-6">
              <div class="footer__nav">
                <a href="" class="v-list-item">Hành Động</a>
                <a href="" class="v-list-item">Tâm Lý</a>
                <a href="" class="v-list-item">Tình Cảm</a>
                <a href="" class="v-list-item">Hài Hước</a>
              </div>
            </div>

            <div class="v-col-6">
              <div class="footer__nav">
                <a href="" class="v-list-item">Kinh Dị</a>
                <a href="" class="v-list-item">Viễn Tưởng</a>
                <a href="" class="v-list-item">Võ Thuật</a>
                <a href="" class="v-list-item">Chính Kịch</a>
              </div>
            </div>
          </div>
        </div>

        <div class="v-col-12 v-col-sm-8 v-col-md-6 v-col-lg-4 v-col-xl-3">
          <div class="v-row">
            <div class="v-col-12">
              <h3 class="footer__title">Quốc Gia</h3>
            </div>

            <div class="v-col-6">
              <div class="footer__nav">
                <a href="" class="v-list-item">Việt Nam</a>
                <a href="" class="v-list-item">Trung Quốc</a>
                <a href="" class="v-list-item">Hàn Quốc</a>
                <a href="" class="v-list-item">Nhật Bản</a>
              </div>
            </div>

            <div class="v-col-6">
              <div class="footer__nav">
                <a href="" class="v-list-item">Âu Mỹ</a>
                <a href="" class="v-list-item">Ấn Độ</a>
                <a href="" class="v-list-item">Thái Lan</a>
                <a href="" class="v-list-item">Hồng Kông</a>
              </div>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>

    <div
      class="footer_copyright v-container border-t lg:border-gray-900/10 dark:border-gray-50/[0.2] py-0"
    >
      <div class="w-full py-4 text-center md:text-left">
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright © 2022 <a :href="app.author.link">{{ app.name }}</a
          >. All rights reserved. Made with <span class="text-red-500">❤</span>
          <div class="flex flex-col md:flex-row space-x-2 items-center md:float-right">
            <span class="text-center md:text-right"> Liên hệ: </span>
            <a href="" class="block bg-blue-500 rounded px-1 py-0.5 text-white text-xs"
              >ads@vutruphim.net</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
