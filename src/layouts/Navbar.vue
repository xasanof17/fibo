<template>
  <header class="header">
    <div class="flex pt-4">
      <div class="container">
        <div class="grid grid-cols-2">
          <div class="flex items-center justify-start space-x-[50px]">
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
                  <img :src="[images.yandexicon]" alt="icon" class="mr-2" />
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
    <nav class="bg-white py-6 shadow-lightWhite" @scroll="navScroll">
      <!-- shadow-lg -->
      <div class="container">
        <div class="flex items-center justify-between">
          <!-- space-x-5 -->
          <div class="lg:hidden flex items-center justify-center">
            <router-link to="/">
              <img
                :src="[images.logo]"
                alt="logo"
                class="pointer-events-none"
              />
            </router-link>
          </div>
          <ul class="flex space-x-6">
            <li v-for="link in links" :key="link.message">
              <router-link
                :to="link.to"
                class="font-semibold text-[15px] leading-4"
              >
                {{ link.title }}
              </router-link>
            </li>
          </ul>
          <div class="flex space-x-7">
            <button class="bg-transparent">
              <span class="text-gray font-bold text-sm">Войти</span>
            </button>
            <button
              class="py-2 px-6 bg-yellow font-bold text-default text-sm flex items-center rounded-lg"
            >
              <span>Корзина</span>
              <div class="h-3 w-[2px] bg-default mx-4" />
              <span>15</span>
            </button>
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
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    navScroll() {
      // window.addEventListener("scroll", () => {
        console.log(window.scrollY);
      // });
      // alert("Dddd");
      // if (window.scrollY > 50) {
      //   el.setAttribute("style", "background-color: red;");
      // }
      // return window.scrollY > 100;
    },
  },
};

// scroll 75 px
</script>
