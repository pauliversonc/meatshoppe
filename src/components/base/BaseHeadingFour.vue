<template>
  <h4 class="heading__four">{{ headingFour }}</h4>
</template>

<script>
export default {
  name: 'MeatshoppeBaseHeadingFour',
  props: {
    headingFour: String
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.heading__four {
  line-height: 1;
  font-size: 2.1rem;
  color: $black;
  margin-bottom: 2rem;
  font-style: normal;
}
</style>