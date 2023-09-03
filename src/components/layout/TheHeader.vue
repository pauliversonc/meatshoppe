<template>
  <div
    class="header__wrapper"
    :class="{ 'active': scrollY >= 240 }"
    v-motion
    :initial="{
      x: 200,
      opacity: 0,
    }"
    :enter="{
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 100,
        mass: 1,
        delay: 500,
      },
    }"
  >
    <header class="header">
      <div class="header__nav">
        <a href="#" class="header__logo-link">
          <img
            src="../../assets/images/logo/logo.png"
            class="header__logo"
            alt="Meatshoppe icon"
          />
        </a>

        <ul class="header__nav-lists" :class="{ show: isActive, pr: isActive }">
          <li class="header__nav-list">
            <a class="header__nav-link" href="#">Home</a>
          </li>
          <li class="header__nav-list">
            <a class="header__nav-link" href="#">Shop</a>
          </li>
          <li class="header__nav-list">
            <a class="header__nav-link" href="#">About</a>
          </li>
          <li class="header__nav-list">
            <a class="header__nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div class="header__links" :class="{ pr: isActive }">
        <div class="header__icon-link">
          <svg class="header__icon">
            <use
              xlink:href="../../assets/icons/sprite.svg#icon-shopping-cart"
            ></use>
          </svg>
        </div>

        <div
          class="header__nav-menu"
          :class="{ on: isActive }"
          id="btn-c"
          role="button"
          @click="toggle"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeTheHeader",
  computed: {},

  data() {
    return {
      isActive: false,
      scrollY: 0,
    };
  },

  watch: {
    isActive(newValue) {
      if (newValue) {
        document.body.classList.add("show-menu");

        // document.body.style.overflow = "hidden";
        // document.body.style.paddingRight = "17px";
      } else {
        document.body.classList.remove("show-menu");
        // document.body.style.overflow = "visible";
        // document.body.style.overflowX = "hidden";
        // document.body.style.paddingRight = "0";
      }
    },
  },

  mounted() {
    // Attach a scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    // 240

    handleScroll() {
      // Update the scrollY data property with the current scroll position
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";
.header {
  margin: 0 auto;
  max-width: 120rem;
  display: flex;

  height: 100%;
  text-transform: uppercase;

  // border: 1px solid red;
  justify-content: space-between;
  align-items: center;

  &__wrapper {
    position: fixed;
    padding: 0 2rem;
    height: 7rem;
    width: 100%;
    z-index: 9999;
    
    transition: background-color .4s ease;

    backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
  
    &.active {
      background-color: rgba($color: #ffffff, $alpha: 0.9);
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    // border: 1px solid blue;
    gap: 2rem;
  }

  &__logo-link {
    display: flex;
    align-items: center;
  }

  &__logo {
    height: 3rem;
  }

  &__nav-lists {
    display: flex;
    gap: 2rem;

    font-size: 1.4rem;
    font-weight: 500;
    color: $dark-high;

    @include respond(tab-port) {
      background-color: $light-high;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      // height: 100%;
      height: 100vh;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.4s ease-out;
      font-size: 2.8rem;

      transform: translateX(100%);
    }

    &.show {
      @include respond(tab-port) {
        transform: translateX(0);
      }
    }
  }

  &__nav-list {
    list-style: none;
  }

  &__nav-link:link,
  &__nav-link:visited {
    text-decoration: none;
    color: inherit;

    @include link-animate;
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 2rem;

    &.pr {
      padding-right: 17px;
    }
  }

  // Cart button
  &__icon-link {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    @include icon-hover;
  }

  // Burger button
  &__nav-menu {
    display: none;
    z-index: 9999;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    transition: all 0.4s ease-out;
    @include respond(tab-port) {
      display: flex;
    }

    &:hover div,
    &:focus div {
      background-color: $main;
    }

    div {
      position: absolute;
      width: 3rem;
      height: 2px;
      background-color: $black;
      border-radius: 4px;
      right: 40%;
      transition: all 0.4s ease-out;
      transform: translateX(40%);
    }

    & > :first-child {
      top: 20%;
    }

    & > :nth-child(2) {
      top: 50%;
    }

    & > :nth-child(3) {
      top: 80%;
    }

    &.on {
      // margin-left: -17px;
      // padding-right: 17px;
      & > :first-child {
        top: 50%;
        right: -5%;
        transform: rotate(45deg);
      }

      & > :nth-child(2) {
        transform: translateX(-200%);
      }

      & > :nth-child(3) {
        top: 50%;
        right: -5%;
        transform: rotate(-45deg);
      }
    }
  }

  &__icon {
    height: 2.7rem;
    width: 100%;
  }
}
</style>
