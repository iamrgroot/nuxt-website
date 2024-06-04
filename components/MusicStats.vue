<script setup lang="ts">
const { status, data } = await useFetch("/api/music");
</script>

<template>
  <p>
    <TextTooltip>
      <template #trigger>
        <span>
          <Icon size="24" name="mdi:spotify" title="Spotify icon" />
          <template v-if="status === 'pending'">...</template>
          <a
            v-else-if="data"
            class="underline ml-1"
            :href="data.external_urls.spotify"
            >{{ data.name }}</a
          >
        </span>
      </template>
      <template #text> Most listened artist </template>
    </TextTooltip>
  </p>
</template>
