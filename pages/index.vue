<script setup lang="ts">
defineRouteRules({
  ssr: true,
  isr: true,
});
</script>

<template>
  <AboutMeText class="mb-12" />
  <RecordsStats />
  <CylcingStats />
  <MusicStats />
  <Contact class="mt-12" />
</template>
