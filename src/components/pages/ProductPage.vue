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



          <div class="page__content--weight">

            <!-- <h3>Weight</h3> -->
            <!-- to transfer to a component -->
            <div class="dropdown-input">

                <div class="dropdown-input--default" @click="toggleDropdown">
                  <!-- defailt text -->
                  <span class="dropdown-input--setValue">{{ picked }}</span>
                  <!-- icon -->
                  <div class="dropdown-input--iconbox" :class="{'rotated': dropdown}">
                    <svg class="dropdown-input--icon">
                      <use xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"></use>
                    </svg>
                  </div>
                </div>


                <!-- dropdown -->
                <ul class="dropdown-input--lists" :class="{'show': dropdown}" @click="handleClickedLabel">
                  <!-- dropdown option -->
                  <li class="dropdown-input--list" >
                    <input class="dropdown-input--input" type="radio" id="one" value="One" v-model="picked" />
                    <label class="dropdown-input--label" :class="{'active': picked === 'One'}" for="one">One</label>
                  </li>

                  <li class="dropdown-input--list" >
                    <input class="dropdown-input--input" type="radio" id="two" value="Two" v-model="picked" />
                    <label class="dropdown-input--label" for="two">Two</label>
                  </li>
                </ul>


            </div>

          </div>






          <div class="page__content--quantity"></div>
          <!-- ./Main Details -->

        </div>




        <div class="page__collapse">
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

 
      picked:"Select Weight",
      dropdown: false,

      
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
    },

    toggleDropdown() {
      this.dropdown = !this.dropdown
    },

    handleClickedLabel(event){
      if(event.target.tagName !== 'LABEL') return
      this.toggleDropdown();
    },
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

// transfer to a component
.dropdown-input {
  display: inline-block;
  // cursor: pointer;
  line-height: 1;
  font-size: 1.6rem;
  color: $black-tint;
  margin-bottom: 1.4rem;

  &--default {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem .6rem;
    cursor: pointer;
    
    
    border: 2px solid $dark-low;

  }

  &--setValue {
    user-select: none;
  }

  &--iconbox {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .4s ease-out ;
    transform: rotate(180deg);

    &.rotated {
      transform: rotateY(180deg);
    }
  }

  &--icon {
    height: 2rem;
    width: 2rem;
  }

  // dropdown content
  &--lists {
    display: flex;
    // align-items: start;
    justify-content: center;
    flex-direction: column;

    list-style: none;

    max-height: 0;
    overflow: hidden;

    transition: all .4s ease;
    // background-color: red;

    &.show {
      max-height: 10rem;
    }
  }

  &--list {
    display: flex;
    // border: 1px solid red;
  }

  &--input {
    display: none;
  }

  &--label {
    cursor: pointer;
    width: 100%;
    // border: 2px solid $dark-low;

    border-width: 0 2px 2px 2px; /* top: 0, right: 1px, bottom: 1px, left: 1px */
    border-style: none solid solid solid; /* top: none, right: solid, bottom: solid, left: solid */
    border-color: transparent $dark-low $dark-low $dark-low; /* top: transparent, right: red, bottom: red, left: red */
  
    // background-color: red;
    padding: 1rem .6rem;

    &:hover, &:focus, &.active {
      outline: none;
      background-color: $light-low;
    }
  }



}

</style>