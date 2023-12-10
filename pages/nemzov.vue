<script setup lang="ts">

</script>

<template>
  <article>

    <NemzovHeader />

    <div class="main-content">
      <container class="main-content__container">

        <NemzovContent />
        <NemzovAuthor />

      </container>
    </div>

    <SectionDivider/>

    <FiguresSection />

    <SectionDivider />

  </article>
</template>

<style lang="scss">

.main-content {
  width: 100%;
  padding-bottom: var(--spacing-7xl, 6.4rem);

  &__container {
    flex-direction: column;
    align-items: center;
    gap: 0 !important;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: var(--spacing-9xl, 9.6rem);
  }
}

</style>