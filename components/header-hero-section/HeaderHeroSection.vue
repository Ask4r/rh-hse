<script setup lang="ts">

</script>

<template>
  <section class="heading">
    <container class="heading__container">

      <HeadingAndText class="heading__title"/>

      <img src="/images/pozeluy-genseka.png"
           alt="Поцелуй генсека"
           class="heading__image">

    </container>
  </section>
</template>

<style scoped lang="scss">

.heading {
  max-width: 100%;
  padding: var(--spacing-7xl, 6.4rem) 0 var(--spacing-7xl, 6.4rem) 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    --gutter-top: 8rem;
    content: '';
    width: 100%;
    height: calc(100% + var(--gutter-top));

    position: absolute;
    top: calc(-1 * var(--gutter-top));
    left: 50%;
    translate: -50% 0;

    background: url('~/assets/images/dot-grid-desktop.png') center -430px / 1920px 1440px no-repeat;
  }

  &__container {
    display: grid;
    grid-template:repeat(2, auto) / auto;
    gap: var(--spacing-7xl, 6.4rem);
    z-index: 10;
  }

  &__title {
    z-index: 100;
  }

  &__image {
    width: 100%;
    height: 24rem;
  }

  @media only screen and (min-width: 768px) {
    padding: var(--spacing-7xl, 6.4rem) 0 var(--spacing-9xl, 9.6rem) 0;

    &::before {
      --gutter-top: 7.2rem;
    }

    &__container {
      grid: auto / repeat(2, minmax(0, 1fr));
      gap: var(--spacing-4xl, 3.2rem);
      place-items: center;
    }

    &__image {
      height: 64rem;
    }
  }
}


</style>