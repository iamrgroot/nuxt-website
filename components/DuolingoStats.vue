<script setup lang="ts">
const { status, data } = await useFetch("/api/duolingo");
</script>

<template>
  <div class="flex items-center">
    <Icon
      size="24"
      name="simple-icons:duolingo"
      title="Duolingo icon"
      class="mr-2"
    />
    <span>
      Duolingo streak of
      {{ status !== "success" ? "..." : data?.streak }}
      days
    </span>
  </div>
</template>
