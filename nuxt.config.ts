import { emojiToSvg } from "./shared/svgEmoji";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    discogsUser: "",
    discogsToken: "",
    stravaClientId: "",
    stravaClientSecret: "",
    stravaRefreshToken: "",
    duolingoUserId: "",
    spotifyClientId: "",
    spotifyClientSecret: "",
    spotifyRefreshToken: "",
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    inlineRouteRules: true,
  },
  nitro: {
    preset: "bun",
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
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "@nuxt/icon",
  ],
  hooks: {
    // Fix for hanging build step
    close: (nuxt) => {
      if (!nuxt.options._prepare) process.exit();
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  shadcn: {
    componentDir: "./app/components/ui",
  },
});
