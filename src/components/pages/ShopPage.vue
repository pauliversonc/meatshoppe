<template>
  <div class="shop">
    <div class="shop__wrapper">
      <!-- LEFT -->

      <!-- <div class="filter"> -->
      <el-scrollbar class="filter" height="90vh">
        <el-collapse
          v-model="activeNames"
          class="collapse__items"
          @change="handleCollapseChange"
          style="border: none"
        >
          <el-collapse-item title="CATEGORY" name="section1">
            <el-radio-group v-model="radio1">
              <el-radio label="1" border>Option A</el-radio>
              <el-radio label="2" border>Option B</el-radio>
              <el-radio label="3" border>Option C</el-radio>
              <el-radio label="4" border>Option D</el-radio>
            </el-radio-group>
          </el-collapse-item>

          <el-collapse-item title="CUT" name="section2">
            <el-radio-group v-model="radio2">
              <el-radio label="1" border>Option A</el-radio>
              <el-radio label="2" border>Option B</el-radio>
              <el-radio label="3" border>Option C</el-radio>
              <el-radio label="4" border>Option D</el-radio>
            </el-radio-group>
          </el-collapse-item>

          <el-collapse-item title="PACKAGING" name="section3">
            <el-radio-group v-model="radio3">
              <el-radio label="1" border>Option A</el-radio>
              <el-radio label="2" border>Option B</el-radio>
              <el-radio label="3" border>Option C</el-radio>
              <el-radio label="4" border>Option D</el-radio>
            </el-radio-group>
          </el-collapse-item>

          <el-collapse-item title="BRAND" name="section4">
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox label="Option1" border />
              <el-checkbox label="Option2" border />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="SIZE" name="section5">
            <el-checkbox-group v-model="checkboxGroup2">
              <el-checkbox label="Option1" border />
              <el-checkbox label="Option2" border />
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="PRICE" name="section6">
            <div class="price">
              <div class="price__min">
                <el-input v-model="minPrice" placeholder="Min"></el-input>
              </div>
              <div class="price__dash">&mdash;</div>

              <div class="price__max">
                <el-input v-model="maxPrice" placeholder="Max"></el-input>
              </div>
    
            </div>
          </el-collapse-item>
        </el-collapse>

      </el-scrollbar>
      <!-- </div> -->

      <!-- RIGHT -->
      <main class="content">
        <div class="products">
          <BaseProduct v-for="num in 20" :key="num" />
        </div>
        <div class="content__footer">
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeShopPage",

  data() {
    return {
      activeNames: [],
      radio1: "",
      radio2: "",
      radio3: "",
      checkboxGroup1: [],
      checkboxGroup2: [],
      minPrice: "",
      maxPrice: "",
      loading: false,
    };
  },

  mounted() {},

  methods: {
    handleCollapseChange(activeNames) {
      this.activeNames = activeNames;
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
  width: 20%;
  padding-right: 2rem;
  // max-height: 50rem;
  position: sticky;
  top: 7rem;
}

.price {
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;

  &__dash {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__range {
    padding: 0 1.2rem;
    grid-column: 1/-1;
  }
}

// RIGHT
.content {
  width: 80%;

  &__footer {
    margin-top: 2rem;
    // text-align: center;
    display: flex;
    justify-content: center;
  }
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


</style>
			
