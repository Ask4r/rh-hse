<script setup lang="ts">

</script>

<template>
  <footer class="footer">

    <CreditsList />

    <FooterCopyrights />

  </footer>
</template>

<style scoped lang="scss">

.footer {
  padding: var(--spacing-6xl, 4.8rem) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6xl, 4.8rem);

  &__text {
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-md(Semibold);
  }
}

@media only screen and (min-width: 768px) {
  .footer {
    padding: var(--spacing-7xl, 6.4rem) 0 var(--spacing-6xl, 4.8rem) 0;
    gap: var(--spacing-7xl, 6.4rem);
  }
}

</style>