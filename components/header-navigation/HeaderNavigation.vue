<script setup lang="ts">

import { HeaderNavDesktop, HeaderNavMobile } from '#components';

</script>

<template>
  <header class="header-navigation">

    <client-only>
      <Component :is="isMobile ? HeaderNavMobile : HeaderNavDesktop"/>
    </client-only>

  </header>
</template>

<style scoped lang="scss">

.header-navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10000;
}

</style>