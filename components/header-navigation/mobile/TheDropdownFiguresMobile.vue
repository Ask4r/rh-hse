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
      <nuxt-link to="/ponasenkov" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/ponasenkov-avatar.png"
                            title="Евгений Понасенков"
                            supporting-text="Маэстро"/>
        </li>
      </nuxt-link>
      <nuxt-link to="/ponasenkov" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/ponasenkov-avatar.png"
                            title="Евгений Понасенков"
                            supporting-text="Маэстро"/>
        </li>
      </nuxt-link>
      <nuxt-link to="/berezovsky" @click="emits('navigated')">
        <li class="menu__item">
          <AvatarLabelGroup image="/images/berezovsky-office.png"
                            title="Борис Березовский"
                            supporting-text="Предприниматель"/>
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