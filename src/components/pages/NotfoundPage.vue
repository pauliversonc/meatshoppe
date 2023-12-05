<template>
  <div class="not-found"
  v-motion
    :initial="{
      y: 50,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 100,
        mass: 1,
        delay: 300,
      },
    }"
  >

      <div class="not-found__img-con">
        <img class="not-found__img" src="/public/images/alerts/undraw_page_not_found_re_e9o6.svg" alt="Error 404, Page not found">
      </div>

      <BaseHeadingOne
        headingText="Page Not Found"
        headingDesc="Sorry, page not found. Check the URL or return to homepage."
        :add-padding="false"
      />



  </div>
</template>

<style lang="scss" scoped>

.not-found {
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

