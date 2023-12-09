<script setup lang="ts">

</script>

<template>
  <container class="container">

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">12 июня 1991 года</p>
      <p class="timeline__text">Борис Ельцин избран Президентом РСФСР.</p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">19-21 1991 года</p>
      <p class="timeline__text">
        Августовский путч. Неудавшаяся попытка ГКЧП перехватить власть в стране, подводившая черту под
        историей СССР.
      </p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">6 ноября 1991 года</p>
      <p class="timeline__text">Указ Бориса Ельцина о запрете КПСС и КП РСФСР.</p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">25-26 декабря <br> 1991 года</p>
      <p class="timeline__text">Отставка М. С. Горбачёва, роспуск Верховного Совета СССР, окончательный распад СССР.</p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">1994-1996 годы</p>
      <p class="timeline__text">
        Первая чеченская война. Боевые действия на территории Чечни и в приграничных регионах Северного
        Кавказа с целью восстановления российской власти на территории Чечни.
      </p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">1992-1993 год</p>
      <p class="timeline__text">
        Отставка первого правительства России и конституционный кризис – противостояние между
        правительством и руководством Верховного Совета и большей частью народных депутатов.
      </p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">1996 год</p>
      <p class="timeline__text">Выборы президента России. С небольшим перевесом победил Ельцин.</p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">17 августа 1998 года</p>
      <p class="timeline__text">
        Экономический кризис. В результате резкого снижения мировых цен на товары топливно-энергетического
        комплекса, кризиса в Юго-Восточной Азии и отклонения антикризисной программы был объявлен технический дефолт.
      </p>
    </div>

    <div class="timeline">
      <MarkerPoint :interaction-disabled="true" class="timeline__point"/>
      <p class="timeline__heading">1999-2000 годы</p>
      <p class="timeline__text">
        Вторая чеченская война. Боевые действия и контртеррористические мероприятия на территории Чечни и
        приграничных регионов Северного Кавказа.
      </p>
    </div>

  </container>
</template>

<style scoped lang="scss">

.container {
  flex-direction: column;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: var(--spacing-5xl, 4rem);
  }

  &__point {
    margin-bottom: var(--spacing-xl, 1.6rem);
  }

  &__heading {
    margin-bottom: var(--spacing-xs, .4rem);
    color: var(--colors-text-text-primary-900, #F5F5F6);
    @include text-lg(Semibold);
  }

  &__text {
    color: var(--colors-text-text-tertiary-600, #94969C);
    @include text-md(Regular);
  }
}

</style>