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
          <div class="page__content--price">&#8369;{{ markdownPrice }}</div>
          <div class="page__content--dprice" v-if="!!product.discountPercentage">&#8369;{{ oldPrice }}</div>
          <div class="page__content--off" v-if="!!product.discountPercentage">{{product.discountPercentage}}% off</div>
          <div class="page__content--stock " :class="stockClasses"><strong>{{ stockText }}</strong> &mdash; {{ product.stock }}kg available</div>
          <!-- ./Main Details -->

        </div>

        <form action="#" class="page__form" @submit.prevent="submit">

          <!-- pos rel -->
          <div class="page__form--weight">

            <!-- toggle class (invalid) (stick) (disabled)-->
            <!-- pos abs -->
            <span class="page__form--label " :class="{'stick' : (this.form.picked || this.errors.weight) ? true : false, 'invalid': this.errors.weight, 'disabled': !product.stock}">Weight</span>

            <!-- toggle class (invalid) (disabled) -->
            <!-- to transfer to a component -->
            <div class="dropdown-input" :class="{'invalid': this.errors.weight, 'disabled': !product.stock}">

              <div class="dropdown-input--default" @click="toggleDropdown">
                <!-- defailt text -->
                <span class="dropdown-input--setValue">{{ this.form.picked }}</span>
                <!-- icon -->
                <div class="dropdown-input--iconbox" :class="{'rotated': form.dropdown}">
                  <svg class="dropdown-input--icon">
                    <use xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"></use>
                  </svg>
                </div>
              </div>


              <!-- dropdown -->
              <ul class="dropdown-input--lists" :class="{'show': form.dropdown}" @click="handleClickedLabel">
                <!-- dropdown option -->
                <li class="dropdown-input--list" :class="{'disabled': weight > product.stock}" v-for="weight in product.weight" :key="'dropdown_inp_key'+weight">
                  <input class="dropdown-input--input" type="radio" :id="'dropdown_inp_id_'+weight" :value="weight" v-model="this.form.picked" />
                  <label class="dropdown-input--label " :class="{'active': form.picked === weight}" :for="'dropdown_inp_id_'+weight">{{ weight }} kg</label>
                </li>

                

              </ul>

            <!-- v-show -->
            <!-- error message -->
            <span class="page__form--message" v-show="errors.weight">{{ errors.weight }}</span>

            </div>


          

          </div>

          <!-- pos rel -->
          <div class="page__form--quantity">

            <!-- div quantity-input -->
            <!-- toggle class (invalid) (disabled)-->
            <div class="quantity-input" :class="{'invalid' : errors.qty, 'disabled': product.qty, 'disabled': !product.stock}">

              <button class="quantity-input--btn minus" @click.stop.prevent="mutateQty(false)">&#45;</button>
              <input class="quantity-input--text" @input="handleInputQty" v-model="form.qty" type="text" name="edi" id="productQty">
              <button class="quantity-input--btn plus" @click.stop.prevent="mutateQty(true)">&#43;</button>

              <!-- toggle classses (invalid) (stick)-->
              <span class="page__form--label2" :class="{'stick': errors.qty || form.qty, 'invalid' : errors.qty}">Qty</span>
      
            </div>

            <!-- toggle v-show -->
            <span class="page__form--message" v-show="errors.qty">{{ errors.qty }}</span>
          </div>


          <div class="page__form--btns">
            <BaseButton btn-text="Add to cart"  :btn-outline="true" :btn-disabled="!!!product.stock" :btn-full-width="true" @click="buttonClicked('add')"/>
            
            <BaseButton btn-text="Buy now"  :btn-full-width="true" :btn-disabled="!!!product.stock" @click="buttonClicked('buy')"/>

            
          </div>

            
        </form>

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

  <BaseToast ref="toast"></BaseToast>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import BaseToast from "../base/BaseToast.vue";

// import "vue3-carousel/dist/carousel.css";
export default {
  name: 'MeatshoppeProductPage',
  components: {
    Carousel,
    Slide,
    Navigation,
    BaseToast,
  },

  props: {
    id: String,
  },

  
  created() {
    this.handleGetProduct(this.id); // product data
                                    // check if product exist in cart
    
  },

  computed: {


    stockClasses() {
      if (this.product.stock >= 1 && this.product.stock <= 10) {
        return "page__content--stock--low";
      }

      if (this.product.stock < 1 || !this.product.stock) {
        return "page__content--stock--none";
      }
    },

    stockText() {
      if (this.product.stock >= 1 && this.product.stock <= 10) {
        return "Low Stock";
      }

      if (this.product.stock < 1 || !this.product.stock) {
        return "Out of Stock";
      }

      if (this.product.stock && this.product.stock > 10) {
        return "In Stock";
      }
    },

    markdownPrice() {
      const percentage = this.product.discountPercentage;
      let value = this.product.price * ((+this.form.picked) ? +this.form.picked : 1);

      if (!!percentage) {
        let result = value - (percentage / 100) * value;
        const result2 = result.toFixed(2);
        return result2;
      } else {
        return value.toFixed(2);
      }
    },

    oldPrice() {
      let value = this.product.price * ((+this.form.picked) ? +this.form.picked : 1);
      return value.toFixed(2);
    }

  },

  watch: {
    'form.picked': {
      handler(newValue) {
        // clear error
        if(newValue) this.errors.weight = "";
        const maxQty = this.getMaxQty(newValue);
        
        // mutating qty
        // basically what happens here is that
        // when you try to set a qty but you want to change the weight
        // this will return qty value
        if(this.form.qty && (this.form.qty > maxQty)) {
          this.form.qty =  (maxQty) ? maxQty : 1;
        } else {
          this.form.qty = 1;
        }

 
      },
      deep: true, // This is necessary when watching nested properties
    },

    'form.qty': {
      handler(newValue,) {
        if(newValue) this.errors.qty = "";
        

      
      },
      deep: true, // This is necessary when watching nested properties
    },
  },

  data() {
    return {
      toastNum: 0,

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


      form: {
        dropdown: false,
        picked: "",
        qty: "",
        clickedButton: "",
      },



      errors: {
        dropdown: "",
        qty: "",
      },


 
      
      // product displayed in product page
      product: {},
    };

    
  },

  mounted() {
    
  },

  methods: {
    buttonClicked(button) {
      this.form.clickedButton = button;
    },

    submit() {

      this.errors.weight = this.form.picked ? "" : "Weight is required";
      this.errors.qty = this.form.qty ? "" : "Quantity is required";

      // validate product that is going to cart
      if (!this.errors.dropdown && !this.errors.qty) {

        // Add your submission logic here
        const product = {
          id: this.product.id,
          weight: this.form.picked,
          qty: this.form.qty,
        }


        const action = this.form.clickedButton;

        if(action === 'add') {
          
          // product from cart {id, weight, qty}
          const retrievedProduct = this.$store.getters['cart/getProductCart'](product);
          
          
          
          // continue the validation when product retrieved success
          // if the product is found increase the qty in cart
          if(retrievedProduct) {

            // get max qty for the selected weight
            const maxQty = this.getMaxQty(this.form.picked);

            // existing product qty
            const isAvailable = (maxQty >= this.form.qty);
            
            if(isAvailable) {
              // add to cart if stock is greater than productQty to add
              this.$store.dispatch('cart/addToCart', product);
              this.$refs.toast.showToast('Item has been added to your shopping cart');
              this.clearQty();
            } else {
              this.$refs.toast.showToast('Purchase limit has been exceeded');
            }

          }

          // else push product to the cart
          else {
            console.log('pasok')
            this.$store.dispatch('cart/addToCart', product);
            this.$refs.toast.showToast('New item has been added to your shopping cart');
            this.clearQty();
          }
          



        }

        if(action === 'buy') {
          console.log('red')
        }



      }

    },

    clearQty() {
      this.form.qty = "";
    },

    getMaxQty(weight) {
        // get product stock 
        const [{stock}] = this.$store.getters['products/getProduct'](this.product.id);

        // get temp deducted stock in cart
        const cartStock = this.checkAccumulatedProductStock(this.id);

        // get maxQty 
        const maxQty = Math.floor((stock - cartStock) / +weight);

        return maxQty;
    },

    handleGetProduct(productId){
      const [product] = this.$store.getters['products/getProduct'](+productId);
      this.product = product;

    },

    handleInputQty(event) {

      // check if user clears the input
      const userClear = !!!event.target.value.length;

      // when user input a non digit it will be deleted or ignored
      
        // get max qty base on weight
        const maxQty = this.getMaxQty(this.form.picked);

        // replace all non digit
        const sanitizedQty = +this.form.qty.replace(/\D/g, '');        

        // check if maxQty is valid
        // run this code if weight is selected
        if (this.form.picked) {
          // set the qty to "" if the user clears the input
          if (userClear) this.form.qty = "";

          // run sanitized condition
          else {
            if (sanitizedQty < 1 )  this.form.qty = 1;   
            else if (sanitizedQty > maxQty) this.form.qty = maxQty;
            else this.form.qty = sanitizedQty;
          }
          
        } 
  
        // run this code if use doesnnt select a weight
        else {
          if (userClear) this.form.qty = "";
          else this.form.qty = 1
        }
        

    },

    // check if product already exists on cart
    checkProductQtyInCart(id, weight){
      const product = {id, weight}
      const retrievedProduct = this.$store.getters['cart/getProductCart'](product);

      if(retrievedProduct) {
        const [{qty: productCartQty}] = retrievedProduct;
        return productCartQty;
      }
      else {
        return false;
      }
    },

    // this will check the temp accumulated stock for 1kg and / or 15 kg
    checkAccumulatedProductStock(id) {
      // get temp stock added in cart
      // this will return the actual stock / kg to be deducted = (80, 90, 100, etc..)
      const tempAccumulatedStock = this.$store.getters['cart/getTotalStocks'](+id);
      return tempAccumulatedStock;
    },

    // Handle qty onclick
    mutateQty(bool) {

      // console.log(typeof this.form.picked, this.form.picked)
      // check if user selects a weight
      if(Number.isInteger(this.form.picked)) {

        // INCREASE QTY
        if (bool) {
          // NEW

          const maxQty = this.getMaxQty(this.form.picked);

          // increment by 1 the form qty value 
          const tempQty = (this.form.qty ? this.form.qty : 0) + 1;


          if (maxQty >= tempQty) {
            this.form.qty = tempQty;
          } else {
            this.errors.qty = 'You have reached the maximum quantity available for this item';
          }

        }
        // DECREASE QTY
        else {
          this.form.qty <= 1 ?  this.form.qty = 1 : this.form.qty--
        }

      }
      
      // else throw an error
      // this will throw an error for weight only
      else {
        // console.log('please select weight')
        this.errors.weight = "Weight is required"
      
      }





    },

 
    slideTo(val) {
      this.currentSlide = val
    },

    handleToggleCollapse(key) {
      this.activeCollpase[key] = !this.activeCollpase[key]
    },

    toggleDropdown() {
      this.form.dropdown = !this.form.dropdown
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
      display: inline-block;
      margin-right: 1rem;
    }

    &--dprice {
      display: inline-block;
      margin-right: 1rem;
      text-decoration: line-through;
      font-size: 1.6rem;
      color: $black-tint;
    }

    &--off {
      display: inline-block;
      font-size: 1.6rem;
      color: $main;
      
    }



    &--stock {
      // border: 1px solid blue;
      color: #3c9342;
      line-height: 1;
      font-size: 1.6rem;
      // margin-bottom: 1.4rem;

      &--low {
        color: #e99114;
      }

      &--none {
        color: #bf262f;
      }


    }
    
 


  }

  &__form {
    padding: 1.4rem 0 ;
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
      // user-select: none;
      position: absolute;
      top: .6rem;
      left: 1rem;

      transition: all 0.4s ease-in-out;
      &.invalid {
        color: $main;
      }

      &.stick {
        font-size: 1rem;
        top: -.8rem;
        background-color: $light-high
      }

      &.disabled {
        opacity: 0.5;
        user-select: none;
        cursor: not-allowed;
      }
    }

    &--label2 {
      // position: absolute;

      font-size: 1.6rem;
      display: block;
      text-transform: uppercase;
      font-weight: 600;
      background-color: $light-high;
      position: absolute;
      left: 3.6rem;
      top: 50%;
      transform: translate(30%, -50%);
      z-index: 1;

      transition: all 0.4s ease-in-out;

      &.invalid {
        color: $main;
      }

      &.stick {
        font-size: 1rem;
        top: 0;
        transform: translate(30%, -50%);
      }
    }

    &--message {
      @include error-message;
      line-height: 1.7;
      display: block;
      
      // background-color: red;
    }

    &--weight {
      font-size: 1.6rem;
      // border: 1px solid red;
      position: relative;
    }

    &--quantity {
      margin-bottom: 1.4rem;
      // border: 1px solid red;
    }

    &--btns {
      display: flex;
      gap: 1rem;

      @include respond(tab-port) {
        flex-direction: column;
        gap: 1.4rem;
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
  cursor: pointer;
  line-height: 1;
  color: $black-tint;
  margin-bottom: 1.4rem;
  max-width: 18rem;
  display: block;



  

  @include respond(tab-port) {
    max-width: 100%;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }


  &--default {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // gap: 2rem;
    padding: .8rem 1rem;
    cursor: pointer;
    height: 4rem;
    
    border: 2px solid $dark-low;

  }

  &.invalid {
    .dropdown-input--default {
      border: 2px solid $main;
    }
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

    &.disabled {
      opacity: .5;
      cursor: not-allowed;
      .dropdown-input--label {
        
        pointer-events: none;
      }
    }
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
    // padding: 1rem .6rem;
    padding: .8rem 1rem;
    display: flex;
    justify-content: start;
    align-items: center;

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

  &.invalid {
    .dropdown-input--label {
      border-color: transparent $main $main $main;
    }
  }





}



.quantity-input {
  position: relative;

  &.disabled {
    
    .quantity-input--btn, .quantity-input--text {
      pointer-events: none;
      opacity: .5;
    }

    .page__form--label2 {
      opacity: .5;
      cursor: not-allowed;
    }

  }

  &--btn {
    position: absolute;
    height: 100%;
    height: 4rem;
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
      left: calc(8rem + 3.6rem);

      @include respond(tab-port) {
        left: calc(100% - 3.6rem);
      }

    }
  }

  &.invalid {
    .quantity-input--btn {
      border: 2px solid $main;
    }

    .quantity-input--btn.minus {
      border-right: none;
    }

    .quantity-input--btn.plus {  
      border-left: none;
    }

    .quantity-input--text {  
      border: 2px solid $main;
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
      width: calc(100% - 3.6rem * 2)
    }


    &:hover {
      outline: none;
    }

    &:focus {
      & ~ .page__form--label2 {
        font-size: 1rem;
        top: 0;
        transform: translate(30%, -50%);
      }
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