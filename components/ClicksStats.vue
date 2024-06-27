<script setup lang="ts">
import { useEventSource } from "@vueuse/core";
import type { ClicksStat } from "~/lib/redis";

const { data } = useEventSource("/sse", ["message"]);

const parsedData = computed(() =>
  data.value ? (JSON.parse(data.value) as ClicksStat) : undefined
);
</script>

<template>
  <p class="font-extralight text-xs">
    This site has been visited
    {{ parsedData?.clicks ?? "..." }} times
  </p>
</template>
