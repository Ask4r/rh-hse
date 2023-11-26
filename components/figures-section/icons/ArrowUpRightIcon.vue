<script setup lang="ts">

withDefaults(defineProps<{
  color?: string;
}>(), {
  color: '#F5F5F6',
});

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="icon">
    <path
      d="M7 7H17M17 7V17M17 7L7 17"
      stroke="#F5F5F6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped lang="scss">

.icon, .icon * {
  transition: all 300ms ease-out;
}

</style>