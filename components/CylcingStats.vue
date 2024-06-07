<script setup lang="ts">
const { status, data } = await useFetch("/api/cycling");

const formattedCyclingData = computed(() =>
  data.value ? $n(data.value.rideTotal / 1000, "distance") : null
);
</script>

<template>
  <p>
    <Icon size="24" name="akar-icons:bicycle" title="Bicycle icon" />
    {{ status === "pending" ? "..." : formattedCyclingData }}
    cycled in total
  </p>
</template>
