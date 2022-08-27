<template>
  <section class="news mt-[70px] mb-[50px]">
    <div class="container">
      <div class="flex flex-col">
        <h2 class="text-black font-bold text-xl mb-8">Новинки</h2>
        <div class="grid grid-cols-[repeat(4,200px)] md:grid-cols-[repeat(4,226px)] lg:grid-cols-[repeat(4,272px)] gap-[30px] overflow-x-scroll md:overflow-visible sm:pb-2 md:pb-0">
          <div v-for="(card, index) in cards" :key="card" :index="index" class="bg-white rounded-xl shadow-lg shadow-lightWhite p-4">
            <div class="flex items-center space-x-6">
              <div class="flex items-center justify-center">
                <img :src="card.img" :alt="card.title" width="70" height="70">
              </div>
              <div class="flex flex-col">
                <h3 class="text-black font-bold text-lg">{{card.title}}</h3>
                <p class="text-yellow font-bold text-md">{{card.cost}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NewsComponent",
  data() {
    return {
      cards: [
        {
          img: "https://tashirpizza.ru/images/products/278-1033.jpg",
          title: "Карбонара",
          cost: "от 120 ₽",
        },
        {
          img: "https://tashirpizza.ru/images/products/278-1033.jpg",
          title: "Карбонара",
          cost: "от 120 ₽",
        },
        {
          img: "https://tashirpizza.ru/images/products/278-1033.jpg",
          title: "Карбонара",
          cost: "от 120 ₽",
        },
        {
          img: "https://tashirpizza.ru/images/products/278-1033.jpg",
          title: "Карбонара",
          cost: "от 120 ₽",
        },
      ],
    };
  },
};
</script>
