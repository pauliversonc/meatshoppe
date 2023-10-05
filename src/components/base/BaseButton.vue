<template>
  <button

    class="btn "
    :class="[{ 'btn-outline': btnOutline, 'btn-light': btnLight, 'resize': btnResize, 'btn-outline--dark': btnOutlineDark, 'full-width': btnFullWidth }]"
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

    btnResize: {
      type: Boolean,
      required: false,
      default: false,
    },

    btnOutlineDark: {
      type: Boolean,
      required: false,
      default: false,
    },

    btnFullWidth: {
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
  font-weight: 600;
  color: $light-high;
  background: $gradient;
  background-image: linear-gradient(to right, $main-tint, $main, $main-shade);
  cursor: pointer;
  border: none;
  width: 20rem;
  background-size: 300% 100%;
  transition: all 0.4s ease-in-out;

  &.resize {
    @include respond(phone-land) {
      width: auto;
    }
  }

  &.full-width {
    width: 100%;
  }

  &:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
    box-shadow: $shadow;
  }

  // btn outline
  &.btn-outline {
    background: none;
    background-color: transparent;
    // border: solid thin $main;
    border: 2px solid $main;
    color: $main;

    &:hover {
      // border: solid thin $main;
      border: 2px solid $main;
      background-color: $main;
      color: $light-high;
    }

    &:focus {
      outline: none;
      box-shadow: $shadow;
    }

    &--dark {
      color: $dark-low;
      // border: solid $dark-low;
      border-color: $dark-low;
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
