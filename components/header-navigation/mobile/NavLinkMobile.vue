<script setup lang="ts">

defineProps<{
  text: string;
}>();

</script>

<template>
  <nuxt-link class="link">{{ text }}</nuxt-link>
</template>

<style scoped lang="scss">

.link {
  padding: var(--spacing-xl, 1.2rem) var(--spacing-lg, 1.6rem);
  color: var(--colors-text-text-primary-900, #F5F5F6);
  @include text-md(Semibold);
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: all 300ms ease-out;

  &:hover {
    background: var(--colors-background-bg-primary-hover, #1F242F);
  }
}

</style>