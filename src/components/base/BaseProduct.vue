<template>
  <div
    class="product"

    >

    <!-- v-motion
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
    }" -->
    <div class="product__img-box">
      <img
        class="product__img"
        :src="`src/assets/images/products/${thumbnail}`"
        alt="product 1"
      />

      <ul class="product__tags">
        <li v-if="!stock" class="product__tag product__tag--sold">Sold Out</li>
        <li v-if="discountPercentage" class="product__tag product__tag--sale">
          Sale {{ discountPercentage }}%
        </li>
        <!-- <li class="product__tag product__tag--new">New</li> -->
      </ul>
    </div>

    <div class="product__content">
      <ul class="product__categories">
        <li
          class="product__category"
          v-for="product in category"
          :key="product"
        >
          {{ product }}
        </li>
      </ul>
      <p class="product__name">
        {{ title }}
      </p>
      <div class="product__price-box">
        <span class="product__price-new">&#8369;{{ markdownPrice }}</span>
        <span v-if="discountPercentage" class="product__price-old"
          >&#8369;{{ price.toFixed(2) }}</span
        >
      </div>

      <div class="product__cart">
        <span class="product__stock" :class="stockClasses">{{
          stockText
        }}</span>
        <button class="product__btn">
          <svg class="product__icon">
            <use
              xlink:href="../../assets/icons/sprite.svg#icon-shopping-cart"
            ></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeBaseProduct",
  props: {
    id: Number,
    title: {
      type: String,
      default: "Default Product Name",
    },
    description: {
      type: String,
      default: "Default Product Name",
    },
    price: {
      type: Number,
      default: 0,
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    brand: {
      type: String,
      default: "Meatshoppe",
    },
    category: {
      type: Array,
      default: ["Category 1", "Category 2"],
    },
    thumbnail: {
      type: String,
      default: "p-butobuto.jpg",
    },
    images: String,
  },
  computed: {
    stockClasses() {
      if (this.stock >= 1 && this.stock <= 10) {
        return "product__stock--low";
      }

      if (this.stock < 1 || !this.stock) {
        return "product__stock--none";
      }
    },

    stockText() {
      if (this.stock >= 1 && this.stock <= 10) {
        return "Low Stock";
      }

      if (this.stock < 1 || !this.stock) {
        return "Out of Stock";
      }

      if (this.stock && this.stock > 10) {
        return "In Stock";
      }
    },

    markdownPrice() {
      const percentage = this.discountPercentage;
      let value = this.price;

      if (!!percentage) {
        let result = value - (percentage / 100) * value;
        const result2 = result.toFixed(2);
        return result2;
      } else {
        return value.toFixed(2);
      }
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass//mixins";
.product {
  background-color: $light-mid;
  // border: 1px solid green;
  overflow: hidden;
  // box-shadow: $shadow;

  border-radius: 4px;
  text-align: left;

  max-width: 24rem;
  // max-width: 100%;

  @include box-hover-animation;

  // 1040 px below
  @media only screen and (max-width: 65em) {
    max-width: 100%;
    // width: 100%;
  }

  &__img-box {
    width: 100%;
    // border: 1px solid red;

    position: relative;
    overflow: hidden;
  }

  &__tags {
    position: absolute;
    top: 1rem;
    left: 1rem;

    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &__tag {
    border-radius: 4px;

    &--sale {
      padding: 0.6rem;
      font-size: 1rem;
      color: $light-high;
      text-transform: uppercase;
      background-color: $main;
    }

    &--sold {
      padding: 0.6rem;
      font-size: 1rem;
      color: $light-high;
      text-transform: uppercase;
      background-color: $dark-high;
    }

    &--new {
      padding: 0.6rem;
      font-size: 1rem;
      color: $light-high;
      text-transform: uppercase;
      background-color: #3c9342;
    }
  }
  &__img {
    height: 24rem;
    width: 100%;

    object-fit: fill;
  }

  &__content {
    padding: 0 1rem 1rem 1rem;
  }

  &__categories {
    display: flex;
    gap: 1rem;
    text-decoration: none;
    list-style: none;
    color: $black-tint;
    margin-bottom: 0.6rem;
  }

  &__category {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
  }

  &__price-box {
    display: flex;
    align-items: end;
  }

  &__price-new {
    font-size: 2.1rem;
    font-weight: 600;
    color: $main;
    // margin-top: -1rem;
  }

  &__price-old {
    margin-left: 1rem;
    text-decoration: line-through;
    font-size: 1.2rem;
    color: $black-tint;
    transform: translateY(-25%);
  }

  &__name {
    font-size: 1.6rem;
    font-weight: 600;
    color: $black;

    // min-height: 3em; /* Two line breaks plus a little extra space */
    line-height: 1.2em; /* Adjust line height to your liking */

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    overflow: hidden;
    text-overflow: ellipsis;

    // background-color: red;
  }

  &__stock {
    color: #3c9342;
    font-size: 1.2rem;

    &--low {
      color: #e99114;
    }

    &--none {
      color: #bf262f;
    }
  }

  &__cart {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  &__btn {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.8rem;
    display: 0.8flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transform: translateY(-50%);
  }
  &__icon {
    height: 1.2rem;
    width: 1.2rem;
  }
}
</style>
