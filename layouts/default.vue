<script setup lang="ts">

onMounted(() => {
  window.scrollTo({top: 0});
});

</script>

<template>
  <article class="page">

    <HeaderNavigation class="page__navbar"/>

    <main class="page__main">

      <suspense>
        <template #default>
          <slot></slot>
        </template>
        <template #fallback>
          <p>LOADING...</p>
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
    grid-area: header;
    position: fixed;
    top: 0;
    left: 0;
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