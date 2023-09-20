<template>
  <div
    class="header__wrapper"
    :class="{ active: scrollY >= 240, pr: isSearchVisible }"
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
    <header class="header" :class="{ pr: isSearchVisible }">
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
        <div
          class="header__icon-link"
          @click="isSearchVisible = true"
          role="button"
        >
          <svg class="header__icon">
            <use xlink:href="../../assets/icons/sprite.svg#icon-search"></use>
          </svg>
        </div>
        <div class="header__icon-link" role="button">
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

  <div class="search" @click="closeSearch2" v-if="isSearchVisible">
    <div class="search__container">
      <el-form
        class="search__input-wrapper"
        :model.trim="search"
        @submit.prevent="submitSearch"
      >
        <el-input
          v-model="search.keyword"
          size="large"
          placeholder="Search"
          clearable
          @clear="clearSearch"
          @keydown.down="selectNext"
          @keydown.up="selectPrevious"
          @input="clearSearch"
        />
      </el-form>

      <div class="search__btn-wrapper">
        <BaseButton @click="closeSearch" btnText="close" />
      </div>

      <ul class="search__suggestions">
        <li
          class="search__suggestion"
          v-for="(item, index) in filteredSuggestions"
          :key="index"
        >
          <a
            href="#"
            class="search__link"
            :class="{ active: index === search.selectedSuggestion }"
          >
            <div class="search__icon-box" role="button">
              <svg class="search__icon">
                <use
                  xlink:href="../../assets/icons/sprite.svg#icon-search"
                ></use>
              </svg>
            </div>
            <span>{{ item }}</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeTheHeader",
  computed: {
    filteredSuggestions() {
      // Filter suggestions based on the searchQuery
      const filtered = this.search.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(this.search.keyword.toLowerCase())
      );

      return filtered.slice(0, 10);
    },
  },

  data() {
    return {
      isActive: false,
      scrollY: 0,

      isSearchVisible: false,
      search: {
        keyword: "",
        activeSuggestion: "",
        selectedSuggestion: -1,
        suggestions: [
          "pizza",
          "sushi",
          "burger",
          "pasta",
          "tacos",
          "salad",
          "fried chicken",
          "ice cream",
          "steak",
          "shrimp scampi",
          "dim sum",
          "burrito",
          "lobster",
          "ramen",
          "chocolate cake",
          "biryani",
          "gyros",
          "pho",
          "pancakes",
          "falafel",
          "caesar salad",
          "hot dog",
          "sashimi",
          "chicken tikka masala",
          "pad thai",
        ],
      },
    };
  },

  watch: {
    isActive(newValue) {
      if (newValue) {
        document.body.classList.add("show-menu");
      } else {
        document.body.classList.remove("show-menu");
      }
    },

    isSearchVisible(newValue) {
      if (newValue) {
        document.body.classList.add("show-menu");
        document.addEventListener("keydown", this.onEscKey);
      } else {
        document.body.classList.remove("show-menu");
        document.removeEventListener("keydown", this.onEscKey);
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

    submitSearch() {
      // get the text of active suggestions
      const element = document.querySelector(".search__link.active span");
      const activeSuggestion = element?.innerHTML;
      // if there is active suggestion set it as a keyword
      if (activeSuggestion) {
        this.search.keyword = activeSuggestion;
        this.search.selectedSuggestion = 0;
      }

      console.log(this.search.keyword);
    },

    selectNext() {
      // if products is true
      if (this.search.suggestions.length > 0) {
        if (
          this.search.selectedSuggestion <
          this.filteredSuggestions.length - 1
        ) {
          this.search.selectedSuggestion++;
        } else {
          this.search.selectedSuggestion = 0;
        }
      }
    },

    selectPrevious(event) {
      event.preventDefault(); // prevent default makes the cursor always in front of text
      if (this.search.suggestions.length > 0) {
        if (this.search.selectedSuggestion > 0) {
          this.search.selectedSuggestion--;
        } else {
          this.search.selectedSuggestion = this.filteredSuggestions.length - 1;
        }
      }
    },

    // close when clicked the button closed
    closeSearch() {
      this.isSearchVisible = false;
      this.search.selectedSuggestion = -1;
      this.search.keyword = "";
    },

    // close when clicked outside the modal
    closeSearch2(event) {
      // get class of clicked element
      const element = event.target.classList.value;

      // check if the click is the outside of the search box
      if (element !== "search") return;

      this.closeSearch();
    },

    clearSearch() {
      // This method is triggered whenever the user types in the input field
      // It updates the list of suggestions based on the input
      this.search.selectedSuggestion = -1;
    },

    // close search bar when clicked the esc key
    onEscKey(event) {
      if (event.key === "Escape" || event.key === "Esc") {
        this.closeSearch();
      }
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

  &.pr {
    // padding-right: 17px; // this is the old pr
    padding-right: 9px;
  }

  // border: 1px solid red;
  justify-content: space-between;
  align-items: center;

  &__wrapper {
    position: fixed;
    padding: 0 2rem;
    height: 7rem;
    width: 100%;
    z-index: 10;
    // background-color: rgba($color: $light-mid, $alpha: 0.9);
    transition: background-color 0.4s ease;

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

.search {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 12;
  background-color: rgba($dark-high, 0.5);
  padding-top: 8rem; // web view
  padding-right: 17px;

  &__container {
    padding: 1rem;
    margin: 0 auto;
    // max-width: 120rem; // mobile view
    max-width: 80rem; // web view

    padding: 2rem;
    // height: 20rem;
    // border: 1px solid red;
    background-color: $light-mid;
    // background-color: red;
    box-shadow: $shadow;

    display: grid;
    grid-template-columns: 1fr auto;
    // justify-items: center;
    align-items: center;

    gap: 1rem;
  }

  &__input-wrapper {
    width: 100%;
  }

  &__suggestions {
    grid-column: 1/-1;
    // background-color: blue;
    // display: none;
    // padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
  }
  &__suggestion {
    list-style: none;
  }

  &__link {
    text-decoration: none;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 1rem;
    color: $black-tint;
    background-color: $light-high;

    box-shadow: $shadow;

    &:hover,
    &.active {
      background-color: $main;
      color: $white-tint;

      box-shadow: $shadow-hov;
      .search__icon {
        fill: $white;
      }
    }
  }

  &__icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__icon {
    height: 1.8rem;
    width: 1.8rem;
    fill: $black;
  }
}
</style>
