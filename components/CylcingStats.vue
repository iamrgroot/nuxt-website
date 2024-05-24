<script setup lang="ts">
const { status, data } = await useFetch("/api/cycling");

const formattedCyclingData = computed(() =>
  data.value ? $n(data.value.rideTotal / 1000, "distance") : null
);
</script>

<template>
  <p>
    <TextPopover>
      <template #trigger>
        <span>
          <Icon size="24" name="akar-icons:bicycle" title="Bicycle icon" />
          {{ status === "pending" ? "..." : formattedCyclingData }}
        </span>
      </template>
      <template #text> Total cycling distance </template>
    </TextPopover>
  </p>
</template>
