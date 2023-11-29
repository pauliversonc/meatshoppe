<template>
  <div class="no-product">

      <div class="no-product__img-con">
        <img class="no-product__img" src="../../assets/images/alerts/undraw_no_data_re_kwbl.svg" alt="Product Not found">
      </div>

      <BaseHeadingOne
        headingText="No Products Found"
        headingDesc="Apologies, the requested product is currently unavailable. You may explore alternatives below"
        :add-padding="false"
      />



  </div>
</template>

<style lang="scss" scoped>

.no-product {
  padding-top: 7rem;

  padding: 11rem 2rem 6rem 2rem;
  // height: calc(60vh - 7rem);

  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__img-con {
    width: 30%;
    border: 1px solid red;

    @media only screen and (max-width: 58.375em) {
      width: 40%;
    }

    @media only screen and (max-width: 31.375em) {
      width: 60%;
    }
  }

  &__img {
    width: 100%;
  }
}
</style>

<!-- <img class="not-found__img" src="../../assets/images/alerts/undraw_page_not_found_re_e9o6.svg" alt="Error 404, Page not found"> -->