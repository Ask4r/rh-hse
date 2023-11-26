<script setup lang="ts">

const carouselContent = ref();

const {width: windowWidth} = useWindowSize();


onMounted(() => {
  carouselContent.value.scrollLeft = 0;
});

function carouselToLeft() {
  carouselContent.value.scrollLeft -= isMobile ? 400 : 800;
}

function carouselToRight() {
  carouselContent.value.scrollLeft += isMobile ? 400 : 800;
}

</script>

<template>
  <div class="carousel">

    <div ref="carouselContent" class="carousel__content">
      <slot/>
    </div>

    <container class="carousel__navigation navigation">
      <button class="navigation__button"
              @click="carouselToLeft">
        <ArrowLeftIcon color="var(--colors-foreground-fg-quarterary-500, #94969C)"
                       :size="isMobile ? 20 : 24"
                       class="carousel__icon"/>
      </button>
      <button class="navigation__button navigation__button_right"
              @click="carouselToRight">
        <ArrowLeftIcon color="var(--colors-foreground-fg-quarterary-500, #94969C)"
                       :size="isMobile ? 20 : 24"
                       class="carousel__icon"/>
      </button>
    </container>

  </div>
</template>

<style scoped lang="scss">

.carousel {
  width: 100%;
  overflow-x: visible;

  &__content {
    height: 36rem;
    max-width: 100%;
    padding: 0 var(--container-padding-mobile, 1.6rem);

    display: flex;
    align-items: flex-start;
    gap: var(--spacing-4xl, 3.2rem);

    overflow-x: auto;
    scroll-snap-type: both mandatory;
    scroll-padding-left: var(--container-padding-mobile, 1.6rem);
    scroll-snap-stop: always;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    & > :slotted(*) {
      max-width: 36rem;

      align-self: stretch;
      object-fit: contain;
      object-position: top;

      scroll-snap-align: start;
    }
  }
}

.navigation {
  margin-top: var(--spacing-4xl, 3.2rem);
  gap: var(--spacing-xl, 1.6rem);

  &__button {
    width: 4.8rem;
    height: 4.8rem;

    display: grid;
    place-items: center;

    border: 1px solid var(--colors-border-border-secondary, #1F242F);
    background: transparent;
    border-radius: var(--radius-full, 50em);

    transition: all 350ms ease-out;

    &:hover {
      background: var(--colors-background-bg-primary-hover, #1F242F);
    }

    &_right {
      rotate: 180deg;
    }
  }
}

@media only screen and (min-width: 768px) {
  .carousel {
    &__content {
      --block-padding: max(calc((100vw - 128rem) / 2 + 3.2rem), 3.2rem);

      height: 72rem;
      padding: 0 var(--block-padding);
      scroll-padding-left: var(--block-padding);

      & > :slotted(*) {
        max-width: 72rem;
      }
    }
  }
  .navigation {
    &__button {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
}

</style>