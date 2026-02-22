<script setup lang="ts">
const { status, data } = await useFetch("/api/workouts");

const formattedSwimmingData = computed(() =>
  data.value ? $n(data.value.swimTotal / 1000, "distance") : null,
);
</script>

<template>
  <div class="flex items-center">
    <Icon
      size="24"
      name="fa7-solid:swimmer"
      title="Bicycle icon"
      class="min-w-fit mr-2"
    />
    <span>
      {{ status !== "success" ? "..." : formattedSwimmingData }}
      swam
    </span>
  </div>
</template>
