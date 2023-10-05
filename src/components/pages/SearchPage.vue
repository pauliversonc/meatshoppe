<template>


  <div class="search" ref="scrollContainer" >

    <div class="search__wrapper">

      <!-- 1. grid 1/-1-->
      <!-- Search results prefix -->
      <div class="search__header">
        
        <div v-show="filters.search.length > 0" class="search__header--prefix">Your search results for:</div>

          <div class="search__header--offset">

            <span v-if="filters.search.length > 0" class="search__header--keyword">"{{ filters.search }}"</span>
            <span v-else class="search__header--keyword">"all products"</span>
            <span class="search__header--count">[{{ filteredProducts.length }}]</span>

          </div>

          <div class="search__header--btns">

            <button class="icon-btn" >
              <span class="icon-btn__text" @click="toggleFilter = !toggleFilter">{{ toggleFilterBtnName }}</span>
              <svg class="icon-btn__icon">
                <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
              </svg>
            </button>

          </div>

      </div>
      <!-- /.Search results prefix -->

      <!-- 2. grid min-content-->
      <!-- Sidebar -->
      <div class="filter" :class="{shrink: toggleFilter}" >

          <!-- filter titles and clear button -->
        <Transition name="slide-fade">
          <div class="filter__header bt" v-show="filterTags.length > 0">
            <span class="filter__header--title">Applied Filters</span>
            <span class="filter__header--clr-btn" @click="clearFilter" role="btn">
              Clear All
            </span>
          </div>
        </Transition>


        <TransitionGroup tag="ul" name="tag-list" class="filter__tags" :class="{'add-padding': filterTags.length > 0}" > 
          <li class="filter__tag"  v-for="tag in filterTags" :key="tag.name">
              <span class="filter__tag--name">{{ tag.name }}</span>
              <div class="filter__tag--btn" role="btn" @click="removeTag(tag)">
                <svg class="filter__tag--icon">
                  <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
                </svg>
              </div>
          </li>
        </TransitionGroup>




        <!-- collapse item -->
        <div class="collapse bb bt" :class="{active : activeCollapse.category}">

          <!-- collapseable part -->
          <div class="collapse__head" role="button" ref="categoryCollapse" @click="toggleCollapse('category', $event)">

            <!-- title -->
            <div class="collapse__title">
              <span class="collapse__title--name">Category</span>
              <span class="collapse__title--count" v-if="filters.category.length">{{ `(${filters.category.length})` }}</span>
            </div>
            
            <!-- toggle --> <!-- rotating icon -->
            <div class="collapse__icon-box" :class="{rotate: activeCollapse.category}"  role="button">
              <svg class="collapse__icon-box--icon">
                <use
                  xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"
                ></use>
              </svg>
            </div>

          </div>

          <!-- Collapse body --> <!-- shrinking part -->
          <Transition name="expand">
            <div class="collapse__body" v-if="activeCollapse.category">
              
              <div class="checkbox__group" v-for="(item, index) in filterOptions.category" :key="item">
                <input class="checkbox__group--input" type="checkbox" :value="item" :id="`search_col_cat_${index}`" v-model="filters.category" />
                <!-- search collapse category -->
                <label class="checkbox__group--label" :for="`search_col_cat_${index}`">{{ item }}</label>
                <span class="checkbox__group--count">(24)</span>
              </div>

            </div>
          </Transition>

          
        </div>
        <!-- ./collapse item -->

        <!-- collapse item -->
        <div class="collapse bb" :class="{active : activeCollapse.part}">

          <!-- collapseable part -->
          <div class="collapse__head" role="button" ref="partCollapse" @click="toggleCollapse('part', $event)">

            <!-- title -->
            <div class="collapse__title">
              <span class="collapse__title--name">part</span>
              <span class="collapse__title--count" v-if="filters.part.length">{{ `(${filters.part.length})` }}</span>
            </div>
            
            <!-- toggle --> <!-- rotating icon -->
            <div class="collapse__icon-box" :class="{rotate: activeCollapse.part}"  role="button">
              <svg class="collapse__icon-box--icon">
                <use
                  xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"
                ></use>
              </svg>
            </div>

          </div>

          <!-- Collapse body --> <!-- shrinking part -->
          <Transition name="expand">
            <div class="collapse__body" v-if="activeCollapse.part">
              <div class="checkbox__group" v-for="(item, index) in filterOptions.part" :key="item">
                <!-- search collapse part -->
                <input class="checkbox__group--input" type="checkbox" :value="item" :id="`search_col_prt_${index}`" v-model="filters.part" /> 
                <label class="checkbox__group--label" :for="`search_col_prt_${index}`">{{ item }}</label>
                <span class="checkbox__group--count">(24)</span>
              </div>
            </div>
          </Transition>

          
        </div>
        <!-- ./collapse item -->

        <!-- collapse item -->
        <div class="collapse bb" :class="{active : activeCollapse.brand}">

          <!-- collapseable part -->
          <div class="collapse__head" role="button" ref="brandCollapse" @click="toggleCollapse('brand', $event)">

            <!-- title -->
            <div class="collapse__title">
              <span class="collapse__title--name">brand</span>
              <span class="collapse__title--count" v-if="filters.brand.length">{{ `(${filters.brand.length})` }}</span>
            </div>
            
            <!-- toggle --> <!-- rotating icon -->
            <div class="collapse__icon-box" :class="{rotate: activeCollapse.brand}"  role="button">
              <svg class="collapse__icon-box--icon">
                <use
                  xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"
                ></use>
              </svg>
            </div>

          </div>

          <!-- Collapse body --> <!-- shrinking part -->
          <Transition name="expand">
            <div class="collapse__body" v-if="activeCollapse.brand">
              <div class="checkbox__group" v-for="(item, index) in filterOptions.brand">
                <!-- search collapse brand -->
                <input class="checkbox__group--input" type="checkbox" :value="item" :id="`search_col_brd_${index}`" v-model="filters.brand" />
                <label class="checkbox__group--label" :for="`search_col_brd_${index}`">{{ item }}</label>
                <span class="checkbox__group--count">(24)</span>
              </div>
            </div>
          </Transition>

          
        </div>
        <!-- ./collapse item -->

        <!-- collapse item -->
        <div class="collapse bb" :class="{active : activeCollapse.weight}">

          <!-- collapseable part -->
          <div class="collapse__head" role="button" ref="weightCollapse" @click="toggleCollapse('weight', $event)">

            <!-- title -->
            <div class="collapse__title">
              <span class="collapse__title--name">weight</span>
              <span class="collapse__title--count" v-if="filters.weight.length">{{ `(${filters.weight.length})` }}</span>
            </div>
            
            <!-- toggle --> <!-- rotating icon -->
            <div class="collapse__icon-box" :class="{rotate: activeCollapse.weight}"  role="button">
              <svg class="collapse__icon-box--icon">
                <use
                  xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"
                ></use>
              </svg>
            </div>

          </div>

          <!-- Collapse body --> <!-- shrinking part -->
          <Transition name="expand">
            <div class="collapse__body" v-if="activeCollapse.weight">
              <div class="checkbox__group" v-for="(item, index) in filterOptions.weight" :key="item">
                <!-- search collapse weight -->
                <input class="checkbox__group--input" type="checkbox" :value="item" :id="`search_col_wet_${index}`" v-model="filters.weight" />
                <label class="checkbox__group--label" :for="`search_col_wet_${index}`">{{ item }}</label>
                <span class="checkbox__group--count">(24)</span>
              </div>
            </div>
          </Transition>

          
        </div>
        <!-- ./collapse item -->

        <!-- collapse item -->
        <div class="collapse bb mb-2" :class="{active : activeCollapse.price}">

          <!-- collapseable part -->
          <div class="collapse__head" role="button" ref="priceCollapse" @click="toggleCollapse('price', $event)">

            <!-- title -->
            <div class="collapse__title">
              <span class="collapse__title--name">price</span>
              <span class="collapse__title--count">&nbsp;</span>
            </div>
            
            <!-- toggle --> <!-- rotating icon -->
            <div class="collapse__icon-box" :class="{rotate: activeCollapse.price}"  role="button">
              <svg class="collapse__icon-box--icon">
                <use
                  xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"
                ></use>
              </svg>
            </div>

          </div>

          <!-- Collapse body --> <!-- shrinking part -->
          <Transition name="expand">
            <div class="collapse__body" v-show="activeCollapse.price">

              <div class="col_grid">
                <div class="col_grid--item">
                  <BaseInputText 
                    text-name="min"
                    text-label="min"
                    ref="bitmin"
                    text-input-type="number"
                    :text-required="false"
                    @on-input-blur="handleInputBlur"
                  />
                </div>
                <div class="col_grid--item center">&mdash;</div>
                <div class="col_grid--item">
                  <BaseInputText 
                    text-name="max"
                    text-label="max"
                    ref="bitmax"
                    text-input-type="number"
                    :text-required="false"
                    @on-input-blur="handleInputBlur"
                  />
                </div>

                <span v-show="isMaxErr" class="col_grid--item span__error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, perferendis!</span>
              </div>




            </div>
          </Transition>

          
        </div>
        <!-- ./collapse item -->

        <BaseButton v-show="isTabPortView" @click="toggleFilter = !toggleFilter" btn-text="apply" :btn-full-width="true" />



      </div>
      <!-- ./Sidebar -->

      <!-- 3. grid 1fr-->
      <!-- Products -->
      <main class="content">
        
        <div class="products" v-if="paginatedProducts.length > 0">
          <BaseProduct
            v-for="product in paginatedProducts"
            :key="product.id"
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
          />

          <!-- <span v-else>wala na</span> -->
        </div>

        <div v-else class="no-products">
          <strong><span>No results found!</span></strong>
          <span>Try different or more general keywords</span>
        </div>

      </main>
      <!-- ./Products -->

      <BaseLoading class="modBaseLoading" v-show="isLoading"></BaseLoading>


    </div>


 

  </div>
</template>

<script>
import products from "../../data/ck-products.json";
import BaseLoading from "../base/BaseLoading.vue";
export default {
  name: "MeatshoppeSearchPage",
  components: [BaseLoading],
  computed: {
    toggleFilterBtnName() {
      if (this.isTabPortView) {
        return this.toggleFilter ? 'Hide filter' : 'Show filter';
      } else {
        
        return this.toggleFilter ? 'Show filter' : 'Hide filter';
      }

    },

    filterTags() {
      let category = [];
      let part = [];
      let brand = [];
      let weight = [];
      let tag = [];

      // transform array to an object
      if (this.filters.category.length > 0) {
        const mutatedCategory = this.filters.category.map((name) => ({
          name: name,
          type: "category",
        }));
        category = mutatedCategory;
      }

      // transform array to an object
      if (this.filters.part.length > 0) {
        const mutatedPart = this.filters.part.map((name) => ({
          name: name,
          type: "part",
        }));
        part = mutatedPart;
      }

      // transform array to an object
      if (this.filters.brand.length > 0) {
        const mutatedBrand = this.filters.brand.map((name) => ({
          name: name,
          type: "brand",
        }));
        brand = mutatedBrand;
      }

      // transform array to an object
      if (this.filters.weight.length > 0) {
        const mutatedWeight = this.filters.weight.map((name) => ({
          name: name,
          type: "weight",
        }));
        weight = mutatedWeight;
      }

      // transform array to an object
      if (this.filters.price.tag.length > 0) {
        const mutatedTag = this.filters.price.tag.map((name) => ({
          name: name,
          type: "tag",
        }));
        tag = mutatedTag;
      }

      // return array of objects of filter tags
      return [...category, ...part, ...brand, ...weight, ...tag];
    },

    searchedProducts() {
      const keyword = this.filters.search.toLowerCase();
      return this.products.filter((item) => {
        return(
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword) ||
          item.brand.toLowerCase().includes(keyword)
          );
      });

    },

    // show filtered products
    filteredProducts() {
      const minPrice = parseFloat(this.filters.price.min);
      const maxPrice = parseFloat(this.filters.price.max);

      return this.searchedProducts.filter((item) => {
        const productPrice = parseFloat(item.price);

        return (
          (this.filters.part.length === 0 ||
            this.filters.part.includes(item.part)) &&
          (this.filters.brand.length === 0 ||
            this.filters.brand.includes(item.brand)) &&
          (this.filters.weight.length === 0 ||
            this.filters.weight.some((value) => item.weight.includes(value))) &&
          (this.filters.category.length === 0 ||
            this.filters.category.some((value) =>
              item.category.includes(value)
            )) &&
          (!minPrice || productPrice >= minPrice) &&
          (!maxPrice || productPrice <= maxPrice)
        );
      });
    },

    // seperate (slice) the product depending on productsToShow
    paginatedProducts() {
      // Calculate the start and end indices of products for the current page
      // const startIndex = (this.currentPage - 1) * this.productsPerPage;
      // const endIndex = startIndex + this.productsPerPage;

      // Slice the filtered products array to get the products for the current page
      return this.filteredProducts.slice(0, this.productsToShow);
    },

    // check if all products are loaded
    allProductsLoaded() {
      return this.productsToShow >= this.filteredProducts.length;
    },
  },

  watch: {
    filters: {
      handler() {
        // Handle the changes to filters here
        this.scrollToTop();
        this.productsToShow = 12;
      },
      deep: true, // Watch for changes deeply in the object
    },

    // watch the route
    // when change set the query keyword
    '$route'(route) {
      console.log(route.query?.keyword);
      if(route.query?.keyword)
      this.filters.search = route.query?.keyword
    },

    toggleFilter(newValue) {
      if (this.isTabPortView) {
        if (newValue) {
          document.body.classList.add("show-menu");
        } else {
          document.body.classList.remove("show-menu");
        }
      } 

    },
  },

  data() {
    return {

      activeCollapse: {
        category: false,
        part: false,
        brand: false,
        weight: false,
        price: true,
      },

      filters: {
        category: [], // selected category / checkbox / multiple value
        part: [], // selected part / checkbox / multiple value
        brand: [], // selected brand / checkbox / multiple value
        weight: [], // selected weight / checkbox / multiple value
        price: {
          min: "", // only one value
          max: "", // only one value
          tag: [], // only one tag
        },
        search: "",
      },

      errors: {
        minPrice: false,
        maxPrice: false,
      },

      isMaxErr: false, // when true, show max cant be greater than min

      filterOptions: {
        category: [], // category choices
        part: [], // part choices
        brand: [], // brand choices
        weight: [], // weight choices
      },

      toggleFilter: false,

      displayedProducts: [],
      products: products, // imported data of all chicken products

      currentPage: 1,
      productsToShow: 12,

      scrolling: false,
      isLoading: false, // Flag to control loading state

      isTabPortView: false,
    };
  },

  created() {
    // console.log(this.$route)

    // console.log(this.$route.query?.keyword);
    if(this.$route.query?.keyword)
    this.filters.search = this.$route.query?.keyword
  },

  mounted() {
    // this will generate different filter options
    this.generateFilterChoices("category", true);
    this.generateFilterChoices("weight", true);
    this.generateFilterChoices("brand", false);
    this.generateFilterChoices("part", false);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResizeScreen);
    // Initial check for screen width on component mount
    this.handleResizeScreen();
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResizeScreen);
  },


  methods: {
    handleResizeScreen() {
      // Update the isMobileView value based on the screen width
      this.isTabPortView = window.innerWidth <= 768;
    },

    handleScroll() {

      if(!this.scrolling){
        this.scrolling = true;
        // this.loading = true;

        const searchPageHeight = this.$refs.scrollContainer?.scrollHeight; // entire search page height
        const viewportDistanceToTop = window.scrollY; // distance from top of the page to upper part of viewport
        const viewportHeight = window.innerHeight; // exact height of viewport in the page
        
        
        // load more if scroll hits the bottom
        if(viewportDistanceToTop + viewportHeight >= searchPageHeight ) {
          console.log('hits bottom');
          this.loadMore();
 
        }

        // delay to show loading animation
        setTimeout(() => {
          this.scrolling = false;
        }, 1000); // Adjust the debounce interval as needed
      
      }

    },

    loadMore(){

      // if (this.isLoading) return;
      if (this.isLoading || this.allProductsLoaded) return;

      this.isLoading = true;

      setTimeout(() => {
        this.productsToShow = Math.min(this.productsToShow + 12, this.filteredProducts.length);
        this.isLoading = false;
      }, 1000); // Add your desired interval in milliseconds
    },

    toggleCollapse(key ,event) {

      // get the clicked element element
      const element = event.target.closest('.collapse__head');

      // return if element is not exist
      if(!element) return

      // toggle active collpase key
      this.activeCollapse[key] = !this.activeCollapse[key]

    },

    // good
    removeTag(tag) {

        // run when the clicked tag tag is filters.price
        if (tag.type === "tag") {
        // reset filters.price
        this.filters.price.min = this.filters.price.max = "";
        this.filters.price.tag = [];

        // press the x btn in bitmin & bitmax ref;
        this.$refs.bitmin.clearInput('min');
        this.$refs.bitmax.clearInput('max');

      } else {
        // remove specific tag 
        const filteredFiltersType = this.filters[tag.type].filter(
          (tagName) => tagName !== tag.name
        );
        // assign new set of tags 
        this.filters[tag.type] = filteredFiltersType;
      }
    },

    // good
    // handle inputs from price min & max
    handleInputBlur(object){
      this.isMaxErr = false;

      // console.log(a)
      const {key, value, error} = object;      
      
      // set the price from bit (base input text component)
      this.filters.price[key] = +value;
      this.errors[key+'Price'] = !!error;


   
      let min = this.filters.price.min;
      let max = this.filters.price.max;

      let minError = this.errors.minPrice;
      let maxError = this.errors.maxPrice;



      
      // check if min or max have value && and doesn't have error
      if((minError === false) && (maxError === false) && (min || max)) {
    
        // check if you put value in min and not yet on max 
        if(min && !max) {
          console.log('i put value on min but not on max')
          this.filters.price.tag = [`PHP >= ${min}`];
        } 
        
        // check if you put value in max and not yet on min
        else if (!min && max) {
          console.log('i put value on max but not on min')
          this.filters.price.tag = [`PHP <= ${max}`];
        }

        // if both have value, proceed to validate which has higher value
        else {

          // check if max value is greater than or equal to min
          if(max >= min) {
            console.log('validated')
            this.filters.price.tag = [`PHP ${min} - PHP ${max}`];
          } 
          
          // if min is greater than max prompt error message
          else {
            console.log("Max must be greater than Min");
            // this.$refs.bitmax.validateInput('max', true);
            this.filters.price.tag = [];
            this.isMaxErr = true;
          }

        }

      } 
      
      // else do nothing
      else {
        console.log('wala ako value')
        this.filters.price.tag = [];
      }



    },

    // scroll bar move to top
    scrollToTop() {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth' // Optional: Adds smooth scrolling animation
      });
    },


    // good
    // generate filter options uniquely depending on product key
    generateFilterChoices(key, isArray) {
      // Use the map function to extract the "weight" arrays
      let items = this.groupFilterOption(key);
      // check if "key" / "items" needs to be flatten
      if (isArray) {
        // Flatten the array of arrays into a single array
        items = [].concat(...items);
      }
      // Set will remove duplicate value, and will automatically returns unique array
      const uniqueItems = [...new Set(items)];

      this.filterOptions[key] = uniqueItems;
    },

    // good
    // Group products key this returns an array
    groupFilterOption(key) {
      const items = this.products.map((item) => item[key]);
      return items;
    },

    // good
    // clear all || create a filter tags above
    // Clear all tags / reset filtered tags
    clearFilter() {
      this.filters.category =
        this.filters.part =
        this.filters.brand =
        this.filters.weight = []

        this.$refs.bitmin.clearInput('min');
        this.$refs.bitmax.clearInput('max');

    },

  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";
.search {
  // border: 1px solid red;
  padding: 7rem 2rem 8rem 2rem;
  // background-color: $light-mid;


  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;

    // border: 1px solid blue;
    display: grid;
    grid-template-columns: min-content 1fr;
    
    // gap: 2rem;

    @include respond(tab-port) {
      grid-template-columns: 1fr;
    }

  }

  &__prefix {
    grid-column: 1/-1;
    
    font-size: 1.4rem;
    color: $black;
  }

  &__header {
    margin-top: 1.4rem;
    grid-column: 1/-1;
    // border: 1px solid red;
    margin-bottom: 1.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    // gap: 2rem;

    font-size: 1.4rem;
    color: $black;

    &--prefix {
      grid-column: 1/-1;
    }

  
    &--keyword {
      display: inline;
      text-transform: uppercase;
      font-size: 2.4rem;
      overflow-wrap: break-word;
      margin-right: 1rem;
      line-height: 1;
      font-weight: 600;
    }

    &--count {
      display: inline;
    }



    &--btns {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 1rem;
    }



  }
}

// sidebar
.filter {
  position: sticky;
  top: 7rem;
  width: 24rem;
  align-self: start;
  transition: all .4s ease;
  margin-right: 2rem;
  // overflow: hidden;
  overflow-y: auto;
  height: 100vh;
  
  padding: 0 1rem 0 0;
  


  @include respond(tab-port) {
    position: fixed;
    top: 0;
    left: 0;
    // padding-right: 17px;
    z-index: 99999;
    background-color: white;
    // width: 100vw;
    // height: 100vh;
    // border: 1px solid green;
    // overflow: hidden;


    width: 0;
    margin-right: 0;
    // padding: 2rem;
    padding: 0 2rem 2rem 2rem;

    transform: translateX(-100%);

    

  }


  &.shrink {
    width: 0;
    margin-right: 0;
    padding: 0;

    @include respond(tab-port) {
      width: 100vw;
      height: 100vh;
      transform: translateX(0);
      padding: 0 2rem 2rem 2rem;
    }

  

  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    color: $black-tint;

    &.bt {
      // background-color: red;
      padding-top: 1.4rem;
      border-top: solid thin $gray;

    }

    &--title {
      font-size: inherit;
      color: inherit;
      text-transform: uppercase;
      font-weight: 600;
    }

    &--clr-btn {
      font-size: inherit;
      color: inherit;
      cursor: pointer;
      // border: 1px solid red;
      line-height: 1.6rem;

      @include link-animate;
    }
  }

  // border: 1px solid red;

  &__tags {
    // background-color: red;
    // min-height: 0;
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    // padding: 1.4rem 0;
    transition: padding .6s ease-out;

    &.add-padding {
      padding: 1.4rem 0;
    }
  }
  &__tag {
    display: flex;
    align-items: center;
    // justify-content: center;
    gap: 1rem;
    background-color: $light-mid;
    color: $dark-mid;
    font-size: 1.4rem;
    border: 2px solid transparent;
    transition: all 0.4s ease-in-out;

    

    &:hover {
      border: 2px solid $dark-high;
    }

    // border: 1px solid blue;

    &--name{
      font-size: inherit;
      color: inherit;
      padding-left: .6rem;
      user-select: none;
    }
    &--btn{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: .4rem;
      cursor: pointer;
      transition: all .3s ease;

      &:hover {
        transform-origin: center;
        transform: rotate(90deg);
      }
    }
    &--icon{
      height: 2rem;
      width: 1.4rem;

    }
  }

}

// sidebar - collapse 
.collapse {

  &.bt {
  border-top: solid thin $gray;

  }

  &.bb {
  border-bottom: solid thin $gray;

  }

  &.mb-2 {
    margin-bottom: 2rem;
  }
 
  &__head {
    padding: 1.4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background-color: red;
    cursor: pointer;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    // border: 1px solid red;
    line-height: 1;

    &--name, &--count {
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 600;
      color: $black-tint;
      user-select: none;
      // @include text-shine-effect;
    }

  }

  &__icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid red;
    transition: transform .4s ease-out ;

    &--icon {
      height: 2rem;
      width: 2rem;
      transform: rotate(180deg);
      
 
    }
  }

  &__body {
    max-height: 100rem;
    overflow: hidden;
    opacity: 1;
    // border: 1px solid red;

    .checkbox__group {
      display: flex;
      align-items: center;
      justify-content: start;
      // gap: .4rem;
      margin-top: .2rem;
      // padding-left: 1rem;

      &:last-child{
        margin-bottom: 1.4rem;
      }

      // border: 1px solid red;

      //  Hide the default checkbox 
      &--input {
        display: none;

        // Style the custom checkbox when it's checked
        &:checked + .checkbox__group--label::before {
          background-color: $dark-high;
          // border: 2px solid $light-low;
        }

        // Add a checkmark icon to the checked checkbox 
        &:checked + .checkbox__group--label::after {
          content: "\2713"; /* Unicode checkmark character */
       
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          transform: translate(30%, -50%);
          color: #fff; /* Color of the checkmark */
        }

      }


      &--label {
        position: relative;
        font-size: 1.4rem;
        text-transform: lowercase;
        font-weight: 400;
        cursor: pointer;
        user-select: none;
        color: $black-tint;
        // border: 1px solid red;
        width: 100%;
        line-height: 1.4;
        padding-left: 2.4rem; // Space for the custom checkbox 

        transition: .3s ease-out;
        // checkbox - default style (not clicked)
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 1.6rem;
          height: 1.6rem;
          background-color: $light-high;
          border: 2px solid $dark-low;
        }

        &:hover {
          color: $main;
        }
      }

  

      &--count{
        user-select: none;
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
  }
}

// sidebar - collapse input price
.price {
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;

  &__dash {
    padding-top: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: start;
  }

  &__range {
    padding: 0 1.2rem;
    grid-column: 1/-1;
  }
}

// products wrapper right
.content {
  // width: 80%;
  // padding: 2px;
  align-self: start;
  // background-color: red;
}

// parent of products
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  @include respond(tab-port) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.no-products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: $black-tint;


}


.custom-checkbox {
  // border-radius: 0;
  margin-right: 2px;
  margin-bottom: 2px;
}

.tags {
  border-bottom: 1px solid $gray;
  padding-bottom: 2.4rem;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 400;
  }
}


.expand-enter-active, .expand-leave-active {
  transition: max-height .4s ease-in-out, opacity .4s ease-in-out;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}


.rotate {
  transform: rotateX(180deg);
  transition: transform .4s ease-out;
  perspective: 100px;
}





.col_grid {
  display: grid;
  grid-template-columns: 1fr .2fr 1fr;
  margin-bottom: 1.4rem;

  &--item {
    &.center {
      max-height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

}

.span__error {
  grid-column: 1/-1;
  @include error-message;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  // transform: translateX(20px);
  opacity: 0;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.tag-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.tag-list-enter-active {
  transition: all .4s ease;
}
.tag-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.tag-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.tag-list-leave-active {
  transition: all .4s ease;
  position: absolute;
}
.tag-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.tag-list-move {
  transition: all .4s ease;
}


.modBaseLoading {
  grid-column: 2;

  @include respond(tab-port) {
    grid-column: 1;
  }
}

.icon-btn {
  display: flex;
  align-items: center;
  outline: none;

  border: none;
  line-height: 1.6;
  background-color: transparent;
  gap: .6rem;
  padding-left: .4rem;
  // bor
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
  // padding: 1rem;

  &__text {
    text-transform: capitalize;
    font-size: 1.6rem;
    color: $black;
    font-weight: 400;

 
  }

  &__icon {
    height: 2rem;
    width: 2rem;
  }


}



</style>
