<template>
  <button

    class="btn"
    :class="[{ 'btn-outline': btnOutline, 'btn-light': btnLight }]"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "MeatshoppeBaseButton",
  props: {
    btnText: {
      type: String,
      required: true,
    },

    btnOutline: {
      type: Boolean,
      required: false,
      default: false,
    },

    btnLight: {
      type: Boolean,
      required: false,
      default: false,
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
@import "../../sass/mixins";

.btn {
  outline: none;
  font-size: 1.4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 1rem 2.8rem;
  font-weight: 400;
  color: $light-high;
  background: $gradient;
  background-image: linear-gradient(to right, $main-tint, $main, $main-shade);
  cursor: pointer;
  border: none;
  width: 20rem;
  background-size: 300% 100%;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
    box-shadow: $shadow;
  }

  // btn outline
  &.btn-outline {
    background: none;
    background-color: transparent;
    border: 2px solid $main;
    color: $main;

    &:hover {
      background-color: $main;
      color: $light-high;
    }

    &:focus {
      outline: none;
      box-shadow: $shadow;
    }
  }

  // btn light
  &.btn-light {
    color: $black;
    background-image: linear-gradient(
      to right,
      $light-low,
      $light-mid,
      $light-high
    );

    &:hover {
      background-position: 100% 0;
      transition: all 0.4s ease-in-out;
    }

    &:focus {
      outline: none;
      box-shadow: $shadow;
    }
  }
}
</style>
