<script setup lang="ts">

const {triggerShowFigures} = useOnClickShowFigures();

</script>

<template>
  <section class="section">

    <container class="heading-container">
      <HeadingAndSupportingText subheading="Деятели"
                                heading="Исторические личности 1990х"
                                supporting-text="Люди изменившие российскую историю и повлиявшие на ее ход."/>
        <button-component size="xl"
                          style-mode="primary_color"
                          @click="triggerShowFigures">
          Смотреть всех
        </button-component>
    </container>

    <container>
      <div class="figures-list">
        <nuxt-link to="/">
          <FigureCard image="/images/nemzov-bw.png"
                      subheading="Политик"
                      heading="Борис Немцов"
                      supportingText="Российский политический и государственный деятель, активист, автор нескольких докладов о масштабах коррупции в России."
                      :author="{ image: '/avatars/lolitron.png',
                             title: 'Влад Овчаров',
                             supportingText: 'Pussy Destroyer' }"/>
        </nuxt-link>
        <nuxt-link to="/">
          <FigureCard image="/images/elzin-peace.png"
                      subheading="Президент РФ"
                      heading="Борис Ельцин"
                      supportingText="Первый всенародно избранный Президент Российской Федерации."
                      :author="{ image: '/avatars/lolitron.png',
                                 title: 'Влад Овчаров',
                                 supportingText: 'Pussy Destroyer' }"/>
        </nuxt-link>
        <nuxt-link to="/">
          <FigureCard image="/images/berezovsky-office.png"
                      subheading="Предприниматель"
                      heading="Борис Березовский"
                      supportingText="Учёный-математик, физик, автор ряда научных трудов и монографий."
                      :author="{ image: '/avatars/lolitron.png',
                                 title: 'Влад Овчаров',
                                 supportingText: 'Pussy Destroyer' }"/>
        </nuxt-link>
      </div>
    </container>

  </section>
</template>

<style scoped lang="scss">

.section {
  padding: var(--spacing-9xl, 9.6rem) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-7xl, 6.4rem);
}

.heading-container {
  justify-content: space-between;
  flex-direction: column;
}


.figures-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6xl, 4.8rem);

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-4xl, 3.2rem);
  }
}

@media only screen and (min-width: 768px) {
  .figures-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-4xl, 3.2rem);
  }

  .heading-container {
    flex-direction: row;
  }
}
</style>