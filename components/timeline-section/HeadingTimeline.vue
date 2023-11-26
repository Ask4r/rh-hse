<script setup lang="ts">

</script>

<template>
  <div class="heading">
    <p class="heading__subheading">Таймлайн</p>
    <h2 class="heading__title">История 1990х</h2>
    <p class="heading__supporting-text">
      Главные и переломные моменты истории конца Советского Союза, смены властей и
      начала истории Российской Федерации.
    </p>

  </div>
</template>

<style scoped lang="scss">

.heading {
  max-width: 76.8rem;
  text-align: center;

  &__subheading {
    margin-bottom: var(--spacing-lg, 1.2rem);
    color: var(--colors-text-text-brand-secondary-700, #CECFD2);
    @include text-sm(Semibold);
  }

  &__title {
    margin-bottom: var(--spacing-xl, 1.6rem);
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include display-sm(Semibold);
  }

  &__supporting-text {
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-lg(Regular);
  }
}

@media only screen and (min-width: 768px) {
  .heading {
    &__subheading {
      @include text-md(Semibold);
    }

    &__title {
      @include display-md(Semibold);
    }

    &__supporting-text {
      @include text-xl(Regular);
    }
  }
}

</style>