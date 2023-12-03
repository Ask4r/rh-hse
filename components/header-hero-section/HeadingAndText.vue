<script setup lang="ts">

</script>

<template>
  <div class="text">

    <h1 class="text__title">Исторические личности России 1990х годов</h1>

    <p class="text__supporting">Экскурс в переломный период становления России и самых ярких деятелей того времени.</p>

    <button-component :size="isMobile ? 'xl' : '2xl'" style-mode="primary_color" class="text__button">
      <template #leading="{ isHovered }">
        <PlayCircleIcon
          :color="isHovered ? 'var(--component-colors-components-buttons-primary-button-primary-fg-hover, #FFFFFF)' : 'var(--component-colors-components-buttons-primary-button-primary-fg, #FFFFFF)'"
        />
      </template>

      Обзор
    </button-component>

  </div>
</template>

<style scoped lang="scss">

.text {
  &__title {
    margin-bottom: var(--spacing-xl, 1.6rem);
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include display-md(Semibold);
  }

  &__supporting {
    margin-bottom: var(--spacing-4xl, 3.2rem);
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-lg(Regular);
  }

  &__button {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .text {
    max-width: 100%;

    &__title {
      min-width: 76.8rem;
      margin-bottom: var(--spacing-3xl, 2.4rem);
      color: var(--colors-text-text-primary-900, #F5F5F6);
      @include display-xl(Semibold);
    }

    &__supporting {
      max-width: 56rem;
      margin-bottom: var(--spacing-6xl, 4.8rem);
      color: var(--colors-text-text-tertiary-600, #94969C);
      @include text-xl(Regular);
    }

    &__button {
      width: max-content;
    }
  }
}

</style>