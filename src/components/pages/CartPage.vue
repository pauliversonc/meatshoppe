<template>
  <div class="cart">

    <div class="cart__wrapper">

      <div class="cart-items-container">
        <BaseHeadingFour heading-four="Cart"></BaseHeadingFour>

        <!-- wrapper flex-row-->
        <div class="cart-item" v-for="i in 3" :key="i">

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
                <div class="cart-item__title">Chicken Liver Goncalves & Tortola 1kg or 15kg</div>
                <div class="cart-item__brand">goncalves & tortola</div>
                <div class="cart-item__weight">15 kg</div>
                
                <div class="cart-item__qty">

                  <label class="cart-item__label" for="cars">Quantity</label>
                  <select class="cart-item__select" id="cars" name="cars">
                    <option v-for="i in 100" value="volvo">{{ i }}</option>
                  </select>

                </div>

              </div>


              <!-- right for price -->
              <div class="cart-item__price">
                P 3,461.00
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
      
      <aside class="cart__summary">
        <BaseHeadingFour heading-four="Summary"></BaseHeadingFour>

        <!-- Semi Table -->
        <div class="cart-cell">
          <div class="cart-cell__title">Subtotal</div>
          <div class="cart-cell__price">P 123,467.00</div>
        </div>

        <div class="cart-cell">
          <div class="cart-cell__title">Estimated Delivery & Handling</div>
          <div class="cart-cell__price">Free</div>
        </div>

        <div class="cart-cell">
          <div class="cart-cell__title">Coupon discounts</div>
          <div class="cart-cell__price">P 3,247.00</div>
        </div>

        <!-- Total bordered-->
        <div class="cart-cell__total">
          <div class="cart-cell__title">Total</div>
          <div class="cart-cell__price">P 32,247.00</div>
        </div>


        <!-- Enter Coupon -->
        <div class="cart-cell__promo">
          <span class="cart-cell__title">Promotions</span>

          <ul class="cart-cell__codes">
            <li class="cart-cell__code-wrap">
              <button class="cart-cell__code-btn">
                <svg class="cart-cell__btn-icon">
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </button>
              <strong>MEATSHOPPE2023</strong>
              <span>is applied</span>
            </li>
          </ul>

          <form class="cart-cell__form">
            <input class="cart-cell__input" type="text">
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
export default {
  name: "MeatshoppeCartPage",
  components: {BaseHeadingFour},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.cart {
  padding: 14rem 2rem 8rem 2rem;

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;
    // border: 2px solid pink;

    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 6rem;
  }




  .cart-items-container {
    // border-right: 1px solid $gray;
  }


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
      font-weight: 500;
      white-space: nowrap;
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

  &:hover .icon-svg {
    fill: $main;
    transition: all .3s ease;
  }

  .icon-svg {
    width: 100%;
    height: 100%;
    fill: $black;
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
    transition: all .3s ease;

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
    padding: .8rem 0;
  }
}
</style>
