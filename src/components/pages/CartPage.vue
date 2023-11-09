<template>
  <div class="cart">

    <div class="cart__wrapper">

      <!-- product list in cart -->
      <div class="cart-items-container">
        <BaseHeadingFour heading-four="Cart"></BaseHeadingFour>

        <!-- wrapper flex-row-->
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

                  <label class="cart-item__label" for="cars">Quantity</label>
                  <select class="cart-item__select" id="cars" name="cars">
                    <option v-for="i in 100" value="volvo">{{ i }}</option>
                  </select>

                </div>

              </div>


              <!-- right for price -->
              <div class="cart-item__price" v-if="product.discountPercentage">
                <strong>{{ formatCurrency(((product.price * (1-(product.discountPercentage / 100))) * product.weight) * product.qty) }}</strong>
                <span>{{ formatCurrency(product.price * product.weight * product.qty)  }}</span>
              </div>

              <div class="cart-item__price" v-else>
                <strong>{{ formatCurrency(product.price * product.weight * product.qty) }}</strong>
              </div>





            </div>
           


            <!-- bottom -->
            <div class="cart-item__btns">

              <button class="icon-btn">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/icons/sprite.svg#icon-trash-2"></use>
                </svg>
              </button>

            </div>
          </div>


        </div>

      </div>
      
      <!-- Table pricing summary -->
      <aside class="cart__summary">
        <BaseHeadingFour heading-four="Summary"></BaseHeadingFour>

        <!-- Semi Table -->
        <div class="cart-cell">
          <div class="cart-cell__title">Subtotal</div>
          <div class="cart-cell__price">{{ formatCurrency(subTotal) }}</div>
        </div>

        <div class="cart-cell">
          <div class="cart-cell__title">Estimated Delivery & Handling</div>
          <div class="cart-cell__price">Free</div>
        </div>

        <div class="cart-cell">
          <div class="cart-cell__title">Coupon discounts</div>
          <div class="cart-cell__price">{{ formatCurrency(couponDiscountTotal) }}</div>
        </div>

        <!-- Total bordered-->
        <div class="cart-cell__total">
          <div class="cart-cell__title">Total</div>
          <div class="cart-cell__price">{{ formatCurrency(total) }}</div>
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
            <input class="cart-cell__input" v-model.trim="promoCode" type="text" @input="handleInputCode">
            <button class="cart-cell__btn">Apply</button>
          </form>

        </div>
        
        
        <!-- Checkout -->
        <div class="cart-cell__checkout">
          <BaseButton btn-text="Checkout"  :btn-full-width="true" />
        </div>

      </aside>
    </div>

  </div>
</template>

<script>
import BaseHeadingFour from '../base/BaseHeadingFour.vue';
import {mapGetters} from 'vuex';
export default {
  name: "MeatshoppeCartPage",
  components: {BaseHeadingFour},
  computed: {
    ...mapGetters({
      cartProducts: 'cart/getProducts',
      products: 'products/getProducts'
    }),

    productsDetails() {
      return this.getProductById(this.cartProducts);
    },


    subTotal() {
      let total = 0;
      for (const product of this.cartProducts) {
        const discountedPrice = this.applyDiscount(product.price, product.discountPercentage, product.weight, product.qty);
        total += discountedPrice;
      }

      return total;
    },

    total(){
      let total = 0;
      for (const product of this.cartProducts) {
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
        {"code" : "MEATSHOPPE2023", "discount": 200, "minSpend": 2000},
        {"code" : "BEATTHEHEAT123", "discount": 50, "minSpend": 1000},
      ]
    };
  },



  methods: {
    getProductById(productsCart) {
      return this.products.filter((product) => {
        return productsCart.some(cart => product.id === cart.id);
      });

      
    },

    addPromoCode() {
      console.log('wow')
    },

    removePromoCode(index) {
      this.redeemedPromoCode.splice(index, 1);
    },

    handleInputCode() {
      // Remove non-alphanumeric characters and convert to uppercase
      this.promoCode = this.promoCode.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 14);
    },

    formatCurrency(price) {
      return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2,
      }).format(price);
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




  // .cart-items-container {
  // }


  .cart-item {
    display: flex;
    gap: 3rem;

    // border: 2px solid green;
    padding-bottom: 2.2rem;
    border-bottom: 1px solid $gray;
    
    margin-bottom: 2rem;

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
</style>
