<template>
  <HeaderSlider />
  <News />
  <Foods title="Паста" :cards="pizzas" />
  <Foods title="Пицца" :cards="pizzas" />
  <!-- <section class="home h-[100px]">this is a home page</section> -->
</template>
<script>
import { HeaderSlider, News, Foods } from "@/components";
import { pizzas } from "@/constants";
export default {
  name: "HomePage",
  components: { HeaderSlider, News, Foods },
  data() {
    return {
      pizzas: pizzas,
    };
  },
};
</script>
