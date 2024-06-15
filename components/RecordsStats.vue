<script setup lang="ts">
const { status, data } = await useFetch("/api/records");
</script>

<template>
  <div class="flex items-center">
    <Icon
      size="24"
      name="icon-park-solid:collection-records"
      title="Music record icon"
      class="mr-2"
    />
    <span>
      {{ status !== "success" ? "..." : data?.discogsReleasesCount }}
      physical records owned
    </span>
  </div>
</template>
