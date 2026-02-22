<script setup lang="ts">
const { status, data } = await useFetch("/api/workouts");

const formattedCyclingData = computed(() =>
  data.value ? $n(data.value.rideTotal / 1000, "distance") : null,
);
</script>

<template>
  <div class="flex items-center">
    <Icon
      size="24"
      name="maki:racetrack-cycling"
      title="Bicycle icon"
      class="min-w-fit mr-2"
    />
    <span>
      {{ status !== "success" ? "..." : formattedCyclingData }}
      cycled
    </span>
  </div>
</template>
