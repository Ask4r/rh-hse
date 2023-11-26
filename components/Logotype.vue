<script setup lang="ts">

</script>

<template>
  <div class="logotype">
    <LogoIcon class="logotype__logo"/>
    <p class="logotype__brand-name">
      RUSSIAN<span class="logotype__brand-name_accent">HISTORY</span>
    </p>
  </div>
</template>

<style scoped lang="scss">

.logotype {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__logo {
    width: 3.2rem;
    height: 3.2rem;
  }

  &__brand-name {
    color: var(--colors-text-text-primary-900, #F5F5F6);
    user-select: none;
    @include text-md(Semibold);

    &_accent {
      color: var(--colors-text-text-tertiary-600, #94969C);
    }
  }
}

</style>