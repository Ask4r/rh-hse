<script setup lang="ts">

import {Collapse} from 'vue-collapsed';
import {vOnClickOutside} from '@vueuse/components';


const isMenuActive = ref(false);
const isFiguresActive = ref(false);

const {y: topScroll} = useWindowScroll();

const {onShowFigures} = useOnClickShowFigures();


onShowFigures(() => {
  isMenuActive.value = true;
});


watch(isMenuActive, (value) => {
  if (value === false)
    foldMenu();
});


function foldMenu() {
  isMenuActive.value = false;
  isFiguresActive.value = false;
}

</script>

<template>
  <nav v-on-click-outside="foldMenu"
       :class="['navigation', {
                'navigation_active': isMenuActive,
                'navigation_stuck': topScroll > 10}]">

    <container class="navigation__container">
      <Logotype/>
      <BurgerMenuButton v-model:is-active="isMenuActive"/>
    </container>

    <collapse as="nav" :when="isMenuActive" class="navigation__dropdown">
      <div :class="['dropdown__content', {
                    'dropdown__content_active': isFiguresActive}]">
        <NavLinkMobile text="Главная"
                       to="/"
                       class="dropdown__item"
                       @click="foldMenu"/>

        <NavDropdownMobile text="Личности"
                           :is-active="isFiguresActive"
                           class="dropdown__item"
                           @click="isFiguresActive = !isFiguresActive"/>

        <collapse :when="isFiguresActive">
          <TheDropdownFiguresMobile class="dropdown__item" @navigated="foldMenu"/>
        </collapse>

        <NavLinkMobile text="Ресурсы"
                       to="/resources"
                       class="dropdown__item"
                       @click="foldMenu"/>

        <div class="dropdown__footer">
          <button-component size="lg" style-mode="primary_color">
            Поделиться
          </button-component>
        </div>
      </div>

    </collapse>

  </nav>
</template>

<style scoped lang="scss">

.navigation {
  width: 100%;
  background: transparent;
  transition: all 300ms ease-out;

  &_active, &_stuck {
    background: var(--colors-background-bg-primary, #0C111D);
    @include shadow-lg;

    & .navigation__dropdown {
      background: var(--colors-background-bg-primary, #0C111D);
    }
  }

  &__container {
    height: 7.2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__dropdown {
    width: 100%;
  }
}

.dropdown {
  &__content {
    width: 100%;
    max-height: 400px;
    padding-top: var(--spacing-3xl, 2.4rem);
    background: #0C111D00;

    overflow-y: auto;
    overscroll-behavior: contain;
    transition: all 350ms ease-out;

    &_active {
      height: 100%;
    }
  }

  &__item {
    margin-bottom: var(--spacing-md, .8rem);
  }

  &__footer {
    margin-top: var(--spacing-3xl, 2.4rem);
    padding: var(--spacing-3xl, 2.4rem) var(--container-padding-mobile, 1.6rem);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-top: 1px solid var(--colors-border-border-secondary, #1F242F);
  }
}

</style>