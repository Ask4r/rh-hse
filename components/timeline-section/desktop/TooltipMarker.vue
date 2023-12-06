<script setup lang="ts">

const isHovered = ref(false);

</script>

<template>
  <div class="container" @pointerleave="isHovered = false">

    <transition name="tooltip">
      <div v-show="isHovered" class="tooltip">
        <p class="tooltip__heading">
          <slot name="heading"/>
        </p>
        <p class="tooltip__text">
          <slot name="text"/>
        </p>
      </div>
    </transition>

    <MarkerPoint class="point" @pointerenter="isHovered = true"/>

  </div>
</template>

<style scoped lang="scss">

.tooltip-enter-active,
.tooltip-leave-active {
  transition: all 300ms ease-out;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
}

.container {
  position: relative;
}

.tooltip {
  width: 18rem;
  padding: var(--spacing-lg, 1.2rem) var(--spacing-xl, 1.6rem);
  position: absolute;
  bottom: 100%;
  left: 50%;
  translate: -50% 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs, 0.4rem);

  background: var(--colors-background-bg-primary-alt, #161B26);
  border-radius: var(--radius-md, 0.8rem);

  &::after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    bottom: -0.6rem;

    border-radius: 0.1rem;
    background: var(--colors-background-bg-primary-alt, #161B26);
    rotate: 45deg;
  }

  &__heading {
    color: var(--colors-text-text-primary-900, #F5F5F6);
    text-align: center;
    @include text-xs(Semibold);
  }

  &__text {
    color: var(--colors-text-text-tertiary-600, #94969C);
    text-align: center;
    @include text-xs(Regular);
  }
}

.point {
  padding-top: calc(1.2rem + 0.6rem); // gap + tip height
  box-sizing: content-box;
}

</style>