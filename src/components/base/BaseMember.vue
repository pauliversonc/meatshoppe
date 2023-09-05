<template>
  <div class="member"
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
        delay: 300,
      },
    }"
  >
    <img
      class="member--img"
      src="../../assets/images/about/member-3-sm.jpg"
      alt=""
      srcset=""
    />
    <span class="member--name">{{ memberName }}</span>
    <span class="member--prof">{{ memberProf }}</span>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeBaseMember",

  props: {
    // Define the props and their types
    memberName: String,
    memberProf: String,
    memberPic: String
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.member {
  display: flex;
  flex-direction: column;

  &--img {
    width: 100%;
  }
  &--name {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0;
    // line-height: 1;
  }

  &--prof {
    // margin-top: -1rem;
    font-size: 1.6rem;
    font-style: italic;
    line-height: 1;
  }
}
</style>
