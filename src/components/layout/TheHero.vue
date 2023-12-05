<template>
  <div class="hero__wrapper"
  v-motion
  :initial="{
    x: -200,
    opacity: 0,
  }"
  :enter="{
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 100,
      mass: 1,
      delay: 700
    },
  }"
  >

    <div class="hero">

      <Carousel :autoplay="3000" :pauseAutoplayOnHover="true" :wrapAround="true">
        <Slide v-for="slide in 2" :key="slide">

          <picture>
            <source :srcset="`/src/assets/images/banners/banner-${slide}-320.png`"  media="(max-width: 25em)">
            <source :srcset="`/src/assets/images/banners/banner-${slide}-768.png`"  media="(min-width: 25.06em) and (max-width: 37.5em)">
            <img class="hero__img" :src="`/src/assets/images/banners/banner-${slide}-1028.png`" :alt="slide">
          </picture>
          
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>

        
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "MeatshoppeTheHero",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
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

.hero {

  margin: 0 auto;
  max-width: 120rem;

  &__wrapper {
    padding: 9rem 2rem 8rem 2rem;

        //  400 px below
    @media only screen and (max-width: 25em) {
      padding: 9rem 2rem 2rem 2rem;

    }
  }

  &__img {
    width: 100%; 
    height: 100%;
  }
}




</style>
