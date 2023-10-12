<template>
  <div
    class="header__wrapper"
    :class="{ active: scrollY >= 240 }"
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
            <router-link class="header__nav-link" to="/home">Home</router-link>
          </li>
          <li class="header__nav-list">
            <router-link class="header__nav-link" to="/search">Shop</router-link>
          </li>
          <li class="header__nav-list">
            <router-link class="header__nav-link" to="/about">About</router-link>
          </li>
          <li class="header__nav-list">
            <router-link class="header__nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>

      <div class="header__links" :class="{ pr: isActive }">
        <div class="header__icon-link" @click="openSearchBar" role="button">
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

  <div class="find" @click="closeSearch2" v-show="isSearchVisible">
    <div class="find__container">
      <!-- form group search -->
      <form class="form-group" @submit.prevent="submitSearch">
        <svg class="form__icon form__icon--left">
          <use xlink:href="../../assets/icons/sprite.svg#icon-search"></use>
        </svg>
        <input
          type="text"
          v-model.trim="search.keyword"
          @keydown.down="selectNext"
          @keydown.up="selectPrevious"
          @input="resetSuggestion"
          class="form-input"
          placeholder="Search"
          autocomplete="off"
          ref="keySearch"
          id="layout_the_hdr_search"
        />
        <svg
          class="form__icon form__icon--right"
          @click="clearSearch"
          v-show="search.keyword.length > 0"
        >
          <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
        </svg>
      </form>
      <!-- /.form group search -->

      <div class="find__btn-wrapper">
        <BaseButton @click="closeSearch" btn-text="close" :btn-resize="true" />
      </div>

      <ul class="find__suggestions" v-if="filteredSuggestions.length > 0">
        <li
          class="find__suggestion"
          v-for="(item, index) in filteredSuggestions"
          :key="index"
        >
          <a
            @click="handleSubmitSearch(item)"
            href="#"
            class="find__link"
            :class="{ active: index === search.selectedSuggestion }"
          >
            <span>{{ item }}</span></a>
        </li>
      </ul>

      <div class="find__key-container" v-show="search.keyword.length > 0">
        <a @click="handleSubmitSearch(this.search.keyword )" href="#" class="find__keyword"
          >See all "{{ this.search.keyword }}"</a
        >
      </div>
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
        // temp value, must be dynamic use vuex
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

    // when search form is submitted
    submitSearch() {
      // get the text of active suggestions
      const element = document.querySelector(".find__link.active span");
      const activeSuggestion = element?.innerHTML;

      // if there is active suggestion set it as a keyword
      if (activeSuggestion) {
        this.search.keyword = activeSuggestion;
        this.search.selectedSuggestion = 0;
      }

      if(this.search.keyword.length > 0) {
        // this.$router.push('search')
        this.$router.push({
          name: 'search',
          query: {
            keyword: this.search.keyword
          },
        });

      }
      this.closeSearch();

    },

    // change route when suggetion in search is click
    handleSubmitSearch(item) {
      this.$router.push({
        name: 'search',
        query: {
          keyword: item
        },
      });

      this.closeSearch();
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
      if (element !== "find") return;

      this.closeSearch();
    },

    resetSuggestion() {
      // This method is triggered whenever the user types in the input field
      // It updates the list of suggestions based on the input
      this.search.selectedSuggestion = -1;
      // this.search.keyword = '';
    },

    clearSearch() {
      this.resetSuggestion();
      this.search.keyword = "";
    },

    // close search bar when clicked the esc key
    onEscKey(event) {
      if (event.key === "Escape" || event.key === "Esc") {
        this.closeSearch();
      }
    },

    openSearchBar() {
      this.isSearchVisible = true;
      // this.$refs.keySearch.focus();
      this.$nextTick(() => this.$refs.keySearch.focus());
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
  justify-content: space-between;
  align-items: center;

  &.pr {
    @media only screen and (min-width: 78em) {
      transform: translateX(-8px);
    }

    @media only screen and (min-width: 48em) and (max-width: 78em) {
      padding-right: 17px;
    }
  }

  &__wrapper {
    position: fixed;
    padding: 0 2rem;
    height: 7rem;
    width: 100%;
    z-index: 10;
    transition: background-color 0.4s ease;
    backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
    border-bottom: solid thin $gray;
    &.active {
      background-color: rgba($color: #ffffff, $alpha: 0.9);
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: start;
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
  &__nav-link:visited,
  router-link-active {
    text-decoration: none;
    color: inherit;

    @include link-animate;
  }

  &__links {
    
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: start;
    // padding-right: 17px;
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

.find {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 12;
  background-color: rgba($dark-high, 0.5);
  padding-top: 8rem; // web view

  // 768 below
  @include respond(tab-port) {
    padding-top: 0; // web view
  }

  &__container {
    padding: 1rem;
    margin: 0 auto;
    // max-width: 120rem; // mobile view
    max-width: 80rem; // default width of modal search
    background-color: $light-high;
    box-shadow: $shadow;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 1rem;

    // 1200 below
    @media only screen and (max-width: 75em) {
      max-width: 70rem; // default width of modal search
    }

    // 768 below
    @include respond(tab-port) {
      max-width: 100%;
      // background-color: red;
    }
  }

  // &__input-wrapper {
  //   width: 100%;
  //   padding-right: 1rem;
  // }

  &__suggestions {
    grid-column: 1/-1;
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
  }
  &__suggestion {
    list-style: none;
  }

  &__key-container {
    grid-column: 1/-1;
  }

  &__keyword {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0.6rem;

    @include link-animate;
  }

  &__link {
    text-decoration: none;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem;
    color: $black-tint;
    background-color: $light-high;

    &:hover,
    &.active {
      // background-color: $main;
      // color: $light-high;
      background-size: 300% 100%;
      color: $light-high;
      // background: $gradient;
      background-image: linear-gradient(to right, $main-tint, $main, $main-shade);

      .search__icon {
        fill: $white;
      }
    }
  }
}

.form-group {
  width: 100%;
  position: relative;
}

.form-input {
  background-color: $light-low;
  padding: 0.8rem 4rem;
  border-radius: 0;
  font-size: 1.4rem;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  
  width: 100%;
  height: 100%;
  
  transition: border ease 0.4s;
  outline: none;
  // border: solid thin $dark-low;
  border: 2px solid $dark-low;

  &:focus {
    outline: none;
  }
}

.form__icon {
  position: absolute;
  height: 2.1rem;
  width: 2.1rem;
  fill: $black-tint;
  top: 50%;
  transform: translateY(-50%);

  &--left {
    left: 1rem;
  }

  &--right {
    right: 1rem;
    cursor: pointer;
  }
}

</style>
