<script setup lang="ts">
import { TimelinesMobile, InfographicsInteractive } from '#components';
</script>

<template>
  <section class="timeline">

    <container class="timeline__container">
      <HeadingTimeline/>
    </container>

    <container class="timeline__container">
        <Component :is="isMobile ? TimelinesMobile : InfographicsInteractive"/>
    </container>

  </section>
</template>

<style scoped lang="scss">

.timeline {
  padding: var(--spacing-7xl, 6.4rem) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-6xl, 4.8rem);

  &__container {
    justify-content: center;
  }
}

@media only screen and (min-width: 768px) {
  .timeline {
    padding: var(--spacing-7xl, 6.4rem) 0 var(--spacing-9xl, 9.6rem) 0;
    gap: var(--spacing-7xl, 6.4rem);
  }
}

</style>