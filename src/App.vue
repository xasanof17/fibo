<template>
  <div class="app font-mont text-default">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { Navbar } from "./layouts";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
