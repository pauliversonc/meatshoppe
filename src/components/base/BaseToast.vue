<template>
    <TransitionGroup tag="ul" name="fade" class="toast-container">
      <li v-for="(toast, index) in toasts" :key="index" class="toast">{{ toast.message  }}</li>
    </TransitionGroup>

</template>

<script>
export default {
  name: 'MeatshoppeBaseToast',

  data() {
    return {
      toasts: [],
      message: 'Something is Flashy',
      show: false,
      timeoutId: null, // To store the timeout ID
    };
  },

  methods: {
    showToast(message, duration = 3000) {

      let i = 0;

      const newToast = {
        message: message,
        show: true,
      };

      this.toasts.unshift(newToast);

      setTimeout(() => {
        this.closeToast(newToast);
      }, duration);
    },

    closeToast(toast) {
      toast.show = false;
      this.toasts.pop();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.toast-container {
  position: fixed;
  top: 10rem;
  right: 2rem;
  z-index: 10;
  min-width: 36rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.toast {
  background-color: $dark-high;
  border: 2px solid $black;
  padding: 1rem;
  font-size: 1.6rem;
  box-shadow: $shadow;
  color: $white;

  list-style: none;
}


/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}



</style>