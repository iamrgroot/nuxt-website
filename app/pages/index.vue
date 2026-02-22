<script setup lang="ts">
defineRouteRules({
  ssr: true,
  isr: true,
});
</script>

<template>
  <AboutMeText class="mb-12" />
  <MusicStats class="mb-2" />
  <RecordsStats class="mb-2" />
  <!-- <DuolingoStats class="mb-2" /> -->
  <CyclingStats class="mb-2" />
  <RunningStats class="mb-2" />
  <SwimmingStats class="mb-2" />
  <Contact class="mt-12" />
  <ClicksStats class="mt-2" />
</template>
