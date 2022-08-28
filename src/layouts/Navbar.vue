<template>
  <header class="header">
    <div class="hidden md:flex pt-4">
      <div class="container">
        <div class="grid grid-cols-2">
          <div
            class="flex items-center justify-start space-x-[20px] lg:space-x-[50px]"
          >
            <div class="flex items-center justify-center">
              <router-link to="/">
                <img
                  :src="[images.logo]"
                  alt="logo"
                  class="pointer-events-none"
                />
              </router-link>
            </div>
            <div class="flex flex-col">
              <h3 class="font-semibold text-[17px] leading-5 mb-2">
                Доставка пасты <span class="text-yellow">Москва</span>
              </h3>
              <div class="flex items-center justify-between">
                <div class="flex mr-5">
                  <img
                    src="https://yastatic.net/s3/eda-front/www/assets/desktop.favicon-32x32.699835e62a0f7582c32d.png"
                    alt="icon"
                    class="mr-2 w-5 h-5"
                  />
                  <h4 class="flex items-center font-bold text-[13px] leading-4">
                    Яндекс еда
                    <div class="rounded-full bg-[#FF2E65] w-1 h-1 mx-2" />
                    4.8
                    <font-awesome-icon
                      icon="fa-solid fa-star"
                      class="text-yellow ml-1"
                    />
                  </h4>
                </div>
                <div class="flex">
                  <h3 class="flex items-center font-bold text-[13px] leading-4">
                    Время доставки
                    <div class="rounded-full bg-[#FF2E65] w-1 h-1 mx-2" />
                    от 31 мин
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <!-- end -->
          <div class="flex items-center justify-end space-x-7">
            <a class="bg-lightGray py-2 px-7 rounded-[28px]">
              <span class="font-bold text-gray">Заказать звонок</span>
            </a>
            <a href="tel:+998900198505">
              <span class="font-bold text-2xl text-yellow uppercase"
                >998 90 019 85 05</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav class="bg-white py-4 sm:py-5 md:py-6 shadow-lightWhite nav">
      <!-- shadow-lg -->
      <div class="container">
        <div class="flex items-center justify-between">
          <!-- space-x-5 -->
          <div class="flex items-center justify-center nav-logo">
            <router-link to="/">
              <!-- <div> -->
              <img
                :src="[images.logo]"
                alt="logo"
                class="pointer-events-none"
              />
              <!-- </div> -->
            </router-link>
          </div>
          <ul class="hidden md:flex space-x-3 lg:space-x-6">
            <li v-for="link in links" :key="link.message">
              <router-link
                :to="link.to"
                class="font-semibold text-[15px] leading-4"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
          <div
            class="flex items-center justify-start sm:justify-start sm:space-x-5 md:space-x-4 lg:space-x-7"
          >
            <a href="tel:+998900198505" class="hidden sm:block md:hidden">
              <span class="font-bold text-2xl text-yellow uppercase"
                >998 90 019 85 05</span
              >
            </a>
            <button class="bg-transparent hidden md:block signup">
              <span class="text-gray font-bold text-sm">Войти</span>
            </button>
            <button
              class="hidden sm:flex items-center py-2 px-6 md:px-4 lg:px-6 bg-yellow font-bold text-default text-[16px] leading-7 md:text-sm rounded-lg"
            >
              <span>Корзина</span>
              <div class="h-3 w-[2px] bg-default mx-4 md:mx-2 lg:mx-4" />
              <span>15</span>
            </button>
            <div class="lg:hidden flex items-center justify-center">
              <button class="flex items-center justify-center" @click="onClick">
                <span class="pointer-events-none">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    font-size="30"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { images, links } from "@/constants";

export default {
  name: "NavbarLayout",
  data() {
    return {
      images: images,
      links: links,
      // scroll: null,
    };
  },
  created() {
    window.addEventListener("scroll", this.onNavScroll);
  },
  methods: {
    onNavScroll() {
      let y = window.scrollY;
      let nav = document.querySelector(".nav");
      let logo = document.querySelector(".nav-logo");
      let btn = document.querySelector(".signup");
      btn.classList.add("block");
      if (y === 6) {
        nav.style = `position:fixed; top:0; left:0; z-index: 11; width: 100%`;
        logo.classList.remove("hidden");
        logo.classList.add("flex");
      }
    },
    onClick() {
      console.log("clicked");
    },
  },
};

// scroll 75 px
</script>
