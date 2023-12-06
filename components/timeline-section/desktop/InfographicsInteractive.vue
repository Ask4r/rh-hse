<script setup lang="ts">

</script>

<template>
  <div class="map">

    <VectorMap class="map__vector"/>

    <tooltip-marker class="map__marker map__marker_1">
      <template #heading>12 июня 1991 года</template>
      <template #text>Борис Ельцин избран Президентом РСФСР.</template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_2">
      <template #heading>19-21 1991 года</template>
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
      <template #heading>1994-1996 годы</template>
      <template #text>
        Первая чеченская война. Боевые действия на территории Чечни и в приграничных регионах Северного
        Кавказа с целью восстановления российской власти на территории Чечни.
      </template>
    </tooltip-marker>

    <tooltip-marker class="map__marker map__marker_6">
      <template #heading>1992-1993 год</template>
      <template #text>
        Отставка первого правительства России и конституционный кризис – противостояние между
        правительством и руководством Верховного Совета и большей частью народных депутатов. Несколько вооруженных
        столкновений с многочисленными жертвами.
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

  &__vector {
    width: 100%;
    height: 100%;
  }

  &__marker {
    position: absolute;
    translate: -50% -50%;

    &_1 {
      top: 64%;
      left: 8%;
    }

    &_2 {
      top: 66%;
      left: 21%;
      z-index: 100;
    }

    &_3 {
      top: 50%;
      left: 31%;
    }

    &_4 {
      top: 71%;
      left: 41%;
      z-index: 100;
    }

    &_5 {
      top: 40%;
      left: 44%;
    }

    &_6 {
      top: 66%;
      left: 55%;
      z-index: 100;
    }

    &_7 {
      top: 38%;
      left: 58%;
    }

    &_8 {
      top: 55%;
      left: 69%;
    }

    &_9 {
      top: 49%;
      left: 82%;
    }
  }
}


</style>