<script setup lang="ts">

const emits = defineEmits<{
  navigated: [];
}>();

</script>

<template>
  <div class="menu">

    <container>
      <p class="menu__title">Личности</p>
    </container>

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
                            supporting-text="Первый Президент РФ"/>
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

      <nuxt-link to="/nemzov" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/nemzov-avatar.png"
                            title="Борис Немцов"
                            supporting-text="Политик"/>
        </li>
      </nuxt-link>

      <nuxt-link to="/gadair" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/gadair-avatar.png"
                            title="Егор Гайдар"
                            supporting-text="Политик, экономист"/>
        </li>
      </nuxt-link>

      <nuxt-link to="/seleznev" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/seleznev-avatar.png"
                            title="Геннадий Селезнев"
                            supporting-text="Депутат"/>
        </li>
      </nuxt-link>

      <nuxt-link to="/zuganov" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/zuganov-avatar.png"
                            title="Геннадий Зюганов"
                            supporting-text="Председатель ЦК КПРФ"/>
        </li>
      </nuxt-link>

    </ul>

  </div>
</template>

<style scoped lang="scss">

.menu {
  padding: var(--spacing-xl, 1.6rem) 0 var(--spacing-3xl, 2.4rem) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg, 1.2rem);

  color: var(--colors-text-text-tertiary-600, #94969C);
  @include text-sm(Semibold);

  &__list {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs, .2rem);
  }

  &__item {
    padding: var(--spacing-lg, 1.2rem) var(--container-padding-mobile, 1.6rem);
    list-style: none;
  }
}

</style>