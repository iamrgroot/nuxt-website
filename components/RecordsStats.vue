<script setup lang="ts">
const { status, data } = await useFetch("/api/records");
</script>

<template>
  <p>
    <Icon
      size="24"
      name="icon-park-solid:collection-records"
      title="Music record icon"
    />
    {{ status !== "success" ? "..." : data?.discogsReleasesCount }}
    physical records owned
  </p>
</template>
