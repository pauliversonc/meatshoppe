<template>
  <div class="about">
    <div class="about__cover">
      <BaseHeadingOne
        headingText="About Us"
        headingDesc="Lorem ipsum dolor nes bueast"
      />
    </div>

    <!-- STORY WRAPPER -->
    <div class="about__background">
      <!-- 120 -->
      <div class="about__story">
        <!-- left -->
        <div class="about__story-content">
          <h5 class="about__heading">Our Story</h5>
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
          <img
            class="about__img"
            src="../../assets/images/about/team-sm.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <!-- ./120 -->

      <br />
      <!-- centered heading -->
      <h5 class="about__heading u-center">Our Team</h5>
      <!-- 120 -->
      <div class="about__team">
        <!-- MEMBERS -->

        <div class="about__member">
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
        </div>
      </div>

      <!-- ./120 -->
    </div>

    <!-- <h5 class="about__heading u-center">Meatshoppe Vision, Mission and Core Values</h5> -->

    <!-- ALIGNMENT WRAPPER -->
    <div class="about__alignment">
      <!-- 120 -->
      <div class="about__story equal">
        <!-- right -->
        <div class="about__img-box">
          <img
            class="about__img"
            src="../../assets/images/about/alignment-1.jpg"
            alt=""
            srcset=""
          />
        </div>

        <!-- left -->
        <div class="about__story-content">
          <h5 class="about__heading">Our Vision</h5>
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
      <div class="about__story equal">
        <!-- left -->
        <div class="about__story-content">
          <h5 class="about__heading">Our Mission</h5>
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
         <div class="about__story equal">
        <!-- right -->
        <div class="about__img-box">
          <img
            class="about__img"
            src="../../assets/images/about/alignment-3.jpg"
            alt=""
            srcset=""
          />
        </div>

        <!-- left -->
        <div class="about__story-content">
          <h5 class="about__heading">Our Core Values</h5>
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
export default {
  name: "MeatshoppeAboutPage",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
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

    margin-bottom: 4rem;

    &.opposite {
      grid-template-columns: 1.5fr 2fr;
    }

    &.equal {
      grid-template-columns: 1fr 1fr;
    }
  }

  // LEFT
  &__story-content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    // border: 1px solid red;
    padding-right: 4rem;
  }

  &__heading {
    font-size: 3.6rem;
    line-height: 1;
    margin-bottom: 2rem;

    &.u-center {
      text-align: center;
    }
  }

  &__paragraph {
    font-size: 1.6rem;
  }

  // RIGHT

  &__img-box {
    text-align: right;
  }

  &__img {
    width: 100%;
  }

  // 120
  &__team {
    margin: 0 auto;
    max-width: 120rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  &__member {
    display: flex;
    flex-direction: column;
  }
  &__member--img {
    width: 100%;
  }
  &__member--name {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0;
    // line-height: 1;
  }

  &__member--prof {
    // margin-top: -1rem;
    font-size: 1.6rem;
    font-style: italic;
    line-height: 1;
  }

  // ALIGNMENT WRAPPER
  &__alignment {
    background-color: $light-mid;
    padding: 8rem 2rem;
    box-shadow: $shadow;
  }

  // ABOUT CARD
}
</style>
