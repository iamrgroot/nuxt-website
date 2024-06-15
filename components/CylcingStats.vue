<script setup lang="ts">
const { status, data } = await useFetch("/api/cycling");

const formattedCyclingData = computed(() =>
  data.value ? $n(data.value.rideTotal / 1000, "distance") : null
);
</script>

<template>
  <div class="flex items-center">
    <Icon
      size="24"
      name="akar-icons:bicycle"
      title="Bicycle icon"
      class="mr-2"
    />
    <span>
      {{ status !== "success" ? "..." : formattedCyclingData }}
      cycled in total
    </span>
  </div>
</template>
