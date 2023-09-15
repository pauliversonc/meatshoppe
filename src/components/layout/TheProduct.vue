<template>
  <div class="product-l__wrapper"
    :class="{'pt-8' : paddingT}"
  >
    <BaseHeadingTwo
      :heading-span="headingSpan"
      :heading-text="headingText"
      :heading-desc="headingDesc"
    />

    <BaseOffer

      :span="span"
      :sub-text="subText"
      :text="text"
      :paragraph="paragraph"
      :align="align"
      :image-name="imageName"
    >
    </BaseOffer>

    <div class="product-l">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="product in products" :key="product.id">
          <BaseProduct
            :id="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :discount-percentage="product.discountPercentage"
            :rating="product.rating"
            :stock="product.stock"
            :brand="product.brand"
            :category="product.category"
            :thumbnail="product.thumbnail"
            :images="product.images"
          />

        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import BaseOffer from "../base/BaseOffer.vue";
export default {
  name: "MeatshoppeTheProduct",
  components: {
    Carousel,
    Slide,
    Navigation,
    BaseOffer,
  },

  props: {
    paddingT: Boolean,

    products: {
      type: Array,
    },
    headingSpan:String,
    headingText:String,
    headingDesc:String,

    span: String,
    subText: String,
    text: String,
    paragraph: String,
    align: Boolean,
    imageName: String,


  },

  data() {
    return {
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
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },

  mounted() {
   
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.product-l {
  margin: 0 auto;
  max-width: 121rem;

  

  &__wrapper {
    background-color: $light-mid;
    // padding: 8rem 0;
    padding-bottom: 8rem;
    padding-left: 2rem;
    padding-right: 2rem;

    // border: 1px solid red;

    &.pt-8{
      padding-top: 8rem;
    }
  }

  .carousel__slide {
    padding: 0.5rem;
  }
}
</style>
