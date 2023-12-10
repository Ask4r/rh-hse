<script setup lang="ts">

</script>

<template>
  <div class="map">

    <tooltip-marker class="map__marker map__marker_1">
      <template #heading>12 июня 1991 года</template>
      <template #text>Борис Ельцин избран Президентом РСФСР.</template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_2">
      <template #heading>19-21 августа <br> 1991 года</template>
      <template #text>
        Августовский путч. Неудавшаяся попытка ГКЧП перехватить власть в стране, подводившая черту под
        историей СССР.
      </template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_3">
      <template #heading>6 ноября 1991 года</template>
      <template #text>Указ Бориса Ельцина о запрете КПСС и КП РСФСР.</template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_4">
      <template #heading>25-26 декабря <br> 1991 года</template>
      <template #text>Отставка М. С. Горбачёва, роспуск Верховного Совета СССР, окончательный распад СССР.</template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_5">
      <template #heading>1992-1993 год</template>
      <template #text>
        Отставка первого правительства России и конституционный кризис – противостояние между
        правительством и руководством Верховного Совета и большей частью народных депутатов.
      </template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_6">
      <template #heading>1994-1996 годы</template>
      <template #text>
        Первая чеченская война. Боевые действия на территории Чечни и в приграничных регионах Северного
        Кавказа с целью восстановления российской власти на территории Чечни.
      </template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_7">
      <template #heading>1996 год</template>
      <template #text>Выборы президента России. С небольшим перевесом победил Ельцин.</template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_8">
      <template #heading>17 августа 1998 года</template>
      <template #text>
        Экономический кризис. В результате резкого снижения мировых цен на товары топливно-энергетического
        комплекса, кризиса в Юго-Восточной Азии и отклонения антикризисной программы был объявлен технический дефолт.
      </template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_9">
      <template #heading>1999-2000 годы</template>
      <template #text>
        Вторая чеченская война. Боевые действия и контртеррористические мероприятия на территории Чечни и
        приграничных регионов Северного Кавказа.
      </template>
    </tooltip-marker>

  </div>
</template>

<style scoped lang="scss">

.map {
  width: 100%;
  max-width: 102.4rem;
  position: relative;
  aspect-ratio: 1024 / 560;
  display: grid;
  place-items: center;
  background: url("/assets/images/pattern-map.png") center / contain no-repeat;


  &__marker {
    position: absolute;
    translate: -50% -50%;

    &_1 {
      top: 58%;
      left: 7%;
    }

    &_2 {
      top: 64%;
      left: 16%;
    }

    &_3 {
      top: 65%;
      left: 27%;
      z-index: 30;
    }

    &_4 {
      top: 56%;
      left: 38%;
      z-index: 20;
    }

    &_5 {
      top: 46%;
      left: 46%;
      z-index: 10;
    }

    &_6 {
      top: 39%;
      left: 56%;
    }

    &_7 {
      top: 38%;
      left: 67%;
    }

    &_8 {
      top: 44%;
      left: 77%;
    }

    &_9 {
      top: 52%;
      left: 86%;
    }
  }
}


</style>