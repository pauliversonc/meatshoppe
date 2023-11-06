<template>
  <div class="cart">

    <div class="cart__wrapper">

      <div class="cart-items-container">
        <BaseHeadingFour heading-four="Cart"></BaseHeadingFour>

        <!-- wrapper flex-row-->
        <div class="cart-item">

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
                <div class="cart-item__title">Lorem asdsasa dads  ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div class="cart-item__brand">Lorem, ipsum dolor.</div>
                <div class="cart-item__weight">15</div>
                <div class="cart-item__qty">2</div>
              </div>


              <!-- right for price -->
              <div class="cart-item__price">
                P 123,467.00
              </div>



            </div>
           


            <!-- bottom -->
            <div class="cart-item__btns">
              <button>sad</button>
            </div>
          </div>


        </div>

      </div>
      
      <div class="cart__summary">
        <BaseHeadingFour heading-four="Summary"></BaseHeadingFour>
      </div>
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
    border: 2px solid pink;

    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 2rem;
  }




  .cart-items-container {
  }


  .cart-item {
    display: flex;
    gap: 1rem;

    border: 2px solid green;


    // left
    &__thumbnail-container {
      width: 15rem;
      height: 15rem;
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
      border: 2px solid red;
      display: flex;
      justify-content: space-between;
    }

    &__title {
      font-size: 1.6rem;
      font-weight: 600;

      border: 1px solid red;
    }
    &__brand {
      font-size: 1.6rem;
    }
    &__weight {
      font-size: 1.6rem;
    }
    &__qty {
      font-size: 1.6rem;
    }



    // right
    &__price {
      border: 1px solid black;

      font-size: 1.6rem;
      font-weight: 600;
    }

    // bottom
    &__btns {}




  }

  



}

</style>
