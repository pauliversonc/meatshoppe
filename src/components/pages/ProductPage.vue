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
            <Slide v-for="slide in 5" :key="slide">
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
          <!-- ./Main Details -->

        </div>

        <div class="page__form">

          <div class="page__form--weight">

            <span class="page__form--label">Weight</span>

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


          <div class="page__form--quantity">
            <span class="page__form--label">Quantity</span>

              <div class="quantity-input">
                <button class="quantity-input--btn minus" @click="mutateQty(false)">&#45;</button>
                <input class="quantity-input--text" @input="validateQty" v-model="qty" placeholder="1" type="text" name="edi" id="a">
                <button class="quantity-input--btn plus" @click="mutateQty(true)">&#43;</button>
              </div>

          </div>

          <div class="page__form--btns">
          <BaseButton btn-text="Add to cart" :btn-outline="true" :btn-full-width="true"/>
          <BaseButton btn-text="Buy now"  :btn-full-width="true"/>

          </div>



            
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

    
          <span>test</span>
    


            </BaseCollapse>
            <BaseCollapse
            :border-bottom="true"
            :border-top="true"
            :active-collapse="activeCollpase.details"
            collapse-name="details"
            :category-count="0"
            @on-toggle-collapse="handleToggleCollapse"
            >

       
            <span>test</span>
        


            </BaseCollapse>
            <BaseCollapse
            :border-bottom="true"
            :border-top="true"
            :active-collapse="activeCollpase.delivery"
            collapse-name="delivery"
            :category-count="0"
            @on-toggle-collapse="handleToggleCollapse"
            >

     
            <span>{{ calculatedResult }}</span>
     


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
import { mapGetters } from 'vuex';
// import { Carousel, Slide } from 'vue3-carousel';
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  name: 'MeatshoppeProductPage',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  props: {
    id: String,
  },

  computed: {
    ...mapGetters('products', {
      handleGetProduct: 'getProduct',
    }),

    calculatedResult() {
      return this.handleGetProduct(+this.id);
    },
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
      qty: '',
      
    };

    
  },

  mounted() {
    
  },

  methods: {
 

    validateQty() {
      this.qty = +this.qty.replace(/\D/g, '');
      if (this.qty < 1) this.qty = 1;
    },

    mutateQty(bool) {
      bool ? this.qty++ : (this.qty <= 1 ?  this.qty = 1 : this.qty--);

      
    },


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
    // border: 1px solid red;
    max-width: 120rem;
    margin: 0 auto;

    display: grid;
    // grid-template-columns: 60% 40%;
    grid-template-columns: 14rem 2.5fr 2fr 14rem;
    // grid-template-rows: 1fr 1fr 1fr;
    // gap: 2rem;

    // align-items: start;

    // 1166 and below
    @media only screen and (max-width: 73em) {
      grid-template-columns: 10rem 2.5fr 2fr 10rem;
    }

    // 1000 and below
    @media only screen and (max-width: 62.5em) {
      grid-template-columns: 8rem 2.5fr 2fr 8rem;
    }

    // 900 and below
    @media only screen and (max-width: 56.25em) {
      grid-template-columns: 6rem 2.5fr 2fr 6rem;
    }

    // // 800 and below
    @media only screen and (max-width: 56.25em) {
      grid-template-columns: 4rem 2.5fr 2fr 4rem;
    }
    
    // 768 and below
    @include respond(tab-port) {
      grid-template-columns: 1fr;
    }
    
  }

  &__gallery{
    grid-row: 1/5;
    margin-right: 4rem;
    grid-column: 2;

    // 1200 and below
    @media only screen and (max-width: 80em) {
      margin-right: 2rem;
    }

    // 960 and below
    @media only screen and (max-width: 60em) {
      margin-right: 1rem;
    }

    @include respond(tab-port) {
      order: 2;
      grid-row: auto;
      margin-right: 0;
      grid-column: 1;
      // grid-column: 1;
    }
  }

  &__content {
    // border: 1px solid blue;
    color: $black-tint;
    grid-column: 3;
    margin-left: 4rem;
    // 1200 and below
    @media only screen and (max-width: 80em) {
      margin-left: 2rem;
    }

    // 960 and below
    @media only screen and (max-width: 60em) {
      margin-left: 1rem;
    }

    @include respond(tab-port) {
      order: 1;
      grid-column: 1;
      margin-bottom: 1.4rem;
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
      // margin-bottom: 1.4rem;
    }
    
 


  }

  &__form {
    padding: 1.4rem 0;
    grid-column: 3;
    margin-left: 4rem;

    // 1200 and below
    @media only screen and (max-width: 80em) {
      margin-left: 2rem;
    }
    // 960 and below
    @media only screen and (max-width: 60em) {
      margin-left: 1rem;
    }
    @include respond(tab-port) {
      order: 3;
      grid-column: 1;
    }


    &--label {
      font-size: 1.6rem;
      display: block;
      text-transform: uppercase;
      font-weight: 600;
    }
   &--weight {
      font-size: 1.6rem;
    }

    &--quantity {
      margin-bottom: 1.4rem;
    }

    &--btns {
      display: flex;
      gap: 1rem;

      @include respond(tab-port) {
        flex-direction: column;
      }
    }
  }

  &__collapse {
    grid-column: 3;
    margin-left: 4rem;

    // 1200 and below
    @media only screen and (max-width: 80em) {
      margin-left: 2rem;
    }

    // 960 and below
    @media only screen and (max-width: 60em) {
      margin-left: 1rem;
    }

    @include respond(tab-port) {
      grid-column: 1;
      order: 4;
      // margin-top: 2rem;
    }
  }



  &__suggestions {
    margin-top: 12rem;
    grid-column: 1/-1;
    // border: 1px solid green;

    @include respond(tab-port) {
      order: 5;
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
  display: block;
  cursor: pointer;
  line-height: 1;
  color: $black-tint;
  margin-bottom: 1.4rem;
  max-width: 20rem;

  @include respond(tab-port) {
    max-width: 100%;
  }

  &--default {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem .6rem;
    cursor: pointer;
    height: 4rem;
    
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
    height: 4rem;
    border-width: 0 2px 2px 2px; /* top: 0, right: 1px, bottom: 1px, left: 1px */
    border-style: none solid solid solid; /* top: none, right: solid, bottom: solid, left: solid */
    border-color: transparent $dark-low $dark-low $dark-low; /* top: transparent, right: red, bottom: red, left: red */
    transition: all 0.3s ease;
    // background-color: red;
    padding: 1rem .6rem;

    &:hover, &:focus, &.active {
      outline: none;
      // background-color: $main;
      // color: $light-high;
      background-size: 300% 100%;
      color: $light-high;
      // background: $gradient;
      background-image: linear-gradient(to right, $main-tint, $main, $main-shade);

    }
  }



}


.quantity-input {
  display: inline-block;
  position: relative;
  padding-right: 3.6rem;

  @include respond(tab-port) {
    display: block;
  }

  &--btn {
    position: absolute;
    height: 100%;

    border: none;
    outline: none;
    cursor: pointer;
    background-color: $light-high;
    padding: 0.8rem 1rem;
    border: 2px solid $dark-low;
    font-size: 1.6rem;
    top: 0;
    width: 3.6rem;

    transition: all 0.3s ease;

    &:hover {
      outline: none;
      background-size: 300% 100%;
      color: $light-high;
      // background: $gradient;
      background-image: linear-gradient(to right, $main-tint, $main, $main-shade);

    }

    &.minus {
    border-right: none;
    left: 0;

    }
    &.plus {
    border-left: none;
    right: 0;
    }
  }

  &--text {    
    font-size: 1.6rem;
    width: 8rem;
    padding: 0.8rem 1rem;
    font-family: inherit;
    font-weight: inherit;
    outline: none;
    color: inherit;
    border: 2px solid $dark-low;
    height: 4rem;
    margin-left: 3.6rem;

    @include respond(tab-port) {
      width: calc(100% - 3.6rem)
    }


    &:focus, &:hover {
      outline: none;
    }
  }

  
}

</style>