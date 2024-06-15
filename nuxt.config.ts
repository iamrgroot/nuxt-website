import { emojiToSvg } from "./utils/svgEmoji";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
    storage: {
      file: {
        driver: "fsLite",
        base: "./server/storage",
      },
    },
  },
  experimental: {
    inlineRouteRules: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
  ],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    discogsUser: "",
    discogsToken: "",
    stravaClientId: "",
    stravaClientSecret: "",
    stravaRefreshToken: "",
    duolingoUserId: "",
    spotifyClient: "",
    spotifyAccessToken: "",
    spotifyRefreshToken: "",
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
      link: [{ rel: "icon", href: emojiToSvg("👋") }],
    },
  },
});
