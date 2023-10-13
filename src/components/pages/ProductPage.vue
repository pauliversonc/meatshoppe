<template>
  <div class="page">
    <div class="page__wrapper">

        <div class="page__gallery">

          <Carousel :items-to-show="1" :wrap-around="false" v-model="currentSlide">
            <Slide v-for="(photo, index) in product.photoLg" :key="index">
              <img class="carousel__item" :src="`/src/assets/images/goods/1/lg/${photo}`"
              ref="zoomedImage"
              
              />
            </Slide>
          </Carousel>

          <Carousel
            :items-to-show="5"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide v-for="(photo, index) in product.photoSm" :key="index">
              <img class="carousel__thumbnail" @click="slideTo(index)" :src="`/src/assets/images/goods/1/sm/${photo}`"/>
            </Slide>
          </Carousel>

        </div>

        <div class="page__content">

          <!-- Main Details -->
          <div class="page__content--brand">{{ product.brand }}</div>
          <div class="page__content--name">{{ product.name }}</div>
          <div class="page__content--price">{{ product.price }}</div>
          <div class="page__content--stock">In Stock {{ product.stock }}</div>
          <!-- ./Main Details -->

        </div>

        <div class="page__form">

          <div class="page__form--weight">

            <span class="page__form--label">Weight</span>

            <!-- to transfer to a component -->
            <div class="dropdown-input">

              <div class="dropdown-input--default" @click="toggleDropdown">
                <!-- defailt text -->
                <span class="dropdown-input--setValue">{{ picked }} kg</span>
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
                <li class="dropdown-input--list" v-for="weight in product.weight" :key="'dropdown_inp_key'+weight">
                  <input class="dropdown-input--input" type="radio" :id="'dropdown_inp_id_'+weight" :value="weight" v-model="picked" />
                  <label class="dropdown-input--label" :class="{'active': picked === weight}" :for="'dropdown_inp_id_'+weight">{{ weight }} kg</label>
                </li>

                

              </ul>

            </div>

          </div>

          <div class="page__form--quantity">
            <span class="page__form--label">Quantity</span>

              <div class="quantity-input">
                <button class="quantity-input--btn minus" @click="mutateQty(false)">&#45;</button>
                <input class="quantity-input--text" @input="validateQty" v-model="qty" type="text" name="edi" id="a">
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

    
          <p class="prod_desc">{{ product.description }}</p>
    


            </BaseCollapse>
            <BaseCollapse
            :border-bottom="true"
            :border-top="true"
            :active-collapse="activeCollpase.details"
            collapse-name="details"
            :category-count="0"
            @on-toggle-collapse="handleToggleCollapse"
            >

       
            <ul class="prod_details">
              <li class="prod_details__list">
                <strong>Category: </strong> 
                <a href="#" class="prod_details__link" v-for="(cat, index) in product.category" :key="index">{{ cat }}</a>
              </li>

              <li class="prod_details__list">
                <strong>Code: </strong> {{ product.code }}
              </li>

              <li class="prod_details__list">
                <strong>Part: </strong> {{ product.part }}
              </li>

            </ul>
        


            </BaseCollapse>
            <BaseCollapse
            :border-bottom="true"
            :border-top="true"
            :active-collapse="activeCollpase.delivery"
            collapse-name="delivery"
            :category-count="0"
            @on-toggle-collapse="handleToggleCollapse"
            >

     
            <p class="prod_desc"><strong>Residents of Brgy. Conchu</strong> will now benefit from <strong>same-day delivery</strong> and enjoy <strong>free shipping</strong> with <strong>no minimum order requirement</strong>. For customers residing <strong>outside Brgy. Conchu</strong>, orders will be delivered within <strong>1 business day</strong>, accompanied by an additional <strong>PHP 50 delivery fee</strong>. Meatshoppe strives to offer a convenient and cost-effective shopping experience for all.</p>
     


            </BaseCollapse>
        </div>

    </div>

    <div class="page__suggestions">
      <BaseHeadingFive 
      heading-title="You may also like"
      :margin-bottom="true"
      />

      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 10" :key="slide">
          <BaseProduct />
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
// import "vue3-carousel/dist/carousel.css";
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

  
  created() {
    this.handleGetProduct(this.id);
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

 
      // form dropdown
      picked:"Select ", // v-model of form input dropdown
      dropdown: false, // check if input dropdown is showned

      qty: 1, // form qty
      
      // product displayed in product page
      product: {},
    };

    
  },

  mounted() {
    
  },

  methods: {
    getMaxQty() {
      if(Number.isInteger(this.picked)) {
        return Math.floor(this.product.stock / this.picked);
      } else return false;
    },

    handleGetProduct(productId){
      const [product] = this.$store.getters['products/getProduct'](+productId);
      this.product = product;
    },

    validateQty(event) {
      
      // when user input a non digit it will be deleted or ignored
      
      // console.log(event)
        // get max qty base on weight
        const maxQty = this.getMaxQty();
        // replace all non digit
        const sanitizedQty = +this.qty.replace(/\D/g, '');        

        // check if maxQty is valid
        if (maxQty) {
          if (sanitizedQty < 1)  this.qty = 1;   
          else if (sanitizedQty > maxQty) this.qty = maxQty;
          else this.qty = sanitizedQty;
          
        } else {
          this.qty = 1
        }
        

    },

    // Handle qty onclick
    mutateQty(bool) {

      // console.log(typeof this.picked, this.picked)
      // check if user selects a weight
      if(Number.isInteger(this.picked)) {
        // INCREASE QTY
        if (bool) {

          // multiply selected weight to the qty = this will be the desiredProductWeight of the client
          const tempQty = this.qty + 1;
          const tempProductWeight = tempQty * this.picked;
      
          // check if tempQty is less than or equal to the stock
            // dispatch/pass product id including tempQty}}
            const resp = this.$store.getters['products/checkProductAvailability'](this.product.id, tempProductWeight);

            // if stock is available return true / increment or assign tempQty to qty
            if (resp.isAvailable) {
              this.qty = tempQty;
            } 
            // else return false (show alert message saying that the stock left is only "availableStock")
            // also add how many kilo's that the user is trying to purchase
            else {
              console.warn(resp.availableStock)
            }

        }
        // DECREASE QTY
        else {
          this.qty <= 1 ?  this.qty = 1 : this.qty--
        }

      }
      
      // else throw an error
      else {
        console.log('please select weight')
      }





    },

 
    slideTo(val) {
      this.currentSlide = val
    },

    handleToggleCollapse(key) {
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
  padding: 14rem 2rem 8rem 2rem;
  
  &__wrapper {
    // border: 1px solid red;
    max-width: 120rem;
    margin: 0 auto;
    align-items: start;
    display: grid;
    // grid-template-columns: 60% 40%;
    grid-template-columns: 14rem 2.5fr 2fr 14rem;

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
    position: sticky;
    top: 7rem;
    

    // bottom: 2rem;


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

      position: relative;
      top: auto;
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
    padding: 1.4rem 0 2rem 0;
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
      margin-bottom: 2rem;
    }

    &--btns {
      display: flex;
      gap: 1rem;

      @include respond(tab-port) {
        flex-direction: column;
        gap: 2rem;
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
    padding-top: 12rem;
    max-width: 120rem;
    margin: 0 auto;
  }

}


.carousel__item {
  min-height: 40rem;
  width: 100%;
  object-fit: cover;
  // border: 1px solid red;
  overflow: hidden;
  transition: transform .3s ease;


}

.carousel__thumbnail { 
  min-height: 10rem;
  width: 100%;
  object-fit: contain;
  // border: 1px solid red;
  cursor: pointer;
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
  max-width: 18rem;

  @include respond(tab-port) {
    max-width: 100%;
  }

  &--default {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // gap: 2rem;
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
      background-color: $dark-low;
      // color: $light-high;
      // background-size: 300% 100%;
      color: $light-high;
      // background: $gradient;
      // background-image: linear-gradient(to right, $main-tint, $main, $main-shade);

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
      color: $light-high;
      background-color: $dark-low;
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


.prod_desc, .prod_details {
  font-size: 1.6rem;
  margin-bottom: 1.4rem;
  overflow-wrap: break-word;
}

.prod_details {
  &__list {
  list-style: none;

  }

  &__link {
    text-decoration: none;
    outline: none;
    // color: $main;
    margin-right: 1rem;
  }
}

.carousel__slide {
  padding: 0.5rem;
}


</style>