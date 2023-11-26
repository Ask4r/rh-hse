<script setup lang="ts">

</script>

<template>
  <container class="container">

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">Timeline</p>
      <p class="timeline__text">
        Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est
        consectetur vel.
      </p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">Timeline</p>
      <p class="timeline__text">
        Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est
        consectetur vel.
      </p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">Timeline</p>
      <p class="timeline__text">
        Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est
        consectetur vel.
      </p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">Timeline</p>
      <p class="timeline__text">
        Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est
        consectetur vel.
      </p>
    </div>

  </container>
</template>

<style scoped lang="scss">

.container {
  flex-direction: column;
  gap: var(--spacing-5xl, 4rem);
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__point {
    margin-bottom: var(--spacing-xl, 1.6rem);

  }

  &__heading {
    margin-bottom: var(--spacing-xs, .4rem);
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include text-lg(Semibold);
  }

  &__text {
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-md(Regular);
  }
}


</style>