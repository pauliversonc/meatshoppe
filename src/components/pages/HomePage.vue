<template>
  <TheHero></TheHero> 
  <TheCategory></TheCategory> 
  <TheService></TheService>
  <TheFeature></TheFeature> 
  <TheFiller></TheFiller>

 <TheProduct
    :paddingT="true"

    heading-span="Our Pork Products"
    heading-text="Succulent pork perfection awaits"
    heading-desc="Dive into deliciousness with our premium beef offerings"

    span="Special offer"
    sub-text="Rated Top Tier"
    text="Sirloin"
    paragraph="Marbleized tenderness, awaiting culinary alchemy for succulent transformation"
    :align="true"
    image-name="offer-1-min.png"
    :products="products.pork"

  ></TheProduct> 


 <TheProduct
    heading-span="Our Chicken Products"
    heading-text="Savor the juiciness of our amazing chicken"
    heading-desc="Delight in the brilliance of our best chicken range"

    span="Special offer"
    sub-text="Premium Chicken"
    text="Drumstick"
    paragraph="Supple flesh with a marbling of fat promises succulence and tenderness upon preparation"
    :align="false"
    image-name="offer-2-min.png"

    :products="products.chicken"

  ></TheProduct>

  <TheProduct
    heading-span="Our Beef Products"
    heading-text="Tender, juicy beef that melts in your mouth"
    heading-desc="Explore excellence with our quality beef choices"

    span="Special offer"
    sub-text="Succulent Grading"
    text="Loin Steak"
    paragraph="With vibrant marbling and juicy anticipation, it's ready for the grill's fiery dance"
    :align="true"
    image-name="offer-3-min.png"

    :products="products.beef"

  ></TheProduct>


  <TheProduct
    heading-span="Our ready to cook products"
    heading-text="Convenience meets culinary delight"
    heading-desc="Dine like a chef with our ready-to-cook creations"

    span="Special offer"
    sub-text="Classic Filipino"
    text="Sausage"
    paragraph="Sweet, Savory Filipino Longganisa, A taste of culinary heritage in every bite"
    :align="false"
    image-name="offer-4-min.png"

    :products="products['ready-to-cook']"

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
    const separatedProducts = [];

    // Get all products
    const featProducts = this.$store.getters['products/getProducts'];
    
    featProducts.forEach(product => {
      // Check if the category key exists in the separatedProducts object
      if(!separatedProducts[product.category[0]]) {

         // If it doesn't exist, create an empty array for that category
        separatedProducts[product.category[0]] = [];
      }

      // Push the current product to the array corresponding to its category
      separatedProducts[product.category[0]].push(product)
    });

    this.products = separatedProducts;
  },

  data() {
    return {
      products: [],
    };
  },

  mounted() {},

  methods: {},
};
</script>
