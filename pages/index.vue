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

const { status: recordsStatus, data: recordsData } = await useFetch(
  "/api/records"
);
const { status: cyclingStatus, data: cyclingData } = await useFetch(
  "/api/cycling"
);
const formattedCyclingData = computed(() =>
  cyclingData.value ? $n(cyclingData.value.rideTotal / 1000, "distance") : null
);
</script>

<template>
  <div class="max-w-lg mt-8">
    <h1 class="text-3xl">
      Hi! 👋
      <ToggleDarkButton />
    </h1>
    <p>
      I'm Robert, a full stack developer at
      <ExternalImageButton
        href="https://paqt.com"
        image-url="https://paqt.com/assets/uploads/fbrfg/favicon-32x32.png"
        text="PAQT.com"
      />
      and I am mainly working with
      <ExternalImageButton
        href="https://laravel.com"
        image-url="https://laravel.com/img/favicon/favicon-32x32.png"
        text="Laravel"
      />
      and
      <ExternalImageButton
        href="https://vuejs.org"
        image-url="https://vuejs.org/logo.svg"
        text="VueJS"
      />
      .
    </p>
    <p>
      <Icon size="24" name="icon-park-solid:collection-records" />
      {{
        recordsStatus === "pending" ? "..." : recordsData?.discogsReleasesCount
      }}
    </p>
    <p>
      <Icon size="24" name="akar-icons:bicycle" />
      {{ cyclingStatus === "pending" ? "..." : formattedCyclingData }}
    </p>
  </div>
</template>
