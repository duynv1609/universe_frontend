<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
const breakpoints = {
  0: {
    items: 1,
  },
  480: {
    items: 1,
  },
  667: {
    items: 1.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
}
</script>

<template>
  <Carousel
    snap-align="center"
    :autoplay="5000"
    :wrap-around="true"
    :breakpoints="breakpoints"
  >
    <Slide :key="slide">
      <div class="slider-info banner-view">
        <img
          src="https://www.themoviedb.org/t/p/original/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg"
        />
        <div class="banner-info">
          <h3>Test Test</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
              class="over-para"
            >
              Consequuntur hic odio voluptatem tenetur consequatur.</span
            >
          </p>
          <a href="#small-dialog3" class="popup-with-zoom-anim play-view">
            <span class="video-play-icon">
              <svg
                width="40"
                height="40"
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
            </span>
            <h6>Xem trailer</h6>
          </a>
        </div>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="slider-info banner-view">
        <img
          src="https://www.themoviedb.org/t/p/original/93SxdkiR3gBcbG5FxIt0DCBttul.jpg"
        />
        <div class="banner-info">
          <h3>Test Test</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
              class="over-para"
            >
              Consequuntur hic odio voluptatem tenetur consequatur.</span
            >
          </p>
          <a href="#small-dialog3" class="popup-with-zoom-anim play-view">
            <span class="video-play-icon">
              <svg
                width="40"
                height="40"
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
            </span>
            <h6>Xem trailer</h6>
          </a>
        </div>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="slider-info banner-view">
        <img
          src="https://www.themoviedb.org/t/p/original/jLH03sLbkAGxrThdW6b2lrwwE4X.jpg"
        />
        <div class="banner-info">
          <h3>Test Test</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
              class="over-para"
            >
              Consequuntur hic odio voluptatem tenetur consequatur.</span
            >
          </p>
          <a href="#small-dialog3" class="popup-with-zoom-anim play-view">
            <span class="video-play-icon">
              <svg
                width="40"
                height="40"
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
            </span>
            <h6>Xem trailer</h6>
          </a>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
