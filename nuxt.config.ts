// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
  ],
  runtimeConfig: {
    discogsUser: "",
    discogsToken: "",
    stravaClientId: "",
    stravaClientSecret: "",
    stravaRefreshToken: "",
  },
  i18n: {
    vueI18n: "./lib/i18n.ts",
    experimental: { autoImportTranslationFunctions: true },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [{ src: "/darkmode.js" }],
    },
  },
});
