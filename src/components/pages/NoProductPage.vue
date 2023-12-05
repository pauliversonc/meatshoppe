<template>
  <div class="no-product">

    <div class="no-product__wrapper"


    v-motion
      :initial="{
        x: -200,
        opacity: 0,
      }"
      :enter="{
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 100,
          mass: 5,
          delay: 400
        },
      }"
    >

        <div class="no-product__img-con">
          <img class="no-product__img" src="/public/images/alerts/undraw_no_data_re_kwbl.svg" alt="Product Not found">
        </div>

        <BaseHeadingOne
          headingText="No Products Found"
          headingDesc="Apologies, the requested product is currently unavailable. You may explore alternatives below"
          :add-padding="false"
        />



    </div>

    <div class="no-product__suggestions"
    v-motion
    :initial="{
      y: 50,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 200,
        mass: 1,
        delay: 800,
      },
    }"
    >
      <BaseHeadingFive 
      heading-title="You may also like"
      :margin-bottom="true"
      />

      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(product, index) in productsSuggestion"  :key="index">
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

          @add-to-cart = "handleAddToCart"
          />
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
import { takeMaxQty, formatCurrency } from '../../utils/common.js';
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    BaseToast
  },

  created() {
    this.fetchProducts();
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
          itemsToShow: 5  ,
          snapAlign: "start",
        },
      },

      productsSuggestion: [],
    }
  },

  methods: {
    getMaxQty(id, weight = 1) {
      const store = this.$store;
      return takeMaxQty(id, store, weight);
    },

    formattedPrice(price) {
      return formatCurrency(price);
    },

    fetchProducts() {
      const featProducts = this.$store.getters['products/getFeatureProducts'];
      this.productsSuggestion = featProducts;
    },

    handleAddToCart(id) {

      const product = {
        id,
        weight: 1,
        qty: 1,
      }

      // check max qty of the item/product
      const item = this.getMaxQty(id);

      // check if item has stock
      if(item.stock) {

        // check if item doesnt exceed the available stock
        if (item.maxQty) {

          // if available | check if product already exist in cart by using id and weight
          // returns found object in cart or false
          const retrievedProduct = this.$store.getters['cart/getProductCart'](product);
          
          // if product already exist on the cart // then increase
          if (retrievedProduct) {
            this.$store.dispatch('cart/addToCart', product);
            this.$refs.toast.showToast('Item has been added to your shopping cart');
          
          // else push new item
          } else {
            this.$store.dispatch('cart/addToCart', product);
            this.$refs.toast.showToast('New item has been added to your shopping cart');
          }

        } else {
          this.$refs.toast.showToast('Quantity in cart exceeds available stock');
        }

      } else {
        this.$refs.toast.showToast('This product is out of stock');
      }

    },
  },
};
</script>

<style lang="scss" scoped>

.no-product {
  padding: 11rem 2rem 6rem 2rem;

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  &__suggestions {
    padding-top: 9.6rem;
    max-width: 120rem;
    margin: 0 auto;
  }

  &__img-con {
    width: 30%;

    @media only screen and (max-width: 58.375em) {
      width: 40%;
    }

    @media only screen and (max-width: 31.375em) {
      width: 60%;
    }
  }

  &__img {
    width: 100%;
  }

}

.carousel__slide {
  padding: 0.5rem;
}

</style>
