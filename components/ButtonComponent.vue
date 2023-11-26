<script setup lang="ts">

type buttonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type styleHierarchy = 'primary_color'
  | 'secondary_gray'
  | 'tertiary_gray'
  | 'link_gray';


defineProps<{
  size: buttonSize;
  styleMode: styleHierarchy;
}>();


const button = ref();
const isHovered = useElementHover(button);

</script>

<template>
  <button
    ref="button"
    :class="['button',
             { 'button_sm': size === 'sm',
               'button_md': size === 'md',
               'button_lg': size === 'lg',
               'button_xl': size === 'xl',
               'button_2xl': size === '2xl',

               'button_primary-colored': styleMode === 'primary_color',
               'button_secondary-gray': styleMode === 'secondary_gray',
               'button_tertiary-gray': styleMode === 'tertiary_gray',
               'button_link-gray': styleMode === 'link_gray',
                }]"
  >

    <span v-if="$slots.leading" class="icon">
      <slot name="leading" :is-hovered="isHovered"></slot>
    </span>

    <span class="button__text">
      <slot/>
    </span>

    <span v-if="$slots.trailing" class="icon">
      <slot name="trailing" :is-hovered="isHovered"></slot>
    </span>

  </button>
</template>

<style scoped lang="scss">

.button {
  height: max-content;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: 0 solid transparent;
  border-radius: var(--radius-md, 0.8rem);

  user-select: none;
  cursor: pointer;
  transition: all 300ms ease-out;

  & :slotted(*) {
    width: 2rem;
    height: 2rem;
  }

  &:focus {
    outline: none;
  }

  /* size */
  &_sm {
    padding: var(--spacing-md, 0.8rem) var(--spacing-lg, 1.2rem);
    gap: var(--spacing-xs, 0.4rem);
    @include text-sm(Semibold);
  }

  &_md {
    padding: 1rem 1.4rem;
    gap: var(--spacing-xs, 0.4rem);
    @include text-sm(Semibold);
  }

  &_lg {
    padding: 1rem var(--spacing-xl, 1.6rem);
    gap: var(--spacing-sm, 0.6rem);
    @include text-md(Semibold);
  }

  &_xl {
    padding: var(--spacing-lg, 1.2rem) 1.8rem;
    gap: var(--spacing-sm, 0.6rem);
    @include text-md(Semibold);
  }

  &_2xl {
    padding: var(--spacing-xl, 1.6rem) 2.2rem;
    gap: 1rem;
    @include text-lg(Semibold);

    & :slotted(*) {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  /* style */
  &_primary-colored {
    color: var(--component-colors-components-buttons-primary-button-primary-fg, #FFFFFF);
    background: var(--component-colors-components-buttons-primary-button-primary-bg, #6941C6);
    border: 1px solid var(--component-colors-components-buttons-primary-button-primary-border, #6941C6);
    @include shadow-xs;

    &:hover {
      color: var(--component-colors-components-buttons-primary-button-primary-fg-hover, #FFFFFF);
      background: var(--component-colors-components-buttons-primary-button-primary-bg-hover, #6941C6);
      border: 1px solid var(--component-colors-components-buttons-primary-button-primary-border-hover, #6941C6);
    }

    &:focus {
      @include ring-brand;
    }
  }

  &_secondary-gray {
    color: var(--component-colors-components-buttons-secondary-button-secondary-fg, #CECFD2);
    background: var(--component-colors-components-buttons-secondary-button-secondary-bg, #161B26);
    border: 1px solid var(--component-colors-components-buttons-secondary-button-secondary-border, #333741);
    @include shadow-xs;

    &:hover {
      color: var(--component-colors-components-buttons-secondary-button-secondary-fg-hover, #ECECED);
      background: var(--component-colors-components-buttons-secondary-button-secondary-bg-hover, #ECECED);
      border: 1px solid var(--component-colors-components-buttons-secondary-button-secondary-border-hover, #333741);
    }

    &:focus {
      @include ring-gray;
    }
  }

  &_tertiary-gray {
    color: var(--component-colors-components-buttons-tertiary-button-tertiary-fg, #94969C);

    &:hover {
      color: var(--component-colors-components-buttons-tertiary-button-tertiary-fg-hover, #ECECED);
      background: var(--component-colors-components-buttons-tertiary-button-tertiary-bg-hover, #1F242F);
    }
  }

  &_link-gray {
    padding: 0;
    color: var(--component-colors-components-buttons-tertiary-button-tertiary-fg, #94969C);
    user-select: auto;

    &:hover {
      color: var(--component-colors-components-buttons-tertiary-button-tertiary-fg-hover, #94969C);
    }
  }

  &__text {
    padding: 0 var(--spacing-xxs, 0.2rem);
    display: block;
  }
}


</style>