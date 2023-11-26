<script setup lang="ts">

withDefaults(defineProps<{
  isActive?: boolean;
}>(), {
  isActive: false,
});

const emits = defineEmits<{
  'update:isActive': [v: boolean];
}>();

const menu = ref();
const isHovered = useElementHover(menu);

</script>

<template>
  <button ref="menu" class="menu" @click="emits('update:isActive', !isActive)">

    <CrossIcon
      v-if="isActive"
      :color="isHovered
                ? 'var(--colors-foreground-fg-secondary-hover, #ECECED)'
                : 'var(--colors-foreground-fg-secondary-700, #CECFD2)'"
      class="menu__cross"
    />

    <MenuIcon
      v-else
      :color="isHovered
                ? 'var(--colors-foreground-fg-secondary-hover, #ECECED)'
                : 'var(--colors-foreground-fg-secondary-700, #CECFD2)'"
      class="menu__burger"
    />

  </button>
</template>

<style scoped lang="scss">

.menu {
  padding: var(--spacing-md, .8rem);
  border: none;
  border-radius: var(--radius-md, .8rem);
  background: transparent;

  cursor: pointer;
  transition: all 300ms ease-out;

  & * {
    transition: all 300ms ease-out;
  }

  &:hover {
    background: var(--colors-background-bg-primary-hover, #1F242F);
  }

  &:focus:has(> .menu__burger), {
    outline: none;
    @include ring-gray;
  }
}

</style>