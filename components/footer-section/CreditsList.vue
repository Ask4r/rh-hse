<script setup lang="ts">

</script>

<template>
  <container>
    <div class="credits">

      <div class="credits__column">
        <p class="credits__heading">Верстка</p>

        <nav class="credits__links">
          <nuxt-link to="https://t.me/pvgfs">
            <button-component size="lg" style-mode="link_gray">
              Караск Александр
            </button-component>
          </nuxt-link>
          <nuxt-link to="https://t.me/lolitron">
            <button-component size="lg" style-mode="link_gray">
              Овчаров Влад
            </button-component>
          </nuxt-link>
        </nav>
      </div>

      <div class="credits__column">
        <p class="credits__heading">Таймлайн</p>

        <nav class="credits__links">
          <nuxt-link to="https://t.me/rabotaunakreml">
            <button-component size="lg" style-mode="link_gray">
              Ищенко Георгий
            </button-component>
          </nuxt-link>
          <nuxt-link to="https://t.me/terbium65">
            <button-component size="lg" style-mode="link_gray">
              Булгаков Тимофей
            </button-component>
          </nuxt-link>
        </nav>
      </div>

      <div class="credits__column">
        <p class="credits__heading">Исследование</p>

        <nav class="credits__links">
          <nuxt-link to="https://t.me/andre_yaT">
            <button-component size="lg" style-mode="link_gray">
              Носов Андрей
            </button-component>
          </nuxt-link>
          <nuxt-link to="https://t.me/dominus_s">
            <button-component size="lg" style-mode="link_gray">
              Часовских Никита
            </button-component>
          </nuxt-link>
        </nav>
      </div>

      <div class="credits__column">
        <p class="credits__heading">Дизайн</p>

        <nav class="credits__links">
          <nuxt-link to="https://t.me/pvgfs">
            <button-component size="lg" style-mode="link_gray">
              Караск Александр
            </button-component>
          </nuxt-link>
        </nav>
      </div>

    </div>
  </container>
</template>

<style scoped lang="scss">

.credits {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: var(--spacing-4xl, 3.2rem);

  &__column {
    width: min-content;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl, 1.6rem);
  }

  &__heading {
    color: var(--colors-text-text-quarterary-500, #94969C);
    @include text-sm(Semibold);
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-lg, 1.2rem);

    & * {
      text-align: left;
    }
  }
}

@media only screen and (min-width: 768px) {
  .credits {
    grid-template-columns: repeat(auto-fit, minmax(16.8rem, 1fr));
    justify-content: space-between;

    &__column {
      width: max-content;
    }
  }
}

</style>