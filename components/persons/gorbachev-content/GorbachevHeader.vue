<script setup lang="ts">

</script>

<template>
  <header class="header">
    <container>
      <div class="heading">
        <p class="heading__subheading">Реформатор</p>
        <h1 class="heading__heading-text">Михаил Горбачев</h1>
        <p class="heading__supporting-text">
          Последний генеральный секретарь КПСС, инициировал перестройку и стал
          символом конца Союза Советских Социалистических Республик.
        </p>
      </div>
    </container>

    <header-carousel>
      <img src="/images/gorbachev-1.png"
           alt="Михаил Горбачев">
      <img src="/images/gorbachev-2.png"
           alt="Михаил Горбачев">
      <img src="/images/gorbachev-3.png"
           alt="Михаил Горбачев">
      <img src="/images/gorbachev-4.png"
           alt="Михаил Горбачев">
      <img src="/images/gorbachev-5.png"
           alt="Михаил Горбачев">
    </header-carousel>

  </header>
</template>

<style scoped lang="scss">

.header {
  padding: var(--spacing-7xl, 6.4rem) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6xl, 4.8rem);
}

.heading {
  max-width: 76.8rem;

  &__subheading {
    margin-bottom: var(--spacing-lg, 1.2rem);
    color: var(--colors-text-text-brand-secondary-700, #CECFD2);
    @include text-sm(Semibold);
  }

  &__heading-text {
    margin-bottom: var(--spacing-xl, 1.6rem);
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include display-md(Semibold);
  }

  &__supporting-text {
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-lg(Regular);
  }
}

@media only screen and (min-width: 768px) {

}

</style>