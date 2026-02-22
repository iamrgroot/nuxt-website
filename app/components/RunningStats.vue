<script setup lang="ts">
const { status, data } = await useFetch("/api/workouts");

const formattedRunningData = computed(() =>
  data.value ? $n(data.value.runTotal / 1000, "distance") : null,
);
</script>

<template>
  <div class="flex items-center">
    <Icon
      size="24"
      name="mingcute:run-fill"
      title="Running icon"
      class="min-w-fit mr-2"
    />
    <span>
      {{ status !== "success" ? "..." : formattedRunningData }}
      ran
    </span>
  </div>
</template>
