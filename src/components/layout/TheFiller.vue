<template>
  <div
    class="filler"
    v-motion
    :initial="{
      x: -200,
      opacity: 0,
    }"
    :visibleOnce="{
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 100,
        mass: 1,
        delay: 300,
      },
    }"
  >
    <span class="filler__text">Get to know our premium meat and service</span>
    <a class="filler__link" href="#"> learn more</a>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeTheFiller",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.filler {
  width: 100%;
  // background: linear-gradient(315deg, #91000B 10%, #EA4A55 100%);
  background-color: $light-high;
  padding: 8rem 2rem;
  font-size: 3.2rem;
  text-align: center;
  &__text {
    color: $black;
  }

  &__link:link,
  &__link:visited {
    background: linear-gradient(315deg, $main-shade 10%, $main-tint 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 600;
  }
}
</style>
