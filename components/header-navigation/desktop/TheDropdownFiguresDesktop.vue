<script setup lang="ts">

const emits = defineEmits<{
  navigated: [];
}>();

</script>

<template>
  <div class="menu">

    <p class="menu__title">Личности</p>

    <ul class="menu__list">
      <nuxt-link to="/gorbachev" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/gorbachev-avatar.png"
                            title="Михаил Горбачев"
                            supporting-text="Реформатор"/>
        </li>
      </nuxt-link>

      <nuxt-link to="/elzin" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/elzin-avatar.png"
                            title="Борис Ельцин"
                            supporting-text="Первый президент РФ"/>
        </li>
      </nuxt-link>

      <nuxt-link to="/chubays" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/chubays-avatar.png"
                            title="Анатолий Чубайс"
                            supporting-text="Экономист, карьерист"/>
        </li>
      </nuxt-link>

      <nuxt-link to="/khodorkovskiy" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/khodorkovskiy-avatar.png"
                            title="Михаил Ходорковский"
                            supporting-text="Бизнесмен"/>
        </li>
      </nuxt-link>
    </ul>

  </div>
</template>

<style scoped lang="scss">

.menu {
  padding: var(--spacing-4xl, 3.2rem) 0;

  &__title {
    margin-bottom: var(--spacing-lg, 1.2rem);
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-sm(Semibold);
  }

  &__list {
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));
    gap: var(--spacing-xs, .4rem) var(--spacing-3xl, 2.4rem);
  }

  &__item {
    width: max-content;
    padding: var(--spacing-lg, 1.2rem);
    list-style: none;
  }
}

</style>