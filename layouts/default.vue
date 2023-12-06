<script setup lang="ts">

const isLoading = ref(true);


onMounted(() => {
  window.scrollTo({top: 0});

  isLoading.value = false;
});

</script>

<template>

  <LoadingScreen v-if="isLoading"/>

  <article v-else class="page">

    <HeaderNavigation class="page__navbar"/>

    <main class="page__main">
      <suspense>
        <template #default>
          <slot/>
        </template>
        <template #fallback>
          <LoadingScreen/>
        </template>
      </suspense>
    </main>

    <FooterSection class="page__footer"/>

  </article>

</template>

<style scoped lang="scss">

.page {
  --header-desktop: 8rem;
  --header-mobile: 7.2rem;

  padding-top: var(--header-mobile, 7.2rem);
  display: grid;
  grid-template: "header" auto
                 "main" auto
                 "footer" auto / 100%;

  scroll-behavior: smooth;

  &__navbar {
    width: 100dvw;
    grid-area: header;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  }

  &__main {
    grid-area: main;
  }

  &__footer {
    grid-area: footer;
  }
}

@media only screen and (min-width: 768px) {
  .page {
    padding-top: var(--header-desktop, 8rem);
  }
}

</style>