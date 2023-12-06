<template>
  <TheHeader ></TheHeader>
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "MeatshoppeApp",
  components: {
    TheHeader,
    TheFooter,
  },

  data() {
    return {
      products: [
        
      ]
    };
  },

  mounted() {},

  methods: {},
};
</script>

