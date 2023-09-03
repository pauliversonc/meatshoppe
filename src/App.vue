<template>
  <TheHeader ></TheHeader>


  <router-view></router-view>
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



  <TheFooter></TheFooter>
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
      // products: [
      //   {
      //     id: 1,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 100.11,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 100,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },

      //   {
      //     id: 2,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 200.0,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 5,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },

      //   {
      //     id: 3,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 220.0,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 0,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },

      //   {
      //     id: 4,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 1200.0,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 10,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },

      //   {
      //     id: 5,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 1040.0,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 150,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },

      //   {
      //     id: 6,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 1700.0,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 102,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },

      //   {
      //     id: 7,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 100.0,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 10,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },

      //   {
      //     id: 8,
      //     title: "iPhone 9 n apple mobile whic  asd as asdsa  asdda",
      //     description: "An apple mobile which is nothing like apple",
      //     price: 100.23,
      //     discountPercentage: 0,
      //     rating: 4.69,
      //     stock: 10,
      //     brand: "Apple",
      //     category: ["pork"],
      //     thumbnail: "p-butobuto.jpg",
      //     images: "p-butobuto.jpg",
      //   },
      // ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

