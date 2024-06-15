<script setup lang="ts">
const { status, data } = await useFetch("/api/music");
</script>

<template>
  <div class="flex items-center">
    <Icon size="24" name="mdi:spotify" title="Spotify icon" class="mr-2" />
    <span>
      Lately listening to
      <span v-if="status !== 'success'">...</span>
      <template v-else-if="data" v-for="(item, index) in data">
        <a class="underline" :href="item.external_urls.spotify" target="_blank">
          {{ item.name }}
        </a>
        <span v-if="index < data.length - 1">, </span>
      </template>
    </span>
  </div>
</template>
