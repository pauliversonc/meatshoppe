<template>
  <h1 class="heading-one__wrapper">
    <span class="heading-one">{{ headingText }}</span>
    <p class="heading-one__desc">{{ headingDesc }}</p>
  </h1>
</template>

<script>
export default {
  name: "MeatshoppeBaseHeadingOne",
  props: {
    headingText: {
      type: String,
      required: true,
    },
    headingDesc: {
      type: String,
      required: false,
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
  .heading-one {
    font-size: 4.8rem;
    line-height: 1;
    letter-spacing: 1px;
    color: $black;

    &__desc {
    font-size: 1.6rem;
    color: $black-tint;
    // margin-top: 1rem;
    font-weight: normal;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
  }
    
}
</style>
