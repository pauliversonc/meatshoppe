<template>
  <div class="shop">
    <div class="shop__wrapper">
      <!-- LEFT -->
      <div class="filter">
        <el-collapse v-model="activeNames" class="collapse__items" @change="handleCollapseChange">
          <el-collapse-item title="CATEGORY" name="section1" >
            <!-- Content for Section 1 -->
            <el-radio-group  v-model="radio2">
              <el-radio  label="1" border>Option A</el-radio>
              <el-radio  label="2" border>Option B</el-radio>
              <el-radio  label="3" border>Option C</el-radio>
              <el-radio  label="4" border>Option D</el-radio>
            </el-radio-group>
          </el-collapse-item>


          <el-collapse-item title="CUT" name="section2">
            <!-- Content for Section 2 -->
            <p>This is the content of Section 2.</p>
          </el-collapse-item>

          <el-collapse-item title="PACKAGING" name="section3">
            <!-- Content for Section 3 -->
            <p>This is the content of Section 3.</p>
          </el-collapse-item>

          <el-collapse-item title="BRAND" name="section4">
            <!-- Content for Section 4 -->
            <p>This is the content of Section 4.</p>
          </el-collapse-item>

          <el-collapse-item title="SIZE" name="section5">
            <!-- Content for Section 5 -->
            <p>This is the content of Section 5.</p>
          </el-collapse-item>

          <el-collapse-item title="PRICE" name="section6">
            <!-- Content for Section 6 -->
            <p>This is the content of Section 6.</p>
          </el-collapse-item>


        </el-collapse>
      </div>

      <!-- RIGHT -->
      <main class="content">
        <div class="search">search</div>
        <div class="sort">sort</div>
        <div class="products">products</div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeShopPage",

  data() {
    return {
      activeNames: ["section1","section2","section3","section4","section5","section6"], // Initially open Section 1

      radio2:"",
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
  padding: 11rem 2rem 8rem 2rem;
  background-color: $light-high;

  

  &__wrapper {
    max-width: 120rem;
    margin: 0 auto;

    // border: 1px solid red;

    // border-top: 1px solid #ebeef5;
    display: flex;
    gap: 4rem;
  }
}

// LEFT
.filter {
  width: 20%;
  // padding: 0 2rem;
  // min-height: 50vh;
  padding-right: 2rem;
  border-right: 1px solid #ebeef5;

}

// RIGHT
.content {
  width: 80%;
}
.sort {
}

.search {
}

.products {
}

// .collapse__items {
//   border: none;
// }



</style>
