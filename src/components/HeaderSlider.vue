<template lang="">
  <section class="bg-yellow h-[300px]">
    <div class="container">
      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
          <img src="image1.jpg" alt="Sample 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Sample 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Sample 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Sample 2" />
        </SplideSlide>
      </Splide>
    </div>
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
};
</script>
