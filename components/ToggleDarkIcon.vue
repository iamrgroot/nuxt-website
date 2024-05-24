<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Button variant="ghost" class="px-2" @click="toggleDark()">
    <Icon size="24" name="material-symbols:dark-mode" />
  </Button>
</template>
