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
                <nuxt-link to="/nemzov">
                    <FigureCard image="/images/nemzov-bw.png"
                                subheading="Политик"
                                heading="Борис Немцов"
                                supportingText="Российский политический и государственный деятель, активист, автор нескольких докладов о масштабах коррупции в России."
                                :author="{ image: '/avatars/dominus.png',
                                         title: 'Часовских Никита',
                                         supportingText: 'Сделал в последний день' }"/>
                </nuxt-link>
                <nuxt-link to="/elzin">
                    <FigureCard image="/images/elzin-peace.png"
                                subheading="Президент РФ"
                                heading="Борис Ельцин"
                                supportingText="Первый всенародно избранный Президент Российской Федерации."
                                :author="{ image: '/avatars/rabotaunakreml.png',
                                         title: 'Ищенко Георгий',
                                         supportingText: 'Rabotaetnakreml' }"/>
                </nuxt-link>
                <nuxt-link to="/gadair">
                    <FigureCard image="/images/gadair-avatar.png"
                                subheading="Политик, экономист"
                                heading="Егор Гайдар"
                                supportingText="Экономист, либеральный реформатор. Один из руководителей перехода от плановой экономики к рыночной, либерализации цен."
                                :author="{ image: '/avatars/andre-yat.png',
                                         title: 'Носов Андрей',
                                         supportingText: 'Как так' }"/>
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