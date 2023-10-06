<template>
  <div class="page">
    <div class="page__wrapper">
        <div class="page__gallery">60%</div>

        <div class="page__content">

          <!-- Main Details -->
          <div class="page__content--brand">ADIDAS</div>
          <div class="page__content--name">Lorem ipsum dolor sit amet consectetur.</div>
          <div class="page__content--price">$ 124.00</div>
          <div class="page__content--stock">In Stock</div>
          <div class="page__content--weight"></div>
          <!-- ./Main Details -->

          <!-- Collapse -->
          <!-- ./Collapse -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeatshoppeProductPage',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.page {
  // padding: 7rem 2rem 8rem 2rem;
  padding: 8rem 2rem;
  
  &__wrapper {
    border: 1px solid red;
    max-width: 120rem;
    margin: 0 auto;

    display: grid;
    // grid-template-columns: 60% 40%;
    grid-template-columns: 1fr 1fr;
  }

  &__content {
    border: 1px solid blue;
    color: $black-tint;

    &--brand {
    //  border: 1px solid blue;

      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 600;
      overflow-wrap: break-word;
    }

    &--name {
      // border: 1px solid blue;

      font-size: 2.4rem;
      font-weight: 600;
      overflow-wrap: break-word;
    }

    &--price {
      // border: 1px solid blue;

      font-size: 2.4rem;
      font-weight: 600;
      color: $main;
    }

    &--stock {
      // border: 1px solid blue;

      font-size: 1.6rem;
    }
    
    &--weight {
      font-size: 1.6rem;
    }
  }
}
</style>