<script setup lang="ts">
defineRouteRules({
  ssr: true,
  isr: true,
});
</script>

<template>
  <AboutMeText class="mb-12" />
  <MusicStats class="mb-1" />
  <RecordsStats class="mb-1" />
  <CylcingStats class="mb-1" />
  <Contact class="mt-12" />
</template>
