<script setup lang="ts">

</script>

<template>
    <header class="header">
        <container>
            <div class="heading">
                <p class="heading__subheading">Политик</p>
                <h1 class="heading__heading-text">Борис Немцов</h1>
                <p class="heading__supporting-text">
                    Российский политический и государственный деятель, активист, автор нескольких докладов о масштабах
                    коррупции в России, активный критик политического режима Владимира Путина.
                </p>
            </div>
        </container>

        <header-carousel>
            <img src="/images/nemzov-1.png"
                 alt="Борис Немцов">
            <img src="/images/nemzov-2.png"
                 alt="Борис Немцов">
            <img src="/images/nemzov-3.png"
                 alt="Борис Немцов">
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