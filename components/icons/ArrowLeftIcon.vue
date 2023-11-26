<script setup lang="ts">

withDefaults(defineProps<{
  color?: string;
  size?: number;
}>(), {
  color: '#CECFD2',
  size: 24,
});

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none">
    <path d="M12 5L5 12M5 12L12 19M5 12L19 12" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped lang="scss">

.icon, .icon * {
  transition: all 300ms ease-out;
}

</style>