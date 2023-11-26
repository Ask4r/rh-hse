<script setup lang="ts">

const props = defineProps<{
  color: string;
}>();

const colorMapper: { [scheme: string]: {
                        background: string;
                        border: string;
                        text: string;
                      } } = {
  'brand': {
    background: 'var(--component-colors-utility-brand-utility-brand-50, #2C1C5F)',
    border: 'var(--component-colors-utility-brand-utility-brand-200, #53389E)',
    text: 'var(--component-colors-utility-brand-utility-brand-700, #D6BBFB)',
  },
  'pink': {
    background: 'var(--component-colors-utility-pink-utility-pink-50, #4E0D30)',
    border: 'var(--component-colors-utility-pink-utility-pink-200, #9E165F)',
    text: 'var(--component-colors-utility-pink-utility-pink-700, #FAA7E0)',
  },
  'indigo': {
    background: 'var(--component-colors-utility-indigo-utility-indigo-50, #1F235B)',
    border: 'var(--component-colors-utility-indigo-utility-indigo-200, #2D31A6)',
    text: 'var(--component-colors-utility-indigo-utility-indigo-700, #A4BCFD)',
  },
  'success': {
    background: 'var(--component-colors-utility-success-utility-success-50, #053321)',
    border: 'var(--component-colors-utility-success-utility-success-200, #085D3A)',
    text: 'var(--component-colors-utility-success-utility-success-700, #75E0A7)',
  },
  'blue': {
    background: 'var(--component-colors-utility-blue-utility-blue-50, #102A56)',
    border: 'var(--component-colors-utility-blue-utility-blue-200, #1849A9)',
    text: 'var(--component-colors-utility-blue-utility-blue-700, #84CAFF)',
  },
  'orange': {
    background: 'var(--component-colors-utility-orange-utility-orange-50, #511C10)',
    border: 'var(--component-colors-utility-orange-utility-orange-200, #932F19)',
    text: 'var(--component-colors-utility-orange-utility-orange-700, #F7B27A)',
  },
  'gray-blue': {
    background: 'var(--component-colors-utility-gray-blue-utility-gray-blue-50, #101323)',
    border: 'var(--component-colors-utility-gray-blue-utility-gray-blue-200, #293056)',
    text: 'var(--component-colors-utility-gray-blue-utility-gray-blue-700, #B3B8DB)',
  },
  'gray': {
    background: 'var(--component-colors-utility-gray-utility-gray-50, #161B26)',
    border: 'var(--component-colors-utility-gray-utility-gray-200, #333741)',
    text: 'var(--component-colors-utility-gray-utility-gray-700, #CECFD2)',
  },
};

const colorScheme = colorMapper[props.color] ?? colorMapper['gray'];

</script>

<template>
  <div class="badge">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

.badge {
  width: max-content;
  height: max-content;
  padding: var(--spacing-xxs, 0.2rem) 1rem;

  background-color: v-bind('colorScheme.background');
  border-radius: var(--radius-full, 50em);
  border: 1px solid v-bind('colorScheme.border');

  color: v-bind('colorScheme.text');
  @include text-sm(Medium);
}

</style>