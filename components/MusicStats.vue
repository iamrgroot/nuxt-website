<script setup lang="ts">
const { status, data } = await useFetch("/api/music");
</script>

<template>
  <p>
    <Icon size="24" name="mdi:spotify" title="Spotify icon" />
    Lately listening to
    <template v-if="status === 'pending'">...</template>
    <a v-else-if="data" class="underline" :href="data.external_urls.spotify">{{
      data.name
    }}</a>
  </p>
</template>
