<template>
  <h1 class="heading-one__wrapper"
      :class="[{'p-2': addPadding}]"
  >
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
    addPadding: {
      type: Boolean,
      required: false,
      default: true,
    }
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
    text-align: center;

    &__desc {
    font-size: 1.6rem;
    color: $black-tint;
    // margin-top: 1rem;
    font-weight: normal;

    @media only screen and (max-width: 37.5em) {
      text-align: center;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 37.5em) {
      background: rgba(255,255,255,0.5);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.25);
    }
  }

  &__wrapper.p-2 {
    @media only screen and (max-width: 37.5em) {
      padding: 2rem;
    }
  }
    
}


</style>
