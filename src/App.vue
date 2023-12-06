<template>
  <TheHeader ></TheHeader>


  <!-- <router-view></router-view> -->
  <!-- <TheHero></TheHero>
  <TheCategory></TheCategory>
  <TheService ></TheService>
  <TheFeature></TheFeature>
  <TheFiller></TheFiller>

  <TheProduct
    :paddingT="true"

    heading-span="Our Pork Products"
    heading-text="Check our fantastic Pork"
    heading-desc="Lorem must be angry right now! "

    span="Special offer"
    sub-text="Succulent Garden"
    text="Gift boxes"
    paragraph="Lorem ipsum dolor, ur adipisicing elit. Amet ipsum culpa numquam exaliquid obcaecati?"
    :align="true"
    image-name="offer-1-min.png"
    
    :products="products"

  ></TheProduct> 


 <TheProduct
    heading-span="Our Chicken Products"
    heading-text="Check our fantastic Chicken"
    heading-desc="Lorem must be angry right now! "

    span="Special offer"
    sub-text="Succulent Garden"
    text="Gift boxes"
    paragraph="Lorem ipsum dolor, ur adipisicing elit. Amet ipsum culpa numquam exaliquid obcaecati?"
    :align="false"
    image-name="offer-2-min.png"

    :products="products"

  ></TheProduct>

  <TheProduct
    heading-span="Our Beef Products"
    heading-text="Check our fantastic Beef"
    heading-desc="Lorem must be angry right now! "

    span="Special offer"
    sub-text="Succulent Garden"
    text="Gift boxes"
    paragraph="Lorem ipsum dolor, ur adipisicing elit. Amet ipsum culpa numquam exaliquid obcaecati?"
    :align="true"
    image-name="offer-3-min.png"

    :products="products"

  ></TheProduct>


  <TheProduct
    heading-span="Our ready to cook products"
    heading-text="Check our fantastic ready to cook products"
    heading-desc="Lorem must be angry right now! "

    span="Special offer"
    sub-text="Succulent Garden"
    text="Gift boxes"
    paragraph="Lorem ipsum dolor, ur adipisicing elit. Amet ipsum culpa numquam exaliquid obcaecati?"
    :align="false"
    image-name="offer-4-min.png"

    :products="products"

  ></TheProduct> -->



  <!-- <TheFooter></TheFooter> -->
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
// import TheHero from "./components/layout/TheHero.vue";
// import TheCategory from "./components/layout/TheCategory.vue";
// import TheFeature from "./components/layout/TheFeature.vue";
// import TheService from "./components/layout/TheService.vue";
// import TheProduct from "./components/layout/TheProduct.vue";
// import TheFiller from "./components/layout/TheFiller.vue";

export default {
  name: "MeatshoppeApp",
  components: {
    TheHeader,
    TheFooter,
    // TheHero,
    // TheCategory,
    // TheFeature,
    // TheService,
    // TheProduct,
    // TheFiller,
  },

  data() {
    return {
      products: [
        
      ]
    };
  },

  mounted() {},

  methods: {},
};
</script>

