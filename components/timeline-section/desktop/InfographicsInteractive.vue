<script setup lang="ts">

</script>

<template>
  <div class="map">

    <VectorMap class="map__vector"/>

    <TooltipMarker
      heading="Timeline"
      text="Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est consectetur vel."
      class="map__marker map__marker_first"
    />

    <TooltipMarker
      heading="Timeline"
      text="Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est consectetur vel."
      class="map__marker map__marker_second"
    />

    <TooltipMarker
      heading="Timeline"
      text="Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est consectetur vel."
      class="map__marker map__marker_third"
    />

    <TooltipMarker
      heading="Timeline"
      text="Mauris interdum orci mi, ac ultrices turpis varius vitae. Phasellus fermentum massa sapien, et facilisis est consectetur vel."
      class="map__marker map__marker_fourth"
    />

  </div>
</template>

<style scoped lang="scss">

.map {
  width: 100%;
  max-width: 102.4rem;
  position: relative;
  aspect-ratio: 1024 / 560;
  display: grid;
  place-items: center;

  &__vector {
    width: 100%;
    height: 100%;
  }

  &__marker {
    position: absolute;
    translate: -50% -50%;

    &_first {
      top: 60%;
      left: 10%;
    }

    &_second {
      top: 50%;
      left: 24%;
    }

    &_third {
      top: 70%;
      left: 40%;
    }

    &_fourth {
      top: 52%;
      left: 73%;
    }
  }
}


</style>