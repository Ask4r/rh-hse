// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/main-logo.svg' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
      title: 'Russian history',
    },
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/reset.css',
    '@/assets/css/spacing.css',
    '@/assets/css/colors.css',
  ],
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
  ],
  plugins: [
    // '@vueuse/core',
  ],
  spaLoadingTemplate: 'spa-loading-template.html',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/typography.scss" as *;'
            + '@use "@/assets/scss/effects.scss" as *;',
        },
      },
    },
  },
});
