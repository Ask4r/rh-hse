<script setup lang="ts">

defineProps<{
  image: string;
  title: string;
  supportingText?: string;
}>();
</script>

<template>
  <div class="avatar-group">

    <img :src="image" :alt="title" class="avatar-group__image">

    <div class="avatar-group__description">
      <p class="header">{{title}}</p>
      <p v-if="supportingText" class="supporting-text">{{supportingText}}</p>
    </div>

  </div>
</template>

<style scoped lang="scss">

.avatar-group {
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-xl, 1.6rem);

  &__image {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: var(--radius-full);
    object-fit: cover;
    object-position: center;
  }

  &__description {
    display: flex;
    flex-direction: column;
  }
}

.header {
  color: var(--colors-text-text-primary-900, #F5F5F6);
  display: block;
  @include text-md(Semibold);
}

.supporting-text {
  color: var(--colors-text-text-tertiary-600, #94969C);
  display: block;
  @include text-sm(Regular);
}

</style>