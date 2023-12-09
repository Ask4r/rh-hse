<script setup lang="ts">

withDefaults(defineProps<{
  interactionDisabled?: boolean;
}>(), {
  interactionDisabled: false,
})
;

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="40"
       height="40"
       viewBox="0 0 40 40"
       fill="none"
       :class="['marker', {'marker__interactive': !interactionDisabled}]">
    <circle id="outer"
            opacity="0.1"
            cx="20"
            cy="20"
            r="20"
            fill="var(--colors-foreground-fg-brand-secondary-500, #9E77ED)"/>
    <circle id="middle"
            opacity="0.2"
            cx="20"
            cy="20"
            r="12"
            fill="var(--colors-foreground-fg-brand-secondary-500, #9E77ED)"/>
    <circle id="inner"
            cx="20"
            cy="20"
            r="4"
            fill="var(--colors-foreground-fg-brand-secondary-500, #9E77ED)"/>
  </svg>
</template>

<style scoped lang="scss">

.marker {
  overflow: visible;

  & #outer {
    transition: all 300ms ease-out;
  }

  & #middle {
    transition: all 300ms ease-out;
  }

  &__interactive {
    cursor: pointer;

    &:hover {
      & #outer {
        r: 24;
      }

      & #middle {
        r: 14;
      }
    }
  }

}

</style>