<template>
  <h5
    class="heading-five"
    :class="{'mb-2': marginBottom, 'center': center}"
    :data-before-text="headingTitle"
  >
    {{ headingTitle }}
  </h5>
</template>

<script>
export default {
  name: "MeatshoppeBaseHeadingFive",
  props: {
    headingTitle: { // reference ng buong BaseInput
      type: String,
      required: true,
    },

    marginBottom: {
      type: Boolean,
      required: false,
      default: false,
    },

    center: {
      type: Boolean,
      required: false,
      default: false,
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
.heading-five {
  font-size: 3.6rem;
  line-height: 1;

  position: relative;
  z-index: 9;

  &.mb-2 {
    margin-bottom: 2rem;
  }

  &::before {
    content: attr(
      data-before-text
    ); /* Use the data attribute to store the text */
    // z-index: 8;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100rem;
    // width: calc(100% * 3);
    transform: translate(0%, 4%);
    font-size: 10.4rem;
    z-index: -9;
    color: $light-low;

    // 865 and below
    @media only screen and (max-width: 54.0625em) {
      font-size: 8.6rem;
    }
  }

  &.center::before {
    transform: translate(-15%, 4%);

    // 865 and below
    @media only screen and (max-width: 54.0625em) {
      transform: translate(-11%, 4%);
    }
  }
}
</style>
