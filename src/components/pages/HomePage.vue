<template>
  <TheHero></TheHero>
  <TheCategory></TheCategory>
  <TheService ></TheService>
  <TheFeature></TheFeature>
  <TheFiller></TheFiller>

  <TheProduct
    :paddingT="true"

    heading-span="Our Pork Products"
    heading-text="Succulent Pork Perfection Awaits"
    heading-desc="Dive into deliciousness with our premium beef offerings"

    span="Special offer"
    sub-text="Rated Top Tier"
    text="Pork Chop"
    paragraph="Marbleized tenderness, awaiting culinary alchemy for succulent transformation"
    :align="true"
    image-name="offer-1-min.png"
    :products="products"

  ></TheProduct> 


 <TheProduct
    heading-span="Our Chicken Products"
    heading-text="Savor The Juiciness Of Our Amazing Chicken"
    heading-desc="Delight in the brilliance of our best chicken range"

    span="Special offer"
    sub-text="Premium Chicken"
    text="Drumstick"
    paragraph="Supple flesh with a marbling of fat promises succulence and tenderness upon preparation"
    :align="false"
    image-name="offer-2-min.png"

    :products="products"

  ></TheProduct>

  <TheProduct
    heading-span="Our Beef Products"
    heading-text="Tender, Juicy Beef That Melts In Your Mouth"
    heading-desc="Explore excellence with our quality beef choices"

    span="Special offer"
    sub-text="Succulent Grading"
    text="Raw Steak"
    paragraph="With vibrant marbling and juicy anticipation, it's ready for the grill's fiery dance"
    :align="true"
    image-name="offer-3-min.png"

    :products="products"

  ></TheProduct>


  <TheProduct
    heading-span="Our ready to cook products"
    heading-text="Convenience Meets Culinary Delight"
    heading-desc="Dine like a chef with our ready-to-cook creations"

    span="Special offer"
    sub-text="Classic Filipino"
    text="Sausage"
    paragraph="Sweet, Savory Filipino Longganisa, A taste of culinary heritage in every bite"
    :align="false"
    image-name="offer-4-min.png"

    :products="products"

  ></TheProduct>

</template>

<script>
import TheHero from "../layout/TheHero.vue";
import TheCategory from "../layout/TheCategory.vue";
import TheFeature from "../layout/TheFeature.vue";
import TheService from "../layout/TheService.vue";
import TheProduct from "../layout/TheProduct.vue";
import TheFiller from "../layout/TheFiller.vue";
export default {
  name: 'MeatshoppeHomePage',
  components: {
    TheHero,
    TheCategory,
    TheFeature,
    TheService,
    TheProduct,
    TheFiller,
  },

  created() {
    const featProducts = this.$store.getters['products/getFeatureProducts'];
    this.products = featProducts;
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
      //     discountPercentage: 10,
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

      products: [],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
