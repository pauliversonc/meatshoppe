<template>
  <div class="footer__wrapper">
    <footer class="footer"

    
    >
      <div class="footer__logo-box">
        <img
          class="footer__logo"
          src="/images/logo/logo.png"
          alt="Meatshoppe footer logo"
        />
      </div>

      <address class="footer__contact">
        <BaseHeadingFour heading-four="Contacts"></BaseHeadingFour>

        <ul class="footer__contact-wrap">
          <li class="footer__contact-list">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Trece+Martires,+Cavite/@14.2703383,120.8282022"
              class="footer__contact-link"
            >
              <svg class="footer__icon">
                <use
                  xlink:href="../../assets/icons/sprite.svg#icon-map-pin"
                ></use>
              </svg>

              Trece Martires City, Cavite
            </a>
          </li>

          <li class="footer__contact-list">

            <a href="tel:639155436882" class="footer__contact-link"
              >
              <svg class="footer__icon">
              <use xlink:href="../../assets/icons/sprite.svg#icon-phone"></use>
            </svg>
              
              +63 9155436882</a
            >
          </li>

          <li class="footer__contact-list">
        
            <a href="mailto:meatshoppe.OFCL@gmail.com" class="footer__contact-link"
              >
              <svg class="footer__icon">
              <use xlink:href="../../assets/icons/sprite.svg#icon-mail"></use>
            </svg>
              meatshoppe.OFCL@gmail.com</a
            >
          </li>
        </ul>
      </address>

      <div class="footer__nav">
        <BaseHeadingFour heading-four="Links"></BaseHeadingFour>

        <ul class="footer__lists">
          <li class="footer__list">
            <router-link to="/home" class="footer__link">Home</router-link>
          </li>
          <li class="footer__list">
            <router-link to="/about" class="footer__link">About</router-link>
          </li>
          <li class="footer__list">
            <router-link to="/search" class="footer__link">Shop</router-link>
          </li>
          <li class="footer__list">
            <router-link to="/contact" class="footer__link">Contact</router-link>
          </li>
        </ul>
      </div>

      <div class="footer__social">
        <BaseHeadingFour heading-four="Socials"></BaseHeadingFour>


        <ul class="footer__contact-wrap">
          <li class="footer__contact-list">
 
            <a href="https://www.facebook.com/meatshoppe.OFCL" class="footer__contact-link"
              target="_blank">
              <svg class="footer__icon">
              <use
                xlink:href="../../assets/icons/sprite.svg#icon-facebook"
              ></use>
            </svg>
              
              meatshoppe</a
            >
          </li>

          <li class="footer__contact-list">
            
            <a href="https://instagram.com/meatshoppe.OFCL" class="footer__contact-link"
              target="_blank">
              <svg class="footer__icon">
              <use
                xlink:href="../../assets/icons/sprite.svg#icon-instagram"
              ></use>
            </svg>meatshoppe</a
            >
          </li>



        </ul>
      </div>

      <div class="footer__need">
        <BaseHeadingFour heading-four="Need a website?"></BaseHeadingFour>
        <ul class="footer__contact-wrap">
          <li class="footer__contact-list">
 
            <a target="_blank" href="https://www.facebook.com/pauliversonc" class="footer__contact-link"
              >
              <svg class="footer__icon">
              <use
                xlink:href="../../assets/icons/sprite.svg#icon-facebook"
              ></use>
            </svg>
              
              pauliversonc</a
            >
          </li>

          <li class="footer__contact-list">
            
            <a target="_blank" href="https://www.instagram.com/pauliversonc" class="footer__contact-link"
              >
              <svg class="footer__icon">
              <use
                xlink:href="../../assets/icons/sprite.svg#icon-instagram"
              ></use>
            </svg>pauliversonc</a
            >
          </li>
          <li class="footer__contact-list">
           
            <a href="mailto:pauliversonc@gmail.com" class="footer__contact-link"
              >
              <svg class="footer__icon">
              <use xlink:href="../../assets/icons/sprite.svg#icon-mail"></use>
            </svg>pauliversonc</a
            >
          </li>

          <li class="footer__contact-list">
           
            <a href="tel:639155436882" class="footer__contact-link"
              >
              <svg class="footer__icon">
              <use xlink:href="../../assets/icons/sprite.svg#icon-phone"></use>
            </svg>+63 9155436882</a
            >
          </li>
        </ul>
      </div>
    </footer>
  </div>

  <div class="footer__adv">
    <span
    >
    Copyright &#169; {{ yearNow }} | Meatshoppe. All rights reserved.
    <br>
    Disclaimer: Some content may not be accurate.
    <br>
    Images may be sourced from various places. Refer to <router-link to="/attribution" class="footer__cite">image attribution</router-link> for details.

      
      </span
    >
  </div>
</template>

<script>
import BaseHeadingFour from '../base/BaseHeadingFour.vue';
export default {
  name: "MeatshoppeTheFooter",
  components: {BaseHeadingFour},
  computed: {
    yearNow() {
      const currentDate = new Date();
      return currentDate.getFullYear();
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";
.footer {
  max-width: 120rem;
  margin: 0 auto;
  font-size: 1.6rem;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 4rem;

  // 934px and below
  @media only screen and (max-width: 58.375em) {
    grid-template-columns: 1fr 0.5fr 0.5fr;
  }

  // 672px and below
  @media only screen and (max-width: 42em) {
    grid-template-columns: 1fr 0.5fr;
  }

  // 502px and below
  @media only screen and (max-width: 31.375em) {
    grid-template-columns: 1fr;
  }

  &__nav {
    grid-row: 2;
    // 502px and below
    @media only screen and (max-width: 31.375em) {
      grid-row: 3;
    }
  }

  &__contact {
    grid-row: 2;
  }

  &__social {
    grid-row: 2;
    // 672px and below
    @media only screen and (max-width: 42em) {
      grid-row: 3;
      grid-column: 2;
    }

    // 502px and below
    @media only screen and (max-width: 31.375em) {
      grid-column: 1;
      grid-row: 4;
    }
  }

  &__need {
    grid-row: 2;

    @media only screen and (max-width: 58.375em) {
      grid-row: 3;
    }

    // 502px and below
    @media only screen and (max-width: 31.375em) {
      grid-row: 5;
    }
  }

  &__wrapper {
    padding: 8rem 2rem;
    background-color: $light-high;

    border-top: 1px solid $gray;
  }

  &__logo-box {
    // 376px and below
    @media only screen and (max-width: 23.5em) {
      text-align: center;
    }
  }

  &__logo {
    width: 24rem;
  }

  // Contact

  &__contact-wrap {
    margin-top: 2rem;

    & > *:not(:first-child) {
      margin-top: 1rem;
    }
  }

  &__contact-list {
    display: flex;
    gap: 1rem;
    align-items: center;

    // border: 1px solid red;
  }

  &__icon {
    height: 2rem;
    width: 2rem;
  }

  &__contact-link{
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  &__contact-link:link,
  &__contact-link:visited,
  router-link-active {
    text-decoration: none;
    color: $black-tint;
    font-style: normal;


    @include link-icon-animate;
  }

  &__lists {
    & > *:not(:first-child) {
      margin-top: 1rem;
    }
  }

  &__list {
    list-style: none;
    // border: 1px solid red;
  }

  &__link:link,
  &__link:visited,
  router-link-active {
    text-decoration: none;
    color: $black-tint;
    @include link-animate;
  }

  &__cite:link,
  &__cite:visited {
    // text-decoration: none;
    color: $light-high;
    font-style: italic;
    
    
  }





  &__adv {
    // max-width: 120rem;

    border-top: 1px solid $light-low;
    margin: 0 auto;
    text-align: center;
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $main;
    padding: 2rem;
    color: $white;
  }
}

.heading__four {
  line-height: 1;
  font-size: 2.1rem;
  color: $black;
  margin-bottom: 2rem;
  font-style: normal;
}
</style>
