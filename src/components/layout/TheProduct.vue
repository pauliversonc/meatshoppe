<template>
  <div class="product-l__wrapper"
    :class="{'pt-8' : paddingT}"
  >
    <BaseHeadingTwo
      :heading-span="headingSpan"
      :heading-text="headingText"
      :heading-desc="headingDesc"
    />

    <BaseOffer

      :span="span"
      :sub-text="subText"
      :text="text"
      :paragraph="paragraph"
      :align="align"
      :image-name="imageName"
    >
    </BaseOffer>

    <div class="product-l"
    v-motion
    :initial="{
      y: 50,
      opacity: 0,
    }"
    :visibleOnce="{
      y: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 100,
        mass: 1,
        delay: 300,
      },
    }"
    
    >
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(product, index) in products" :key="index">
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
import "vue3-carousel/dist/carousel.css";
import BaseOffer from "../base/BaseOffer.vue";
import BaseToast from "../base/BaseToast.vue";
import { takeMaxQty } from '../../utils/common.js'
export default {
  name: "MeatshoppeTheProduct",
  components: {
    Carousel,
    Slide,
    Navigation,
    BaseOffer,
    BaseToast
  },

  props: {
    paddingT: Boolean,

    products: {
      type: Array,
    },
    headingSpan:String,
    headingText:String,
    headingDesc:String,

    span: String,
    subText: String,
    text: String,
    paragraph: String,
    align: Boolean,
    imageName: String,


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
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },

  mounted() {
   
  },

  methods: {
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


    getMaxQty(id, weight = 1) {
      const store = this.$store;
      return takeMaxQty(id, store, weight);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.product-l {
  margin: 0 auto;
  max-width: 121rem;

  

  &__wrapper {
    background-color: $light-mid;
    // padding: 8rem 0;
    padding-bottom: 8rem;
    padding-left: 2rem;
    padding-right: 2rem;

    // border: 1px solid red;

    &.pt-8{
      padding-top: 8rem;
    }
  }

  .carousel__slide {
    padding: 0.5rem;
  }
}
</style>
