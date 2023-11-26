<script setup lang="ts">

import {Collapse} from 'vue-collapsed';
import {vOnClickOutside} from '@vueuse/components';


const isDropdownFiguresActive = ref(false);

const {y: topScroll} = useWindowScroll();

const {onShowFigures} = useOnClickShowFigures();


onShowFigures(() => {
  isDropdownFiguresActive.value = true;
});


function foldMenu() {
  isDropdownFiguresActive.value = false;
}

</script>

<template>
  <div :class="['navigation',
             {'navigation_active': isDropdownFiguresActive,
              'navigation_stuck': topScroll > 10}]"
       v-on-click-outside="foldMenu">

    <container class="navigation__container">

      <nav class="navigation__content">
        <Logotype/>

        <nav class="navigation__links">
          <nuxt-link to="/" @click="foldMenu">
            <button-component size="lg" style-mode="link_gray">
              Главная
            </button-component>
          </nuxt-link>

          <button-component size="lg"
                            style-mode="link_gray"
                            @click="isDropdownFiguresActive = !isDropdownFiguresActive">
            Личности
            <template #trailing="{isHovered}">
              <ChevronIcon :color="isHovered
                            ? 'var(--component-colors-components-buttons-tertiary-button-tertiary-fg-hover, #ECECED)'
                            : 'var(--component-colors-components-buttons-tertiary-button-tertiary-fg, #94969C)'"
                           :style="isDropdownFiguresActive ? 'transform: rotateX(180deg)' : ''"/>
            </template>
          </button-component>

          <nuxt-link to="/resources" @click="foldMenu">
            <button-component size="lg" style-mode="link_gray">
              Ресурсы
            </button-component>
          </nuxt-link>
        </nav>
      </nav>

      <button-component size="lg" style-mode="primary_color">
        Поделиться
      </button-component>

    </container>

    <container class="navigation__container">
      <collapse :when="isDropdownFiguresActive" :base-height="0" class="navigation__dropdown">
        <TheDropdownFiguresDesktop @navigated="foldMenu"/>
      </collapse>
    </container>

  </div>
</template>

<style scoped lang="scss">

.navigation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 300ms ease-out;

  &_active, &_stuck {
    background: var(--colors-background-bg-primary, #0C111D);

    & .navigation__container {
      background: var(--colors-background-bg-primary, #0C111D);
    }
  }

  &__container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all 300ms ease-out;
  }

  &__content {
    min-height: 8rem;
    display: flex;
    align-items: center;
    gap: var(--spacing-5xl, 4rem);
  }

  &__links {
    display: flex;
    align-items: center;
    gap: var(--spacing-4xl, 3.2rem);
  }

  &__dropdown {
    width: 100%;
    transition: all 300ms ease-out;
  }
}

</style>