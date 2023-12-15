<script setup lang="ts">

</script>

<template>
    <article>

        <header class="header">
            <container>
                <div class="heading">
                    <p class="heading__subheading">Ресурсы проекта</p>
                    <h1 class="heading__heading-text">Ссылки на источники</h1>
                    <p class="heading__supporting-text">
                        Ссылки на литературу, фильмы, видео и медиа источники информации, использованные, во время
                        исследовательской работы над проектом.
                    </p>
                </div>
            </container>
        </header>

        <div class="main-content">
            <container class="container">
                <article class="content">

                    <h3 class="text-heading block-first-child">Литература</h3>

                    <ol class="plain-text text-list block-last-child">
                        <li>Андрей Колесников. «Неизвестный Чубайс. Страницы из биографии»</li>
                        <li>Б. Минаев. Ельцин. — М.: Молодая гвардия, 2010. — (ЖЗЛ).</li>
                        <li>Хлевнюк О. В. День новых цен. Кризис снабжения и российское общество на рубеже 1980–1990-х
                            гг. / Российская история. — 2019. — № 2. — С. 52-70.
                        </li>
                        <li>Ясин Е. Г. Памяти Егора Гайдара / Экономический журнал Высшей школы экономики. — 2010. — Т.
                            14. — № 1. — С. 3-11.
                        </li>
                        <li>Королева И. В. Либерализация цен / Лесной вестник. — 2001. — № 4. — С. 134-137.</li>
                        <li>Михаил Горбачев: личность и политика главы государства глазами современников //
                            <nuxt-link to="https://elar.urfu.ru/bitstream/10995/39741/1/qr_1_2016_07.pdf" class="link">
                                https://elar.urfu.ru/bitstream/10995/39741/1/qr_1_2016_07.pdf
                            </nuxt-link>
                        </li>
                    </ol>

                </article>
            </container>
        </div>

        <SectionDivider/>

    </article>
</template>

<style scoped lang="scss">

@import "@/assets/scss/page-content";

.header {
  padding: var(--spacing-9xl, 9.6rem) 0;
}

.heading {
  max-width: 76.8rem;
  text-align: center;

  &__subheading {
    margin-bottom: var(--spacing-lg, 1.2rem);
    color: var(--colors-text-text-brand-secondary-700, #CECFD2);
    @include text-md(Semibold);
  }

  &__heading-text {
    margin-bottom: var(--spacing-xl, 1.6rem);
    color: var(--colors-text-text-primary-900, #F5F5F6);

    @include display-md(Semibold);
  }

  &__supporting-text {
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-lg(Regular);
  }
}


.container {
  justify-content: center;
}

.content {
  max-width: var(--paragraph-max-width, 72rem);
  padding: var(--spacing-9xl, 9.6rem) 0;
}

.text-heading {
  margin: 3.2rem 0 1.6rem 0;
  color: var(--colors-text-text-primary-900, #F5F5F6);
  @include display-sm(Semibold);
}

.link {
  color: var(--component-colors-components-buttons-primary-button-primary-bg, #7F56D9);
  word-break: break-word;

  :hover {
    color: var(--component-colors-components-buttons-primary-button-primary-bg-hover, #6941C6);
  }
}

@media only screen and (min-width: 768px) {
  .header {
    padding: var(--spacing-7xl, 6.4rem) 0;
  }

  .heading {
    &__heading-text {
      margin-bottom: var(--spacing-3xl, 2.4rem);
      @include display-xl(Semibold);
    }

    &__supporting-text {
      @include text-xl(Regular);
    }
  }

  .content {
    padding: var(--spacing-7xl, 6.4rem) 0;
  }

  .text-heading {
    margin: var(--spacing-5xl, 4rem) 0 var(--spacing-2xl, 2rem) 0;
    @include display-sm(Semibold);
  }
}

</style>
