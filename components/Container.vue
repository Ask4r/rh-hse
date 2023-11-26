<script setup lang="ts">

</script>

<template>
  <div ref="container" class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

.container {
  width: 100%;
  margin: 0 auto;
  padding-left: var(--container-padding-mobile, 1.6rem);
  padding-right: var(--container-padding-mobile, 1.6rem);

  display: flex;
  gap: var(--spacing-4xl, 3.2rem);

  @media only screen and (min-width: 768px) {
    max-width: var(--container-max-width-desktop, 128rem);
    padding-left: var(--container-padding-desktop, 3.2rem);
    padding-right: var(--container-padding-desktop, 3.2rem);
  }
}

</style>