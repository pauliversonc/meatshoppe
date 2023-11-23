<template>
  <div
    class="category__wrapper"
    v-motion
    :initial="{
      y: 200,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 100,
        mass: 1,
        delay: 1000,
      },
    }"
  >
    <h3 class="category__heading" v-if="isMobileView">
      Shop by <span class="category__span">Category</span>
    </h3>

    <!-- Desktop view -->
    <div class="category" v-if="!isMobileView">
      <!-- card -->
      <div
        class="category__card"
        v-for="(category, index) in categories"
        :key="index"
      >
        <img
          class="category__img"
          :src="`src/assets/images/categories/${category.catImgName}`"
          :alt="category.catImgName"
        />

        <div class="category__card-overlay">
          <BaseButton :btn-text="category.catBtnName" :btn-light="true" @click="changeRouteBy(category.catBtnName)"/>
        </div>
      </div>
      <!-- /.card -->
    </div>

    <!-- laptop view -->
    <div class="category" v-else>
      <Carousel
        :autoplay="2000"
        :pauseAutoplayOnHover="true"
        :wrapAround="true"
      >
        <Slide v-for="(category, index) in categories" :key="index">
          <!-- card -->

          <div class="category__card">
            <img
              class="category__img"
              :src="`src/assets/images/categories/${category.catImgName}`"
              :alt="category.catImgName"
            />

            <div class="category__card-overlay">
              <BaseButton :btn-text="category.catBtnName" :btn-light="true" />
            </div>
          </div>
          <!-- /.card -->
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
  name: "MeatshoppeTheCategory",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      categories: [
        { catImgName: "category-1-min.jpg", catBtnName: "Shop Beef" },
        { catImgName: "category-2-min.jpg", catBtnName: "Shop Chicken" },
        { catImgName: "category-3-min.jpg", catBtnName: "Shop Pork" },
        { catImgName: "category-4-min.jpg", catBtnName: "Shop More" },
      ],
      isMobileView: false,
    };
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    // Initial check for screen width on component mount
    this.handleResize();
  },

  methods: {
    changeRouteBy(category) {
      const arr = category.split(' ');
      
      const searchKey = arr[1];

      if(searchKey === 'More') this.$router.push('/search');
      else {
        this.$router.push({
          path: '/search',
          query: { keyword: searchKey }
        });
      }



    },

    handleResize() {
      // Update the isMobileView value based on the screen width
      this.isMobileView = window.innerWidth <= 400;
    },
  },

  beforeUnmount() {
    // Remove the window resize listener when the component is unmounted
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";

.category {
  margin: 0 auto;
  max-width: 120rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: $light-mid;
  gap: 1rem;
  padding: 1rem;
  transform: translateY(-35%);

  // 768 pixel below
  @include respond(tab-port) {
    grid-template-columns: 1fr 1fr 1fr;
    transform: translateY(-12%);
  }

  //  600 px below
  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr 1fr;
  }

  //  400 px below
  @media only screen and (max-width: 25em) {
    grid-template-columns: 1fr;
    transform: translateY(0);
    padding: 1rem 0;
  }

  & > :nth-child(4) {
    @include respond(tab-port) {
      display: none;
    }
    
    //  600 px below
    @media only screen and (max-width: 37.5em) {
      display: block;
    }
  }

  &__heading {
    text-align: center;
    font-size: 3.2rem;
    line-height: 1;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    padding-top: 2rem;
  }

  &__span {
    @include span-gradient;
  }

  &__wrapper {
    background-color: $light-mid;
    padding: 0 2rem;
  }

  &__card {
    position: relative;
    // border-radius: 4px;
    overflow: hidden;
    &:hover .category__img {
      transform: scale(1.3);
      filter: blur(5px);
    }
  }

  &__card-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba($color: $dark-low, $alpha: 0.46);
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
  }
}
</style>
