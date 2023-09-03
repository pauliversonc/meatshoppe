<template>
  <div
    class="headingTwo"
    v-motion
    :initial="{
      y: -20,
      opacity: 0,
      scale: 0,
    }"
    :visibleOnce="{
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 50,
        mass: 1,
      },
    }"
  >
    <span class="headingTwo__subh">{{ headingSpan }}</span>
    <h2 class="headingTwo__text">{{ headingText }}</h2>
    <p class="headingTwo__desc">{{ headingDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeBaseHeadingTwo",
  props: {
    headingSpan: {
      type: String,
      required: false,
      default: "Our Pork Products",
    },
    headingText: {
      type: String,
      required: false,
      default: "Check our fantastic Pork",
    },
    headingDesc: {
      type: String,
      required: false,
      default: "Lorem must be angry right now! ",
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.headingTwo {
  margin: 0 auto 2rem auto;
  max-width: 120rem;
  // border: 1px solid red;
  text-align: center;

  &__subh {
    text-transform: uppercase;
    font-size: 1rem;
    color: $main;
    font-weight: 600;
  }

  &__text {
    font-size: 3.2rem;
    font-weight: 600;
    // letter-spacing: -2px;
    line-height: 1.1;
    color: $black;
  }

  &__desc {
    font-size: 1.6rem;
    color: $black-tint;
    // margin-top: 1rem;
  }
}
</style>
