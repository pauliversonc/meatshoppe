<template>
  <div class="feature__wrapper " >
    <BaseHeadingTwo
      heading-span="See our featured products"
      heading-text="Featured Products"
      heading-desc="lorem is the best auto generator we ever had"

      
    />

    <div class="feature" v-if="!isCarouselOn">
      <BaseProduct v-for="index in featureCardCount" :key="index" />
    </div>

    <div class="feature" v-else>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="index in featureCardCount" :key="index">
          <BaseProduct />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="feature__btn-box">
      <BaseButton btn-text="See more" />
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
// import BaseProduct from "../base/BaseProduct.vue";

export default {
  name: "MeatshoppeTheFeature",
  components: { Carousel, Slide, Navigation },

  watch: {
    vp(newValue) {
      this.isCarouselOn = newValue <= 578 ? true : false;
    },
  },
  computed: {
    featureCardCount() {
      if (this.vp > 1040) {
        return 10;
      }

      if (this.vp > 768 && this.vp <= 1040) {
        return 8;
      }

      if (this.vp > 578 && this.vp <= 768) {
        return 9;
      }

      if (this.vp <= 578) {
        return 10;
      }
    },
  },

  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },

      breakpoints: {
        378: {
          itemsToShow: 2,
          snapAlign: "start",
        },

        543: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
      vp: 1200,
      isCarouselOn: false,
    };
  },

  mounted() {
    window.addEventListener("resize", this.handleResizeVP);
    // Initial check for screen width on component mount
    this.handleResizeVP();
  },

  methods: {
    handleResizeVP() {
      // Update the isMobileView value based on the screen width
      this.vp = window.innerWidth;
    },
  },

  beforeUnmount() {
    // Remove the window resize listener when the component is unmounted
    window.removeEventListener("resize", this.handleResizeVP);
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";
.feature {
  // padding: 2rem;
  margin: 0 auto;
  max-width: 121rem;
  // border: 1px solid red;
  // background-color: $light-mid;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;

  // 1040 px below
  @media only screen and (max-width: 65em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @include respond(tab-port) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  // 578 px below
  @media only screen and (max-width: 36.125em) {
    display: block;
  }

  &__wrapper {
    background-color: $light-mid;
    padding: 8rem 2rem;

  // 576 px below
  @media only screen and (max-width: 36.125em) {
    padding: 8rem 1.5rem;
  }
  }

  &__btn-box {
    margin-top: 4rem;
    text-align: center;
  }
}

.carousel__slide {
  padding: 0.5rem;
}
</style>
