<template lang="">
  <section class="bg-yellow">
    <!-- <div class="container"> -->
    <Splide :options="options" aria-label="fibo pizzas" class="h-full">
      <SplideSlide>
        <img src="@/assets/img/slide1.svg" alt="Sample 1" class="h-[300px]" />
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/img/slide1.svg" alt="Sample 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/img/slide1.svg" alt="Sample 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="@/assets/img/slide1.svg" alt="Sample 2" />
      </SplideSlide>
    </Splide>
    <!-- </div> -->
  </section>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
// Default theme
import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";

// or only core styles
import "@splidejs/vue-splide/css/core";
export default {
  name: "HeaderSlider",
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
    };

    return { options };
  },
};
</script>
