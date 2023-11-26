<script setup lang="ts">

</script>

<template>
  <nuxt-layout name="default">

    <section class="error">
      <container class="error__container">

        <div class="heading">
          <p class="heading__subheading">ошибка 404</p>
          <h1 class="heading__heading-text">Мы не нашли страницу</h1>
          <p class="heading__supporting-text">
            Мы искали везде, но не смогли найти то, что искали. Давайте найдем лучшую историю для вас.
          </p>
        </div>

        <div class="actions">
          <nuxt-link to="/">
            <button-component size="2xl" style-mode="primary_color" class="actions__button">
              Главная
            </button-component>
          </nuxt-link>
          <nuxt-link :to="$router.options.history.state.back ?? '/'">
            <button-component size="2xl" style-mode="secondary_gray" class="actions__button">
              <template #leading>
                <ArrowLeftIcon/>
              </template>
              Вернуться
            </button-component>
          </nuxt-link>
        </div>

      </container>
    </section>

    <SectionDivider/>

    <FiguresSection/>

    <SectionDivider/>

  </nuxt-layout>
</template>

<style scoped lang="scss">

.error {
  padding: var(--spacing-7xl, 6.4rem) 0;

  &__container {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-4xl, 3.2rem);
  }
}

.heading {
  max-width: 76.8rem;
  text-align: center;

  &__subheading {
    margin-bottom: var(--spacing-lg, 1.2rem);
    color: var(--colors-text-text-brand-secondary-700, #CECFD2);
    @include text-md(Semibold);
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

.actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-lg, 1.2rem);

  &__button {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .error {
    padding: var(--spacing-9xl, 9.6rem) 0;

    &__container {
      gap: var(--spacing-6xl, 4.8rem);
    }
  }

  .heading {
    &__heading-text {
      margin-bottom: var(--spacing-3xl, 2.4rem);
      @include display-xl(Semibold);
    }

    &__supporting-text {
      @include text-xl(Regular);
    }
  }

  .actions {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
}

</style>