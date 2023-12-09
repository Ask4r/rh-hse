<script setup lang="ts">

</script>

<template>
  <header class="header">
    <container>
      <div class="heading">
        <p class="heading__subheading">01 января 1990</p>
        <h1 class="heading__heading-text">Евгений Понасенков</h1>
        <p class="heading__supporting-text">Автор печатных работ по теме истории наполеоновских войн, вызвавших
          негативную реакцию со стороны научно-исторического сообщества.</p>
      </div>
    </container>

    <header-carousel>
      <img src="https://ponasenkov.net/wp-content/uploads/2020/03/e-ponasenkov-biography.jpg"
           alt="Евгений Понасенков">
      <img src="https://cdn.iportal.ru/news/2015/99/preview/f132a1099e621dcf6e5a2c884bfc0d3f0a65407b_666_444_c.jpg"
           alt="Евгений Понасенков">
      <img
          src="https://moslenta.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2023/07/15/08/6008249/6f1a9646660ad5893dfff99e6818c3df3a173009.jpg"
          alt="Евгений Понасенков">
      <img src="https://www.vokrug.tv/pic/person/2/6/3/c/263cc68e33b8a67a210d131119bea6c2.jpg"
           alt="Евгений Понасенков">
      <img src="https://bloknot.ru/wp-content/uploads/2023/04/Ponasenov_2021_1l.jpg"
           alt="Евгений Понасенков">
    </header-carousel>

  </header>
</template>

<style scoped lang="scss">

.header {
  padding: var(--spacing-7xl, 6.4rem) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6xl, 4.8rem);
}

.heading {
  max-width: 76.8rem;

  &__subheading {
    margin-bottom: var(--spacing-lg, 1.2rem);
    color: var(--colors-text-text-brand-secondary-700, #CECFD2);
    @include text-sm(Semibold);
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

@media only screen and (min-width: 768px) {

}

</style>