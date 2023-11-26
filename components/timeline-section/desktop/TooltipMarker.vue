<script setup lang="ts">

defineProps<{
  heading: string;
  text: string;
}>();

// const point = ref();
// const container = ref();
// const isHovered = useElementHover(point)
// const hh =  useElementHover(container);

const isHovered = ref(false);


</script>

<template>
  <div ref="container" class="container" @pointerleave="isHovered = false">

    <div :class="['tooltip', {'tooltip_active': isHovered}]">
      <p class="tooltip__heading">{{ heading }}</p>
      <p class="tooltip__text">{{ text }}</p>
    </div>

    <MarkerPoint ref="point" class="point" @pointerenter="isHovered = true"/>

  </div>
</template>

<style scoped lang="scss">

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
  opacity: 0;
  user-select: none;

  transition: all 300ms ease-out;

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

  &_active {
    opacity: 1;
    user-select: auto;
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