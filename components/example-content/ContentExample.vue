<script setup lang="ts">

</script>

<template>
  <article class="content">

    <h2 class="heading-sm">Введение</h2>

    <p class="plain-text">
      Период 1990-х – эпоха самых крупных трансформаций российской истории, по совместительству являющаяся одной из самых обсуждаемых. Среди основных явлений периода называются Августовский путч, распад СССР, реформы правительства Ельцина – Гайдара, конституционный кризис, завершившийся силовым разгоном Съезда народных депутатов и Верховного Совета,  приватизация государственной собственности в частные руки, либерализация цен, обесценивание сбережений граждан, денежная реформа 1993 года, становление терроризма и организованной преступности, две чеченские войны, дефолт 1998 года, вестернизация и т. д.
      <br><br>
      Конечно, нельзя ограничить рассмотрение этого периода анализом только реформ, военных конфликтов и экономической политики. Цель нашего исследования – рассмотреть события того времени под призмой политической и социальной деятельности отдельных людей.
    </p>

    <div class="image-and-text">
      <img src="/images/elzin-winner.png"
           alt="Борис Ельцин после Августовского путча и поражения ГКЧП."
           class="image-and-text__image">
      <p class="image-and-text__text">Борис Ельцин после Августовского путча и поражения ГКЧП.</p>
    </div>

    <div class="quote">
      <p class="quote__text">
        Конечно, за эти 5 лет досталось вам. Досталось и мне. Но шагу ни одного назад мы с вами не сделали, и не должны ни одного шага сделать ни при каких обстоятельствах!
      </p>
      <div class="avatar-label">
        <img src="/images/elzin-avatar.png"
             alt="Борис Ельцин"
             class="avatar-label__image">
        <p class="avatar-label__title">Борис Ельцин</p>
        <p class="avatar-label__subtext">Президент РФ с 1991 по 1999 годы</p>
      </div>
    </div>

    <p class="plain-text">
      Действия власти в то время сложно назвать задуманными или запланированными. Многие действия скорее были реакцией на возникающие то тут, то там проблемы. И подобные реактивные действия нельзя рассматривать, не учитывая личность их осуществляющих.
      <br><br>
      90-е не только переплетение различных общественных, экономических и политических процессов. Это период разрушения старых концепций и мифов и постройки новых на их обломках. Подобные изменения оставили ощутимый след на обществе, который заставляет вспоминать и обсуждать это время до сих пор.
    </p>

    <h2 class="heading-xs">Об исследовании</h2>

    <p class="plain-text">
      В этом исследовании нами рассмотрено <p style="color: red;">ДЕВЯТЬ НЕ ЗАБЫТЬ ПОТОМ ПОМЕНЯТЬ АААААААААААААААААААА</p> политических и общественных деятелей, чьи личные качества оказали решающее влияние на развитие событий. 
      <br><br>
      Ход исследования:
      1. Описание исторических личностей 90-х на основе литературы.
      <br>
      2. Проведение социологического опроса.
      <br>
      3. Анализ и сопоставление результатов. Оценка результатов опроса с точки зрения коллективной памяти.
    </p>

    <div class="image-and-text">
      <img src="/images/nemzov-walking.png"
           alt="Борис Ефимович Немцов – российский политический и государственный деятель."
           class="image-and-text__image">
      <p class="image-and-text__text">Борис Ефимович Немцов – российский политический и государственный деятель.</p>
    </div>

    <!--<p class="plain-text">
      Etiam porta justo tempus rutrum lacinia. Morbi pulvinar interdum massa, eget pharetra augue
      eleifend at. Proin non fermentum enim. Nunc at ultrices dui. Etiam aliquam vestibulum arcu, in
      ullamcorper ex lacinia ac. Maecenas sed justo ipsum. Nullam sollicitudin tortor id mattis
      commodo. Nulla ac metus dapibus, molestie urna sit amet, eleifend nisl. Donec scelerisque a
      enim sit amet ultrices.
    </p>-->


    <div class="content-box">

      <h2 class="heading-sm">Заключение</h2>
      <p class="plain-text">
        В этой работе мы объединим два подхода к исследованию этой противоречивой эпохи: рассмотрим основные события 90-х в рамках биографии известных причастных людей и сопоставим это с мнением опрошенных людей.
        <br><br>
        Результаты исследования наглядно представлены в виде данного веб-сайта с удобной навигацией по разделам, соответствующим частям работы.
      </p>

    </div>

  </article>
</template>

<style scoped lang="scss">

.content {
  max-width: var(--paragraph-max-width, 72rem);
}

.heading-sm {
  margin-bottom: 1.6rem;
  color: var(--colors-text-text-primary-900, #F5F5F6);
  @include display-xs(Semibold);
}

.heading-xs {
  margin: 3.2rem 0 1.2rem 0;
  color: var(--colors-text-text-primary-900, #F5F5F6);
  @include text-xl(Semibold);
}

.plain-text {
  white-space: pre-line;
  color: var(--colors-text-text-tertiary-600, #94969C);
  @include text-md(Regular);
}

.image-and-text {
  margin: 4rem 0;

  &__image {
    width: 100%;
    border-radius: var(--radius-xl, 1.2rem);
  }

  &__text {
    margin-top: 1.2rem;
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-sm(Regular);
  }
}

.quote {
  margin: 4rem 0;
  padding: 0.8rem 0 0.8rem 1.6rem;
  border-left: 2px solid var(--colors-foreground-fg-brand-primary-600, #9E77ED);

  &__text {
    margin-bottom: 3.2rem;
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include text-xl(Medium, italic);

    &::before {
      content: '“'
    }

    &::after {
      content: '”'
    }
  }
}

.avatar-label {
  width: max-content;
  display: grid;
  grid-template: "image title" 2.4rem
                 "image subtext" 2.4rem / auto auto;
  gap: 0 1.2rem;

  &__image {
    grid-area: image;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: var(--radius-full, 50em);
  }

  &__title {
    grid-area: title;
    white-space: nowrap;
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include text-md(Semibold);
  }

  &__subtext {
    grid-area: subtext;
    white-space: nowrap;
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-md(Regular);
  }
}

.content-box {
  margin: 3.2rem 0;
  padding: 2.4rem;
  border-radius: var(--radius-2xl, 1.6rem);
  background: var(--colors-background-bg-secondary, #161B26);
}


@media only screen and (min-width: 768px) {

  .heading-sm {
    margin-bottom: 2rem;
    @include display-sm(Semibold);
  }

  .heading-xs {
    margin: 3.2rem 0 1.6rem 0;
    @include display-sm(Semibold);
  }

  .plain-text {
    @include text-lg(Regular);
  }

  .image-and-text {
    margin: 4.8rem 0;

    &__text {
      margin-top: 1.6rem;
    }
  }

  .quote {
    margin: 4.8rem 0;
    padding: 0.8rem 0 0.8rem 2rem;

    &__text {
      @include display-xs(Medium, italic);
    }
  }

  .content-box {
    margin: 4.8rem 0;
    padding: 3.2rem;
  }

}

</style>