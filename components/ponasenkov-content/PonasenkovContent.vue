<script setup lang="ts">

</script>

<template>
  <article class="content">

    <h2 class="heading-sm">Introduction</h2>


    <p class="plain-text">Suspendisse eget dictum mi, sed ultricies ex. Duis malesuada purus ante, id ultrices dui
                          ullamcorper sed. Aenean a eros ut nibh blandit iaculis. Integer venenatis sed lectus id
                          elementum. Integer in dapibus quam. Aenean pulvinar lorem dui, vitae consequat est vestibulum
                          id. Integer in ex ac lectus venenatis rhoncus non et elit. <br><br>
                          Quisque consequat quis nulla
                          sed rhoncus. Nulla viverra et tellus in congue. Maecenas vitae lorem id lorem tincidunt
                          dignissim eget sed tortor. Morbi ut interdum eros. Orci varius natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Maecenas nec est sodales, pretium mi vel, placerat
                          neque.</p>


    <div class="image-and-text">
      <img
        src="https://static.78.ru/images/uploads/1686132082372.jpg"
        alt="Понасенков задумал открыть «музей завистливых идиотов»."
        class="image-and-text__image"
      >
      <p class="image-and-text__text">Понасенков задумал открыть «музей завистливых идиотов».</p>
    </div>


    <div class="quote">
      <p class="quote__text">Никакой драки не было, мой приятель его просто оттолкнул, а тот, поскольку был пьян,
                             попятился и, вероятно, упал.</p>
      <div class="avatar-label">
        <img
          src="https://img5tv.cdnvideo.ru/webp/shared/files/202105/1_1322225.jpg"
          alt="Евгений Понасенков"
          class="avatar-label__image"
        >
        <p class="avatar-label__title">Евгений Понасенков</p>
        <p class="avatar-label__subtext">Маэстро</p>
      </div>
    </div>


    <p class="plain-text">Aliquam feugiat iaculis lorem, id sagittis lectus pretium sit amet. Etiam finibus, ex et
                          imperdiet hendrerit, ipsum risus vestibulum ante, non porttitor tortor velit vitae nibh. In
                          porta lacinia erat at varius. <br><br>
                          In pellentesque, lacus a luctus mollis, tortor neque
                          interdum enim, nec gravida ipsum sem sit
                          amet ipsum. Nam eu nibh ex. Sed euismod, mauris mattis malesuada tincidunt, nunc justo posuere
                          quam, sit amet pharetra enim diam a ante. Nam condimentum odio ex, cursus fermentum justo
                          convallis at. <br><br>
                          Donec sit amet purus vitae ligula faucibus commodo laoreet sed sapien.
                          Cras in mattis justo. Nullam mattis mi a ligula blandit vestibulum. Class aptent taciti
                          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>


    <h2 class="heading-xs">О важном</h2>


    <p class="plain-text">Etiam porta justo tempus rutrum lacinia. Morbi pulvinar interdum massa, eget pharetra augue
                          eleifend at. Proin non fermentum enim. Nunc at ultrices dui. Etiam aliquam vestibulum arcu, in
                          ullamcorper ex lacinia ac. Maecenas sed justo ipsum. Nullam sollicitudin tortor id mattis
                          commodo. Nulla ac metus dapibus, molestie urna sit amet, eleifend nisl. Donec scelerisque a
                          enim sit amet ultrices. <br><br>
                          1. Curabitur eleifend semper egestas. Nullam varius, odio nec lacinia
                          euismod, augue leo sollicitudin sem, nec dignissim lectus risus vitae urna.<br>
                          2. Aenean eleifend pellentesque libero, eget pharetra nibh.<br>
                          3. Maecenas lacinia, dui et luctus ornare, ex ex iaculis felis, sit amet ornare odio risus
                          eget purus.</p>


    <div class="image-and-text">
      <img
        src="https://cdn.spbdnevnik.ru/uploads/block/image/796936/__medium___medium___medium___medium_2.jpg.jpg.jpg.jpg.jpg"
        alt="Историк Понасенков рассказал подробности смертельной драки."
        class="image-and-text__image"
      >
      <p class="image-and-text__text">Историк Понасенков рассказал подробности смертельной драки.</p>
    </div>


    <p class="plain-text">Etiam porta justo tempus rutrum lacinia. Morbi pulvinar interdum massa, eget pharetra augue
                          eleifend at. Proin non fermentum enim. Nunc at ultrices dui. Etiam aliquam vestibulum arcu, in
                          ullamcorper ex lacinia ac. Maecenas sed justo ipsum. Nullam sollicitudin tortor id mattis
                          commodo. Nulla ac metus dapibus, molestie urna sit amet, eleifend nisl. Donec scelerisque a
                          enim sit amet ultrices.</p>


    <div class="content-box">

      <h2 class="heading-sm">Заключение</h2>
      <p class="plain-text">Curabitur convallis vitae dolor eu aliquam. Phasellus convallis congue mi vitae porttitor.
                            Maecenas viverra dapibus justo, eu vulputate orci faucibus tempor. Morbi sit amet finibus
                            velit, et viverra sem. Etiam id gravida metus. Cras sagittis orci et rutrum iaculis.
                            Maecenas
                            facilisis tortor et suscipit iaculis.<br><br>
                            Vivamus at varius urna. Nam ultricies lobortis eros vitae cursus. Cras ullamcorper enim
                            eros,
                            et ultricies nunc molestie id. Nam laoreet ullamcorper neque, in aliquam mi sollicitudin
                            vel.
                            Mauris sagittis, ante eu feugiat commodo, lorem nisl fringilla turpis, facilisis ultricies
                            nisl metus a lorem. Curabitur faucibus ante at risus ultricies dignissim.</p>

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