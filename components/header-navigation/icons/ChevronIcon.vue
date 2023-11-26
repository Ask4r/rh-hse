<script setup lang="ts">

withDefaults(defineProps<{
  color?: string;
}>(), {
  color: '#CECFD2',
});

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
    <path d="M15 7.5L10 12.5L5 7.5" :stroke="color" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped lang="scss">

.icon, .icon * {
  transition: all 300ms ease-out;
}

</style>