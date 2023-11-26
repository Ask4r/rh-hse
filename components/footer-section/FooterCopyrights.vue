<script setup lang="ts">

</script>

<template>
  <container>
    <div class="content">
      <Logotype/>
      <p class="content__text">
        2023 ФКН ПИ НИУ ВШЭ.
      </p>
    </div>
  </container>
</template>

<style scoped lang="scss">

.content {
  width: 100%;
  padding-top: var(--spacing-4xl, 3.2rem);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl, 2.4rem);

  border-top: 1px solid var(--colors-border-border-secondary, #1F242F);

  &__text {
    color: var(--colors-text-text-quarterary-500, #94969C);
    @include text-md(Regular);
  }
}

@media only screen and (min-width: 768px) {
  .content {
    flex-direction: row;
    justify-content: space-between;
  }
}

</style>