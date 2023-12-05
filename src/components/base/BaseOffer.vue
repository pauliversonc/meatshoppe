<template>
  <div class="offer__wrapper"
  
  v-motion
  :initial="{
    y: 100,
    opacity: 0,
  }"
  :visibleOnce="{
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 350,
      damping: 100,
      mass: 1,
      delay: 300
    },
  }"
  >
    <div class="offer" :class="{ 'offer--right': align }" :style="bgImage">
      <div class="offer__context">
        <div class="offer__span">{{ span }}</div>
        <h3 class="offer__heading">
          <span class="offer__subtext">{{ subText }}</span>
          <span class="offer__text">{{ text }}</span>
        </h3>
        <p class="offer__paragraph">{{ paragraph }}</p>
        <BaseButton btn-text="Shop now" :btn-outline="true" @click="changeRoute" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeBaseOffer",
  props: {
    span: {
      type: String,
      required: false,
      default: "Special offer",
    },

    subText: {
      type: String,
      required: false,
      default: "Succulent Garden",
    },

    text: {
      type: String,
      required: false,
      default: "Gift boxes",
    },

    paragraph: {
      type: String,
      required: false,
      default:
        "Lorem ipsum dolor, ur adipisicing elit. Amet ipsum culpa numquam exaliquid obcaecati?",
    },

    align: {
      type: Boolean,
      required: false,
      default: false,
    },

    imageName: {
      type: String,
      required: false,
      default: "offer-1.png",
    },
  },

  computed: {
    bgImage() {
      return {
        backgroundImage: `url('${
          "/images/offers/" + this.imageName
        }')`,
      };
    },
  },

  mounted() {},
  methods: {
    changeRoute() {
      this.$router.push({
        name: "search",
        query: {
          keyword: this.text,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.offer {
  margin: 0 auto;
  max-width: 120rem;
  background-size: cover;

  min-height: 40rem;
  background-position: center;
  padding: 0 8rem;

  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;

  // 872 px and below
  @media only screen and (max-width: 54.5em) {
    background-size: cover;
    background-position: right center;
  }

  // 800 px and below
  @media only screen and (max-width: 50em) {
    padding: 6rem;
  }

  // 776 px and below
  @media only screen and (max-width: 48.5em) {
    background-size: contain;
    background-repeat: no-repeat;
  }

  // 700 px and below
  @media only screen and (max-width: 43.75em) {
    padding: 0 4rem;
  }

  // 650 px and below
  @media only screen and (max-width: 40.625em) {
    background-size: initial;
    background-position: left;
    justify-content: start;
    text-align: left;
  }

  // for the image
  &--right {
    text-align: right;
    justify-content: end;

    // 872 px and below
    @media only screen and (max-width: 54.5em) {
      // background-size: cover;
      background-position: left center;
    }

    // 650 px and below
    @media only screen and (max-width: 40.625em) {

      background-position: right;
      justify-content: start;
      text-align: left;
    }
  }

  // for the text
  // 388 px and below
  @media only screen and (max-width: 24.25em) {
    justify-content: center;
    text-align: center;
    align-items: center;

    padding: 1rem;
  }

  &__wrapper {
    // padding: 8rem 0;
    margin-bottom: 2rem;
  }

  &__context {
    max-width: 35rem;
  }

  &__span {
    color: $main;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
  }

  &__heading {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }

  &__subtext {
    color: $white;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 3.2rem;

    // border: 1px solid red;
    line-height: 1;
  }

  &__text {
    color: $white;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 4.8rem;
    // border: 1px solid red;
    line-height: 1;
    letter-spacing: 6px;
  }

  &__paragraph {
    color: $white-tint;
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
}
</style>
