<template>
  <!-- collapse item -->
  <div class="collapse" :class="{active : activeCollapse, bb: borderBottom, bt: borderTop, 'mb-2': marginBottom }">

    
  <!-- collapseable part --> <!-- TOGGLE PART -->
  <div class="collapse__head" role="button" ref="categoryCollapse" @click="baseToggleCollapse(collapseName)">

    <!-- title -->
    <div class="collapse__title">
      <span class="collapse__title--name">{{ collapseName }}</span>
      <span class="collapse__title--count" v-if="categoryCount">{{ `[${categoryCount}]` }}</span>
    </div>
    
    <!-- toggle --> <!-- rotating icon -->
    <div class="collapse__icon-box" :class="{rotate: activeCollapse}" >
      <svg class="collapse__icon-box--icon">
        <use
          xlink:href="../../assets/icons/sprite.svg#icon-chevron-down"
        ></use>
      </svg>
    </div>

  </div>

  <!-- Collapse body --> <!-- shrinking part -->
  <Transition name="expand">
    <div class="collapse__body" v-if="activeCollapse">
      
      <slot></slot>

    </div>
  </Transition>


  </div>
  <!-- ./collapse item -->
</template>

<script>
export default {
  name: 'MeatshoppeBaseCollapse',
  emits: ['on-toggle-collapse'],
  props: {

    borderBottom: {
      type: Boolean,
      required: false,
      default: false,
    },

    borderTop: {
      type: Boolean,
      required: false,
      default: false,
    },

    marginBottom: {
      type: Boolean,
      required: false,
      default: false,
    },

    activeCollapse: {
      type: Boolean,
      required: false,
      default: false,
    },

    collapseName: {
      type: String,
      required: false,
      default: 'Collapse Name'
    },



    categoryCount: {
      type: Number,
      required: false,
      default: 0,
    },


  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    baseToggleCollapse() {
      this.$emit('on-toggle-collapse', this.collapseName);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
@import "../../sass/mixins";
// sidebar - collapse 
.collapse {
  &.bt {
  border-top: solid thin $gray;
  }

  &.bb {
  border-bottom: solid thin $gray;
  }

  &.mb-2 {
    margin-bottom: 2rem;
  }

  &__head {
    padding: 1.4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background-color: red;
    cursor: pointer;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    // border: 1px solid red;
    line-height: 1;

    &--name, &--count {
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 600;
      color: $black-tint;
      user-select: none;
      // @include text-shine-effect;
    }

  }

  &__icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid red;
    transition: transform .4s ease-out ;

    &--icon {
      height: 2rem;
      width: 2rem;
      transform: rotate(180deg);
    }
  }

  &__body {
    max-height: 100rem;
    overflow: hidden;
    opacity: 1;
    // border: 1px solid red;
  }
}
// ./sidebar - collapse 



// expand animation
.expand-enter-active, .expand-leave-active {
  transition: max-height .4s ease-in-out, opacity .4s ease-in-out;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}

// rotating animation
.rotate {
  transform: rotateX(180deg);
  transition: transform .4s ease-out;
  perspective: 100px;
}

</style>