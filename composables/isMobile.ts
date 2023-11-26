const { width } = useWindowSize();

export const isMobile = computed(() => {
  return width.value <= 768;
});
