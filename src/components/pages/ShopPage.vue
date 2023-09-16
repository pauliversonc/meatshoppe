<template>
  <div class="shop">
    <div class="shop__wrapper">
      <!-- LEFT -->
      
      <!-- <div class="filter"> -->
      <el-scrollbar class="filter" height="60rem">
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
            :key="tag"
            class="custom-checkbox"
            >{{ tag }}</el-tag
          >
        </div>

        <el-collapse
          v-model="activeNames"
          class="collapse__items"
          @change="handleCollapseChange"
          style="border: none"
        >
          <el-collapse-item title="CATEGORY" name="category">
            <el-checkbox-group v-model="category">
              <el-checkbox
                @change="handleCheckboxChange"
                v-for="item in categoryOptions"
                :key="item"
                :label="item"
                :id="item"
                border
                class="custom-checkbox"
              />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="PART" name="part">
            <el-checkbox-group v-model="part">
              <el-checkbox
                @change="handleCheckboxChange"
                v-for="item in partOptions"
                :key="item"
                :label="item"
                :id="item"
                border
                class="custom-checkbox"
              />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="BRAND" name="brand">
            <el-checkbox-group v-model="brand">
              <el-checkbox
                @change="handleCheckboxChange"
                v-for="item in brandOptions"
                :key="item"
                :label="item"
                :id="item"
                border
                class="custom-checkbox"
              />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="WEIGHT" name="weight">
            <el-checkbox-group v-model="weight">
              <el-checkbox
                @change="handleCheckboxChange"
                v-for="item in weightOptions"
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
              :model="price"
              :rules="rules"
              ref="priceForm"
            >
              <div class="price">
                <!-- <div class="price__min"> -->
                <el-form-item class="price__min" label="" prop="minValue">
                  <el-input
                    clearable
                    v-model="price.minValue"
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
                    v-model="price.maxValue"
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
            v-for="product in displayedProducts"
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

  data() {
    return {
      activeNames: ["price"], // Open Filter
      category: [], // selected category
      categoryOptions: [], // category choices
      part: [], // selected part
      partOptions: [], // part choices
      brand: [], // selected brand
      brandOptions: [], // brand choices
      weight: [], // selected weight
      weightOptions: [], // weight choices
      filterTags: [], // list of filter tags

      price: {
        minValue: "",
        maxValue: "",
        tag: [],
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
    this.handlePageChange(1);
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth' // Optional: Adds smooth scrolling animation
      });
    },

    paginateProducts(pageNumber) {
      const startIndex = (pageNumber - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.products.slice(startIndex, endIndex);
    },

    handlePageChange(newPage) {
      // Handle page change, e.g., fetch data for the new page
      this.currentPage = newPage;

      // extracted products
      const products = this.paginateProducts(newPage);
      // set paginate products to display
      this.displayedProducts = products;
      // set the scroll to the top
      this.scrollToTop();
    },

    handleCollapseChange(activeNames) {
      this.activeNames = activeNames;
    },

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
      // console.log(uniqueItems);

      this[key + "Options"] = uniqueItems;
    },

    // Group products key this returns an array
    groupFilterOption(key) {
      const items = this.products.map((item) => item[key]);
      return items;
    },

    handleCheckboxChange() {
      // Update your filter tags
      // spread category, part, brand, and weight
      this.filterTags = [
        ...this.category,
        ...this.part,
        ...this.brand,
        ...this.weight,
        ...this.price.tag,
      ];
    },

    handleClose(tag) {
      // check if tag is in this array
      if (this.category.includes(tag)) {
        // remove selected tags from v-model array
        const filteredTags = this.filterArray("category", tag);
        this.category = filteredTags;
      }
      if (this.part.includes(tag)) {
        // remove selected tags from v-model array
        const filteredTags = this.filterArray("part", tag);
        this.part = filteredTags;
      }
      if (this.brand.includes(tag)) {
        // remove selected tags from v-model array
        const filteredTags = this.filterArray("brand", tag);
        this.brand = filteredTags;
      }
      if (this.weight.includes(tag)) {
        // remove selected tags from v-model array
        const filteredTags = this.filterArray("weight", tag);
        this.weight = filteredTags;
      }

      // if tag is an actual string
      if (typeof tag === "string") {
        // if tag consist of php remove value
        if (tag.includes("PHP")) {
          // remove selected tags from v-model array
          this.price.minValue = this.price.maxValue = "";
          this.price.tag = [];
          this.$refs.priceForm.clearValidate(); // Clears all validation errors for the entire form
        }
      }

      // remove click tags tags from filtered array
      const filteredTags = this.filterArray("filterTags", tag);
      // assign new filtered tags to current filter tags
      this.filterTags = filteredTags;

      console.log(this.filterTags);
    },

    // filter data
    filterArray(arrayName, tag) {
      const filteredTags = this[arrayName].filter((item) => item != tag);
      return filteredTags;
    },

    clearFilter() {
      this.category =
        this.part =
        this.brand =
        this.weight =
        this.filterTags =
        this.price.tag =
          [];

      this.price.minValue = this.price.maxValue = "";
    },

    // PRICE METHODS
    validatePrice(rule, value, callback) {
      const min = this.price.minValue;
      const max = this.price.maxValue;

      // check current value if it doesnt contain letters
      if (/^[0-9]+$/.test(value)) {
        // check if you put value in min and not yet on max
        if (rule.field === "minValue" && max.length === 0) {
          console.log("gj");
          console.log("product.price >= minValue");

          // this.filterTags.push(`PHP >= ${value}`);
          // this.price.tag.push(`PHP >= ${value}`);

          this.price.tag = [`PHP >= ${value}`];
          this.handleCheckboxChange();
        }

        // check if you put value in min and not yet on max
        else if (rule.field === "maxValue" && min.length === 0) {
          console.log("gj");
          console.log("product.price <= maxValue");
          // this.filterTags.push(`PHP <= ${value}`);
          // this.price.tag.push(`PHP <= ${value}`);
          this.price.tag = [`PHP <= ${value}`];
          this.handleCheckboxChange();
        }

        // Check if min and max is both integers / numbers
        else if (Number.isInteger(+min) && Number.isInteger(+max)) {
          // Check if max has a higher value than min
          if (+max >= +min) {
            // Validation Success
            console.log("gj");
            this.price.tag = [`PHP ${min} - PHP ${max}`];
            this.handleCheckboxChange();
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
          this.price.minValue = "";
          this.price.tag = [];
        }

        // pag ni clear mo yung max - condition walang laman yung min
        if (rule.field === "maxValue") {
          this.price.maxValue = "";
          this.price.tag = [];
        }

        // pag ni clear mo yung min - condition may laman yung max
        if (rule.field === "minValue" && this.price.maxValue) {
          console.log(`ni clear ko yung min kahit may max :${max}`);
          this.price.tag = [`PHP <= ${max}`];
        }

        // pag ni clear mo yung max - condition may laman yung min
        if (rule.field === "maxValue" && this.price.minValue) {
          console.log(`ni clear ko yung min kahit may min :${min}`);
          this.price.tag = [`PHP >= ${min}`];
        }

        this.handleCheckboxChange();
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
