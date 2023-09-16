<template>
  <div class="shop">
    <div class="shop__wrapper">
      <!-- LEFT -->

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
            v-for="product in filteredProducts"
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
        <div class="pagination">
          <el-pagination
            v-model:current-page="currentPage"
            background
            layout="prev, pager, next"
            :page-count="Math.ceil(products.length / perPage)"
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
  name: "MeatshoppeShopPage",
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


    filteredProducts(){

      const t = this.products.filter(product => {
        return (
          // this.filters.category.length > 0 || product.category.some(filter => product.category.includes(filter)) &&
          this.filters.category.length > 0 ||  this.filters.category.includes(product.category) &&
          this.filters.part.length > 0 ||  product.part.includes(this.filters.part)
          // this.filters.brand.length > 0 || product.filter(product => this.filters.brand.includes(product.brand)) &&
          // this.filters.weight.length > 0 ||product.filter(product => this.filters.weight.some(filter => product.weight.includes(filter)))
        )
      });

      console.log(t)
      return t;

      // let filteredProducts = [];

      // if(this.filters.category.length > 0) {
      //   filteredProducts = this.products.filter(product => this.filters.category.some(filter => product.category.includes(filter)));
      // }

      // if(this.filters.part.length > 0) {
      //   filteredProducts = this.products.filter(product => this.filters.part.includes(product.part) );
      // }

      // if(this.filters.brand.length > 0) {
      //   filteredProducts = this.products.filter(product => this.filters.brand.includes(product.brand));
      // }

      // if(this.filters.weight.length > 0) {
      //   filteredProducts = this.products.filter(product => this.filters.weight.some(filter => product.weight.includes(filter)));
      // }



      // console.log(filteredProducts)

      // return filteredProducts;
    },
  },

  data() {
    return {
      activeNames: ["price"], // Open Collapse Div

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
      perPage: 12,
    };
  },

  mounted() {
    // this will generate different filter options
    this.generateFilterChoices("category", true);
    this.generateFilterChoices("weight", true);
    this.generateFilterChoices("brand", false);
    this.generateFilterChoices("part", false);
    // this.handlePageChange(1);
    // this.test();
  },

  methods: {
    test() {
      const filteredTags = ["chicken", "liver", "skin"];

      const newProducts = this.products.filter((product) => {
        return (


          // filteredTags.includes(products.brand) || // text
          // filteredTags.includes(products.weight) || // array
          // filteredTags.some(item => products.weight.includes(item)) ||
          filteredTags.includes(products.price) && // int
          // filteredTags.includes(products.category) || // array
          filteredTags.some((item) => products.category.includes(item)) &&
          filteredTags.includes(products.part) // text
        );

        // filteredTags.includes(products.category)

        // console.log(filteredTags.includes(products.category))
      });

      // console.log(typeof newProducts)
      console.log(newProducts);
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
      const products = this.paginateProducts(newPage);
      // set paginated products to display
      this.displayedProducts = products;
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
.shop {
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
  padding-right: 2rem;
  // max-height: 50rem;
  position: sticky;
  top: 7rem;

  // border: 1px solid red;
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
</style>
