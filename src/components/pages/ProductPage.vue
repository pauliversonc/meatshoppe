<template>
  <div class="page">
    <div class="page__wrapper">
        <div class="page__gallery">

          <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>
          </Carousel>

          <Carousel
            id="thumbnails"
            :items-to-show="5"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__thumbnail" @click="slideTo(slide - 1)">{{ slide }}</div>
            </Slide>
          </Carousel>

        </div>

        <div class="page__content">

          <!-- Main Details -->
          <div class="page__content--brand">ADIDAS</div>
          <div class="page__content--name">Lorem ipsum dolor sit amet consectetur.</div>
          <div class="page__content--price">$ 124.00</div>
          <div class="page__content--stock">In Stock</div>
          <div class="page__content--weight"></div>
          <!-- ./Main Details -->

        </div>


        <div class="page__collapse">

            <!-- Collapse -->
            <BaseCollapse
            :border-bottom="true"
            :border-top="true"
            :active-collapse="activeCollpase.description"
            collapse-name="description"
            :category-count="0"
            @on-toggle-collapse="handleToggleCollapse"
            >

            <!-- category slot -->
            <h1>Testing</h1>
            <!-- ./category slot -->


            </BaseCollapse>

            <BaseCollapse
            :border-bottom="true"
            :border-top="true"
            :active-collapse="activeCollpase.details"
            collapse-name="details"
            :category-count="0"
            @on-toggle-collapse="handleToggleCollapse"
            >

            <!-- category slot -->
            <h1>Testing</h1>
            <!-- ./category slot -->


            </BaseCollapse>

            <BaseCollapse
            :border-bottom="true"
            :border-top="true"
            :active-collapse="activeCollpase.delivery"
            collapse-name="delivery"
            :category-count="0"
            @on-toggle-collapse="handleToggleCollapse"
            >

            <!-- category slot -->
            <h1>Testing</h1>
            <!-- ./category slot -->


            </BaseCollapse>
            <!-- ./Collapse -->

        </div>

        <div class="page__suggestions">
          <BaseHeadingFive 
          heading-title="You may also like"
          :margin-bottom="true"
          />

          <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>

        </div>
    </div>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue3-carousel';
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  name: 'MeatshoppeProductPage',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      currentSlide: 0,
      activeCollpase: {
        description: false,
        details: false,
        delivery: false,
      },

      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        378: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        543: {
          itemsToShow: 3,
          snapAlign: "start",
        },

        // 700px and up
        769: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        // 1024 and up
        1041: {
          itemsToShow: 5  ,
          snapAlign: "start",
        },
      },

 
      
    };

    
  },

  mounted() {
    
  },

  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
    handleToggleCollapse(key) {

      console.log(key)
      this.activeCollpase[key] = !this.activeCollpase[key]

    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";

.page {
  // padding: 7rem 2rem 8rem 2rem;
  padding: 8rem 2rem;


  
  &__wrapper {
    border: 1px solid red;
    max-width: 120rem;
    margin: 0 auto;

    display: grid;
    // grid-template-columns: 60% 40%;
    grid-template-columns: 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr;
    // gap: 2rem;

    // align-items: start;

    @include respond(tab-port) {
      grid-template-columns: 1fr;
    }
    
  }

  &__gallery{
    grid-row: 1/4;
    margin-right: 2rem;

    @include respond(tab-port) {
      order: 2;
      grid-row: auto;
      margin-right: 0;
      // grid-column: 1;
    }
  }
  

  &__content {
    // border: 1px solid blue;
    color: $black-tint;

    @include respond(tab-port) {
      order: 1;
    }
    


    &--brand {
    //  border: 1px solid blue;

      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 600;
      overflow-wrap: break-word;

      line-height: 1;
      margin-bottom: 1rem;
      // margin: 1rem 0
    }

    &--name {
      // border: 1px solid blue;

      font-size: 2.4rem;
      font-weight: 600;
      overflow-wrap: break-word;
      line-height: 1;
      margin-bottom: 1.4rem;
    }

    &--price {
      // border: 1px solid blue;

      font-size: 2.4rem;
      font-weight: 600;
      color: $main;
      line-height: 1;
      margin-bottom: 1.4rem;
    }

    &--stock {
      // border: 1px solid blue;

      line-height: 1;
      font-size: 1.6rem;
      margin-bottom: 1.4rem;
    }
    
    &--weight {
      font-size: 1.6rem;
    }
  }

  &__collapse {
    grid-column: 2;
    @include respond(tab-port) {
      grid-column: 1;
      order: 3;
      // margin-top: 2rem;
    }
  }

  &__suggestions {
    margin-top: 6rem;
    grid-column: 1/-1;
    border: 1px solid green;

    @include respond(tab-port) {
      order: 4;
    }
  }

}


.carousel__item {
  min-height: 40rem;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  // border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__thumbnail { 
  min-height: 100px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;

  // for content to center
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 2px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>