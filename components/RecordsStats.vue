<script setup lang="ts">
const { status, data } = await useFetch("/api/records");
</script>

<template>
  <p>
    <TextTooltip>
      <template #trigger>
        <span>
          <Icon
            size="24"
            name="icon-park-solid:collection-records"
            title="Music record icon"
          />
          {{ status === "pending" ? "..." : data?.discogsReleasesCount }}
        </span>
      </template>
      <template #text> Number of records owned </template>
    </TextTooltip>
  </p>
</template>
