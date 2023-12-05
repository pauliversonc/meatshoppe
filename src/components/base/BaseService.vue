<template>
  <div
    class="service-card"
    :class="{ 'service-card--main': serviceMain }"

  >
    <div class="service-card__icon-box">
      <svg class="service-card__icon">
        <use :xlink:href="iconHref"></use>
      </svg>
    </div>
    <span class="service-card__title">{{ serviceTitle }}</span>
    <span class="service-card__desc">{{ serviceDesc }}</span>

    <svg class="service-card__icon-bg">
      <use :xlink:href="iconHref"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeBaseService",
  props: {
    serviceTitle: String,
    serviceDesc: String,
    serviceIcon: String,
    serviceMain: Boolean,
  },

  computed: {
    iconHref() {
      return `/images/icons/sprite.svg#icon-${this.serviceIcon}`;
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

.service-card {
  border-radius: 4px;
  overflow: hidden;
  background-color: $light-mid;
  box-shadow: $shadow;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: start;

  position: relative;

  @include box-hover-animation;

  &__icon {
    height: 3.2rem;
    width: 3.2rem;

    // border: 1px solid red;
    fill: $main;
  }

  &__title {
    display: block;
    font-size: 2.1rem;
    font-weight: 600;
    color: $black;
    margin-top: 1rem;
    margin-bottom: -0.4rem;
    z-index: 2;
  }

  &__desc {
    display: block;
    font-size: 1.6rem;
    color: $black-tint;
    z-index: 2;
    margin-top: 0.4rem;

    min-height: 3em; /* Two line breaks plus a little extra space */
    line-height: 1.2em; /* Adjust line height to your liking */
  }

  &__icon-bg {
    height: 25rem;
    width: 25rem;

    position: absolute;

    top: 0;
    right: 0;

    z-index: 1;

    transform: translate(25%, 10%);

    fill: $light-low;
  }

  &--main {
    // background-color: $main;
    background-image: linear-gradient(315deg, $main-shade 10%, $main-tint 100%);

    .service-card__icon {
      fill: $white;
    }

    .service-card__title {
      color: $light-high;
    }

    .service-card__desc {
      color: $white;
    }

    .service-card__icon-bg {
      fill: $main-shade;
    }
  }
}
</style>
