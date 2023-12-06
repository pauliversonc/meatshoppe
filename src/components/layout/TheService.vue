<template>
  <div
    class="service__wrapper"
    v-motion
    :initial="{
      y: 200,
      opacity: 0,
    }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 100,
        mass: 1,
        delay: 1700,
      },
    }"
  >
    <div class="service">
      <div class="service__headline">
        <h3 class="service__heading">
          We are here to serve you
          <span class="service__span">quality meat</span> where every
          <span class="service__span">cut</span> tells a delicious story!
        </h3>
        <BaseButton btn-text="Shop now" @click="changeRoute" />
      </div>

      <div class="service__card-box">
        <BaseService
          v-for="(service, index) in services"
          :key="index"
          :service-title="service.title"
          :service-desc="service.desc"
          :service-icon="service.icon"
          :service-main="service.main"
        ></BaseService>
      </div>
    </div>
  </div>
</template>

<script>
import BaseService from "../base/BaseService.vue";

export default {
  name: "MeatshoppeTheService",
  components: { BaseService },
  data() {
    return {
      services: [
        {
          title: "Payment Methods",
          desc: "COD and cashless options available",
          icon: "credit-card",
          main: false,
        },

        {
          title: "Serviceable Areas",
          desc: "Same-day delivery for residents of Brgy. Conchu",
          icon: "map-pin",
          main: true,
        },
        {
          title: "Free Shipping",
          desc: "For orders Php 2,000 and above",
          icon: "truck",
          main: false,
        },
        {
          title: "Want to buy offline?",
          desc: "Come visit us in Brgy. Conchu, TMC",
          icon: "shopping-bag",
          main: false,
        },
      ],
    };
  },

  mounted() {},

  methods: {
    changeRoute() {
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";

.service {
  max-width: 120rem;
  margin: 0 auto;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 1.5fr;

  gap: 4rem;

  // 768 px below
  @include respond(tab-port) {
    grid-template-columns: 1.5fr 1fr;
  }

  //  600 px below
  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  &__wrapper {
    background-color: $light-high;
    padding: 8rem 2rem;
  }

  &__headline {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    gap: 4rem;

    //  432 px below
    @media only screen and (max-width: 27em) {
      align-items: center;
      text-align: center;
    }
  }

  &__heading {
    font-size: 4.8rem;
    line-height: 1;
    letter-spacing: 1px;
    // color: $black;
  }

  &__span {
    @include span-gradient;
  }

  &__card-box {
    // border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    // 768 px below
    @include respond(tab-port) {
      grid-template-columns: 1fr;
    }

    //  600 px below
    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 1fr 1fr;
    }

    //  432 px below
    @media only screen and (max-width: 27em) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
