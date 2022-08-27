<template>
  <section class="foods mb-[45px]">
    <div class="container">
      <div class="flex flex-col">
        <h2 class="font-extrabold text-[32px] leading-[40px] text-yellow mb-6">
          {{ title }}
        </h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] lg:gap-[20px]"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            :class="`bg-white hover:shadow-md duration-200 p-3 hover:rounded-md ${
              card.new ? 'relative' : ''
            }`"
          >
            <div
              :class="`absolute top-3 right-3 z-10 rounded-xl p-2 bg-[#e91218]  ${
                card.new ? 'block' : 'hidden'
              }`"
            >
              <span class="uppercase text-base text-white">new</span>
            </div>
            <div class="flex items-center justify-center mb-2">
              <img :src="card.img" :alt="card.title" class="w-full h-[250px]" />
            </div>
            <h3
              class="font-extrabold text-base sm:text-[24px] leading-7 mb-4 text-gray"
            >
              {{ card.title }}
            </h3>
            <p class="font-medium text-[13px] leading-5 mb-6">
              {{ card.text }}
            </p>
            <div class="flex items-center justify-between">
              <p class="font-bold text-[22px] leading-5">
                от<span class="mx-1">{{ card.cost }} ₽</span>
              </p>
              <button
                class="py-2 px-6 rounded-lg bg-yellow font-bold text-base text-white focus:text-[#473E43] hover:text-[#6f646a]"
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FoodsComponent",
  props: {
    title: String,
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
