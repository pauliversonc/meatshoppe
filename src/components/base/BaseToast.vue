<template>
    <div v-show="show" class="toast">
      {{ message }}
    </div>
</template>

<script>
export default {
  name: 'MeatshoppeBaseToast',

  data() {
    return {
      message: 'Something is Flashy',
      show: false,
      timeoutId: null, // To store the timeout ID
    };
  },

  methods: {
    showToast(message, duration = 3000) {
      // Clear the previous timeout if it exists
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      



      this.message = message
      this.show = true;
      setTimeout(() => {
        this.closeToast();
      }, duration);
    },

    closeToast(){
      this.message = "";
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.toast {
  background-color: $dark-high;
  position: fixed;
  z-index: 1;
  top: 10rem;
  right: 4rem;
  min-width: 36rem;
  border: 2px solid $black;
  padding: 1rem;
  font-size: 1.6rem;
  box-shadow: $shadow;
  color: $white;
}





</style>