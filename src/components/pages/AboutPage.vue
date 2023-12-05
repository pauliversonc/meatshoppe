<template>
  <div class="about">
    <div
      class="about__cover"
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
        headingDesc="Explore the story of our modest origins"
      />
    </div>

    <!-- STORY WRAPPER -->
    <div class="about__background">
      <!-- 120 -->
      <div class="about__story u-mt-0">
        <!-- left -->
        <div
          class="about__story-content"
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
          <BaseHeadingFive
            v-if="!isTabletView"
            heading-title="Our Story"
            :margin-bottom="true"
            
          />

          <p class="about__paragraph">
            In the heart of a small kitchen,
            <strong>Meatshoppe</strong> embarked on a remarkable journey fueled
            by a dream and the savory scent of quality meats. From our humble
            beginnings, navigating challenges such as limited resources and
            fierce competition, we emerged as a cherished meat shop deeply
            rooted in the community.
          </p>
          <br />
          <p class="about__paragraph">
            Beyond offering exceptional flavors, each cut reflects a narrative
            of resilience, innovation, and an enduring commitment to delivering
            the finest meats. As we invite you to savor our story at your table,
            we express gratitude for your role in transforming our early
            aspirations into a thriving reality, and we eagerly anticipate many
            more chapters together.
          </p>
        </div>

        <!-- right -->
        <div
          class="about__img-box"
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
          <BaseHeadingFive
            v-if="isTabletView"
            heading-title="Our Story"
            :margin-bottom="true"
            :center="true"
          />

          <img
            class="about__img"
            src="/public/images/about/team-sm.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!-- ./120 -->

      <!-- centered heading -->
      <div
        class="about__heading-cont"
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
        <BaseHeadingFive heading-title="Our Team" :center="true" />
      </div>
      <!-- 120 -->
      <div class="about__team">
        <!-- MEMBERS -->

        <BaseMember
          v-for="(member, index) in members"
          :key="index"
          :member-name="member.name"
          :member-prof="member.prof"
          :member-img="member.img"
        ></BaseMember>
      </div>

      <!-- ./120 -->
    </div>

    <!-- ALIGNMENT WRAPPER -->
    <div class="about__alignment">
      <!-- 120 -->
      <div class="about__story opposite u-mt-0">
        <!-- right -->
        <div
          class="about__img-box"
          v-motion
          :initial="{
            x: -200,
            opacity: 0,
          }"
          :visibleOnce="{
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
          <BaseHeadingFive
            v-if="isTabletView"
            heading-title="Our Vision"
            :margin-bottom="true"
            :center="true"
          />

          <img
            class="about__img"
            src="/public/images/about/alignment-1.jpg"
            alt=""
            srcset=""
          />
        </div>

        <!-- left -->
        <div
          class="about__story-content"
          v-motion
          :initial="{
            x: 200,
            opacity: 0,
          }"
          :visibleOnce="{
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
          <BaseHeadingFive
            v-if="!isTabletView"
            heading-title="Our Vision"
            :margin-bottom="true"
          />
          <p class="about__paragraph">
            At Meatshoppe, our vision is to be the heartbeat of culinary
            experiences, where every cut tells a story of uncompromising
            quality, innovation, and a passion for exceptional flavors. We
            strive to be more than a meat shop.
          </p>
          <br />
          <p class="about__paragraph">
            We're forging a future as a trusted destination for elevated
            culinary experiences. Through innovation, sustainability, and
            community commitment, we redefine excellence in meats, leaving a
            lasting impact on our valued customers' palates and memories.
          </p>
        </div>
      </div>
      <!-- ./120 -->

      <!-- 120 -->
      <div class="about__story">
        <!-- left -->
        <div
          class="about__story-content"
          v-motion
          :initial="{
            x: -200,
            opacity: 0,
          }"
          :visibleOnce="{
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
          <BaseHeadingFive
            v-if="!isTabletView"
            heading-title="Our Mission"
            :margin-bottom="true"
            
          />

          <p class="about__paragraph">
            At Meatshoppe, our mission is to passionately provide an
            unparalleled culinary experience through the finest meats. We are
            committed to sourcing, preparing, and delivering top-quality
            products, infused with innovation and a dedication to
            sustainability.
          </p>
          <br />
          <p class="about__paragraph">
            We strive to surpass customer expectations, leaving a mark of
            exceptional taste and ethical practices. With each cut, we redefine
            industry standards, ensuring Meatshoppe stands as a beacon of
            quality and culinary delight in every home.
          </p>
        </div>

        <!-- right -->
        <div
          class="about__img-box"
          v-motion
          :initial="{
            x: 200,
            opacity: 0,
          }"
          :visibleOnce="{
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
          <BaseHeadingFive
            v-if="isTabletView"
            heading-title="Our Mission"
            :margin-bottom="true"
            :center="true"
          />

          <img
            class="about__img"
            src="/public/images/about/alignment-2.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!-- ./120 -->

      <!-- 120 -->
      <div class="about__story opposite u-mb-0">
        <!-- right -->
        <div
          class="about__img-box"
          v-motion
          :initial="{
            x: -200,
            opacity: 0,
          }"
          :visibleOnce="{
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
          <BaseHeadingFive
            v-if="isTabletView"
            heading-title="Our Values"
            :margin-bottom="true"
            :center="true"
          />

          <img
            class="about__img"
            src="/public/images/about/alignment-3.jpg"
            alt=""
            srcset=""
          />
        </div>

        <!-- left -->
        <div
          class="about__story-content"
          v-motion
          :initial="{
            x: 200,
            opacity: 0,
          }"
          :visibleOnce="{
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
          <BaseHeadingFive
            v-if="!isTabletView"
            heading-title="Our Values"
            :margin-bottom="true"
            
          />

          <p class="about__paragraph">
            At Meatshoppe, we are guided by a commitment to
            <strong>Quality Excellence</strong> and <strong>Innovation</strong>,
            delivering top-tier meats while constantly enhancing the customer
            experience. Our dedication to
            <strong>Sustainability</strong> ensures responsible practices, and
            <strong>Customer-Centricity</strong> is at the core of surpassing
            expectations.
          </p>
          <br />
          <p class="about__paragraph">
            Upholding <strong>Integrity</strong>, fostering
            <strong>Community Engagement</strong>, and embracing a Passion for
            <strong>Culinary Delight</strong>, we continuously strive for
            excellence. With a commitment to
            <strong>Continuous Improvement</strong>, we promise not just quality
            meats but an elevated culinary journey for our valued customers.
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
        {
          name: "Engr. Wilson Mark Aliñab",
          prof: "Civil Engineer",
          img: "member-1-sm.jpg",
        },
        {
          name: "Ms. Florencia Abad, MBA",
          prof: "Procurement Manager",
          img: "member-2-sm.jpg",
        },
        {
          name: "Ms. Katherina Lee, CPA",
          prof: "Accounting Manager",
          img: "member-3-sm.jpg",
        },
        {
          name: "Dr. Jade Miah Largo, MD",
          prof: "Medical Doctor",
          img: "member-4-sm.jpg",
        },
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

    background-image: url(/public/images/about/about-us-xl.png);
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
      
      display: flex;
      flex-direction: column;
      align-items: center;
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
