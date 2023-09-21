<template>
  <div class="form">
    <div class="form-group">
      <svg class="form__icon form__icon--left">
        <use xlink:href="../../assets/icons/sprite.svg#icon-search"></use>
      </svg>
      <input type="text" class="form-input" placeholder="Search" />
      <svg class="form__icon form__icon--right">
        <use xlink:href="../../assets/icons/sprite.svg#icon-x"></use>
      </svg>

    </div>
  </div>
</template>

<script>
export default {
  name: "MeatshoppeCartPage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.form {
  height: 50vh;
  padding-top: 7rem;

  // padding-left: 100rem;
}

.form-group {
  position: relative;
}

.form-input {
  background-color: $light-low;
  border: solid thin $light-mid;
  padding: 1rem 4rem;
  border-radius: 0;
  font-size: 1.6rem;
  transition: border ease 1s;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  width: 100%;


  &:focus {
    border: none;
    outline: none;
    border: solid thin $dark-mid;
  }


}


.form__icon {
  position: absolute;
  height: 2.1rem;
  width: 2.1rem;

  // background-color: blue;
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
