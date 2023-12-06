<script setup lang="ts">

import { HeaderNavDesktop, HeaderNavMobile } from '#components';

</script>

<template>
  <header class="header-navigation">

      <Component :is="isMobile ? HeaderNavMobile : HeaderNavDesktop"/>

  </header>
</template>

<style scoped lang="scss">

.header-navigation {
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>