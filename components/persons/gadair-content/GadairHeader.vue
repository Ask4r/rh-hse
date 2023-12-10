<script setup lang="ts">

</script>

<template>
    <header class="header">
        <container>
            <div class="heading">
                <p class="heading__subheading">Политик, экономист</p>
                <h1 class="heading__heading-text">Егор Гайдар</h1>
                <p class="heading__supporting-text">
                    Экономист, либеральный реформатор. Один из руководителей перехода от плановой экономики к рыночной,
                    либерализации цен.
                </p>
            </div>
        </container>

        <header-carousel>
            <img src="/images/gadair-1.jpg"
                 alt="Егор Гайдар">
            <img src="/images/gadair-2.jpg"
                 alt="Егор Гайдар">
            <img src="/images/gadair-3.jpg"
                 alt="Егор Гайдар">
            <img src="/images/gadair-4.jpg"
                 alt="Егор Гайдар">
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