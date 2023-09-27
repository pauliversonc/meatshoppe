<template>


  <div class="search">
    <div class="search__wrapper">
      <!-- LEFT -->

      <!-- ASIDE -->
      <div class="filter">


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
        <div class="collapse bb" :class="{active : activeCollapse.price}">

          <!-- collapseable part -->
          <div class="collapse__head" role="button" ref="priceCollapse" @click="toggleCollapse('price', $event)">

            <!-- title -->
            <div class="collapse__title">
              <span class="collapse__title--name">price</span>
              <span class="collapse__title--count">(23)</span>
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
            <div class="collapse__body" v-if="activeCollapse.price">
              <div class="checkbox__group">
                <input class="checkbox__group--input" type="checkbox" value="checkbox" id="checkbox" v-model="filters.category" />
                <label class="checkbox__group--label" for="checkbox">checkbox</label>
                <span class="checkbox__group--count">(24)</span>
              </div>
            </div>
          </Transition>

          
        </div>
        <!-- ./collapse item -->



      </div>
      <!-- ASIDE -->





      <!-- <div class="filter"> -->
      <el-scrollbar class="filter" height="84vh">
        <div class="tags" v-if="filterTags.length > 0">
          <div class="tags__header">
            <span class="tags__title">APPLIED FILTER</span>
            <el-link @click="clearFilter" type="primary">Clear All</el-link>
          </div>

          <el-tag
            @close="handleClose(tag)"
            v-for="tag in filterTags"
            size="large"
            closable
            effect="plain"
            :key="tag.name"
            class="custom-checkbox"
            >{{ tag.name }}</el-tag
          >
        </div>

        <el-collapse
          v-model="activeNames"
          class="collapse__items"
          @change="handleCollapseChange"
          style="border: none"
        >
          <el-collapse-item title="CATEGORY" name="category">
            <el-checkbox-group v-model="filters.category">
              <el-checkbox
                v-for="item in filterOptions.category"
                :key="item"
                :label="item"
                :id="item"
                border
                class="custom-checkbox"
              />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="PART" name="part">
            <el-checkbox-group v-model="filters.part">
              <el-checkbox
                v-for="item in filterOptions.part"
                :key="item"
                :label="item"
                :id="item"
                border
                class="custom-checkbox"
              />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="BRAND" name="brand">
            <el-checkbox-group v-model="filters.brand">
              <el-checkbox
                v-for="item in filterOptions.brand"
                :key="item"
                :label="item"
                :id="item"
                border
                class="custom-checkbox"
              />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="WEIGHT" name="weight">
            <el-checkbox-group v-model="filters.weight">
              <el-checkbox
                v-for="item in filterOptions.weight"
                :key="item"
                :id="`${item}a`"
                :label="item"
                border
                class="custom-checkbox"
              />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="PRICE" name="price">
            <el-form
              label-position="top"
              :model="filters.price"
              :rules="rules"
              ref="priceForm"
            >
              <div class="price">
                <!-- <div class="price__min"> -->
                <el-form-item class="price__min" label="" prop="minValue">
                  <el-input
                    clearable
                    v-model="filters.price.minValue"
                    type="text"
                    placeholder="Min"
                  ></el-input>
                </el-form-item>
                <!-- </div> -->

                <div class="price__dash">&mdash;</div>

                <!-- <div class="price__max"> -->
                <el-form-item class="price__max" label="" prop="maxValue">
                  <el-input
                    clearable
                    v-model="filters.price.maxValue"
                    type="text"
                    placeholder="Max"
                  ></el-input>
                </el-form-item>
                <!-- </div> -->
              </div>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-scrollbar>
      <!-- </div> -->




      <!-- RIGHT -->
      <main class="content">
        <div class="products">
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
        </div>
        <div class="pagination" v-if="paginatedProducts.length">
          <el-pagination
            v-model:current-page="currentPage"
            background
            layout="prev, pager, next"
            :page-count="Math.ceil(filteredProducts.length / productsPerPage)"
            @current-change="handlePageChange"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import products from "../../data/ck-products.json";

export default {
  name: "MeatshoppeSearchPage",
  computed: {
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

    filteredProducts() {
      const minPrice = parseFloat(this.filters.price.minValue);
      const maxPrice = parseFloat(this.filters.price.maxValue);

      return this.products.filter((item) => {
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

    paginatedProducts() {
      // Calculate the start and end indices of products for the current page
      const startIndex = (this.currentPage - 1) * this.productsPerPage;
      const endIndex = startIndex + this.productsPerPage;

      // Slice the filtered products array to get the products for the current page
      return this.filteredProducts.slice(startIndex, endIndex);
    },
  },

  watch: {
    filters: {
      handler() {
        // Handle the changes to filters here
        this.scrollToTop();
      },
      deep: true, // Watch for changes deeply in the object
    },
  },

  data() {
    return {
      isRotated: false,

      activeNames: ["price"], // Open Collapse Div

      activeCollapse: {
        category: false,
        part: false,
        brand: false,
        weight: false,
        price: false,
      },

      filters: {
        category: [], // selected category / checkbox / multiple value
        part: [], // selected part / checkbox / multiple value
        brand: [], // selected brand / checkbox / multiple value
        weight: [], // selected weight / checkbox / multiple value
        price: {
          minValue: "", // only one value
          maxValue: "", // only one value
          tag: [], // only one tag
        },
      },

      testing: false,

      filterOptions: {
        category: [], // category choices
        part: [], // part choices
        brand: [], // brand choices
        weight: [], // weight choices
      },

      rules: {
        minValue: [{ validator: this.validatePrice, trigger: "blur" }],
        maxValue: [{ validator: this.validatePrice, trigger: "blur" }],
      },

      displayedProducts: [],
      products: products, // imported data of all chicken products

      currentPage: 1,
      productsPerPage: 12,
    };
  },

  mounted() {
    // this will generate different filter options
    this.generateFilterChoices("category", true);
    this.generateFilterChoices("weight", true);
    this.generateFilterChoices("brand", false);
    this.generateFilterChoices("part", false);
    // this.handlePageChange(1);
  },


  methods: {
    toggleCollapse(key ,event) {

      // get the clicked element element
      const element = event.target.closest('.collapse__head');

      // return if element is not exist
      if(!element) return
    
      // toggle active collpase key
      this.activeCollapse[key] = !this.activeCollapse[key]


    },

    toggleRotation() {
      this.isRotated = !this.isRotated;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth' // Optional: Adds smooth scrolling animation
      });
    },

    // Seperate all products by page
    paginateProducts(pageNumber) {
      const startIndex = (pageNumber - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;

      // check if you need to paginate a products that has filter
      console.log(this.filterTags.length);

      return this.products.slice(startIndex, endIndex);
    },

    // Run when user click a page
    handlePageChange(newPage) {
      // set clicked page as current page
      this.currentPage = newPage;
      // get paginated products
      // const products = this.paginateProducts(newPage);
      // set paginated products to display
      // this.displayedProducts = products;
      // set the scroll to the top
      this.scrollToTop();
    },

    // Set the collapse filter as active
    handleCollapseChange(activeNames) {
      this.activeNames = activeNames;
    },

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

    // Group products key this returns an array
    groupFilterOption(key) {
      const items = this.products.map((item) => item[key]);
      return items;
    },

    // Run when a filter tag is closed
    handleClose(tag) {
      // run when the clicked tag tag is filters.price
      if (tag.type === "tag") {
        // reset filters.price
        this.filters.price.minValue = this.filters.price.maxValue = "";
        this.filters.price.tag = [];
      } else {
        // remove specific value on filters array by tag name
        const filteredFiltersType = this.filters[tag.type].filter(
          (tagName) => tagName !== tag.name
        );
        this.filters[tag.type] = filteredFiltersType;
      }
    },

    // Remove close tags from filter array
    filterArray(arrayName, tag) {
      const filteredTags = this[arrayName].filter((item) => item != tag);
      return filteredTags;
    },

    // Clear all tags / reset filtered tags
    clearFilter() {
      this.filters.category =
        this.filters.part =
        this.filters.brand =
        this.filters.weight =
        this.filters.price.tag =
          [];

      this.filters.price.minValue = this.filters.price.maxValue = "";
    },

    // Price Filter Validation / put a value on filters.price.tag
    validatePrice(rule, value, callback) {
      const min = this.filters.price.minValue;
      const max = this.filters.price.maxValue;

      // check current value if it doesnt contain letters
      if (/^[0-9]+$/.test(value)) {
        // check if you put value in min and not yet on max
        if (rule.field === "minValue" && max.length === 0) {
          console.log("gj");
          console.log("product.price >= minValue");

          // this.filterTags.push(`PHP >= ${value}`);
          // this.price.tag.push(`PHP >= ${value}`);

          this.filters.price.tag = [`PHP >= ${value}`];
        }

        // check if you put value in min and not yet on max
        else if (rule.field === "maxValue" && min.length === 0) {
          console.log("gj");
          console.log("product.price <= maxValue");
          // this.filterTags.push(`PHP <= ${value}`);
          // this.price.tag.push(`PHP <= ${value}`);
          this.filters.price.tag = [`PHP <= ${value}`];
        }

        // Check if min and max is both integers / numbers
        else if (Number.isInteger(+min) && Number.isInteger(+max)) {
          // Check if max has a higher value than min
          if (+max >= +min) {
            // Validation Success
            console.log("gj");
            this.filters.price.tag = [`PHP ${min} - PHP ${max}`];

            this.$refs.priceForm.clearValidate(); // Clears all validation errors for the entire form
          } else {
            console.log("Max must be greater than Min");
            callback(new Error("Max must be greater than Min"));
          }
        } else {
          console.log("Check Min & Max value");
          callback(new Error("Check Min & Max value"));
        }
      }
      // Run when value is not int
      else if (value.length > 0) {
        callback(new Error("Value must be in digits"));
      }
      // Run when clear an input price
      else {
        // pag ni clear mo yung min - condition walang laman yung max
        if (rule.field === "minValue") {
          this.filters.price.minValue = "";
          this.filters.price.tag = [];
        }

        // pag ni clear mo yung max - condition walang laman yung min
        if (rule.field === "maxValue") {
          this.filters.price.maxValue = "";
          this.filters.price.tag = [];
        }

        // pag ni clear mo yung min - condition may laman yung max
        if (rule.field === "minValue" && this.filters.price.maxValue) {
          console.log(`ni clear ko yung min kahit may max :${max}`);
          this.filters.price.tag = [`PHP <= ${max}`];
        }

        // pag ni clear mo yung max - condition may laman yung min
        if (rule.field === "maxValue" && this.filters.price.minValue) {
          console.log(`ni clear ko yung min kahit may min :${min}`);
          this.filters.price.tag = [`PHP >= ${min}`];
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.search {
  padding: 7rem 2rem 8rem 2rem;
  background-color: $light-high;

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;

    // border: 1px solid red;

    // border-top: 1px solid #ebeef5;
    display: flex;
    gap: 2rem;
  }
}

// LEFT
.filter {
  // flex: 1;
  width: 20%;
  // padding-right: 2rem;
  // max-height: 50rem;
  position: sticky;
  top: 7rem;

  // border: 1px solid red;
}

.collapse {

  &.bt {
  border-top: solid thin $gray;

  }

  &.bb {
  border-bottom: solid thin $gray;

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
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
  }
}











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

// RIGHT
.content {
  width: 80%;
  padding: 2px;
}
// .sort {
// }

// .search {
// }

.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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








</style>
