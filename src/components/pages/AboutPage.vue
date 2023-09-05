<template>
  <div class="about">
    <div class="about__cover"
    v-motion
      :initial="{
    
        opacity: 0,
      }"
      :enter="{
  
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 100,
          mass: 1,
          delay: 900,
        },
      }"
    
    >
      <BaseHeadingOne
        headingText="About Us"
        headingDesc="Lorem ipsum dolor nes bueast"
      />
    </div>

    <!-- STORY WRAPPER -->
    <div
      class="about__background"

    >
      <!-- 120 -->
      <div class="about__story u-mt-0">
        <!-- left -->
        <div class="about__story-content"
        v-motion
      :initial="{
        x: -200,
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
          delay: 700,
        },
      }"
        >
          <h5
            v-if="!isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Story"
          >
            Our Story
          </h5>
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
          <br />
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
        </div>

        <!-- right -->
        <div class="about__img-box"
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
          delay: 700,
        },
      }"
        >
          <h5
            v-if="isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Story"
          >
            Our Story
          </h5>
          <img
            class="about__img"
            src="../../assets/images/about/team-sm.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!-- ./120 -->

      <!-- centered heading -->
      <div class="about__heading-cont"
      v-motion
    :initial="{
      y: 200,
      opacity: 0,
    }"
    :visibleOnce="{
      y: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 100,
        mass: 1,
        delay: 100,
      },
    }"
      
      >
        <h5 class="about__heading center" data-before-text="Our Team">
          Our Team
        </h5>
      </div>
      <!-- 120 -->
      <div class="about__team">
        <!-- MEMBERS -->

        <BaseMember v-for="num in 4" :key="num"
        member-name="Paul"
        member-prof="Civil"
        ></BaseMember>

        <!-- <div class="about__member">
          <img
            class="about__member--img"
            src="../../assets/images/about/member-1-sm.jpg"
            alt=""
            srcset=""
          />
          <span class="about__member--name">Dr. John Smith</span>
          <span class="about__member--prof">Civil Engineer</span>
        </div>

        <div class="about__member">
          <img
            class="about__member--img"
            src="../../assets/images/about/member-2-sm.jpg"
            alt=""
            srcset=""
          />
          <span class="about__member--name">Dr. John Smith</span>
          <span class="about__member--prof">Civil Engineer</span>
        </div>

        <div class="about__member">
          <img
            class="about__member--img"
            src="../../assets/images/about/member-3-sm.jpg"
            alt=""
            srcset=""
          />
          <span class="about__member--name">Dr. John Smith</span>
          <span class="about__member--prof">Civil Engineer</span>
        </div>

        <div class="about__member">
          <img
            class="about__member--img"
            src="../../assets/images/about/member-4-sm.jpg"
            alt=""
            srcset=""
          />
          <span class="about__member--name">Dr. John Smith</span>
          <span class="about__member--prof">Civil Engineer</span>
        </div> -->


      </div>

      <!-- ./120 -->
    </div>

    <!-- ALIGNMENT WRAPPER -->
    <div class="about__alignment">
      <!-- 120 -->
      <div class="about__story opposite u-mt-0">
        <!-- right -->
        <div class="about__img-box">
          <h5
            v-if="isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Vision"
          >
            Our Vision
          </h5>
          <img
            class="about__img"
            src="../../assets/images/about/alignment-1.jpg"
            alt=""
            srcset=""
          />
        </div>

        <!-- left -->
        <div class="about__story-content">
          <h5
            v-if="!isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Vision"
          >
            Our Vision
          </h5>
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
          <br />
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
        </div>
      </div>
      <!-- ./120 -->

      <!-- 120 -->
      <div class="about__story">
        <!-- left -->
        <div class="about__story-content">
          <h5
            v-if="!isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Mission"
          >
            Our Mission
          </h5>
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
          <br />
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
        </div>

        <!-- right -->
        <div class="about__img-box">
          <h5
            v-if="isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Mission"
          >
            Our Mission
          </h5>
          <img
            class="about__img"
            src="../../assets/images/about/alignment-2.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!-- ./120 -->

      <!-- 120 -->
      <div class="about__story opposite u-mb-0">
        <!-- right -->
        <div class="about__img-box">
          <h5
            v-if="isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Values"
          >
            Our Values
          </h5>
          <img
            class="about__img"
            src="../../assets/images/about/alignment-3.jpg"
            alt=""
            srcset=""
          />
        </div>

        <!-- left -->
        <div class="about__story-content">
          <h5
            v-if="!isTabletView"
            class="about__heading u-mb-2"
            data-before-text="Our Values"
          >
            Our Values
          </h5>
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
          <br />
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur fugiat debitis id ex, qui, doloribus laudantium ullam
            officiis dignissimos sed odit optio a animi eaque error consequuntur
            necessitatibus ad!
          </p>
        </div>
      </div>
      <!-- ./120 -->
    </div>
  </div>
</template>

<script>
import BaseMember from "../base/BaseMember.vue";
export default {
  name: "MeatshoppeAboutPage",
  components: {
    BaseMember,
  },
  data() {
    return {
      isTabletView: false,
      members: [
        {name: 'Dr. John Smith', prof: 'Civil Engineer', imgName: 'member-1-sm.jpg'},
        {name: 'Dr. John Smith', prof: 'Civil Engineer', imgName: 'member-2-sm.jpg'},
        {name: 'Dr. John Smith', prof: 'Civil Engineer', imgName: 'member-3-sm.jpg'},
        {name: 'Dr. John Smith', prof: 'Civil Engineer', imgName: 'member-4-sm.jpg'},
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResizeTab);
    // Initial check for screen width on component mount
    this.handleResizeTab();
  },

  methods: {
    handleResizeTab() {
      // Update the isTabletView value based on the screen width
      this.isTabletView = window.innerWidth <= 600;
    },
  },

  beforeUnmount() {
    // Remove the window resize listener when the component is unmounted
    window.removeEventListener("resize", this.handleResizeTab);
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.about {
  // background-color: red;
  // padding-top: 7rem;

  &__cover {
    margin: 0 auto;
    // max-width: 120rem;
    // padding-top: 7rem;

    height: 37rem;

    background-image: url(../../assets/images/about/about-us-xl.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    // margin-bottom: 8rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  // STORY WRAPPER
  &__background {
    // background-color: $light-mid;
    padding: 8rem 2rem;
    // background-color: red;
  }

  // STORY CONTENT
  &__story {
    margin: 0 auto;
    max-width: 120rem;

    display: grid;
    grid-template-columns: 2fr 1.5fr;
    gap: 4rem;
    position: relative;
    margin-bottom: 14rem;

    // 600 px and below
    @media only screen and (max-width: 37.5em) {
      gap: 0;
    }

    &.u-mt-0 {
      margin-top: 0;
      // 865 and below
      @media only screen and (max-width: 54.0625em) {
        margin-top: 4rem;
      }
    }

    &.u-mb-0 {
      margin-bottom: 0;

      // 865 and below
      @media only screen and (max-width: 54.0625em) {
        margin-bottom: 4rem;
      }
    }

    &.opposite {
      grid-template-columns: 1.5fr 2fr;

      // 865 and below
      @media only screen and (max-width: 54.0625em) {
        grid-template-columns: 1fr 2fr;
      }

      // 600 and below
      @media only screen and (max-width: 37.5em) {
        grid-template-columns: 1fr;
      }
    }

    // 865 and below
    @media only screen and (max-width: 54.0625em) {
      grid-template-columns: 2fr 1fr;
      margin-bottom: 14rem;
    }

    // 600 and below
    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
    }
  }

  // LEFT
  &__story-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 4rem;

    &::before {
      content: "";
      position: absolute;
      width: 30%;
      height: 10px;
      border-radius: 2px;
      background-color: $light-low;
      bottom: 0;

      // 1107 to 1024 (exclusive of 700)
      @media only screen and (min-width: 64.0625em) and (max-width: 69.1875em) {
        transform: translateY(2rem);
      }

      // 865 and below
      @media only screen and (max-width: 54.0625em) {
        height: 8px;
        transform: translateY(4rem);
      }
    }

    // 864 and below
    @media only screen and (max-width: 56em) {
      padding-right: 0;
    }
  }

  &__heading-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  &__heading {
    font-size: 3.6rem;
    line-height: 1;

    position: relative;
    z-index: 9;

    &.u-mb-2 {
      margin-bottom: 2rem;
    }

    &::before {
      content: attr(
        data-before-text
      ); /* Use the data attribute to store the text */
      // z-index: 8;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100rem;
      // width: calc(100% * 3);
      transform: translate(0%, 4%);
      font-size: 10.4rem;
      z-index: -9;
      color: $light-low;

      // 865 and below
      @media only screen and (max-width: 54.0625em) {
        font-size: 8.6rem;
      }
    }

    &.center::before {
      transform: translate(-15%, 4%);

      // 865 and below
      @media only screen and (max-width: 54.0625em) {
        transform: translate(-11%, 4%);
      }
    }
  }

  &__paragraph {
    font-size: 1.6rem;
  }

  // RIGHT

  &__img-box {
    // text-align: right;
    object-position: right bottom;

    // 600 px and below
    @media only screen and (max-width: 37.5em) {
      grid-row: 1;
      margin-bottom: 2rem;
    }
  }

  &__img {
    width: 100%;

    // 865 px and below
    @media only screen and (max-width: 54.0625em) {
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }

    // 600 px and below
    @media only screen and (max-width: 37.5em) {
      height: auto;
      object-fit: contain;
    }
  }

  // 120
  &__team {
    margin: 0 auto;
    max-width: 120rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    // 600 px and below
    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 1fr 1fr;
    }
  }

  // &__member {
  //   display: flex;
  //   flex-direction: column;
  // }
  // &__member--img {
  //   width: 100%;
  // }
  // &__member--name {
  //   font-size: 1.8rem;
  //   font-weight: 600;
  //   padding: 0;
  // }

  // &__member--prof {
  //   font-size: 1.6rem;
  //   font-style: italic;
  //   line-height: 1;
  // }

  // ALIGNMENT WRAPPER
  &__alignment {
    background-color: $light-mid;
    padding: 8rem 2rem;
    box-shadow: $shadow;
  }

  // ABOUT CARD
}
</style>
