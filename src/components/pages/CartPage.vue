<template>
  <div class="cart">

    <div class="cart__wrapper">

      <!-- <span>{{ productsDetails }}</span> -->

      <!-- product list in cart -->
      <div class="cart-items-container" >
        <BaseHeadingFour heading-four="Cart"></BaseHeadingFour>

        <!-- wrapper flex-row-->
        <div class="cart-item__wrapper" v-if="productsDetails.length > 0">
          <!-- v-for -->
          <div class="cart-item" v-for="(product, index) in productsDetails" :key="index">

            <!-- left -->
            <figure class="cart-item__thumbnail-container">
              <img class="cart-item__thumbnail" src="../../assets/images/goods/1/sm/ck-wings-1.jpg" alt="chicken wings">
            </figure>

            <!-- right flex-column-->
            <div class="cart-item__details-container">

              <!-- up flex-row -->
              <div class="cart-item__details">
                
                
                <!-- left for details-->
                <div class="cart-item__details-wrap">
                  <div class="cart-item__title">{{ product.name }}</div>
                  <div class="cart-item__brand">{{ product.brand }}</div>
                  <div class="cart-item__weight">{{ product.weight }} kg</div>
                  
                  <div class="cart-item__qty">

                    <label class="cart-item__label" :for="index+product.name">Quantity</label>
                    <select class="cart-item__select" :id="index+product.name" :name="index+product.name" @change="handleUpdateQuantity($event, product.weight ,product.id)">
                      <option v-for="index in getMaxQty(product.qty, product.weight, product.id)"  :value="index" :key="index" :selected="product.qty === index">{{ index }}</option>
                    </select>

                  </div>

                </div>


                <!-- right for price -->
                <div class="cart-item__price" v-if="product.discountPercentage">
                  <strong>{{ formattedPrice(((product.price * (1-(product.discountPercentage / 100))) * product.weight) * product.qty) }}</strong>
                  <span>{{ formattedPrice(product.price * product.weight * product.qty)  }}</span>
                </div>

                <div class="cart-item__price" v-else>
                  <strong>{{ formattedPrice(product.price * product.weight * product.qty) }}</strong>
                </div>

              </div>
            

              <!-- bottom -->
              <div class="cart-item__btns">

                <button class="icon-btn" @click="handleDeleteProduct(product.id, product.weight)">
                  <svg class="icon-svg">
                    <use xlink:href="../../assets/icons/sprite.svg#icon-trash-2"></use>
                  </svg>
                </button>

              </div>
            </div>


          </div>
        </div>

        <div class="cart-item__wrapper" v-else>
          There are no items in your cart.
        </div>


      </div>
      
      <!-- Table pricing summary -->
      <aside class="cart__summary">
        <BaseHeadingFour heading-four="Summary"></BaseHeadingFour>

        <!-- Semi Table -->
        <div class="cart-cell">
          <div class="cart-cell__title">Subtotal</div>
          <div class="cart-cell__price">{{ formattedPrice(subTotal) }}</div>
        </div>

        <div class="cart-cell">
          <div class="cart-cell__title">Estimated Delivery & Handling</div>
          <div class="cart-cell__price">Free</div>
        </div>

        <div class="cart-cell">
          <div class="cart-cell__title">Coupon discounts</div>
          <div class="cart-cell__price">{{ formattedPrice(couponDiscountTotal) }}</div>
        </div>

        <!-- Total bordered-->
        <div class="cart-cell__total">
          <div class="cart-cell__title">Total</div>
          <div class="cart-cell__price">{{ formattedPrice(total) }}</div>
        </div>


        <!-- Enter Coupon -->
        <div class="cart-cell__promo">
          <span class="cart-cell__title">Promotions</span>

          <ul class="cart-cell__codes" v-show="redeemedPromoCode.length > 0">

            <li class="cart-cell__code-wrap" v-for="promo in redeemedPromoCode" :key="promo.code">
              <button class="cart-cell__code-btn" @click="removePromoCode">
                <svg class="cart-cell__btn-icon">
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </button>
              <strong>{{ promo.code }}</strong>
              <span>is applied</span>
            </li>
            
          </ul>

          <form class="cart-cell__form" @submit.prevent="addPromoCode">
            <input class="cart-cell__input" id="promoCode" name="promoCode" v-model.trim="promoCode" type="text" @input="handleInputCode">
            <button class="cart-cell__btn">Apply</button>
          </form>

        </div>
        
        
        <!-- Checkout -->
        <div class="cart-cell__checkout">
          <BaseButton btn-text="Checkout"  :btn-full-width="true" />
        </div>

      </aside>
    </div>

    <div class="cart__suggestions">
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
import BaseHeadingFour from '../base/BaseHeadingFour.vue';
import {mapGetters} from 'vuex';
import BaseToast from "../base/BaseToast.vue";
import { formatCurrency } from '../../utils/common.js';
export default {
  name: "MeatshoppeCartPage",
  components: {
    Carousel,
    Slide,
    Navigation,
    BaseHeadingFour,
    BaseToast
  },

  computed: {
    ...mapGetters({
      cartProducts: 'cart/getProducts',
      products: 'products/getProducts'
    }),

    productsDetails() {
      if (this.cartProducts) return this.getProductById(this.cartProducts);
      else return [];
    },


    subTotal() {
      let total = 0;
      for (const product of this.productsDetails) {
        const discountedPrice = this.applyDiscount(product.price, product.discountPercentage, product.weight, product.qty);
        total += discountedPrice;
      }

      return total;
    },

    total(){
      let total = 0;
      for (const product of this.productsDetails) {
        const discountedPrice = this.applyDiscount(product.price, product.discountPercentage, product.weight, product.qty);
        total += discountedPrice;
      }

      const finalTotal = this.applyPromo(total)
      return finalTotal;
    },

    couponDiscountTotal() {
      const total = this.redeemedPromoCode.reduce((accumulator, currentArray) => {
        return accumulator += currentArray.discount;
      }, 0);

      return total;
    },
  },

  data() {
    return {
      promoCode: "",
      redeemedPromoCode: [
        // {"code" : "MEATSHOPPE2023", "discount": 200, "minSpend": 2000},
        // {"code" : "BEATTHEHEAT123", "discount": 50, "minSpend": 1000},
      ],

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



  methods: {
    formattedPrice(price) {
      return formatCurrency(price);
    },

    handleDeleteProduct(productId, weight) {
      const product = {
        id: productId,
        weight,
      }
      this.$store.dispatch('cart/deleteProduct', product);
      this.$refs.toast.showToast('The item has been removed from your cart');
      
    },

    getMaxQty(qty, weight, productId) {
        // get product stock 
        const [{stock}] = this.$store.getters['products/getProduct'](productId);

        // get temp deducted stock in cart
        const cartStock = this.checkAccumulatedProductStock(productId);

        // get maxQty 
        const maxQty = Math.floor((stock - cartStock) / +weight);
        
        const newQty = +maxQty + +qty;

        return newQty;
    },

    // this will check the temp accumulated stock for 1kg and / or 15 kg
    checkAccumulatedProductStock(id) {
      // get temp stock added in cart
      // this will return the actual stock / kg to be deducted = (80, 90, 100, etc..)
      const tempAccumulatedStock = this.$store.getters['cart/getTotalStocks'](+id);
      return tempAccumulatedStock;
    },

    handleUpdateQuantity(event, weight, productId) {
      const product = {
        productId,
        weight,
        qty: event.target.value
      }

      this.$store.dispatch('cart/updateQuantity', product);

    },

    getProductById(cart) {

      const newCart = cart.map((cartItem) => {
        const product = this.products.find((product) => product.id === cartItem.id);
        if (product) {
          return {
            ...product, // Spread product data
            weight: cartItem.weight, // Replace weight property
            qty: cartItem.qty, // add new qty from cart
          };
        }
        return null; // Handle cases where the product is not found
      });

      return newCart;
    },

    addPromoCode() {
      
      // check if promo code is valid 
      // this returns object or undefined
      const isValidated = this.$store.getters['cart/validatePromoCode'](this.promoCode);
        // check if code is valid
        if(isValidated) {
          
          // check if valid code qty
          if(isValidated.qty > 0)  {
            
            const isMatched = this.redeemedPromoCode.find(promo => promo.code === this.promoCode);
            if (isMatched) this.$refs.toast.showToast('Sorry, this promo code has already been used. Please try another code');
            else {
              this.$refs.toast.showToast('Congratulations! Promo code successfully redeemed');
              this.redeemedPromoCode.push(isValidated);
              this.promoCode = "";
            }
          } 
          else this.$refs.toast.showToast('Sorry, the redemption limit for this promo code has been reached');
        }
        else this.$refs.toast.showToast('Invalid promo code. Please double-check and try again');
    },

    removePromoCode(index) {
      this.redeemedPromoCode.splice(index, 1);
    },

    handleInputCode() {
      // Remove non-alphanumeric characters and convert to uppercase
      this.promoCode = this.promoCode.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 14);
    },

    applyDiscount(price, discountPercentage, weight, qty) {
      if (discountPercentage > 0) {
        return (qty * (price * (1-(discountPercentage / 100))) * weight);
      } else {
        return price * weight * qty;
      }
    },

    applyPromo(total) {
      let subTotal = total;

      // check if valid promo code exist
      if(this.redeemedPromoCode.length > 0) {
        // loop the redeemed promo code
        this.redeemedPromoCode.forEach(code => {
          // check if minspend is meet
          if(subTotal >= code.minSpend) {
            // formula (subtotal + sum of valid promo code)
            subTotal-=code.discount;
          }
        });

        return subTotal;

      }

      // else just return subtotal
      else {
        return subTotal;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";
.cart {
  padding: 14rem 2rem 8rem 2rem;

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;
    // border: 2px solid pink;

    display: grid;
    grid-template-columns: 65% 1fr;
    gap: 6rem;

    @include respond (tab-port) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  &__suggestions {
    padding-top: 9.6rem;
    max-width: 120rem;
    margin: 0 auto;
  }




  // .cart-items-container {
  // }


  .cart-item {
    display: flex;
    gap: 3rem;

    // border: 2px solid green;
    padding-bottom: 2.2rem;
    border-bottom: 1px solid $gray;
    
    margin-bottom: 2rem;

    &__wrapper {
      font-size: 1.6rem;
      font-weight: 500;
    }

    // left
    &__thumbnail-container {
      width: 12.6rem;
      height: 12.6rem;
      // border: 2px solid green;

    }

    &__thumbnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // right
    &__details-container {
      display: flex;
      flex-direction: column;

      flex: 1;
    }

    // inside of details-container
    // left
    &__details {
      // border: 2px solid red;
      display: flex;
      justify-content: space-between;

      @include respond (phone-land) {
        // justify-content: start;
        flex-direction: column;
      }
    }

    &__details-wrap {
      @include respond (phone-land) {
        order: 2;
      } 
    }

    &__title {
      font-size: 1.6rem;
      color: $black;
      // border: 1px solid red;
      font-weight: 600;
      line-height: 1.4;
    }

    &__brand {
      font-size: 1.6rem;
      color: $black-tint;
      text-transform: capitalize;
    }

    &__weight {
      font-size: 1.6rem;
      color: $black-tint;
    }

    &__qty {
      font-size: 1.6rem;
      color: $black-tint;
    }



    // right
    &__price {
      align-self: start;
      // border: 1px solid black;
      text-align: right;
      font-size: 1.6rem;
      white-space: nowrap;

      display: flex;
      flex-direction: column;
      

      span {
        text-decoration: line-through;
        color: $black-tint;
        font-size: 1.4rem;

        @include respond (phone-land) {
          align-self: end;
        } 
      }

      @include respond (phone-land) {
        flex-direction: row;
        gap: 1rem;
        order: 1;
        align-items: center;
      } 
    }

    // bottom
    &__btns {
      padding-top: 1rem;
    }

    &__label {
      padding-right: 1rem;
    }

    &__select {
      border: none;
      // outline: none;
    }

  }

}

.icon-btn {
  border: none;
  outline: none;
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  cursor: pointer;
  transition: transform .4s ease-out;

  &:hover .icon-svg {
    fill: $main;
  }

  .icon-svg {
    width: 100%;
    height: 100%;
    fill: $black;
    transition: transform .4s ease-out;
  }
}

.cart-cell {
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  color: $black-tint;
  margin: 1rem 0;


  &__title {
    font-weight: 600;
    color: $black;
  }

  &__price {
    white-space: nowrap;
  }

  &__total {    
    @extend .cart-cell;
    
    padding: 1rem 0;
    border-top: 1px solid $gray;
    border-bottom: 1px solid $gray;
  }

  &__header {
    @extend .cart-cell__title;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  &__promo {
    @extend .cart-cell;
    flex-direction: column;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid $gray;
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__input {
    font-size: inherit;
    color: inherit;
    outline: none;
    border: 2px solid $black;
    font-family: inherit;
    height: 3.6rem;
    padding: 0 1rem;
    width: 100%;

  }

  &__btn {
    background-color: $main;
    border: none;
    outline: none;
    cursor: pointer;
    color: $light-high;
    text-transform: uppercase;
    height: 3.6rem;
    font-weight: 600;
    padding: 0 2rem;
    color: $light-high;
    background: $gradient;
    background-image: linear-gradient(to right, $main-tint, $main, $main-shade);
    background-size: 300% 100%;
    transition: all 0.4s ease-in-out;
    letter-spacing: 2px;
    font-size: 1.4rem;

    &:hover {
      background-position: 100% 0;
      transition: all 0.4s ease-in-out;
      box-shadow: $shadow;

    }
  }

  &__codes {
    margin-bottom: 1rem;
  }

  &__code-wrap {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
      color: $black;
    }

    span {
      color: $black-tint;
    }
  }

  &__code-btn {
    height: 2.1rem;
    width: 2.1rem;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: transform .4s ease-out;

    &:hover {
      transform-origin: center;
      transform: rotate(90deg);
    }

    &:hover .cart-cell__btn-icon {
      fill: $main;

    }
  }

  &__btn-icon {
    width: 100%;
    height: 100%;
    fill: $black;
  }


  &__checkout {
    @extend .cart-cell;
    padding: .6rem 0;
  }
}

.carousel__slide {
  padding: 0.5rem;
}

</style>
