<script setup lang="ts">

</script>

<template>
  <container>
    <div class="divider"></div>
  </container>
</template>

<style scoped lang="scss">

.divider {
  width: 100%;
  max-width: var(--container-max-width-desktop, 128rem);
  height: 0;
  padding: 0 var(--container-padding-mobile, 1.6rem);
  border-top: 1px solid var(--colors-border-border-secondary, #1F242F);
}

@media only screen and (min-width: 768px) {
  .divider {
    padding: 0 var(--container-padding-desktop, 3.2rem);
  }
}

</style>