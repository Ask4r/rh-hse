<script setup lang="ts">

defineProps<{
  image: string;
  subheading: string;
  heading: string;
  supportingText: string;
  author: {
    image: string;
    title: string;
    supportingText: string;
  };
}>();


</script>

<template>
  <div class="card">

    <img :src="image" :alt="heading" class="card__image">

    <p class="card__subheading">{{ subheading }}</p>

    <div class="card__heading-container">
      <h4 class="card__heading">{{ heading }}</h4>
      <span class="card__heading-icon">
        <ArrowUpRightIcon color="var(--colors-text-text-primary-900, #F5F5F6)"/></span>
    </div>

    <p class="card__supporting-text">{{ supportingText }}</p>

    <div class="card__avatar avatar-group">

      <img :src="author.image" :alt="author.title" class="avatar-group__image">

      <p class="avatar-group__title">{{ author.title }}</p>
      <p class="avatar-group__supporting-text">{{ author.supportingText }}</p>

    </div>

  </div>
</template>

<style scoped lang="scss">

.card {
  &__image {
    width: 100%;
    height: 24rem;
    margin-bottom: var(--spacing-2xl, 2rem);
    border-radius: var(--radius-2xl, 1.6rem);
  }

  &__subheading {
    margin-bottom: var(--spacing-md, 0.8rem);
    color: var(--colors-text-text-brand-secondary-700, #CECFD2);
    @include text-sm(Semibold);
  }

  &__heading-container {
    margin-bottom: var(--spacing-md, 0.8rem);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  &__heading {
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include text-xl(Semibold);
  }

  &__heading-icon {
    padding-top: var(--spacing-xxs, 2px);
  }

  &__supporting-text {
    margin-bottom: var(--spacing-3xl, 2.4rem);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-md(Regular);
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;

  }
}

.avatar-group {
  width: max-content;
  display: grid;
  grid-template: "image title" auto
                 "image subtext" auto / auto auto;
  gap: 0 1.2rem;

  &__image {
    grid-area: image;
    width: 4rem;
    height: 4rem;
    border-radius: var(--radius-full, 50em);
  }

  &__title {
    grid-area: title;
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include text-sm(Semibold);
    white-space: nowrap;
  }

  &__supporting-text {
    grid-area: subtext;
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-sm(Regular);
    white-space: nowrap;
  }
}

@media only screen and (min-width: 768px) {
  .card {
    &__heading {
      @include display-xs(Semibold);
    }
  }
}

</style>