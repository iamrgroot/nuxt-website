<script setup lang="ts">
const route = useRoute();

const title = "Hi! 👋";
const description = "I am (Robert) Groot";
const image = "/seo-image.png";

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: route.fullPath,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div class="max-w-lg mt-8 pt-12">
    <h1 class="flex justify-between mb-4 text-3xl">
      Hi! 👋
      <ToggleDarkIcon />
    </h1>
    <AboutMeText class="mb-12" />
    <RecordsStats />
    <CylcingStats />
  </div>
</template>
