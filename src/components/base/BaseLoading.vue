<template>
  <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'MeatshoppeBaseLoading',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

@keyframes bouncing-loader {
  to {
      opacity: 0.1;
      transform: translate3d(0, -1rem, 0);
  }
}
.bouncing-loader {
  display: flex;
  // border: 1px solid red;
  transform: translateY(4rem);
  justify-content: center;
  align-items: center;
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 0 0.2rem;
  background: $dark-high;
  animation: bouncing-loader .8s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
}
.bouncing-loader > div:nth-child(4) {
    animation-delay: 0.6s;
}
</style>