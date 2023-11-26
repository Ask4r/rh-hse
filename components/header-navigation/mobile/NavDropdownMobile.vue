<script setup lang="ts">

defineProps<{
  text: string;
  isActive: boolean;
}>();

const dropdown = ref();
const isHovered = useElementHover(dropdown);

</script>

<template>
  <div ref="dropdown" class="link">
    <span class="link__text">{{ text }}</span>
    <ChevronIcon :color="isHovered
                          ? 'var(--colors-text-text-primary-900, #F5F5F6)'
                          : 'var(--component-colors-components-buttons-tertiary-button-tertiary-fg, #94969C)'"
                 :class="['link__chevron', {'link__chevron_up': isActive}]"/>
  </div>
</template>

<style scoped lang="scss">

.link {
  padding: var(--spacing-xl, 1.2rem) var(--spacing-lg, 1.6rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md, .8rem);

  color: var(--colors-text-text-primary-900, #F5F5F6);
  @include text-md(Semibold);
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background: var(--colors-background-bg-primary-hover, #1F242F);
  }

  &__text {
    user-select: none;
  }

  &__chevron {
    transition: all 300ms ease-out;

    &_up {
      transform: rotateX(180deg);
    }
  }
}

</style>