<script lang="ts" setup>
import { capitalize } from '~/utils/str';

// composable
const { t } = useLang();

// compiler macro
definePageMeta({
  layout: 'page',
});
useHead(() => ({
  title: capitalize(t('pages.category.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.category.description'),
    },
  ],
}));
</script>

<template>
  <!-- details -->
  <section class="section section--gradient">
    <div class="section__bg"></div>
    <v-container>
      <!-- article -->
      <v-row>
        <v-col cols="12">
          <a class="article__trailer open-video"></a>
          <!-- article content -->
          <div class="article__content">
            <h1>PHIM CỔ TRANG</h1>
            <ul class="list">
              <li>Trang chủ</li>
              <li>Thể loại</li>
              <li>Phim cổ trang</li>
            </ul>
          </div>
          <!-- end article content -->
          <a class="article__trailer open-video"></a>
        </v-col>
      </v-row>
      <!-- end article -->
    </v-container>
  </section>

  <!-- end details -->
  <v-container class="mt-10">
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="2">
        <v-select :items="items" label="Phân loại" dense></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="2">
        <v-select :items="items" label="Tình trạng" dense></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="2">
        <v-select :items="items" label="Quốc gia" dense></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="2">
        <v-select :items="items" label="Năm" dense></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="2">
        <v-select :items="items" label="Thể loại" :dense="true" height="10"></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="2">
        <v-btn class="bg-info w-100" rounded="pill"> Tìm kiếm </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <div class="card">
          <a href="details.html" class="card__cover">
            <img
              src="https://www.themoviedb.org/t/p/original/tkvqZp6b3NenFdoRDsM45Okm5jz.jpg"
              alt=""
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="live__status">HD</span>
          </a>
          <span class="card__rating">36/36 Tập</span>
          <h3 class="card__title card__title--subs">
            <a href="details.html">Cẩm Tú Nam Ca</a>
          </h3>
          <ul class="card__list card__list--subs">
            <li>The Song of Glory (2020)</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="card">
          <a href="details.html" class="card__cover">
            <img
              src="https://www.themoviedb.org/t/p/original/tkvqZp6b3NenFdoRDsM45Okm5jz.jpg"
              alt=""
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="live__status">HD</span>
          </a>
          <span class="card__rating">36/36 Tập</span>
          <h3 class="card__title card__title--subs">
            <a href="details.html">Cẩm Tú Nam Ca</a>
          </h3>
          <ul class="card__list card__list--subs">
            <li>The Song of Glory (2020)</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="card">
          <a href="details.html" class="card__cover">
            <img
              src="https://www.themoviedb.org/t/p/original/tkvqZp6b3NenFdoRDsM45Okm5jz.jpg"
              alt=""
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="live__status">HD</span>
          </a>
          <span class="card__rating">36/36 Tập</span>
          <h3 class="card__title card__title--subs">
            <a href="details.html">Cẩm Tú Nam Ca</a>
          </h3>
          <ul class="card__list card__list--subs">
            <li>The Song of Glory (2020)</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="card">
          <a href="details.html" class="card__cover">
            <img
              src="https://www.themoviedb.org/t/p/original/tkvqZp6b3NenFdoRDsM45Okm5jz.jpg"
              alt=""
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="live__status">HD</span>
          </a>
          <span class="card__rating">36/36 Tập</span>
          <h3 class="card__title card__title--subs">
            <a href="details.html">Cẩm Tú Nam Ca</a>
          </h3>
          <ul class="card__list card__list--subs">
            <li>The Song of Glory (2020)</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="card">
          <a href="details.html" class="card__cover">
            <img
              src="https://www.themoviedb.org/t/p/original/tkvqZp6b3NenFdoRDsM45Okm5jz.jpg"
              alt=""
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="live__status">HD</span>
          </a>
          <span class="card__rating">36/36 Tập</span>
          <h3 class="card__title card__title--subs">
            <a href="details.html">Cẩm Tú Nam Ca</a>
          </h3>
          <ul class="card__list card__list--subs">
            <li>The Song of Glory (2020)</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="card">
          <a href="details.html" class="card__cover">
            <img
              src="https://www.themoviedb.org/t/p/original/tkvqZp6b3NenFdoRDsM45Okm5jz.jpg"
              alt=""
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="live__status">HD</span>
          </a>
          <span class="card__rating">36/36 Tập</span>
          <h3 class="card__title card__title--subs">
            <a href="details.html">Cẩm Tú Nam Ca</a>
          </h3>
          <ul class="card__list card__list--subs">
            <li>The Song of Glory (2020)</li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <div class="text-center mt-15">
      <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
    </div>
  </v-container>
</template>
