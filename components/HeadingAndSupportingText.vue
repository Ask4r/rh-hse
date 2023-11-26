<script setup lang="ts">

defineProps<{
  subheading?: string;
  heading: string;
  supportingText: string;
}>();

</script>

<template>
  <div class="heading">

    <p v-if="subheading" class="heading__subheading">
      {{ subheading }}
    </p>
    <h2 class="heading__title">
      {{ heading }}
    </h2>
    <p class="heading__supporting-text">
      {{ supportingText }}
    </p>

  </div>
</template>

<style scoped lang="scss">

.heading {

  &__subheading {
    margin-bottom: var(--spacing-lg, 1.2rem);
    color: var(--colors-text-text-brand-secondary-700, #CECFD2);
    @include text-sm(Semibold);
  }

  &__title {
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
  .heading {
    max-width: 76.8rem;

    &__subheading {
      @include text-md(Semibold);
    }

    &__title {
      margin-bottom: var(--spacing-3xl, 2.4rem);
      @include display-lg(Semibold);
    }

    &__supporting-text {
      @include text-xl(Regular);
    }
  }
}

</style>