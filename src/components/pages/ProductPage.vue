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
          <BaseCollapse
          :border-bottom="true"
          :border-top="true"
          :active-collapse="activeCollpase.description"
          collapse-name="description"
          :category-count="0"
          @on-toggle-collapse="handleToggleCollapse"
          >

          <!-- category slot -->
          <h1>Testing</h1>
          <!-- ./category slot -->


          </BaseCollapse>

          <BaseCollapse
          :border-bottom="true"
          :border-top="true"
          :active-collapse="activeCollpase.details"
          collapse-name="details"
          :category-count="0"
          @on-toggle-collapse="handleToggleCollapse"
          >

          <!-- category slot -->
          <h1>Testing</h1>
          <!-- ./category slot -->


          </BaseCollapse>

          <BaseCollapse
          :border-bottom="true"
          :border-top="true"
          :active-collapse="activeCollpase.delivery"
          collapse-name="delivery"
          :category-count="0"
          @on-toggle-collapse="handleToggleCollapse"
          >

          <!-- category slot -->
          <h1>Testing</h1>
          <!-- ./category slot -->


          </BaseCollapse>
          <!-- ./Collapse -->
        </div>

        <div class="page__suggestions">
          <BaseHeadingFive 
          heading-title="You may also like"
          />

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeatshoppeProductPage',

  data() {
    return {
      activeCollpase: {
        description: false,
        details: false,
        delivery: false,
      },
    };
  },

  mounted() {
    
  },

  methods: {
    handleToggleCollapse(key) {

      console.log(key)
      this.activeCollpase[key] = !this.activeCollpase[key]

    }
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
    // border: 1px solid blue;
    color: $black-tint;

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
      margin-bottom: 1.4rem;
    }
    
    &--weight {
      font-size: 1.6rem;
    }
  }

  &__suggestions {
    grid-column: 1/-1;
    border: 1px solid green;
  }

}
</style>