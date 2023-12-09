<script setup lang="ts">

</script>

<template>
  <div class="content">

    <div class="author">
      <img
        src="https://i.pravatar.cc/300"
        alt="Влад Овчаров"
        class="author__image"
      >
      <p class="author__title">Влад Овчаров</p>
      <p class="author__subtext">Pussy Destroyer</p>
    </div>

    <div class="categories">
      <badge color="brand">brand</badge>
      <badge color="pink">pink</badge>
      <badge color="indigo">indigo</badge>
      <badge color="success">success</badge>
      <badge color="blue">blue</badge>
      <badge color="orange">orange</badge>
      <badge color="gray-blue">gray-blue</badge>
      <badge color="gray">gray</badge>
    </div>

  </div>
</template>

<style scoped lang="scss">

.content {
  width: 100%;
  max-width: var(--paragraph-max-width, 72rem);
  padding-top: var(--spacing-3xl, 2.4rem);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: var(--spacing-3xl, 2.4rem);
  border-top: 1px solid var(--colors-border-border-secondary, #1F242F);
}

.author {
  width: max-content;
  display: grid;
  grid-template: "image title" auto
                 "image subtext" auto / auto auto;
  gap: 0 1.2rem;

  &__image {
    grid-area: image;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: var(--radius-full, 50em);
  }

  &__title {
    grid-area: title;
    white-space: nowrap;
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include text-md(Semibold);
  }

  &__subtext {
    grid-area: subtext;
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-md(Regular);
  }
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md, 0.8rem);
}

@media only screen and (min-width: 768px) {
  .content {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .author {
    &__image {
      width: 5.6rem;
      height: 5.6rem;
    }

    &__title {
      @include text-lg(Semibold);
    }
  }
}

</style>
